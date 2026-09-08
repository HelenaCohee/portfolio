# Safe GitHub Deployment — Step by Step

## Part 1 — Preview without touching your live homepage
1. Download and unzip `helena-portfolio-redesign.zip`.
2. Open GitHub and go to `HelenaCohee/portfolio`.
3. Click **Add file → Upload files**.
4. Upload ONLY these files first:
   - `preview.html`
   - `work.html`
   - `ai-systems.html`
   - `case-studies.html`
   - `shop.html`
   - `about.html`
   - `site.css`
   - `site.js`
   - `analytics.js`
5. Commit the files directly to `main`.
6. Wait for GitHub Pages to refresh.
7. Open:
   `https://helenacohee.github.io/portfolio/preview.html`
8. Click every navigation tab and test the mobile layout on your phone.

## Part 2 — Make the redesign live
9. Go back to the repo.
10. Click **Add file → Upload files** again.
11. Upload `index.html`.
12. GitHub will show that `index.html` already exists and will be replaced.
13. Commit the change.
14. Open:
   `https://helenacohee.github.io/portfolio/`
15. Hard refresh if the old version is cached.

## Part 3 — How payment works
GitHub is the showroom. Payhip is the cash register.

The current product buttons already point to:
`https://payhip.com/b/WHlLm`

For each future paid product:
1. Create the product in Payhip.
2. Upload the paid files to Payhip, NOT the public GitHub repo.
3. Copy the Payhip product URL.
4. Open `shop.html` in GitHub.
5. Click the pencil icon to edit.
6. Replace the relevant waitlist `href` with the Payhip product URL.
7. Change the badge from `Coming next` to `Available now`.
8. Commit.

## Part 4 — Product boundary
Keep public:
- overview pages
- capability descriptions
- sanitized examples
- architecture diagrams
- sample inputs / outputs

Keep paid/private:
- complete skill instructions
- complete agent system prompts
- SKILL.md files
- router logic
- evaluation datasets
- implementation templates
- commercial-use packages

## Part 5 — Recommended product ladder
1. AI Shortcut Library — current product
2. Strategic PM AI Skill Pack
3. AI Operator Pro
4. Team / Commercial License
5. Custom AI Workflow & Agent Build

## Rollback
If you dislike the live redesign after uploading `index.html`:
1. Open the repo's **Commits** history.
2. Open the commit that replaced `index.html`.
3. Revert that commit, or restore the previous `index.html` version from history.

Your existing demo files are not removed by this redesign.


## Analytics
After you create your GA4 Measurement ID, edit `analytics.js` and replace `G-XXXXXXXXXX`. See `ANALYTICS-SETUP.md`.
