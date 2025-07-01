import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@env';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Supabase URL ili Anon Key nije definiran u .env datoteci.');
}



export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
