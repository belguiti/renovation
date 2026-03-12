// Contact form now uses WhatsApp — this route is no longer used.
// Kept as a placeholder for future integrations.
import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ ok: true });
}
