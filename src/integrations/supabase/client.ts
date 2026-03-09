// Supabase client - lazy initialization to prevent crashes when env vars are missing
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

const isConfigured = Boolean(supabaseUrl && supabaseKey);

if (!isConfigured) {
  console.error('Missing Supabase environment variables. Please enable Lovable Cloud.');
}

export const supabase: SupabaseClient = isConfigured
  ? createClient(supabaseUrl, supabaseKey)
  : (new Proxy({} as SupabaseClient, {
      get(_target, prop) {
        if (prop === 'auth') {
          return {
            getSession: () => Promise.resolve({ data: { session: null }, error: null }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
            signOut: () => Promise.resolve({ error: null }),
          };
        }
        return () => {
          console.warn('Supabase is not configured. Enable Lovable Cloud.');
          return Promise.resolve({ data: null, error: new Error('Supabase not configured') });
        };
      },
    }));
