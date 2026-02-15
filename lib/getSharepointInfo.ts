
import "isomorphic-fetch";
import { Client } from "@microsoft/microsoft-graph-client";
import { ClientSecretCredential } from "@azure/identity";

// Env variables
const tenantId = process.env.AZURE_TENANT_ID as string;
const clientId = process.env.AZURE_CLIENT_ID as string;
const clientSecret = process.env.AZURE_CLIENT_SECRET as string;

// SharePoint site
const siteId = "karvaanexperiences.sharepoint.com,1d6b4896-1a2a-4745-9248-79ad9d9f7bb8";

// Excel info
const folderPath = "Assets";
const excelFileName = "Website Leads.xlsx";
const tableName = "Table2"; // Must match Excel table

async function main(): Promise<void> {
  try {
    // Authenticate
    const credential = new ClientSecretCredential(
      tenantId,
      clientId,
      clientSecret
    );

    const client = Client.initWithMiddleware({
      authProvider: {
        getAccessToken: async (): Promise<string> => {
          const token = await credential.getToken(
            "https://graph.microsoft.com/.default"
          );
          if (!token) throw new Error("Failed to get access token");
          return token.token;
        },
      },
    });

    // Get Drive ID
    const drive = await client.api(`/sites/${siteId}/drive`).get();
    console.log("✅ DRIVE ID:", drive.id);

    // Get File ID
    const filePath = `/sites/${siteId}/drive/root:/${folderPath}/${excelFileName}`;
    const file = await client.api(filePath).get();
    console.log("✅ FILE ID:", file.id);

    const tables = await client
    .api(`/sites/${siteId}/drive/items/${file.id}/workbook/tables`)
    .get();

    console.log("Tables in workbook:", tables.value.map((t: any) => t.name));

    // Insert a row into Excel table
    await client
      .api(
        `/sites/${siteId}/drive/items/${file.id}/workbook/tables/${tableName}/rows/add`
      )
      .post({
        values: [["John Doe", "john@example.com", "1", "2", "4", "5", "7"]], // replace with your data
      });

    console.log("✅ Row inserted successfully!");
  } catch (error: any) {
    console.error("❌ ERROR:", error.message || error);
  }
}

main();
