# Quick Setup Guide

## Prerequisites

Before deploying, you need to add the bear mascot image to your project.

## Step 1: Export Bear Heads Image from Figma

1. Open your Figma design file
2. Locate the layer with both bear heads (brown and white bears)
3. Right-click on the layer
4. Select **Export** → **PNG** 
5. Choose **2x** or **3x** resolution for better quality
6. Click **Export**
7. Save the file as `bear-heads.png`

## Step 2: Add Image to Project

1. Create a `/public` folder in the root of your project if it doesn't exist
2. Move the exported `bear-heads.png` file into the `/public` folder
3. The final path should be: `/public/bear-heads.png`

## Step 3: Verify the Setup

Your project structure should look like this:

```
your-project/
├── public/
│   └── bear-heads.png          ← Add this file
├── App.tsx
├── index.html
├── styles/
│   └── globals.css
├── imports/
│   └── svg-4clbyaz01u.ts
└── components/
    └── ...
```

## Step 4: Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open your browser and verify:
- ✅ Logo displays correctly
- ✅ Both bear heads appear below the logo
- ✅ "COMING SOON" text has blue outline
- ✅ Background video plays
- ✅ Social media icons are clickable
- ✅ Font loads correctly (Istok Web from Google Fonts)

## Step 5: Deploy

Once everything works locally, follow the deployment instructions in `DEPLOYMENT_GUIDE.md`.

## Troubleshooting

### Bear heads not showing?

1. Check that `bear-heads.png` is in the `/public` folder
2. Check the browser console for 404 errors
3. Verify the image file name is exactly `bear-heads.png` (case-sensitive)

### Font looks different?

1. Make sure you have internet connection (font loads from Google Fonts)
2. Check that `index.html` includes the Google Fonts link
3. Clear browser cache and hard reload (Ctrl+Shift+R or Cmd+Shift+R)

### Video not playing?

1. Check internet connection (video loads from external URL)
2. Try different browser
3. Check browser console for errors

## Need Help?

Refer to:
- `README.md` - Project overview and features
- `DEPLOYMENT_GUIDE.md` - Detailed deployment instructions
- Browser console - For error messages
