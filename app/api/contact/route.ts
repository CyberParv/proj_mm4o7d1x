import { NextRequest, NextResponse } from "next/server";
import { contactSubmissionSchema } from "@/lib/validators";

// Declare process.env for type safety in edge runtimes
declare const process: { env: { [key: string]: string | undefined } };

const CONTACT_WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    if (!CONTACT_WEBHOOK_URL) {
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    const payload = {
      ...parsed.data,
      submittedAt: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") ?? "unknown",
      ip:
        req.headers.get("x-forwarded-for") ??
        req.headers.get("x-real-ip") ??
        "unknown",
    };

    const response = await fetch(CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to submit contact request" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
