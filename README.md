# Academic Profile & Field Work Web App

A clean, responsive, and mobile-friendly academic resume and research portfolio website. Built with zero dependencies (pure HTML5, CSS3, and modern vanilla JavaScript), making it immediately hostable on **GitHub Pages** or browsable locally in any modern browser.

---

## 🌟 Key Features

- 📱 **Mobile & Desktop Responsive**: Tested for smooth touch interactions on iOS Safari, Android Chrome, and all desktop browsers (Edge, Chrome, Firefox, Safari).
- 🌓 **Dark / Light Theme Toggle**: Seamless mode switcher with automatic preference persistence in `localStorage`.
- 🖼️ **Profile Picture Support**: Comes with a crisp SVG avatar placeholder, an in-browser live photo selector, and direct drop-in image support (`.jpg`, `.png`).
- 🔬 **Academic Research Interests**: Filterable categories (Forest Ecology, Remote Sensing, Biogeochemistry, Conservation) with interactive modal summaries for deep-dive abstracts.
- 🏔️ **Field Work Expeditions Showcase**: Dedicated cards featuring field campaign locations, duration, equipment chips (LiDAR, RTK GPS, Gas analyzers), and key deliverables.
- 📄 **Curriculum Vitae (CV) & Timeline**: Clean chronological layout for research positions, education degrees, selected publications with DOIs, and field certifications.
- 🖨️ **Print & PDF Optimized**: Built-in `@media print` stylesheet so clicking **"CV PDF"** produces a clean, professional paper/PDF resume without web UI clutter.
- ✉️ **Zero-Backend Contact**: Direct 1-click email copy button + instant `mailto:` inquiry generator that works 100% statically on GitHub Pages.

---

## 📁 Project Directory Structure

```text
GenAI-01/
├── index.html                 # Main website markup & semantic structure
├── css/
│   └── style.css              # Responsive styling, CSS variables, dark/light modes, print styles
├── js/
│   └── main.js                # Theme toggle, mobile drawer, filters, modal, and utilities
├── assets/
│   └── images/
│       ├── avatar.svg         # Default scholar portrait avatar placeholder
│       ├── favicon.svg        # Academic scholar favicon icon
│       ├── fieldwork-1.svg    # Alpine mountain survey illustration
│       ├── fieldwork-2.svg    # Coastal wetland coring illustration
│       └── fieldwork-3.svg    # Arid basin drone LiDAR illustration
├── .gitignore                 # Excludes IDE and temporary files
├── LICENSE                    # Open license (Unlicense)
└── README.md                  # Documentation and deployment guide
```

---

## 🚀 How to Preview Locally

Because there are **no build steps or node modules required**, you can run this in seconds:

### Method 1: Direct File Open
Simply double-click [`index.html`](file:///C:/projects/GenAI-01/index.html) in Windows File Explorer to open it in your default browser.

### Method 2: Python Local Server (Recommended)
Open PowerShell or Terminal in this directory:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 🌐 How to Publish to GitHub & GitHub Pages

To make this web app browsable worldwide as a live website:

### Step 1: Commit and Push your Code
```bash
git add .
git commit -m "Create academic profile and field work portfolio web app"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPOSITORY-NAME>.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub (`https://github.com/<YOUR-USERNAME>/<YOUR-REPOSITORY-NAME>`).
2. Click on **Settings** (gear icon) > **Pages** in the left sidebar.
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and root folder `/(root)`.
4. Click **Save**.
5. Within 1–2 minutes, GitHub will publish your live website at:
   ```text
   https://<YOUR-USERNAME>.github.io/<YOUR-REPOSITORY-NAME>/
   ```

---

## ✏️ Customization Guide

### 1. Replacing the Profile Picture
- Place your photo (e.g. `my-photo.jpg`) inside the `assets/images/` folder.
- In [`index.html`](file:///C:/projects/GenAI-01/index.html), find the `<img>` tag with `id="profile-avatar"` and change `src`:
  ```html
  <img id="profile-avatar" class="avatar-img" src="assets/images/my-photo.jpg" alt="Your Name Portrait" />
  ```
- Alternatively, you can click **"Choose photo from computer"** directly on the live website to preview your image instantly in your browser!

### 2. Updating Your Personal Information
- Open [`index.html`](file:///C:/projects/GenAI-01/index.html) in your editor.
- Search for `Alex Morgan` and replace it with your name.
- Update your title, department, institutional affiliation, and bio paragraph.
- Update your social links (Google Scholar, ORCID, GitHub, and email).

### 3. Editing Research Interests & Field Work
- **Research Cards**: Edit the `<article class="research-card">` blocks in `index.html`. You can customize the modal popups inside `js/main.js` under `researchDetailsData`.
- **Field Expeditions**: Edit the `<article class="fieldwork-card">` blocks with your specific field locations, expedition dates, equipment used, and findings.

---

## 📄 License
This project is released into the public domain under the [Unlicense](file:///C:/projects/GenAI-01/LICENSE). Feel free to adapt and use it for your personal academic portfolio!
