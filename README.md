# Professor Academic Website

Static website draft for Prof. Kalluri V. S. Ranganath, Department of Chemistry, Institute of Science, Banaras Hindu University.

## Files
- `index.html` — website content
- `styles.css` — BHU-inspired maroon, gold, and cream theme
- `script.js` — mobile menu and footer year
- `assets/profile-placeholder.svg` — fallback image
- `assets/professor-photo.jpg` — add this file manually using the professor's real photo

## How to edit
1. Open `index.html` in VS Code.
2. Replace the About text with the final biography.
3. Add exact awards, grants, students, and publications.
4. Add a real photo at `assets/professor-photo.jpg`.
5. Open `index.html` in a browser to preview.

## Free hosting with GitHub Pages
1. Create a GitHub account or log in.
2. Create a new repository, for example: `prof-ranganath-website`.
3. Upload all files and folders from this package.
4. Go to repository `Settings` → `Pages`.
5. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save. GitHub will generate a free URL like `https://yourusername.github.io/prof-ranganath-website/`.

## Connect GoDaddy domain
1. In GitHub Pages, add the custom domain, for example: `www.professorname.com`.
2. In GoDaddy DNS, add:
   - Type: `CNAME`
   - Name: `www`
   - Value: `yourusername.github.io`
3. For root domain forwarding, set GoDaddy forwarding from `professorname.com` to `https://www.professorname.com`.
4. Back in GitHub Pages, enable `Enforce HTTPS` after DNS is verified.

## Notes
- Keep the site lightweight and static for free hosting.
- Do not publish phone numbers or personal data unless the professor approves.
- Verify publication metrics before showing counts publicly.
