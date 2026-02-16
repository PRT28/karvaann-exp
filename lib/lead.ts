export type LeadSource = "ready_section" | "customised_page" | "home_card_modal";

export type LeadPayload = {
  destination: string;
  travelDate?: string;
  whatsappNumber: string;
  email: string;
  tripNotes?: string;
  source: LeadSource;
  serviceType: string;
  page: string;
};

export type NormalizedLeadPayload = {
  destination: string;
  travelDate: string;
  whatsappNumber: string;
  email: string;
  tripNotes: string;
  source: LeadSource;
  serviceType: string;
  page: string;
};

export function normalizeLeadPayload(input: Partial<LeadPayload>): NormalizedLeadPayload {
  return {
    destination: (input.destination ?? "").trim(),
    travelDate: (input.travelDate ?? "").trim(),
    whatsappNumber: (input.whatsappNumber ?? "").trim(),
    email: (input.email ?? "").trim().toLowerCase(),
    tripNotes: (input.tripNotes ?? "").trim(),
    serviceType: (input.serviceType ?? "").trim(),
    source:
      input.source === "customised_page"
        ? "customised_page"
        : input.source === "home_card_modal"
          ? "home_card_modal"
          : "ready_section",
    page: (input.page ?? "").trim() || "/",
  };
}

export function validateLeadPayload(payload: NormalizedLeadPayload): string | null {
  if (!payload.destination) return "Destination is required";
  if (!payload.whatsappNumber) return "WhatsApp number is required";
  if (!payload.email) return "Email is required";

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
  if (!emailOk) return "Invalid email address";

  if (payload.destination.length > 120) return "Destination is too long";
  if (payload.whatsappNumber.length > 30) return "WhatsApp number is too long";
  if (payload.tripNotes.length > 2000) return "Trip notes are too long";

  return null;
}
