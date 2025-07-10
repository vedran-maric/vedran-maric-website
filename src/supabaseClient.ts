// Importiranje potrebnih modula
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@env';

// Provjera da li su SUPABASE_URL i SUPABASE_ANON_KEY definirani
// Ako nisu, baca grešku
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Supabase URL ili Anon Key nije definiran u .env datoteci.');
}

// Kreiranje Supabase klijenta
// Ovaj klijent će se koristiti za interakciju sa Supabase bazom podataka
export const supabase = createClient("https://pfkziwaltkcevveqpglb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBma3ppd2FsdGtjZXZ2ZXFwZ2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NTczNjAsImV4cCI6MjA2NTEzMzM2MH0.JO-PoWU_S_KfjLoXsuSsqmS8Qka_7ZYgUeYf3bGIzWQ");



