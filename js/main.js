/**
 * Academic Resume & Field Work Portfolio
 * Lightweight, vanilla JavaScript - 100% compatible with modern mobile & desktop browsers.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initActiveNavSpy();
  initResearchFilters();
  initResearchModal();
  initAvatarPreview();
  initCopyEmail();
  initContactForm();
  initPrintButton();
});

/* --------------------------------------------------------------------------
   1. Dark / Light Theme Toggle
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  applyTheme(currentTheme);

  themeToggle.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const sunIcon = themeToggle.querySelector('.icon-sun');
  const moonIcon = themeToggle.querySelector('.icon-moon');

  if (theme === 'dark') {
    if (sunIcon) sunIcon.style.display = 'block';
    if (moonIcon) moonIcon.style.display = 'none';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
  } else {
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'block';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  }
}

/* --------------------------------------------------------------------------
   2. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeMobileDrawer();
    } else {
      openMobileDrawer();
    }
  });

  // Close when clicking backdrop
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) {
      closeMobileDrawer();
    }
  });

  // Close when tapping any link
  const links = drawer.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMobileDrawer();
    }
  });
}

function openMobileDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  const menuBtn = document.getElementById('mobile-menu-btn');
  if (!drawer || !menuBtn) return;
  drawer.classList.add('open');
  menuBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  const menuBtn = document.getElementById('mobile-menu-btn');
  if (!drawer || !menuBtn) return;
  drawer.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* --------------------------------------------------------------------------
   3. Active Navigation Scroll Spy
   -------------------------------------------------------------------------- */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(sec => observer.observe(sec));
}

/* --------------------------------------------------------------------------
   4. Research Interests Filtering
   -------------------------------------------------------------------------- */
function initResearchFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.research-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Modal Viewer for Detailed Research Statements
   -------------------------------------------------------------------------- */
const researchDetailsData = {
  'res-1': {
    title: 'Alpine Ecosystem Resilience & Tree-Line Dynamics',
    category: 'Ecology & Climate Adaptation',
    content: `
      <p><strong>Overview:</strong> Investigating the structural and physiological shifts in high-altitude sub-alpine forests under multi-decadal temperature elevation and shifting snowmelt patterns.</p>
      <br>
      <h4>Primary Research Questions</h4>
      <ul style="padding-left:1.25rem; margin-top:0.5rem; margin-bottom:1rem; line-height:1.6;">
        <li>How does microclimatic variation across elevation gradients buffer seedling recruitment against thermal stress?</li>
        <li>What role do mycorrhizal networks play in moisture redistribution during prolonged summer dry spells?</li>
      </ul>
      <h4>Field Methods & Instrumentation</h4>
      <p>Continuous micro-meteorological logging via on-site solar weather stations, dendrometer band networks, and high-resolution hyperspectral aerial transects.</p>
    `,
    tags: ['Microclimatology', 'Dendrochronology', 'Thermal Imagery', 'Montane Biomes']
  },
  'res-2': {
    title: 'Coastal Wetland Carbon Flux & Sea-Level Dynamics',
    category: 'Biogeochemistry & Hydrology',
    content: `
      <p><strong>Overview:</strong> Quantifying "blue carbon" sequestration rates in coastal salt marshes and mangrove ecotones subjected to tidal inundation and saline intrusion.</p>
      <br>
      <h4>Methodological Highlights</h4>
      <ul style="padding-left:1.25rem; margin-top:0.5rem; margin-bottom:1rem; line-height:1.6;">
        <li>Vibracore sediment sampling to depth of 2.5m for isotopic Carbon-13 and Nitrogen-15 analysis.</li>
        <li>Automated dynamic flux chambers measuring continuous surface CO2 and CH4 emissions.</li>
        <li>Hydrodynamic acoustic Doppler current profiling (ADCP) across estuarine channels.</li>
      </ul>
    `,
    tags: ['Blue Carbon', 'Sediment Coring', 'Isotope Ratio MS', 'Estuarine Dynamics']
  },
  'res-3': {
    title: 'UAV Remote Sensing & Arid Vegetation Phenology',
    category: 'Remote Sensing & GIS',
    content: `
      <p><strong>Overview:</strong> Developing automated machine learning pipelines for sub-centimeter canopy volume extraction and vegetative moisture index estimation from drone-borne LiDAR and multispectral sensors.</p>
      <br>
      <h4>Technical Stack</h4>
      <p>Cloud-optimized GeoTIFFs, Python (rasterio, geopandas, PyTorch), QGIS, and RTK-corrected GNSS control stations.</p>
    `,
    tags: ['UAV LiDAR', 'Point Cloud Processing', 'Computer Vision', 'Arid Ecology']
  },
  'res-4': {
    title: 'Community-Engaged Conservation & Bio-Acoustics',
    category: 'Conservation Biology',
    content: `
      <p><strong>Overview:</strong> Deploying passive acoustic recorders (AudioMoths) in fragmented wildlife corridors to monitor nocturnal avian and amphibian indicator species while engaging local reserve rangers in participatory acoustic data tagging.</p>
      <br>
      <h4>Outcomes</h4>
      <p>Open-source labeled soundscape catalog, community training workshops, and automated bird vocalization detection models.</p>
    `,
    tags: ['Passive Bio-Acoustics', 'Community Science', 'Signal Processing', 'Species Distribution']
  }
};

function initResearchModal() {
  const modalBackdrop = document.getElementById('research-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalBody = document.getElementById('modal-body');
  const modalTags = document.getElementById('modal-tags');
  if (!modalBackdrop) return;

  const triggers = document.querySelectorAll('[data-research-id]');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const id = trigger.getAttribute('data-research-id');
      const data = researchDetailsData[id];
      if (data) {
        modalTitle.textContent = data.title;
        modalCategory.textContent = data.category;
        modalBody.innerHTML = data.content;
        
        modalTags.innerHTML = '';
        data.tags.forEach(t => {
          const span = document.createElement('span');
          span.className = 'research-tag';
          span.textContent = t;
          modalTags.appendChild(span);
        });

        modalBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   6. Avatar Live Preview & Replacement
   -------------------------------------------------------------------------- */
function initAvatarPreview() {
  const input = document.getElementById('avatar-file-input');
  const avatarImg = document.getElementById('profile-avatar');
  if (!input || !avatarImg) return;

  // Check saved avatar in localStorage
  const savedAvatar = localStorage.getItem('custom_avatar');
  if (savedAvatar) {
    avatarImg.src = savedAvatar;
  }

  input.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file (JPG, PNG, WebP, SVG).');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        avatarImg.src = event.target.result;
        try {
          localStorage.setItem('custom_avatar', event.target.result);
          showToast('Profile picture preview updated!');
        } catch (err) {
          showToast('Image previewed in browser.');
        }
      };
      reader.readAsDataURL(file);
    }
  });
}

/* --------------------------------------------------------------------------
   7. Quick Copy Email Function
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = copyBtn.getAttribute('data-email') || 'alex.morgan.research@example.edu';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        fallbackCopy(email);
      });
    } else {
      fallbackCopy(email);
    }
  });
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast('Email address copied to clipboard!');
  } catch (err) {
    showToast(`Email: ${text}`);
  }
  document.body.removeChild(textarea);
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* --------------------------------------------------------------------------
   8. Native Contact Form Submission (Mailto Generator)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-sender')?.value.trim();
    const subject = document.getElementById('contact-subject')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.');
      return;
    }

    const mailtoTarget = 'alex.morgan.research@example.edu';
    const emailSubject = encodeURIComponent(`[Website Inquiry] ${subject || 'Research Collaboration'} - ${name}`);
    const emailBody = encodeURIComponent(
      `Hello,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    );

    window.location.href = `mailto:${mailtoTarget}?subject=${emailSubject}&body=${emailBody}`;
    showToast('Opening your email client...');
  });
}

/* --------------------------------------------------------------------------
   9. Print / Export Resume Button
   -------------------------------------------------------------------------- */
function initPrintButton() {
  const printBtns = document.querySelectorAll('.print-cv-btn');
  printBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });
}
