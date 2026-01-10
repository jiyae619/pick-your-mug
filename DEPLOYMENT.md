# 🚀 Deployment & GitHub Guide

## Complete Guide to Push and Deploy "Pick Your Mug"

---

## Part 1: Push to GitHub

### Step 1: Create GitHub Repository

1. **Go to GitHub**
   - Visit https://github.com
   - Log in to your account

2. **Create New Repository**
   - Click the **"+"** icon (top right)
   - Click **"New repository"**

3. **Repository Settings**
   - **Name**: `pick-your-mug`
   - **Description**: "Find your perfect cafe match - A React swipe app for Seattle cafes"
   - **Public** or **Private**: Your choice
   - **Do NOT check** "Initialize with README" (we already have one)
   - Click **"Create repository"**

### Step 2: Install Git (if needed)

**Windows:**
1. Download: https://git-scm.com/download/win
2. Run installer with default settings

**Mac:**
```bash
# Git is usually pre-installed
git --version

# If not installed:
xcode-select --install
```

**Linux:**
```bash
sudo apt-get install git
```

### Step 3: Configure Git (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 4: Initialize and Push

Open Terminal/Command Prompt in your project folder:

```bash
# Navigate to project
cd path/to/pick-your-mug

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Pick Your Mug React app"

# Add GitHub as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/pick-your-mug.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 5: Verify

1. Refresh your GitHub repository page
2. You should see all your files!

---

## Part 2: Deploy to Netlify (Easiest)

### Option A: Drag and Drop (Fastest)

1. **Build the project**
```bash
cd pick-your-mug
npm run build
```

2. **Deploy**
   - Go to https://app.netlify.com/drop
   - Drag the `dist` folder onto the page
   - Wait 30 seconds
   - Get your live URL! (e.g., `https://amazing-cafe-app.netlify.app`)

3. **Custom Domain (Optional)**
   - Click "Domain settings"
   - Click "Change site name"
   - Choose: `pick-your-mug` → `https://pick-your-mug.netlify.app`

### Option B: GitHub Integration (Auto-Deploy)

1. **Connect Netlify to GitHub**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Click "GitHub"
   - Authorize Netlify

2. **Configure Build Settings**
   - **Repository**: Select `pick-your-mug`
   - **Branch**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Click "Deploy site"

3. **Auto-Deploy**
   - Now whenever you push to GitHub, Netlify auto-deploys!

---

## Part 3: Deploy to Vercel (Alternative)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
cd pick-your-mug
vercel
```

3. **Follow Prompts**
   - Login to Vercel
   - Answer questions (use defaults)
   - Get your URL!

---

## Part 4: Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**

Add to `package.json`:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/pick-your-mug",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

4. **Enable GitHub Pages**
   - Go to GitHub repository
   - Settings → Pages
   - Source: `gh-pages` branch
   - Save

5. **Visit**
   - `https://YOUR_USERNAME.github.io/pick-your-mug`

---

## Part 5: Making Updates

### Workflow

1. **Make Changes**
   - Edit code locally
   - Test with `npm run dev`

2. **Commit Changes**
```bash
git add .
git commit -m "Description of changes"
git push
```

3. **Auto-Deploy**
   - If using Netlify/Vercel with GitHub: Auto-deploys!
   - If using drag-and-drop: Run `npm run build` and re-drag `dist` folder

### Common Updates

**Add New Cafe:**
```javascript
// Edit src/data/cafesData.js
// Add new cafe object
// Commit and push
```

**Change Colors:**
```css
/* Edit CSS files */
/* Commit and push */
```

**Update Text:**
```javascript
// Edit component files
// Commit and push
```

---

## Part 6: Sharing Your App

### Get Shareable URL

**Netlify**: `https://your-app.netlify.app`
**Vercel**: `https://your-app.vercel.app`
**GitHub Pages**: `https://username.github.io/pick-your-mug`

### Share on Social Media

**Twitter:**
```
🚀 Just built "Pick Your Mug" - A Tinder-style app for finding your perfect Seattle cafe! ☕

Swipe through 12 amazing coffee spots, save your favorites, and discover new places to work, study, or hang out.

Try it: [YOUR_URL]

#ReactJS #WebDev #Seattle #CoffeeLovers
```

**LinkedIn:**
```
Excited to share my latest project: "Pick Your Mug" 🎉

A React web application that helps Seattle coffee lovers discover their perfect cafe match through an engaging swipe interface.

✨ Features:
• Interactive swipe cards
• Smart mode-based matching
• 12 curated Seattle cafes
• Beautiful animations
• Fully responsive design

Built with: React, Framer Motion, Vite

Live Demo: [YOUR_URL]
GitHub: [YOUR_GITHUB_URL]

#WebDevelopment #ReactJS #JavaScript #Portfolio
```

---

## Part 7: Custom Domain (Optional)

### Buy Domain

1. Go to Namecheap, Google Domains, or GoDaddy
2. Search for domain (e.g., `pickyourmug.com`)
3. Purchase (~$10-15/year)

### Connect to Netlify

1. **In Netlify**
   - Domain settings → Add custom domain
   - Enter your domain

2. **In Domain Registrar**
   - Add Netlify's nameservers:
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```

3. **Wait 24-48 hours** for DNS propagation

---

## Part 8: Analytics (Optional)

### Add Google Analytics

1. **Get Tracking ID**
   - Go to https://analytics.google.com
   - Create property
   - Get tracking ID (G-XXXXXXXXXX)

2. **Add to index.html**
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

3. **Deploy** updated code

---

## Part 9: Performance Optimization

### Before Deploying

1. **Optimize Images**
```bash
# Use tools like TinyPNG or Squoosh
# Compress images to <200KB each
```

2. **Check Build Size**
```bash
npm run build
# Check dist/ folder size
# Should be <2MB total
```

3. **Test Performance**
   - Use Lighthouse in Chrome DevTools
   - Aim for 90+ scores

---

## Part 10: Troubleshooting

### Build Fails

**Error: Module not found**
```bash
npm install
npm run build
```

**Error: Out of memory**
```bash
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Deployment Issues

**404 on page refresh**
- Add `_redirects` file in `public/`:
```
/*    /index.html   200
```

**Images not loading**
- Check image paths start with `/images/`
- Verify images are in `public/images/`

### Git Issues

**Rejected push**
```bash
git pull origin main
# Resolve conflicts
git push
```

**Large files**
```bash
# Remove from git
git rm --cached large-file.jpg
echo "*.jpg" >> .gitignore
git commit -m "Remove large files"
```

---

## ✅ Deployment Checklist

- [ ] Code tested locally (`npm run dev`)
- [ ] All features working
- [ ] Images added/optimized
- [ ] README updated
- [ ] Pushed to GitHub
- [ ] Deployed to hosting (Netlify/Vercel)
- [ ] Live URL works
- [ ] Tested on mobile
- [ ] Analytics added (optional)
- [ ] Custom domain connected (optional)

---

## 🎉 You're Live!

Your app is now:
✅ On GitHub
✅ Deployed online
✅ Shareable worldwide

**Congratulations!** 🚀☕

---

## 📚 Resources

- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Pages**: https://pages.github.com
- **React Deployment**: https://react.dev/learn/start-a-new-react-project

---

**Questions?**
- Stack Overflow: Tag `reactjs` + `deployment`
- GitHub Issues: Create issue in your repo
- Netlify Community: https://answers.netlify.com

**Keep building!** 💪✨
