![Express Company Logo](https://img.shields.io/badge/Express-Company-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=for-the-badge)

A modern, responsive website for Express Company Limited - a professional delivery and logistics service provider committed to speed, care, and reliability.

## 🚀 Quick Start

1. **Setup Structure**: Create the folder structure as outlined below
2. **Add Files**: Place the downloaded CSS and JS files in their respective directories
3. **Test Locally**: Open index.html in your browser or use a local server
4. **Deploy**: Follow the deployment guide for your chosen platform

## 📁 File Structure

\`\`\`
express-website/
├── index.html                       # Your existing HTML file
├── assets/
│   ├── css/
│   │   ├── styles.css              # Main stylesheet (downloadable)
│   │   └── responsive.css          # Additional responsive styles
│   ├── js/
│   │   ├── main.js                 # Core functionality (downloadable)
│   │   └── modules/                # Additional JS modules
│   └── images/
│       ├── hero/                   # Hero section images
│       ├── services/               # Service images
│       ├── testimonials/           # Customer photos
│       └── partners/               # Partner logos
├── docs/
│   ├── README.md                   # This file
│   └── DEPLOYMENT.md               # Deployment instructions
└── package.json                    # Optional: for build tools
\`\`\`

## ✨ Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Interactive Navigation**: Desktop and mobile hamburger menu
- **Testimonials Slider**: Dynamic carousel with 7 customer testimonials
- **FAQ Accordion**: Expandable question sections
- **Contact Forms**: Validated forms with real-time feedback
- **Performance Optimized**: Fast loading with lazy image loading

### Technical Features
- **Modern CSS**: Flexbox, Grid, CSS Variables
- **Vanilla JavaScript**: ES6+ with modular architecture
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO Ready**: Semantic HTML and meta tags
- **Cross-browser**: Compatible with all modern browsers

## 🛠️ Setup Instructions

### Prerequisites
- Modern web browser
- Text editor (VS Code recommended)
- Local server capability (Live Server extension)

### Installation
1. **Download all project files** from the project package
2. **Create directory structure** as shown above
3. **Place existing HTML file** as index.html in root
4. **Add CSS file** to assets/css/styles.css
5. **Add JavaScript file** to assets/js/main.js
6. **Test locally** by opening in browser

### Development
\`\`\`bash
# If using a local server
npx serve .
# OR use Live Server extension in VS Code
\`\`\`

## 🎨 Customization

### Colors
The CSS uses CSS custom properties for easy theming:
\`\`\`css
:root {
  --primary-blue: #2563eb;
  --primary-navy: #1e40af;
  --secondary-orange: #f97316;
  --neutral-gray-900: #111827;
}
\`\`\`

### Typography
\`\`\`css
:root {
  --font-primary: 'Inter', system-ui, sans-serif;
  --font-secondary: 'Roboto', system-ui, sans-serif;
}
\`\`\`

## 🎯 Interactive Elements

### Testimonials Slider
- 7 customer testimonials with navigation
- Auto-play functionality (optional)
- Touch/swipe support
- Responsive design

### FAQ Accordion
- 6 frequently asked questions
- Smooth expand/collapse animations
- Keyboard navigation support
- Screen reader accessible

### Mobile Navigation
- Hamburger menu for mobile devices
- Smooth slide animations
- Overlay background
- Touch-friendly interface

## 📱 Responsive Breakpoints

\`\`\`css
/* Mobile First */
@media (min-width: 640px)  { /* Mobile landscape */ }
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large desktop */ }
\`\`\`

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | <1.5s |
| Largest Contentful Paint | <2.5s |
| Cumulative Layout Shift | <0.1 |
| Total Bundle Size | <2MB |

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Android Chrome)

## 📞 Contact Information

- **Email**: support@express.com
- **Phone**: +1 (123) 456-7890
- **Address**: 123 Wellness Way, Calm City, CA 90210
- **Response Time**: Within 12 hours

## 📄 License

© 2025 Express Company Limited. All Rights Reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Need Help?** Refer to the deployment guide or contact support for assistance.
`;

            downloadFile('README.md', readmeContent);
        }

        function downloadCSS() {
            const cssContent = `/* Express Company Website Styles */

/* ========================================
   CSS CUSTOM PROPERTIES (DESIGN SYSTEM)
======================================== */
:root {
  /* Primary Colors */
  --primary-blue: #2563eb;
  --primary-navy: #1e40af;
  --primary-light: #dbeafe;
  
  /* Secondary Colors */
  --secondary-orange: #f97316;
  --secondary-yellow: #eab308;
  --secondary-green: #16a34a;
  
  /* Neutral Colors */
  --neutral-white: #ffffff;
  --neutral-gray-50: #f9fafb;
  --neutral-gray-100: #f3f4f6;
  --neutral-gray-500: #6b7280;
  --neutral-gray-700: #374151;
  --neutral-gray-900: #111827;
  
  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-secondary: 'Roboto', system-ui, sans-serif;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  
  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}

/* ========================================
   RESET AND BASE STYLES
======================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  line-height: 1.6;
  color: var(--neutral-gray-900);
  background-color: var(--neutral-white);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ========================================
   TYPOGRAPHY
======================================== */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }

p {
  margin-bottom: 1rem;
  color: var(--neutral-gray-700);
}

/* ========================================
   BUTTONS
======================================== */
button, .btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  background: var(--primary-blue);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

button:hover, .btn:hover {
  background: var(--primary-navy);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

/* ========================================
   NAVIGATION
======================================== */
.navbar {
  background: var(--neutral-white);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.desktop-nav-links {
  display: none;
  align-items: center;
  gap: 2rem;
}

.desktop-nav-links a {
  text-decoration: none;
  color: var(--neutral-gray-700);
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
}

.desktop-nav-links a:hover {
  color: var(--primary-blue);
}

#logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-blue);
  text-decoration: none;
}

/* Hamburger Menu */
.hamburger-menu {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  padding: 8px;
}

.hamburger-menu span {
  width: 25px;
  height: 3px;
  background: var(--neutral-gray-700);
  transition: all 0.3s ease;
  border-radius: 2px;
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 70px;
  left: -100%;
  width: 100%;
  height: calc(100vh - 70px);
  background: var(--neutral-white);
  transition: left 0.3s ease;
  z-index: 999;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.mobile-menu.active {
  left: 0;
}

.mobile-menu a {
  display: block;
  padding: 1rem 2rem;
  text-decoration: none;
  color: var(--neutral-gray-700);
  border-bottom: 1px solid var(--neutral-gray-100);
  transition: background-color 0.2s ease;
}

.mobile-menu a:hover {
  background-color: var(--neutral-gray-50);
  color: var(--primary-blue);
}

/* ========================================
   HERO SECTION
======================================== */
.Hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
  gap: 2rem;
  flex-wrap: wrap;
}

.hero {
  flex: 1;
  max-width: 500px;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--neutral-gray-900);
}

.hero p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--neutral-gray-700);
}

.pic1, .pic2 {
  max-width: 300px;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

/* ========================================
   ABOUT SECTION
======================================== */
.about {
  padding: 4rem 2rem;
  background: var(--neutral-gray-50);
}

.container, .Container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.box1 {
  flex: 1;
  max-width: 500px;
}

#intro, #intro1 {
  color: var(--primary-blue);
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.box2 {
  max-width: 400px;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

/* ========================================
   SERVICES SECTION
======================================== */
.Services {
  text-align: center;
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.path {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.p3 {
  font-size: 1.1rem;
  color: var(--neutral-gray-700);
}

#box3, #box4 {
  background: var(--neutral-white);
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  margin: 1rem;
  flex: 1;
  min-width: 300px;
}

/* ========================================
   TESTIMONIALS SECTION
======================================== */
.main-testimonials-section {
  padding: 4rem 2rem;
  background: var(--neutral-gray-50);
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: start;
}

.box1A-fixed {
  position: sticky;
  top: 100px;
}

#testimonials-heading {
  color: var(--primary-blue);
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.testimonials-slider-viewport {
  overflow: hidden;
  border-radius