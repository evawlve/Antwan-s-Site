# MadeByAntonio - Complete Website & Blog Guide

This guide contains everything you need to run, update, and manage your website and blog independently.

---

## Your GitHub Repositories (Backed Up)

- **Website Code**: [https://github.com/ntoniomarquez/antwan-website](https://github.com/ntoniomarquez/antwan-website)
- **Sanity Studio CMS Code**: [https://github.com/ntoniomarquez/studio-blog](https://github.com/ntoniomarquez/studio-blog)

All your code is safely backed up on GitHub under your account (`ntoniomarquez`).

---

## Where is my content stored?

- **Blog Posts & Images**: Stored in **Sanity's Cloud Database** (`projectId: a6jyb7zg`).
- Even if your laptop is lost or files are deleted, your posts and photos remain 100% safe in Sanity Cloud.

---

## Daily Workflow: Creating & Editing Blog Posts

### Step 1: Open Sanity Studio
1. Open Terminal on your Mac.
2. Run:
   ```bash
   cd ~/studio-blog
   npm run dev
   ```
3. Open `http://localhost:3333` in your browser.

### Step 2: Write & Publish
1. Under **Content**, click **Blog Post**.
2. Click **+ Create** (or click an existing post to edit).
3. Fill out:
   - **Title**: Your post headline.
   - **Slug**: Click **Generate** (creates clean URLs like `my-first-post`).
   - **Published at**: Auto-sets to current date/time.
   - **Hero Image**: Upload main cover image (add Alt text & Caption).
   - **Body**: Type your text, headers, or embed inline photos.
4. Click the green **Publish** button at the bottom right.

---

## Previewing Your Website Locally

1. Open a second Terminal window.
2. Run:
   ```bash
   cd ~/Antwan-s-Site-main
   npm run dev
   ```
3. Open `http://localhost:3000/blog` in your browser to view your live posts.

---

## Deploying Your Live Website for Free on Vercel

To have your website live 24/7 on the internet (e.g. `madebyantonio.com` or `antwan-website.vercel.app`):

1. Go to [Vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New Project**.
3. Import your repository: `ntoniomarquez/antwan-website`.
4. In **Environment Variables**, add:
   - Key: `NEXT_PUBLIC_SANITY_PROJECT_ID` | Value: `a6jyb7zg`
   - Key: `NEXT_PUBLIC_SANITY_DATASET` | Value: `production`
5. Click **Deploy**.

Once deployed, **any blog post you publish in Sanity Studio will automatically appear live on your real website instantly!** No terminal or coding needed.
