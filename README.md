# Shannon Yardley — PR & Communications Portfolio

A personal portfolio website for Shannon Yardley, a Public Relations & Communications professional. The site showcases work samples, skills, and provides a way for potential employers and clients to get in touch.

**Live site:** [shannonyardley.com](https://shannonyardley.com)

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Hero introduction with a call to action |
| `about.html` | Background, experience, and professional summary |
| `/portfolio/index.html` | Work samples organized by category (writing, social media, photography), with downloadable PDFs |
| `skills.html` | Overview of core competencies and areas of expertise |
| `contact.html` | Contact form with spam protection |

---

## Built With

- **HTML5, CSS3, Vanilla JavaScript** — no frameworks or build tools
- **[Formspree](https://formspree.io)** — contact form handling and email delivery
- **[Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)** — CAPTCHA spam protection
- **[Google Fonts](https://fonts.google.com)** — Playfair Display & Inter
- **GitHub Actions** — CI/CD pipeline
- **[Hostinger](https://www.hostinger.com)** — hosting via FTP deploy

---

## Features

- Fully responsive design — mobile, tablet, and desktop
- Downloadable portfolio work samples (PDF)
- AJAX contact form with success/error feedback
- Smooth scroll and subtle load animations
- Accessible markup with ARIA labels and semantic HTML
- SEO optimised — Open Graph tags, Twitter Card tags, canonical URLs, JSON-LD Person schema, sitemap, and robots.txt

---

## Project Structure

```
sy-pr-portfolio/
├── index.html
├── about.html
├── contact.html
├── skills.html
├── sitemap.xml
├── robots.txt
├── portfolio/
│   └── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── downloads/
└── .github/
    └── workflows/
        └── deploy.yaml
```

---

## Deployment

Pushes to `main` automatically deploy to Hostinger via the [FTP Deploy Action](https://github.com/SamKirkland/FTP-Deploy-Action).

```yaml
# .github/workflows/deploy.yaml
on:
  push:
    branches: [main]
```

FTP credentials are stored as GitHub encrypted repository secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`) and never appear in code.

*Built by [illymakes](https://github.com/illymakes)*
