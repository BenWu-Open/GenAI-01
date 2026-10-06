/**
 * Ben Wu (吳笨) - Personal Web App & Research Profile
 * Lightweight vanilla JavaScript - compatible with all modern desktop and mobile browsers.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initActiveNavSpy();
  initResearchFilters();
  initResearchModal();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Default is Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // Default to 'light' mode explicitly
  const currentTheme = localStorage.getItem('theme') || 'light';
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
   5. Modal Viewer for Research Details
   -------------------------------------------------------------------------- */
const researchDetailsData = {
  'res-robotics': {
    title: 'AI for Robotics: Perception, SLAM & Autonomous Systems',
    category: 'Autonomous Systems & Robotics',
    content: `
      <p><strong>Focus:</strong> Bridging deep reinforcement learning, sensor fusion, and spatial perception to enable robust decision-making in robotic systems operating in dynamic real-world environments.</p>
      <br>
      <h4>Key Areas of Exploration</h4>
      <ul style="padding-left:1.25rem; margin-top:0.5rem; margin-bottom:1rem; line-height:1.65;">
        <li><strong>Sim-to-Real Transfer:</strong> Policy learning in simulated environments (Isaac Sim, Gazebo) transferred onto physical robotic agents.</li>
        <li><strong>Visual SLAM & Spatial AI:</strong> Real-time 3D scene representation, point-cloud understanding, and LiDAR-visual odometry.</li>
        <li><strong>Motion Planning:</strong> Trajectory optimization and collision avoidance through deep predictive models and control theory.</li>
      </ul>
      <h4>Technologies & Frameworks</h4>
      <p>ROS 2, PyTorch, Isaac Gym, OpenCV, C++, Python, Gazebo, Navigation2.</p>
    `,
    tags: ['Robotics', 'Reinforcement Learning', 'Visual SLAM', 'ROS 2', 'Sensor Fusion']
  },
  'res-cybersecurity': {
    title: 'Cybersecurity: AI-Driven Defense & Adversarial Robustness',
    category: 'Information Security & Trustworthy AI',
    content: `
      <p><strong>Focus:</strong> Investigating machine learning applications in network intrusion detection, automated threat analysis, and fortifying AI models against adversarial evasion and poisoning attacks.</p>
      <br>
      <h4>Key Areas of Exploration</h4>
      <ul style="padding-left:1.25rem; margin-top:0.5rem; margin-bottom:1rem; line-height:1.65;">
        <li><strong>Adversarial Machine Learning:</strong> Evaluating model vulnerability to perturbation attacks and developing robust defense mechanisms.</li>
        <li><strong>Anomaly & Intrusion Detection:</strong> Unsupervised deep learning pipelines for analyzing encrypted network packet flows and zero-day vulnerabilities.</li>
        <li><strong>Automated Vulnerability Assessment:</strong> Leveraging LLMs and static analysis heuristics for detecting software vulnerability patterns.</li>
      </ul>
      <h4>Technologies & Frameworks</h4>
      <p>PyTorch, Scikit-learn, Wireshark, Zeek, Adversarial Robustness Toolbox (ART), Python.</p>
    `,
    tags: ['Cybersecurity', 'Adversarial ML', 'Intrusion Detection', 'Threat Intelligence', 'Network Security']
  },
  'res-medical': {
    title: 'Medical Image Analysis: Deep Learning for Clinical Diagnostics',
    category: 'Biomedical Imaging & Healthcare AI',
    content: `
      <p><strong>Focus:</strong> Developing computer vision architectures for high-precision segmentation, lesion detection, and pathological classification across medical imaging modalities (MRI, CT, X-ray, Ultrasound).</p>
      <br>
      <h4>Key Areas of Exploration</h4>
      <ul style="padding-left:1.25rem; margin-top:0.5rem; margin-bottom:1rem; line-height:1.65;">
        <li><strong>Anatomical Segmentation:</strong> Developing Transformer-based and U-Net variants for volumetric 3D organ and tumor boundary delineation.</li>
        <li><strong>Weakly-Supervised & Self-Supervised Learning:</strong> Leveraging unannotated radiological datasets with contrastive self-supervised representations to mitigate labeling bottlenecks.</li>
        <li><strong>Model Interpretability & Uncertainty:</strong> Implementing attention maps (Grad-CAM) and Bayesian uncertainty estimation to provide clinician-interpretable confidence metrics.</li>
      </ul>
      <h4>Technologies & Frameworks</h4>
      <p>MONAI, PyTorch, SimpleITK, torchvision, 3D Slicer, CUDA, Medical Segmentation Decathlon.</p>
    `,
    tags: ['Medical Imaging', 'Computer Vision', 'MONAI', 'Image Segmentation', 'Explainable AI']
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

