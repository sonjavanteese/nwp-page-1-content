import {createClient} from '@supabase/supabase-js'
import { writable } from 'svelte/store';

export const userObj = writable(null);
export const userData = writable(null);

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)


