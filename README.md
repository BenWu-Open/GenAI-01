# Ben Wu (吳笨) - Personal AI Research Profile & Web App

A clean, responsive, and mobile-compatible personal profile and academic research interests web app for **Ben Wu (吳笨)**, Student of Master in AI. 

Built with pure HTML5, CSS3, and modern vanilla JavaScript, ready to be browsed locally or hosted worldwide on **GitHub Pages** with zero setup.

---

## 🌟 Key Features

- 👤 **Clean Profile**: Highlights Ben Wu (吳笨), Master in AI student, with profile portrait (`avatar.jpg`).
- 🤖 **Focused AI Research Interests**:
  1. **AI for Robotics** (Reinforcement learning, visual SLAM, embodied AI, ROS 2, sim-to-real transfer).
  2. **Cybersecurity** (Adversarial machine learning, anomaly & intrusion detection, network security).
  3. **Medical Image Analysis** (Deep learning for biomedical diagnostics, 3D anatomical segmentation, MONAI).
- 🔍 **Interactive Deep-Dive Modals**: Click "Learn More" on any research card to explore technical methodologies, frameworks, and key focus areas.
- 📱 **Mobile & Desktop Responsive**: Seamless touch navigation and collapsible drawer menu for phones, tablets, and desktops.
- ☀️ **Default Light Theme**: Elegant light mode by default, with a dark mode toggle that respects user preference.
- ⚡ **Zero-Dependency & GitHub Pages Ready**: Requires no build steps, node servers, or external libraries.

---

## 📁 Project Directory Structure

```text
GenAI-01/
├── index.html                 # Main website structure & research content
├── avatar.jpg                 # Profile picture (and in assets/images/avatar.jpg)
├── css/
│   └── style.css              # Responsive styling, CSS tokens, themes, and layouts
├── js/
│   └── main.js                # Theme toggle (default light), mobile nav, filter, and modal logic
├── assets/
│   └── images/
│       ├── avatar.jpg         # Profile image
│       ├── favicon.svg        # Scholar favicon icon
│       └── ...
├── .gitignore                 # Excludes build/editor artifacts
├── LICENSE                    # Unlicense (Public Domain)
└── README.md                  # Documentation and deployment instructions
```

---

## 🚀 How to Run Locally

You can open the web app instantly without installing anything:

### Option 1: Direct File Open
Double-click [`index.html`](file:///C:/projects/GenAI-01/index.html) in Windows File Explorer.

### Option 2: Local Python Server
Run PowerShell in this directory:
```powershell
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

---

## 🌐 How to Deploy to GitHub Pages

1. **Commit and push to your GitHub repository**:
   ```bash
   git add .
   git commit -m "Update profile for Ben Wu (吳笨) - Master in AI"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Select branch `main` and folder `/(root)`.
   - Click **Save**.
3. Your site will be live at:
   ```text
   https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/
   ```

