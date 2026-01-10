# 🚀 Quick Setup Guide - Pick Your Mug

## Step-by-Step Instructions for Beginners

### Step 1: Install Node.js

1. Go to https://nodejs.org
2. Download the **LTS version** (recommended)
3. Run the installer
4. Verify installation:
```bash
node --version
npm --version
```

### Step 2: Get the Project Files

**Option A: If you have the files**
1. Unzip the `pick-your-mug` folder
2. Open Terminal/Command Prompt
3. Navigate to the folder:
```bash
cd path/to/pick-your-mug
```

**Option B: Clone from GitHub** (if already pushed)
```bash
git clone https://github.com/YOUR_USERNAME/pick-your-mug.git
cd pick-your-mug
```

### Step 3: Install Dependencies

```bash
npm install
```

**What this does**: Downloads all required packages (React, Framer Motion, etc.)

**Wait time**: 1-3 minutes depending on internet speed

### Step 4: Add Cafe Images

You have 3 options:

**Option A: Use Placeholder Images** (Easiest)
- Skip this step! The app will auto-generate placeholders

**Option B: Download Sample Images**
1. Create folder: `public/images`
2. Download 12 cafe images from Unsplash or Pexels
3. Name them: `cafe1.jpg`, `cafe2.jpg`, ..., `cafe12.jpg`
4. Size: 400x300px recommended

**Option C: Use Your Own Photos**
- Take photos of your favorite cafes
- Resize to 400x300px
- Save as `cafe1.jpg` through `cafe12.jpg`

### Step 5: Start the App

```bash
npm run dev
```

**What you'll see**:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

### Step 6: Open in Browser

1. Open your web browser
2. Go to: `http://localhost:3000`
3. You should see the Welcome screen! ☕

### Step 7: Test the App

1. Click **"Get Started"**
2. Choose 3 coffee modes
3. Click **"Continue"**
4. Start swiping cafes!

---

## 🎨 Customizing Your App

### Change Colors

Edit the gradient in `src/pages/WelcomePage.css`:
```css
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

### Add Your Own Cafes

Edit `src/data/cafesData.js`:
- Change cafe names
- Update neighborhoods
- Modify distances and ratings
- Add your own tags

### Change App Title

Edit `index.html`:
```html
<title>Your App Name</title>
```

---

## 🐛 Troubleshooting

### Error: "npm: command not found"
**Solution**: Install Node.js (Step 1)

### Error: "Cannot find module"
**Solution**: Run `npm install` again

### Error: "Port 3000 is already in use"
**Solution**: 
```bash
# Kill the process using port 3000
# Or change port in vite.config.js
```

### Images not showing
**Solution**: 
- Check file names match exactly: `cafe1.jpg`, etc.
- Make sure images are in `public/images/` folder
- Clear browser cache (Ctrl+Shift+R)

### Swipe not working
**Solution**: Click and drag the card horizontally

---

## 📦 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized files.

---

## 🚀 Deploying to Netlify

### Method 1: Drag and Drop
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder onto the page
4. Done! You'll get a URL like: `https://your-app-name.netlify.app`

### Method 2: GitHub Integration
1. Push code to GitHub
2. Connect Netlify to your repo
3. Netlify auto-deploys on every push

---

## 🎓 Next Steps

### Learn More
- React Docs: https://react.dev
- Framer Motion: https://www.framer.com/motion
- CSS Tricks: https://css-tricks.com

### Enhance the App
1. Add more cafes
2. Create a favorites page
3. Add map integration
4. Build a backend

---

## 💡 Tips

1. **Hot Reload**: Changes save automatically while `npm run dev` is running
2. **Console Errors**: Press F12 to see errors in browser console
3. **VS Code**: Use VS Code for best development experience
4. **Extensions**: Install "ES7+ React/Redux/React-Native snippets"

---

## ✅ Checklist

- [ ] Node.js installed
- [ ] Project dependencies installed (`npm install`)
- [ ] Images added (optional)
- [ ] App running (`npm run dev`)
- [ ] App opens in browser
- [ ] All 3 pages working (Welcome, Modes, Swipe)
- [ ] Swipe functionality works
- [ ] Ready to customize!

---

**Need help?** 
- Check the main README.md
- Google the error message
- Ask on Stack Overflow with tag `reactjs`

**Happy coding!** ☕✨
