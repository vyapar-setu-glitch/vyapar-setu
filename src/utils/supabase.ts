import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Yeh 'supabase' variable humari puri website me data save karne ke kaam aayega
export const supabase = createClient(supabaseUrl, supabaseKey);