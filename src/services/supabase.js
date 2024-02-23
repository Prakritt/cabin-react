import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://isbhclvqgygaorqbntao.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzYmhjbHZxZ3lnYW9ycWJudGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1MTk3OTAsImV4cCI6MjAyMzA5NTc5MH0.wAe-3lfvfMgWampiYz7g5YV5cAanyhdGKdcBxalAwhI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
