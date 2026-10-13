# Your portfolio: code it, then put it online

## 1. Where to code: VS Code
1. Install **VS Code** (free): https://code.visualstudio.com
2. Install **Git**: https://git-scm.com/downloads
3. In VS Code, open the Extensions tab and install **Live Server**.
4. Put `index.html`, `style.css` and `script.js` in a folder called `portfolio`.
5. Open that folder in VS Code (File > Open Folder), right-click `index.html`, choose **Open with Live Server**. The site opens in your browser and refreshes every time you save.

## 2. Make it yours
- `index.html`: replace every `Your Name`, `[Your Role]`, the About text, skills and projects. Each section has a comment above it saying what to edit.
- `style.css`: change `--accent` near the top to change the site's main color.
- Add a photo: put `me.jpg` in the folder and add `<img src="me.jpg" alt="Your Name" width="160">` in the hero section.

## 3. Save it on GitHub
1. Sign in at https://github.com (you already have `suyogjayana`).
2. Create a new **public** repository named `suyogjayana.github.io`.
3. In a terminal inside your `portfolio` folder:
   ```
   git init
   git add .
   git commit -m "First version of my portfolio"
   git branch -M main
   git remote add origin https://github.com/suyogjayana/suyogjayana.github.io.git
   git push -u origin main
   ```

## 4. Deploy it (pick one, all free)
**Option A, GitHub Pages (simplest):** in the repo go to Settings > Pages, set Source to "Deploy from a branch", branch `main`, folder `/ (root)`, Save. In a minute or two it's live at **https://suyogjayana.github.io**.

**Option B, Netlify or Vercel:** sign in with GitHub at https://netlify.com or https://vercel.com, click "Add new project", pick the repo, and deploy with the default settings (no build command needed). You get a URL like `yourname.netlify.app`, plus automatic previews.

Either way, every `git push` updates the live site automatically.

## 5. Later
- Custom domain (about $10 a year, e.g. from Namecheap or Cloudflare), connected in Pages/Netlify/Vercel settings.
- Once you're comfortable, you can move to a framework like Astro for blog posts and reusable components.
