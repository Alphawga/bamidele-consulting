create table if not exists scorecard_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  whatsapp text,
  total_score int not null,
  band text not null,
  section_scores jsonb not null,
  source text,
  created_at timestamptz not null default now()
);

alter table scorecard_leads enable row level security;
-- No policies: only the service role key (which bypasses RLS) can read/write.
