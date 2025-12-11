# Deployment Instructions

## Local Development
1. Create a `config.js` file (already done, it's in .gitignore)
2. Add your Supabase credentials to `config.js`
3. Open `index.htm` in your browser

## Vercel Deployment

### Setup Environment Variables in Vercel:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add these two variables:
   - `SUPABASE_URL` = your Supabase project URL
   - `SUPABASE_ANON_KEY` = your Supabase anon key

### How it Works:
- **Locally**: The app tries to load `config.js` (which is gitignored)
- **On Vercel**: During build, `build.js` runs and injects the environment variables into `index.htm`
- This way, your keys are never exposed in your GitHub repository

### Files Overview:
- `config.js` - Local configuration (gitignored)
- `build.js` - Vercel build script that injects env vars
- `vercel.json` - Tells Vercel to run the build script
- `.gitignore` - Keeps sensitive files out of git

### Deploy:
Simply push to GitHub, and Vercel will automatically:
1. Run `build.js` 
2. Replace placeholders with your environment variables
3. Deploy the modified `index.htm`
