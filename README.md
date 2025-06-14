# 3D-visuals

This project hosts a holographic air quality dashboard implemented in vanilla HTML, CSS and JavaScript. A live build of `dashboard_v3.html` is published using GitHub Pages so you can view the interface without cloning the repository.
[View the live site here](https://kapil2020.github.io/3D-visuals/)

## Development

Install dependencies and run the smoke test:

```bash
npm install
npx playwright install
npm test
```

The test opens the dashboard with Playwright and fails if there are console errors.

## GitHub Pages

The page is served from the `docs` folder and deployed by the workflow in
`.github/workflows/deploy.yml`. In the repository **Settings → Pages** enable
the site and set the source to **GitHub Actions** so the workflow can publish
it. For first-time setup, run the workflow with `enablement: true` to configure
Pages automatically.
