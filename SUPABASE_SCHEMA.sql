
-- Create app_role enum
create type public.app_role as enum ('admin', 'moderator', 'user');

-- Create user_roles table
create table if not exists public.user_roles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    role app_role not null,
    unique (user_id, role)
);

alter table public.user_roles enable row level security;

-- Users can read their own roles
create policy "Users can read own roles"
  on public.user_roles for select
  to authenticated
  using (auth.uid() = user_id);

-- Security definer function to check roles (avoids RLS recursion)
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

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

create policy "Admins can insert articles"
  on public.articles for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update articles"
  on public.articles for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete articles"
  on public.articles for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- Policies for Site Settings
create policy "Site settings are viewable by everyone"
  on public.site_settings for select
  using (true);

create policy "Admins can update site settings"
  on public.site_settings for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- Policies for Contact Submissions
create policy "Anyone can insert contact submissions"
  on public.contact_submissions for insert
  with check (true);

create policy "Admins can view contact submissions"
  on public.contact_submissions for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- Create storage bucket for article images if needed
insert into storage.buckets (id, name, public) 
values ('articles', 'articles', true)
on conflict (id) do nothing;

create policy "Article images are publicly accessible"
  on storage.objects for select
  using ( bucket_id = 'articles' );

create policy "Admins can upload article images"
  on storage.objects for insert
  with check ( bucket_id = 'articles' and public.has_role(auth.uid(), 'admin') );

create policy "Admins can update article images"
  on storage.objects for update
  with check ( bucket_id = 'articles' and public.has_role(auth.uid(), 'admin') );

create policy "Admins can delete article images"
  on storage.objects for delete
  using ( bucket_id = 'articles' and public.has_role(auth.uid(), 'admin') );
