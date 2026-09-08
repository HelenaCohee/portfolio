# Analytics Setup: GitHub Portfolio + Payhip

## You should use BOTH GitHub Insights and GA4

### A. GitHub's built-in repository traffic
This measures traffic to the repository itself.

1. Open `HelenaCohee/portfolio` on GitHub.
2. Click **Insights**.
3. Click **Traffic**.
4. You can see:
   - repository views
   - unique visitors
   - clones
   - referring sites
   - popular repository content

GitHub's built-in traffic view is useful, but it only covers the recent traffic window. Use GA4 for long-term website analytics.

---

## B. Google Analytics 4 for the actual portfolio website

### 1. Create GA4
1. Go to Google Analytics.
2. Create an account/property named something like **Helena AI Business**.
3. Create a **Web** data stream for:
   `https://helenacohee.github.io/portfolio/`
4. Copy the Measurement ID, which looks like:
   `G-XXXXXXXXXX`

### 2. Add it to the portfolio
1. Open `analytics.js`.
2. Find:
   `const HELENA_GA4_ID = 'G-XXXXXXXXXX';`
3. Replace the placeholder with your real ID.
4. Upload the updated `analytics.js` to GitHub.

The redesign already tracks:
- page views
- Payhip clicks
- contact/email clicks
- demo opens
- Work-page filters
- AI Systems tab clicks

### 3. Add the SAME GA4 ID to Payhip
In Payhip:
1. Go to **Account → Settings → Advanced Settings**.
2. Find **Google Analytics**.
3. Paste the same GA4 Measurement ID.
4. Save.

Payhip sends purchase activity to GA4 and also has its own built-in analytics.

### 4. Configure cross-domain measurement
Because the visitor moves from GitHub Pages to Payhip:
1. In GA4, open **Admin**.
2. Open your Web data stream.
3. Open the Google tag settings / domain configuration.
4. Configure the portfolio domain and your Payhip domain for cross-domain measurement.

If you later give Payhip a custom domain such as `shop.yourdomain.com`, update the domain configuration. A custom domain is cleaner for attribution and branding.

---

## C. Payhip's own analytics
In Payhip's Analytics section you can monitor:
- views
- started checkout
- completed checkout
- conversion rate
- sales
- traffic / visitor sources

Use Payhip for commerce numbers and GA4 for the broader customer journey.

---

## D. UTM tracking
The redesigned portfolio already uses UTM-tagged Payhip links so the traffic is easier to identify:

- source: `github_portfolio`
- medium: `referral`
- campaign: `ai_shortcut_library`

When you create future Payhip products, give each CTA its own campaign name.
