import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";
import {
  resend,
  FROM_EMAIL,
  OWNER_EMAIL,
  buildOrderEmails,
} from "@/lib/resend";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email(),
  date: z.string().min(1),
  time: z.string().min(1),
  method: z.enum(["pickup", "delivery"]),
  address: z.string().optional().nullable(),
  products: z.array(z.string()).min(1),
  size: z.string().optional().nullable(),
  flavor: z.string().optional().nullable(),
  filling: z.string().optional().nullable(),
  finish: z.string().optional().nullable(),
  theme: z.string().optional().nullable(),
  colors: z.string().optional().nullable(),
  cakeText: z.string().optional().nullable(),
  decoration: z.array(z.string()),
  allergies: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.issues },
      { status: 400 },
    );
  }
  const data = parsed.data;

  // 1. Persist to Supabase if configured
  if (supabaseAdmin) {
    const { error } = await supabaseAdmin.from("orders").insert({
      client_name: data.name,
      client_phone: data.phone,
      client_email: data.email,
      pickup_date: data.date,
      pickup_time: data.time,
      method: data.method,
      address: data.address ?? null,
      product_types: data.products,
      size_servings: data.size ?? null,
      flavor: data.flavor ?? null,
      filling: data.filling ?? null,
      finish: data.finish ?? null,
      theme: data.theme ?? null,
      colors: data.colors ?? null,
      cake_text: data.cakeText ?? null,
      decoration_styles: data.decoration,
      allergies: data.allergies ?? null,
      notes: data.notes ?? null,
      status: "new",
    });
    if (error) {
      console.error("Supabase insert error:", error);
      // Continue — we still want to send emails even if DB write fails.
    }
  } else {
    console.warn(
      "[order] Supabase not configured — skipping DB insert. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local",
    );
  }

  // 2. Send emails via Resend if configured
  if (resend) {
    const emails = buildOrderEmails({
      clientName: data.name,
      clientEmail: data.email,
      clientPhone: data.phone,
      pickupDate: data.date,
      pickupTime: data.time,
      method: data.method,
      address: data.address ?? undefined,
      products: data.products,
      size: data.size ?? undefined,
      flavor: data.flavor ?? undefined,
      filling: data.filling ?? undefined,
      finish: data.finish ?? undefined,
      theme: data.theme ?? undefined,
      colors: data.colors ?? undefined,
      cakeText: data.cakeText ?? undefined,
      decoration: data.decoration,
      allergies: data.allergies ?? undefined,
      notes: data.notes ?? undefined,
    });

    try {
      await Promise.all([
        resend.emails.send({
          from: FROM_EMAIL,
          to: OWNER_EMAIL,
          replyTo: data.email,
          subject: emails.ownerSubject,
          html: emails.ownerHtml,
        }),
        resend.emails.send({
          from: FROM_EMAIL,
          to: data.email,
          subject: emails.clientSubject,
          html: emails.clientHtml,
        }),
      ]);
    } catch (e) {
      console.error("Resend error:", e);
    }
  } else {
    console.warn(
      "[order] Resend not configured — skipping email. Set RESEND_API_KEY in .env.local",
    );
  }

  return NextResponse.json({ ok: true });
}
