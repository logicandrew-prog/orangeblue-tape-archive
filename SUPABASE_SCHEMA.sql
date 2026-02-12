
-- Create articles table
create table if not exists public.articles (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text not null unique,
  content text,
  image_url text,
  description text,
  is_published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create site_settings table (singleton)
create table if not exists public.site_settings (
  id integer primary key default 1 check (id = 1),
  contact_email text default 'tape@offmail.ru',
  contact_intro text default 'Есть вопросы о коллекционировании кассет или хотите поделиться своей коллекцией? Напишите нам!',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Insert default site settings if not exists
insert into public.site_settings (id, contact_email, contact_intro)
values (1, 'tape@offmail.ru', 'Есть вопросы о коллекционировании кассет или хотите поделиться своей коллекцией? Напишите нам!')
on conflict (id) do nothing;

-- Create contact_submissions table
create table if not exists public.contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.articles enable row level security;
alter table public.site_settings enable row level security;
alter table public.contact_submissions enable row level security;

-- Policies for Articles
create policy "Public articles are viewable by everyone"
  on public.articles for select
  using (true);

create policy "Authenticated users can insert articles"
  on public.articles for insert
  with check (auth.role() = 'authenticated');

create policy "Authenticated users can update articles"
  on public.articles for update
  using (auth.role() = 'authenticated');

create policy "Authenticated users can delete articles"
  on public.articles for delete
  using (auth.role() = 'authenticated');

-- Policies for Site Settings
create policy "Site settings are viewable by everyone"
  on public.site_settings for select
  using (true);

create policy "Authenticated users can update site settings"
  on public.site_settings for update
  using (auth.role() = 'authenticated');

-- Policies for Contact Submissions
create policy "Anyone can insert contact submissions"
  on public.contact_submissions for insert
  with check (true);

create policy "Authenticated users can view contact submissions"
  on public.contact_submissions for select
  using (auth.role() = 'authenticated');

-- Create storage bucket for article images if needed (optional but good to have)
insert into storage.buckets (id, name, public) 
values ('articles', 'articles', true)
on conflict (id) do nothing;

create policy "Article images are publicly accessible"
  on storage.objects for select
  using ( bucket_id = 'articles' );

create policy "Authenticated users can upload article images"
  on storage.objects for insert
  with check ( bucket_id = 'articles' and auth.role() = 'authenticated' );

create policy "Authenticated users can update article images"
  on storage.objects for update
  with check ( bucket_id = 'articles' and auth.role() = 'authenticated' );

create policy "Authenticated users can delete article images"
  on storage.objects for delete
  using ( bucket_id = 'articles' and auth.role() = 'authenticated' );
