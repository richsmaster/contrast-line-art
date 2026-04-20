This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Netlify

### Automatic Deployment (Recommended)

1. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign in or create an account
   - Click "Add new site" → "Import an existing project"

2. **Connect GitHub Repository:**
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account
   - Select repository: `richsmaster/contrast-line-art`
   - Click "Deploy site"

3. **Build Settings (should auto-detect):**
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
   - **Node version:** 18.x or higher

4. **Environment Variables (if needed):**
   - Add any required environment variables in Netlify dashboard
   - For Supabase: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to Netlify (install Netlify CLI first)
npx netlify-cli deploy --prod --dir=out
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
