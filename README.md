# ☕ Pick Your Mug - Find Your Perfect Cafe Match

A beautiful, interactive web app to discover your ideal Seattle cafe based on your coffee mood and preferences. Built with React and modern web technologies.

![Pick Your Mug](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Features

- **Interactive Swipe Interface** - Tinder-style swiping to explore cafes
- **Smart Mode Selection** - Choose 3 coffee moods to personalize your experience
- **12 Seattle Cafes** - Curated selection of the best coffee spots
- **Beautiful Animations** - Smooth transitions and engaging UI
- **Favorites System** - Save cafes you love
- **Responsive Design** - Works on desktop, tablet, and mobile

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/pick-your-mug.git
cd pick-your-mug
```

2. **Install dependencies**
```bash
npm install
```

3. **Add cafe images**
   - Place 12 cafe images in `public/images/`
   - Name them: `cafe1.jpg`, `cafe2.jpg`, ..., `cafe12.jpg`
   - Or download placeholder images (see Images section below)

4. **Start development server**
```bash
npm run dev
```

5. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Start swiping! ☕

## 📁 Project Structure

```
pick-your-mug/
├── public/
│   └── images/              # Cafe images (cafe1.jpg - cafe12.jpg)
├── src/
│   ├── components/
│   │   ├── CafeCard.jsx     # Swipeable cafe card
│   │   └── CafeCard.css
│   ├── pages/
│   │   ├── WelcomePage.jsx  # Landing page
│   │   ├── ModeSelectionPage.jsx  # Mode picker
│   │   ├── SwipePage.jsx    # Main swipe interface
│   │   └── [respective CSS files]
│   ├── data/
│   │   └── cafesData.js     # Cafe database
│   ├── utils/
│   │   └── tagColors.js     # Color/icon utilities
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Adding More Cafes

Edit `src/data/cafesData.js`:

```javascript
export const cafes = [
  {
    id: '13',
    name: 'Your Cafe Name',
    neighborhood: 'Neighborhood',
    distance: 1.5,
    rating: 4.8,
    reviewCount: 500,
    image: '/images/cafe13.jpg',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    description: 'Brief description of your cafe'
  },
  // ... more cafes
];
```

### Changing Coffee Modes

Edit the `coffeeModes` array in `src/data/cafesData.js`:

```javascript
export const coffeeModes = [
  'Your Mode 1',
  'Your Mode 2',
  // ... add more modes
];
```

### Styling

- **Colors**: Edit color gradients in CSS files
- **Fonts**: Update font families in `src/index.css`
- **Animations**: Modify Framer Motion props in components

## 🖼️ Images

### Option 1: Use Your Own Images
- Add 12 images (400x300px recommended) to `public/images/`
- Name them `cafe1.jpg` through `cafe12.jpg`

### Option 2: Use Placeholders
Images will automatically use placeholders with cafe names if files are missing.

### Option 3: Download Sample Images
```bash
# Run this script to download sample cafe images
npm run download-images
```

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📦 Deployment

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)
   - Or connect your GitHub repo for automatic deployments

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

```bash
npm run build
# Follow GitHub Pages deployment guide
```

## 🎯 How It Works

1. **Welcome Screen** - Users are greeted with an animated landing page
2. **Mode Selection** - Choose 3 coffee modes that match your mood
3. **Swipe Interface** - Swipe right to like, left to pass
4. **Completion** - See all your liked cafes and start over

## 🔧 Technologies Used

- **React 18.2** - UI framework
- **Vite** - Build tool
- **React Router** - Navigation
- **Framer Motion** - Animations
- **CSS3** - Styling
- **JavaScript ES6+** - Logic

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Add cafe detail pages
- [ ] Implement favorites persistence (localStorage)
- [ ] Add filter by distance
- [ ] Integrate Google Maps
- [ ] Add user reviews
- [ ] Backend API integration
- [ ] Mobile app version (React Native)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Seattle coffee culture for inspiration
- All the amazing cafes featured in the app
- React and Framer Motion communities

## 📧 Contact

Have questions or suggestions? Feel free to reach out!

- Email: your.email@example.com
- Twitter: [@yourhandle](https://twitter.com/yourhandle)

---

**Made with ☕ and ❤️ in Seattle**

Enjoy discovering your perfect cafe match! ☕✨
