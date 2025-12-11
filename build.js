// This script runs during Vercel build to inject environment variables
const fs = require('fs');

// Read the HTML file
let html = fs.readFileSync('index.htm', 'utf8');

// Replace placeholders with actual environment variables
html = html.replace('VERCEL_SUPABASE_URL_PLACEHOLDER', process.env.SUPABASE_URL || '');
html = html.replace('VERCEL_SUPABASE_KEY_PLACEHOLDER', process.env.SUPABASE_ANON_KEY || '');

// Write the modified HTML back
fs.writeFileSync('index.htm', html);

console.log('Build complete: Environment variables injected');
