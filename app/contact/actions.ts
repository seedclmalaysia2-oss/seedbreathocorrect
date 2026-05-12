"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { rateLimit } from "@/lib/rate-limit";

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitContact(formData: unknown): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(formData);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input." };
  }
  const data = parsed.data;

  if (data.company && data.company.length > 0) {
    return { ok: true };
  }

  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    hdrs.get("x-real-ip") ??
    "unknown";
  const limit = rateLimit(`contact:${ip}`);
  if (!limit.ok) {
    return { ok: false, error: "Too many submissions. Please try again in a minute." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.warn("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL not set — logging submission.");
    console.info("[contact] submission", data);
    return { ok: true };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Breath-O Correct <onboarding@resend.dev>",
    to,
    replyTo: data.email,
    subject: `New enquiry from ${data.name} (${data.region})`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Region: ${data.region}`,
      `Role: ${data.role}`,
      "",
      data.message,
    ].join("\n"),
  });

  if (error) {
    console.error("[contact] resend error", error);
    return { ok: false, error: "We couldn't send your message. Please try again later." };
  }

  return { ok: true };
}
