# Resume Website (Responsive)

This is a small, responsive resume (CV) site designed for mobile and desktop browsers. It includes buttons to contact you via email, phone, and LinkedIn.

Files:

How to preview locally:
python -m http.server 8000
````markdown
# Resume Website (Responsive + PWA)

This is a responsive resume site (CV) that also supports offline use as a Progressive Web App (PWA).

How to preview locally

- Run a simple local server (PowerShell):

```powershell
cd C:\mingw-w64\bin\resume-site
python -m http.server 8000 --bind 0.0.0.0
```

- Open `http://localhost:8000` in your browser.

Install / use on a mobile device (offline available)

1. Make sure your phone and PC are on the same Wi‑Fi network.
2. Start the local server as above.
3. Find your PC's local IP address (PowerShell):

```powershell
ipconfig | findstr /R "IPv4"
```

4. On your phone's browser, open `http://<PC_IP>:8000`.
5. Open the page once while online to allow the service worker to cache assets.
6. Add to Home Screen (Android Chrome: menu → "Add to Home screen"; iOS Safari: Share → "Add to Home Screen").
7. After the first load, the site will work offline using cached assets.

Notes and limitations

- PWAs require HTTPS to be installable on most devices. Running locally (localhost) and some LAN setups bypass this restriction during development. For public installability, deploy to HTTPS (GitHub Pages, Netlify, Vercel).
- The service worker caches the main assets defined in `service-worker.js`. If you add new files, reload the page while online to refresh the cache.

Files added for PWA

- `manifest.json` — PWA manifest used by browsers when installing the app.
- `service-worker.js` — Service worker that caches assets for offline use.
- `icons/` — SVG icons used by the manifest and as favicon.
- `script.js` — updated to register the service worker on page load.

Next steps I can help with

- Add PNG icons (recommended for iOS),
- Provide one-click deployment to GitHub Pages,
- Improve caching strategy (network-first for dynamic assets) and add update prompts for new service worker versions.

Tell me which of those you'd like next.













Tell me which content you want me to fill in and any color or layout preferences.- Provide alternate color theme or a light theme toggle.- Deploy to GitHub Pages and provide a live URL.- Add print-friendly CSS for PDF export.- Add your real content (bio, jobs, dates, photo).Next steps I can do for you (choose any):- Replace the `summary`, `experience`, and `skills` sections with your content.- Edit `index.html` to replace `Your Name`, `you@example.com`, phone number, and LinkedIn URL.Customization:nThen open `http://localhost:8000` in your browser.