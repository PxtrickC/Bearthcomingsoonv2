# How to Export the Bear Heads Image from Figma

## Quick Steps

1. **Find the Image in Your Current Project**
   - The bear heads image is currently loaded from: `figma:asset/67b326bf20402a3a58b4da040aa11f0a36359f64.png`
   - This is a temporary path that only works in Figma Make preview

2. **Export from Figma Design File**
   
   ### Method 1: Direct Export
   - Open your Figma design file
   - Find the frame/layer containing both bear heads
   - Right-click on the layer
   - Select **Export** (or use keyboard shortcut: `Cmd+Shift+E` on Mac, `Ctrl+Shift+E` on Windows)
   - In the export panel:
     - Format: **PNG**
     - Scale: **2x** or **3x** (for retina displays)
   - Click **Export [layer name]**
   - Save as `bear-heads.png`

   ### Method 2: Export from Assets Panel
   - Open your Figma file
   - Press `Cmd+Shift+A` (Mac) or `Ctrl+Shift+A` (Windows) to open Assets panel
   - Find the bear heads image
   - Click the export icon
   - Download as PNG (2x or 3x resolution)
   - Rename to `bear-heads.png`

3. **Place in Project**
   - Create a `/public` folder in your project root if it doesn't exist
   - Move `bear-heads.png` into `/public/`
   - Final path should be: `/public/bear-heads.png`

## Image Requirements

- **Format**: PNG (with transparency)
- **Resolution**: 2x or 3x for best quality
- **Content**: Should contain both bears (brown on left, white on right)
- **File name**: Exactly `bear-heads.png` (case-sensitive)

## Verification

After adding the image, verify it's correct:

1. The image should be in `/public/bear-heads.png`
2. Run `npm run dev` to test locally
3. Check that both bear heads appear under the BEARTH logo
4. Left bear should be brown, right bear should be white

## Alternative: Using the Current Image

If you have trouble exporting, you can also:

1. Open your current Figma Make preview
2. Right-click on one of the bear heads in the browser
3. Select "Save image as..."
4. Save as `bear-heads.png`
5. Place in `/public/` folder

**Note**: This method may give you lower resolution, so exporting from Figma is preferred.

## Troubleshooting

### Can't find the layer in Figma?
- Look for layers named similar to:
  - "bear heads"
  - "553366211178513951475546268021866254933006617n 1"
  - Or search for "bear" in the layers panel

### Image appears but looks wrong?
- Make sure you exported the correct layer
- Check that both bears are visible in the exported image
- Try exporting at higher resolution (3x instead of 2x)

### Image doesn't show after deployment?
- Verify the file is in `/public/bear-heads.png`
- Check that the file name is exactly `bear-heads.png` (lowercase, with hyphen)
- Clear browser cache and hard reload

## Need Help?

If you're still having trouble:
1. Check the browser console for 404 errors
2. Verify the file exists at `/public/bear-heads.png`
3. Make sure your build process includes the `/public` folder
4. Try viewing the image directly by navigating to `/bear-heads.png` in your browser
