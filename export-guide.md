
# Exporting and Hosting Your CreativeYT Website

This guide will help you export and host your CreativeYT website on any static hosting platform like Netlify, Vercel, GitHub Pages, or similar services.

## Build Instructions

1. First, make sure you have Node.js installed on your computer (version 14 or higher recommended).

2. Open your terminal/command prompt and navigate to the project folder.

3. Install dependencies:
   ```
   npm install
   ```
   or if you use yarn:
   ```
   yarn
   ```

4. Build the project:
   ```
   npm run build
   ```
   or
   ```
   yarn build
   ```

5. The build process will create a `dist` folder containing all the files needed to host your website.

## Hosting Options

### Netlify

1. Create an account at [Netlify](https://www.netlify.com/).
2. Drag and drop your `dist` folder onto the Netlify dashboard.
3. Your site will be deployed with a Netlify subdomain.
4. You can connect your own custom domain in the Netlify dashboard.

### Vercel

1. Create an account at [Vercel](https://vercel.com/).
2. Install Vercel CLI: `npm install -g vercel`
3. Run `vercel` in your project directory and follow the prompts.
4. Your site will be deployed to a Vercel subdomain.

### GitHub Pages

1. Create a new GitHub repository.
2. Push your project to GitHub.
3. In repository settings, navigate to "Pages" and select the branch to deploy.
4. Your site will be available at `https://yourusername.github.io/repositoryname/`.

## Important Notes

- The site uses client-side rendering for charts and animations, so all features will work correctly on any static hosting platform.
- If you make changes to the code, you'll need to rebuild the project before deploying again.
- All assets (images, fonts, etc.) are included in the build output.

For any issues or questions, please refer to the documentation of your chosen hosting platform.
