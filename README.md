# MadeByAntonio - Portfolio & Blog Website

Welcome to the **MadeByAntonio** website repository!

---

## 🌟 How the Blog & Website Workflow Works

There are **two distinct types of updates**:
1. **Blog Posts & Photos** (Writing stories)
2. **Code & Design Changes** (Modifying website layouts, colors, components)

---

### A. Publishing New Blog Posts (No Git / Push Needed!)

When you write or edit blog posts, **you do NOT need to run any git commands or push to GitHub**.

1. Open your Sanity Studio:
   ```bash
   cd ~/studio-blog
   npm run dev
   ```
   Open `http://localhost:3333` in your browser.
2. Create or edit a post under **Blog Post**.
3. Click the green **Publish** button.

**How it goes live**:
Sanity saves your post to **Sanity Cloud**. Your live Vercel website connects directly to Sanity Cloud, so your new post appears live on your website (`madebyantonio.com`) **automatically and instantly** as soon as you hit Publish!

---

### B. Making Code / Design Changes & Backing Up to GitHub

When you edit **website files** (like `Header.tsx`, `page.tsx`, CSS, or components) on your computer and want to back them up to GitHub and deploy to your live website:

Open Terminal in your website folder (`cd ~/Antwan-s-Site-main`) and run these 3 simple commands:

```bash
git add .
git commit -m "Updated website header and layout"
git push
```

**How it goes live**:
As soon as you run `git push`, GitHub updates your repository, and **Vercel automatically detects the push and deploys your updated website in ~30 seconds!**

---

## Environment Variables on Vercel

Make sure the following variables are set in your Vercel Project Settings -> Environment Variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` = `a6jyb7zg`
- `NEXT_PUBLIC_SANITY_DATASET` = `production`
- `NEXT_PUBLIC_SANITY_API_VERSION` = `2024-01-01`

---

## Local Development Quickstart

Run both servers locally while working on your computer:

- **Sanity Studio (CMS Editor)**:
  ```bash
  cd ~/studio-blog
  npm run dev
  # Open http://localhost:3333
  ```

- **Website Preview**:
  ```bash
  cd ~/Antwan-s-Site-main
  npm run dev
  # Open http://localhost:3000
  ```

---

## GitHub Repositories

- **Website Repository**: [https://github.com/ntoniomarquez/antwan-website](https://github.com/ntoniomarquez/antwan-website)
- **Sanity Studio Repository**: [https://github.com/ntoniomarquez/studio-blog](https://github.com/ntoniomarquez/studio-blog)
