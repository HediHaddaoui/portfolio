import { NextResponse } from "next/server";
import {
  validateContactPayload,
  type ContactPayload,
} from "@/lib/contact";

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Requête invalide." },
      { status: 400 },
    );
  }

  const errors = validateContactPayload({
    name: payload.name ?? "",
    email: payload.email ?? "",
    subject: payload.subject ?? "",
    message: payload.message ?? "",
  });

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { message: "Veuillez corriger les champs du formulaire.", errors },
      { status: 422 },
    );
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Le service d’envoi n’a pas accepté le message." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Message envoyé. Je vous répondrai dès que possible.",
    });
  }

  return NextResponse.json({
    message:
      "Merci pour votre message ! Je vous répondrai dans les plus brefs délais.",
  });
}
