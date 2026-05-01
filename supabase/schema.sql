-- Run this in Supabase → SQL Editor to create the orders table.

create extension if not exists "pgcrypto";

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- client info
  client_name      text not null,
  client_phone     text not null,
  client_email     text not null,

  -- pickup / delivery
  pickup_date      date not null,
  pickup_time      text not null,
  method           text not null check (method in ('pickup', 'delivery')),
  address          text,

  -- order details
  product_types    text[] not null default '{}',
  size_servings    text,
  flavor           text,
  filling          text,
  finish           text,

  -- design concept
  theme            text,
  colors           text,
  cake_text        text,
  decoration_styles text[] not null default '{}',

  -- misc
  allergies        text,
  notes            text,

  -- pipeline
  status           text not null default 'new'
    check (status in ('new', 'quoted', 'confirmed', 'baking', 'ready', 'delivered', 'cancelled')),
  quoted_amount    numeric,
  deposit_paid     boolean not null default false
);

create index if not exists orders_pickup_date_idx
  on public.orders (pickup_date);

create index if not exists orders_status_idx
  on public.orders (status);

-- Row-level security: only the service role (server) can insert / read.
-- The anon key in the browser cannot read other people's orders.
alter table public.orders enable row level security;

-- (No public policies — all access goes through the API route using the
-- service-role key, which bypasses RLS by design.)
