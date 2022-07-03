import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = 'https://krfvgtfispxqvuhyusxl.supabase.co'
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyZnZndGZpc3B4cXZ1aHl1c3hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY1MTQ4MjgsImV4cCI6MTk3MjA5MDgyOH0.9bW4dS4NhJofZn6pQmSMYAChgDMA5ttFRQAWtA622KU'

export default createClient(PROJECT_URL, ANON_KEY)