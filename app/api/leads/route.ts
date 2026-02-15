import { NextResponse } from "next/server";
import { appendLeadToExcel } from "@/lib/microsoftGraphExcel";
import { normalizeLeadPayload, validateLeadPayload } from "@/lib/lead";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const payload = normalizeLeadPayload(body);
    const validationError = validateLeadPayload(payload);

    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }
    
    // Table columns expected in this order:
    // CreatedAt | Source | Page | Destination | TravelDate | WhatsappNumber | Email | TripNotes
    await appendLeadToExcel([
      payload.source,
      payload.page,
      payload.destination,
      payload.travelDate,
      payload.whatsappNumber,
      payload.email,
      payload.tripNotes,
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to save lead";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
