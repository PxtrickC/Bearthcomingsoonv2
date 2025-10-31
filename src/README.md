# BEARTH Coming Soon Page

A responsive landing page for BEARTH brand featuring a "Coming Soon" message with animated background and social media links.

## Features

- 🎨 Responsive design for desktop and mobile
- 🎬 Animated background video
- 🐻 Bear mascot characters
- 🔗 Social media integration (Discord, Instagram, X/Twitter)
- ♿ Accessible HTML structure with semantic tags
- 🎯 SEO optimized with meta tags

## Deployment Instructions

### 1. Download Required Assets

Before deploying, you need to download the bear heads image:

1. Export the bear heads image from your Figma design
2. Save it as `bear-heads.png`
3. Place it in the `/public` folder of your project

The image should contain both the brown bear and white bear heads in a single file.

### 2. GitHub Pages Deployment

1. Create a repository on GitHub
2. Push your code to the repository
3. Go to Settings → Pages
4. Select the branch to deploy (usually `main` or `master`)
5. Click Save

Your site will be available at: `https://[username].github.io/[repository-name]/`

### 3. Other Deployment Options

#### Vercel
1. Import your GitHub repository
2. Configure build settings (if needed)
3. Deploy

#### Netlify
1. Drag and drop your build folder
2. Or connect your GitHub repository
3. Deploy

## File Structure

```
/
├── App.tsx                 # Main application component
├── index.html             # HTML entry point with meta tags
├── public/
│   └── bear-heads.png     # Bear mascot images (you need to add this)
├── components/
│   ├── figma/
│   └── ui/
├── imports/
│   └── svg-4clbyaz01u.ts  # SVG path data
└── styles/
    └── globals.css        # Global styles
```

## Typography

The project uses **Istok Web** font from Google Fonts, which is loaded in the `index.html` file.

## Colors

- Brand Color: `#41AFEB` (Blue)
- Background Color: `#5AE4DB` (Teal)

## Social Media Links

- Discord: https://discord.gg/PxWfYRVcWV
- Instagram: https://www.instagram.com/bearth.earth/
- X (Twitter): https://x.com/Bearth_earth

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved - BEARTH
