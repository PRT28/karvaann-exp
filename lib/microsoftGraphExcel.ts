const GRAPH_SCOPE = "https://graph.microsoft.com/.default";

type TokenCache = {
  token: string;
  expiresAt: number;
};

let cachedToken: TokenCache | null = null;

function getRequiredEnv(name: string, fallbackNames: string[] = []): string {
  const names = [name, ...fallbackNames];
  for (const envName of names) {
    const value = process.env[envName]?.trim();
    if (value) return value;
  }

  throw new Error(
    `Missing required environment variable: ${names.join(" or ")}`
  );
}

function parseGraphError(raw: string): string {
  try {
    const parsed = JSON.parse(raw) as {
      error?: { code?: string; message?: string };
    };
    if (parsed.error?.message) {
      const code = parsed.error.code ? `${parsed.error.code}: ` : "";
      return `${code}${parsed.error.message}`;
    }
  } catch {
    // ignore JSON parsing and return original text
  }
  return raw;
}

function getGraphAuthConfig() {
  return {
    tenantId: getRequiredEnv("MS_TENANT_ID", ["AZURE_TENANT_ID"]),
    clientId: getRequiredEnv("MS_CLIENT_ID", ["AZURE_CLIENT_ID"]),
    clientSecret: getRequiredEnv("MS_CLIENT_SECRET", ["AZURE_CLIENT_SECRET"]),
  };
}

function getExcelTargetConfig() {
  return {
    driveId: getRequiredEnv("MS_EXCEL_DRIVE_ID"),
    itemId: getRequiredEnv("MS_EXCEL_ITEM_ID"),
    tableName: getRequiredEnv("MS_EXCEL_TABLE_NAME"),
  };
}

async function getAccessToken(): Promise<string> {
  const now = Date.now();
  if (cachedToken && cachedToken.expiresAt > now + 60_000) {
    return cachedToken.token;
  }

  const { tenantId, clientId, clientSecret } = getGraphAuthConfig();

  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
    scope: GRAPH_SCOPE,
  });

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Unable to fetch Microsoft Graph token: ${parseGraphError(errorText)}`
    );
  }

  const tokenData = (await response.json()) as {
    access_token: string;
    expires_in: number;
  };

  if (!tokenData.access_token || !tokenData.expires_in) {
    throw new Error(
      "Microsoft Graph token response is missing required fields"
    );
  }

  cachedToken = {
    token: tokenData.access_token,
    expiresAt: now + tokenData.expires_in * 1000,
  };

  return tokenData.access_token;
}

export async function appendLeadToExcel(values: string[]): Promise<void> {
  const { driveId, itemId, tableName } = getExcelTargetConfig();

  const token = await getAccessToken();

  const url = `https://graph.microsoft.com/v1.0/drives/${driveId}/items/${itemId}/workbook/tables/${encodeURIComponent(
    tableName
  )}/rows/add`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [values] }),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to append row to Excel: ${parseGraphError(errorText)}`
    );
  }
}
