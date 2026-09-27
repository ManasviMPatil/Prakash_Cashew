# CashewPro Website

A complete, self-contained HTML/CSS/JS website for a cashew manufacturing & export business.

## 1. Folder structure
```
cashew-website/
├── index.html
├── style.css
├── script.js
├── images/           ← put your own photos here (see below)
│   └── gallery/
└── README.md
```
The site currently loads images from Unsplash over the internet so it looks complete out of the box. Swap in your own photos whenever you're ready (step 7).

## 2. How to open it
No build step needed. Just double-click `index.html`, or right-click → "Open with" your browser.

## 3. Replace the company name
Search `index.html` and `style.css` for **CASHEWPRO / CashewPro** and replace with your real business name. Main spots: `<title>`, header logo, footer, and meta description.

## 4. Replace the WhatsApp number
Search `index.html` for `919876543210` (appears in the floating button, the B2B section, and the footer). Replace with your number in the format `<countrycode><number>` with no spaces or `+`.

## 5. Replace address & email
In `index.html`, find the `<section class="contact">` block — update the address, phone, email and business hours there, and also in the footer.

## 6. Replace product images
Each product card and gallery image is a plain `<img src="...">` tag. Swap the Unsplash URL for a local path, e.g. `images/product-w180.jpg`, once you've added your own photography to the `images/` folder.

## 7. Using your own images
1. Add your photos into `images/` (and `images/gallery/` for the gallery section).
2. Replace the matching `src="https://images.unsplash.com/..."` with `src="images/yourfile.jpg"`.
3. Keep file sizes reasonable (under ~300KB each) for fast loading.

## 8. Deploying it online
Easiest free options:
- **Netlify / Vercel**: drag-and-drop the `cashew-website` folder onto their dashboard.
- **GitHub Pages**: push the folder to a GitHub repo, enable Pages in repo settings.
- Any regular web host: upload the folder via FTP/cPanel file manager.

No server or database is required — it's a static site.

## Notes
- The enquiry form currently shows a confirmation message but doesn't send an email — connect it to a service like Formspree, EmailJS, or your own backend (see the comment in `script.js`).
- Certification badges (FSSAI, ISO, HACCP, etc.) are placeholders only — replace them with certifications you actually hold.
