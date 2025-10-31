# Deployment Guide

This guide will help you deploy the BEARTH Coming Soon page to GitHub Pages or other hosting platforms.

## Pre-Deployment Checklist

### 1. Export and Add Bear Heads Image

The project requires the bear mascot image to be added manually:

1. **Export from Figma:**
   - Open your Figma design
   - Select the layer containing both bear heads
   - Right-click → Export as PNG
   - Use 2x or 3x resolution for better quality

2. **Add to Project:**
   - Save the exported image as `bear-heads.png`
   - Place it in the `/public` folder (create the folder if it doesn't exist)

### 2. Update Image Path (if needed)

The current configuration expects the image at `/public/bear-heads.png`. If you place it elsewhere, update the path in `/App.tsx`:

```typescript
const bearHeadsImage = "/bear-heads.png"; // Update this path if needed
```

## Deployment Methods

### Method 1: GitHub Pages

#### Step 1: Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: BEARTH Coming Soon page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

#### Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select your branch (usually `main`)
4. Click **Save**
5. Your site will be published at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

#### Step 3: Update Base Path (if using subfolder)

If deploying to a subfolder (like `username.github.io/repo-name`), you may need to update your build configuration:

Create or update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/', // Replace with your repository name
})
```

### Method 2: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Import Project**
3. Import your GitHub repository
4. Vercel will auto-detect the framework
5. Click **Deploy**
6. Your site will be live at `https://your-project.vercel.app`

### Method 3: Netlify

#### Option A: Drag and Drop

1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder to Netlify

#### Option B: Git Integration

1. Go to [netlify.com](https://netlify.com)
2. Click **New site from Git**
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**

## Troubleshooting

### Images Not Showing After Deployment

**Problem:** Bear heads image doesn't appear after deployment.

**Solutions:**

1. **Check Image Location:**
   - Ensure `bear-heads.png` is in the `/public` folder
   - The file name is case-sensitive (`bear-heads.png` not `Bear-Heads.png`)

2. **Check Image Path:**
   - Verify the path in `App.tsx` matches your folder structure
   - Use absolute path from public: `/bear-heads.png`

3. **Clear Browser Cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Font Not Loading

**Problem:** Istok Web font doesn't load correctly.

**Solutions:**

1. **Check Internet Connection:**
   - The font loads from Google Fonts CDN
   - Ensure users have internet access

2. **Verify Font Links:**
   - Check `index.html` has the Google Fonts links
   - Check `globals.css` has the @import statement

3. **Fallback Font:**
   - The CSS includes `sans-serif` as fallback
   - Update in `App.tsx` if needed:
   ```typescript
   fontFamily: "'Istok Web', Arial, sans-serif"
   ```

### Video Not Playing

**Problem:** Background video doesn't play on mobile.

**Solutions:**

1. **Check Video Format:**
   - WebM format is used for better compression
   - Consider adding MP4 fallback for older browsers

2. **Autoplay Restrictions:**
   - Video is set to `muted` to allow autoplay
   - `playsInline` attribute enables mobile playback

3. **Add Fallback:**
   ```html
   <video ...>
     <source src="background.webm" type="video/webm" />
     <source src="background.mp4" type="video/mp4" />
   </video>
   ```

### Build Errors

**Problem:** Build fails during deployment.

**Solutions:**

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Check Node Version:**
   - Use Node.js 16 or higher
   - Update if needed: `nvm use 18`

3. **Clear Cache:**
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

## Performance Optimization

### 1. Image Optimization

- Use WebP format for better compression
- Resize bear heads image to actual display size
- Use responsive images with `srcset`

### 2. Video Optimization

- Compress video file size
- Use appropriate resolution (1080p max)
- Consider poster image for slower connections

### 3. Font Loading

- Fonts are already using `display=swap` for better performance
- Consider self-hosting fonts for faster loading

## Custom Domain

### GitHub Pages

1. Add a `CNAME` file to `/public` with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

### Vercel/Netlify

1. Go to project settings
2. Add custom domain
3. Follow DNS configuration instructions

## Monitoring

After deployment, monitor:

- **Performance:** Use Lighthouse in Chrome DevTools
- **Errors:** Check browser console for JavaScript errors
- **Analytics:** Consider adding Google Analytics or similar

## Support

For issues or questions:
- Check the main README.md
- Review error messages in build logs
- Verify all required files are committed to repository
