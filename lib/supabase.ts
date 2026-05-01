import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabasePublic =
  url && anonKey ? createClient(url, anonKey) : null;

export const supabaseAdmin =
  url && serviceKey
    ? createClient(url, serviceKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

export type OrderInsert = {
  client_name: string;
  client_phone: string;
  client_email: string;
  pickup_date: string;
  pickup_time: string;
  method: "pickup" | "delivery";
  address: string | null;
  product_types: string[];
  size_servings: string | null;
  flavor: string | null;
  filling: string | null;
  finish: string | null;
  theme: string | null;
  colors: string | null;
  cake_text: string | null;
  decoration_styles: string[];
  allergies: string | null;
  notes: string | null;
  status: "new";
};
