import { NextResponse } from "next/server";
import { insertLead, listLeads } from "@/lib/leadStore";

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  domain: string;
  candidates: string;
  mode: string;
  location: string;
};

function isValidLead(body: unknown): body is LeadPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  const fields = [
    "name",
    "email",
    "phone",
    "company",
    "domain",
    "candidates",
    "mode",
    "location",
  ] as const;

  return fields.every((f) => typeof b[f] === "string" && b[f].trim().length > 0);
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!isValidLead(body)) {
    return NextResponse.json(
      { ok: false, message: "Invalid payload." },
      { status: 400 },
    );
  }

  const lead = {
    name: body.name.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    company: body.company.trim(),
    domain: body.domain.trim(),
    candidates: body.candidates.trim(),
    mode: body.mode.trim(),
    location: body.location.trim(),
    createdAt: new Date().toISOString(),
  };

  try {
    await insertLead(lead);
  } catch (error) {
    console.error("Lead save failed:", error);
    return NextResponse.json(
      { ok: false, message: "Unable to save lead right now. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks! Your details have been saved.",
  });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limitParam = Number(searchParams.get("limit") ?? "100");
  const limit = Number.isFinite(limitParam)
    ? Math.min(Math.max(Math.trunc(limitParam), 1), 500)
    : 100;

  try {
    const leads = await listLeads(limit);

    return NextResponse.json({
      ok: true,
      count: leads.length,
      leads,
    });
  } catch (error) {
    console.error("Lead list failed:", error);
    return NextResponse.json(
      { ok: false, message: "Unable to fetch leads right now." },
      { status: 500 },
    );
  }
}

