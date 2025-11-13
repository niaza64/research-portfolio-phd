# GitHub Pages Deployment Guide

This portfolio is ready to deploy on GitHub Pages!

## Deployment Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Configure GitHub Pages:**
   - Go to your repository Settings → Pages
   - Set source to "GitHub Actions" OR deploy the `dist` folder manually

3. **Using GitHub Actions (Recommended):**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             
         - name: Install dependencies
           run: npm install
           
         - name: Build
           run: npm run build
           
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

4. **Manual Deployment:**
   ```bash
   npm run build
   # Push the dist folder to gh-pages branch
   ```

5. **Configure base path (if using subdirectory):**
   Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Add this if not at root domain
     // ... rest of config
   })
   ```

## Custom Domain (Optional)

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings at your domain registrar
3. Enable custom domain in GitHub Pages settings

## Notes

- The site is fully static and SEO-optimized
- All routes use client-side routing via React Router
- Responsive design works on all devices
- Dark/light mode support included

For more information, visit: https://docs.github.com/en/pages
