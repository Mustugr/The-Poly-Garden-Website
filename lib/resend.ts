import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
export const resend = apiKey ? new Resend(apiKey) : null;

export const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "The Poly Garden Sugar <hello@thepolygardensugar.com>";

export const OWNER_EMAIL =
  process.env.OWNER_EMAIL ?? "ivelisse@thepolygardensugar.com";

type OrderEmailData = {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  pickupDate: string;
  pickupTime: string;
  method: string;
  address?: string;
  products: string[];
  size?: string;
  flavor?: string;
  filling?: string;
  finish?: string;
  theme?: string;
  colors?: string;
  cakeText?: string;
  decoration: string[];
  allergies?: string;
  notes?: string;
};

const row = (label: string, value?: string | string[]) => {
  if (!value || (Array.isArray(value) && value.length === 0)) return "";
  const v = Array.isArray(value) ? value.join(", ") : value;
  return `<tr><td style="padding:6px 12px 6px 0;color:#888;font-size:13px;width:160px;vertical-align:top;">${label}</td><td style="padding:6px 0;color:#1a1a1a;font-size:14px;">${v}</td></tr>`;
};

export const ownerNotificationHtml = (d: OrderEmailData) => `
<!doctype html>
<html><body style="font-family:Inter,system-ui,sans-serif;background:#f8f0e5;padding:32px;margin:0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#fbf6ee;border:1px solid rgba(201,169,97,0.3);">
    <tr><td style="padding:32px 32px 16px;border-bottom:1px solid rgba(201,169,97,0.3);">
      <div style="font-family:Georgia,serif;font-size:24px;color:#1a1a1a;letter-spacing:0.02em;">The Poly Garden Sugar</div>
      <div style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#c9a961;margin-top:8px;">New Order Inquiry</div>
    </td></tr>
    <tr><td style="padding:24px 32px;">
      <p style="margin:0 0 16px;color:#1a1a1a;font-size:15px;">A new custom order inquiry just came in:</p>
      <table cellpadding="0" cellspacing="0" width="100%">
        ${row("Name", d.clientName)}
        ${row("Email", d.clientEmail)}
        ${row("Phone", d.clientPhone)}
        ${row("Date / Time", `${d.pickupDate} at ${d.pickupTime}`)}
        ${row("Method", d.method)}
        ${row("Address", d.address)}
        ${row("Products", d.products)}
        ${row("Size / Servings", d.size)}
        ${row("Flavor", d.flavor)}
        ${row("Filling", d.filling)}
        ${row("Finish", d.finish)}
        ${row("Theme", d.theme)}
        ${row("Colors", d.colors)}
        ${row("Cake Text", d.cakeText)}
        ${row("Decoration", d.decoration)}
        ${row("Allergies", d.allergies)}
        ${row("Notes", d.notes)}
      </table>
    </td></tr>
    <tr><td style="padding:0 32px 32px;border-top:1px solid rgba(201,169,97,0.3);padding-top:20px;">
      <p style="margin:0;font-size:12px;color:#888;">Reply directly to this email to send a quote.</p>
    </td></tr>
  </table>
</body></html>`;

export const clientConfirmationHtml = (d: OrderEmailData) => `
<!doctype html>
<html><body style="font-family:Inter,system-ui,sans-serif;background:#f8f0e5;padding:32px;margin:0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#fbf6ee;border:1px solid rgba(201,169,97,0.3);">
    <tr><td style="padding:40px 32px 24px;text-align:center;">
      <div style="font-family:Georgia,serif;font-size:28px;color:#1a1a1a;letter-spacing:0.02em;">The Poly Garden Sugar</div>
      <div style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#c9a961;margin-top:10px;">Inquiry Received</div>
    </td></tr>
    <tr><td style="padding:8px 32px 32px;color:#1a1a1a;line-height:1.6;">
      <p style="margin:0 0 16px;font-size:16px;">Hi ${d.clientName.split(" ")[0]},</p>
      <p style="margin:0 0 16px;font-size:15px;">Thank you so much for reaching out about your celebration. I've received your inquiry and I'm already excited to start dreaming up your design.</p>
      <p style="margin:0 0 16px;font-size:15px;">I'll review the details and reply within <strong>48 hours</strong> with a tailored quote and any follow-up questions.</p>
      <p style="margin:0 0 24px;font-size:15px;">In the meantime — if anything new comes to mind, just reply to this email.</p>
      <div style="border-top:1px solid rgba(201,169,97,0.4);padding-top:20px;margin-top:24px;">
        <p style="margin:0;font-size:14px;color:#666;">With love,</p>
        <p style="margin:4px 0 0;font-family:Georgia,serif;font-size:18px;color:#1a1a1a;">Ivelisse Schuwerer</p>
        <p style="margin:2px 0 0;font-size:12px;color:#888;letter-spacing:0.18em;text-transform:uppercase;">The Poly Garden Sugar</p>
      </div>
    </td></tr>
  </table>
</body></html>`;

export const buildOrderEmails = (d: OrderEmailData) => ({
  ownerSubject: `New Order Inquiry — ${d.clientName} (${d.pickupDate})`,
  clientSubject: "Your Inquiry — The Poly Garden Sugar",
  ownerHtml: ownerNotificationHtml(d),
  clientHtml: clientConfirmationHtml(d),
});
