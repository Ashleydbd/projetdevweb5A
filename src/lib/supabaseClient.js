/*import { createClient } from '@supabase/auth-helpers-sveltekit';

export const supabase = createClient(
	'https://wlgcrbhsnqmrertxdxfl.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZ2NyYmhzbnFtcmVydHhkeGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE1NjcwNDksImV4cCI6MTk2NzE0MzA0OX0.CkaggBqa_N3B8Q9oOOoqEgZDf-B33JtLJr_sRlTsP4w'
);
*/

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wlgcrbhsnqmrertxdxfl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZ2NyYmhzbnFtcmVydHhkeGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE1NjcwNDksImV4cCI6MTk2NzE0MzA0OX0.CkaggBqa_N3B8Q9oOOoqEgZDf-B33JtLJr_sRlTsP4w";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
