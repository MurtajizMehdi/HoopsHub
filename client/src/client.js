import { createClient } from '@supabase/supabase-js'

const URL = 'https://gafozjmhujwlutevobab.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhZm96am1odWp3bHV0ZXZvYmFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxOTI0NzUsImV4cCI6MjAyOTc2ODQ3NX0.6AuLZvP0KbCMXDOVwLxkQe-goDgJTqucy8_md_1oCM0';

export const supabase = createClient(URL, API_KEY);