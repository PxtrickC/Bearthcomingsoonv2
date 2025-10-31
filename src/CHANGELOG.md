# Changelog

## Updates Made - October 31, 2025

### 1. ✅ Standard Web Structure

**Added:**
- `index.html` - Proper HTML5 document structure with:
  - SEO meta tags (description, keywords, author)
  - Open Graph tags for social media sharing
  - Twitter Card tags
  - Google Fonts preconnect for performance
  - Istok Web font loading

**Updated:**
- Removed `<head>` section from `App.tsx` (moved to `index.html`)
- Added semantic HTML tags (`<main>`, `<section>`, `<nav>`)
- Improved accessibility with `aria-label` and `aria-hidden` attributes

### 2. ✅ Fixed Image Loading Issues

**Changed:**
- Updated bear heads image import from `figma:asset` to `/bear-heads.png`
- Image now loads from `/public` folder for reliable deployment
- Added clear instructions in `SETUP.md` for adding the image

**Why:** The `figma:asset` path only works in Figma Make preview and won't work after deployment to GitHub Pages or other hosts.

### 3. ✅ Fixed Font Loading Issues

**Added:**
- Google Fonts link in `index.html`
- `@import` statement in `globals.css` as backup
- Explicit `fontFamily` in inline styles

**Updated:**
- Removed `font-['Istok_Web']` Tailwind classes
- Used `fontFamily: "'Istok Web', sans-serif"` in style objects
- Added `sans-serif` as fallback font

**Why:** Ensures font loads correctly from Google Fonts CDN after deployment.

### 4. ✅ Improved "COMING SOON" Text Outline

**Changed from:**
```tsx
style={{ textShadow: TEXT_SHADOW_OUTLINE }}
```

**Changed to:**
```tsx
style={{ 
  fontFamily: "'Istok Web', sans-serif",
  WebkitTextStroke: `3px ${BRAND_COLOR}`,
  paintOrder: 'stroke fill',
  filter: 'drop-shadow(0 0 10px rgba(65, 175, 235, 0.5))'
}}
```

**Why:** 
- `text-shadow` creates jagged edges on curved letters (C, O, S, G)
- `-webkit-text-stroke` creates smooth, true outlines
- `paintOrder: 'stroke fill'` ensures proper layering
- `filter: drop-shadow()` adds the glow effect

### 5. ✅ Code Organization

**Removed:**
- `TEXT_SHADOW_OUTLINE` constant (no longer needed)
- Unused imports

**Updated:**
- Simplified image import to use public path
- Added helpful comments for deployment

### 6. ✅ Documentation

**Created:**
- `README.md` - Project overview and features
- `SETUP.md` - Quick setup instructions
- `DEPLOYMENT_GUIDE.md` - Comprehensive deployment guide
- `CHANGELOG.md` - This file
- `.gitignore` - Git ignore patterns
- `vite.config.ts` - Vite configuration for builds

**All documentation is in English** as requested.

## Breaking Changes

None. The visual appearance and functionality remain identical.

## Migration Steps

If updating from the old version:

1. Add `/public` folder to your project
2. Export and add `bear-heads.png` to `/public` folder
3. Update your code with the new `App.tsx`
4. Add `index.html` to root directory
5. Test locally before deploying

## File Structure

```
/
├── public/
│   └── bear-heads.png          (You need to add this)
├── App.tsx                      (Updated)
├── index.html                   (New)
├── vite.config.ts              (New)
├── .gitignore                  (New)
├── README.md                   (New)
├── SETUP.md                    (New)
├── DEPLOYMENT_GUIDE.md         (New)
├── CHANGELOG.md                (New - this file)
├── styles/
│   └── globals.css             (Updated - added font import)
├── components/
├── imports/
└── guidelines/
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Known Issues

None at this time.

## Future Improvements

Consider:
- Adding image optimization (WebP format)
- Video fallback for older browsers
- Loading animation while video loads
- Font self-hosting for offline support
- Progressive Web App (PWA) features
