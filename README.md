# Govern & Grow — governgrow.com

Website for Govern & Grow, a GRC and consulting firm: ISO/IEC 27001, ISO/IEC 42001, DPDPA compliance, digital transformation, ERP and operational efficiency.

Plain HTML, CSS and JavaScript. No build step.

## Structure

```
index.html            Home page
thanks.html           Shown after the contact form is sent
404.html              Page-not-found
CNAME                 Custom domain for GitHub Pages (governgrow.com)
.nojekyll             Tells GitHub Pages to serve files as-is
assets/css/style.css  All styles (colours are variables at the top)
assets/js/main.js     Mobile menu and form helpers
assets/img/           Logo mark, full logo and favicon (SVG)
```

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `governgrow-website`).
2. Upload all files and folders in this package to the root of the repository, including `CNAME` and `.nojekyll`.
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
5. Under **Custom domain**, confirm `governgrow.com` and save.
6. Once DNS is working, tick **Enforce HTTPS**.

## Point governgrow.com to GitHub

At your domain registrar, add these DNS records:

| Type  | Name | Value                     |
|-------|------|---------------------------|
| A     | @    | 185.199.108.153           |
| A     | @    | 185.199.109.153           |
| A     | @    | 185.199.110.153           |
| A     | @    | 185.199.111.153           |
| CNAME | www  | YOUR-GITHUB-USERNAME.github.io |

DNS changes can take a few hours to take effect. Check GitHub’s Pages documentation for the current values.

## Contact form

The form sends enquiries to paruthiparas02@gmail.com using FormSubmit (formsubmit.co). No server is needed.

- The first time the form is submitted, FormSubmit emails an activation link to that address. Click it once to start receiving messages.
- After activation, FormSubmit gives you a random alias. You can replace the email in the form’s `action` URL with that alias so your address isn’t visible in the page source.
- After sending, visitors are taken to `thanks.html`.

## Editing

- Brand colours: top of `assets/css/style.css` (`--emerald`, `--teal`, `--amber`, `--navy`).
- Services and copy: `index.html`.
