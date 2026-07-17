create table if not exists erp_waitlist (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  company_name text not null,
  role text not null,
  email text not null,
  whatsapp text not null,
  industry text not null,
  team_size text not null,
  current_tooling text,
  source text,
  created_at timestamptz not null default now()
);

alter table erp_waitlist enable row level security;
-- No policies: only the service role key (which bypasses RLS) can read/write.
