# 🚀 Yesid Fernando Cepeda B. - Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.7-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.12.16-ff69b4?style=for-the-badge&logo=framer)

**A modern, responsive, and interactive portfolio website showcasing full-stack development expertise**

[🌐 Live Page](https://devpositive.tech/) • [📧 Contact](mailto:fernando.inversionmf@gmail.com) • [🔗 LinkedIn](https://www.linkedin.com/in/y-fernando-cepeda-b-/)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎨 Components](#-components)
- [📱 Pages](#-pages)
- [⚡ Performance](#-performance)
- [🔧 Configuration](#-configuration)
- [📦 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

### 🎯 Core Features
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Engaging user interactions and micro-animations
- **SEO Optimized** - Meta tags, structured data, and performance optimization
- **Accessibility** - WCAG compliant with keyboard navigation support
- **Fast Loading** - Optimized images, lazy loading, and code splitting

### 🎨 Visual Features
- **Particle System** - Dynamic particle background animations
- **Smooth Transitions** - Page transitions and component animations
- **Glass Morphism** - Modern glass-effect UI components
- **Gradient Backgrounds** - Beautiful gradient overlays and effects
- **Interactive Sliders** - Swiper-based project and service showcases
- **Animated Text** - Typewriter effects and text animations

### 📱 Functionality
- **Project Portfolio** - Interactive project showcase with live demos
- **Service Offerings** - Detailed service descriptions and capabilities
- **Contact Form** - Functional contact form with validation
- **Social Integration** - Links to social media and professional profiles
- **Blog/Testimonials** - Client testimonials and project case studies

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 14.2.7](https://nextjs.org/)** - React framework with SSR/SSG
- **[React 18.2.0](https://reactjs.org/)** - UI library for building components
- **[TailwindCSS 3.3.2](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 10.12.16](https://www.framer.com/motion/)** - Animation library

### UI & Animation
- **[React Icons 4.8.0](https://react-icons.github.io/react-icons/)** - Icon library
- **[Swiper 9.4.0](https://swiperjs.com/)** - Touch slider component
- **[React CountUp 6.4.2](https://github.com/glennreyes/react-countup)** - Animated counters
- **[TSParticles 2.9.3](https://particles.js.org/)** - Particle system

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fer8614/dev-positive.git
   cd dev-positive
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   ```

3. **Start development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production version |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

---

## 📁 Project Structure

```
dev-positive/
├── 📁 components/           # Reusable UI components
│   ├── AccessibilityFeatures.js
│   ├── AnimatedText.js
│   ├── Avatar.js
│   ├── ErrorBoundary.js
│   ├── Header.js
│   ├── Layout.js
│   ├── LoadingSpinner.js
│   ├── Nav.js
│   ├── ParticlesContainer.js
│   ├── ProjectsBtn.js
│   ├── SEOHead.js
│   ├── ServiceSlider.js
│   ├── Socials.js
│   ├── WorkSlider.js
│   └── ...
├── 📁 pages/               # Next.js pages
│   ├── 📁 about/          # About page
│   ├── 📁 api/            # API routes
│   ├── 📁 contact/        # Contact page
│   ├── 📁 services/       # Services page
│   ├── _app.js            # App wrapper
│   └── index.js           # Home page
├── 📁 public/             # Static assets
│   ├── avatar.png
│   ├── bg-explosion.png
│   └── ...
├── 📁 styles/             # Global styles
│   └── globals.css
├── 📁 .github/            # GitHub workflows
│   └── workflows/
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

---

## 🎨 Components

### Core Components

| Component | Purpose | Features |
|-----------|---------|----------|
| **Header** | Navigation bar | Responsive menu, smooth scrolling |
| **Layout** | Page wrapper | Consistent structure, transitions |
| **SEOHead** | Meta tags | Dynamic SEO optimization |
| **ParticlesContainer** | Background animation | Interactive particle system |
| **WorkSlider** | Project showcase | Swiper integration, project cards |
| **ServiceSlider** | Services display | Animated service cards |
| **AnimatedText** | Text effects | Typewriter animations |
| **ErrorBoundary** | Error handling | Graceful error recovery |

### Utility Components

- **LoadingSpinner** - Loading states
- **ScrollProgress** - Page scroll indicator  
- **MicroInteractions** - Small UI animations
- **AccessibilityFeatures** - A11y enhancements
- **PageTransition** - Route change animations

---

## 📱 Pages

### 🏠 Home (`/`)
- Hero section with animated text
- Call-to-action buttons
- Particle background
- Professional introduction

### 👨‍💻 About (`/about`)
- Personal background
- Skills and expertise
- Professional experience
- Animated counters

### 💼 Work (`/work`)
- Project portfolio
- Interactive project slider
- Live demo links
- Technology stacks

### 🛠️ Services (`/services`)
- Service offerings
- Detailed descriptions
- Pricing information
- Contact integration

### 📞 Contact (`/contact`)
- Contact form
- Social media links
- Location information
- Professional email

---

## ⚡ Performance

### Optimization Features
- **Image Optimization** - Next.js Image component with lazy loading
- **Code Splitting** - Automatic route-based code splitting
- **Static Generation** - Pre-rendered pages for faster loading
- **CSS Optimization** - Purged unused CSS with Tailwind
- **Bundle Analysis** - Optimized JavaScript bundles

### Performance Metrics
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized LCP, FID, and CLS
- **Loading Speed**: < 3s initial load time
- **Bundle Size**: Optimized for minimal JavaScript payload

---

## 🔧 Configuration

### Tailwind Configuration
Custom design system with:
- **Color Palette** - Primary, secondary, and accent colors
- **Typography** - Custom font scales and weights
- **Spacing** - Consistent spacing system
- **Breakpoints** - Responsive design breakpoints

### Next.js Configuration
- **Image Domains** - Configured for external image sources
- **Build Optimization** - Webpack optimizations
- **Environment Variables** - Secure configuration management

### Animation Configuration
- **Framer Motion** - Custom animation variants
- **Particle System** - Configurable particle effects
- **Transition Timing** - Optimized animation performance

---

## 📦 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

### Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify
# Upload the 'out' folder to Netlify
```

### Custom Server
```bash
# Build the project
npm run build

# Start production server
npm start
```

### Environment Variables
Create a `.env.local` file for environment-specific configurations:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow ESLint configuration
- Write meaningful commit messages
- Test on multiple devices/browsers
- Maintain responsive design principles
- Document new components/features

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 About the Developer

**Yesid Fernando Cepeda B.**
- 🌍 **Location**: Keizer, Oregon
- 📧 **Email**: fernando.inversionmf@gmail.com
- 💼 **LinkedIn**: [Connect with me](https://www.linkedin.com/in/y-fernando-cepeda-b-/)
- 🐙 **GitHub**: [@fer8614](https://github.com/fer8614)

### Expertise
- **Frontend**: React, Next.js, TypeScript, TailwindCSS
- **Backend**: Node.js, Express, Python, Databases
- **Tools**: Git, Docker, AWS, Vercel, Figma
- **Specialties**: Full-stack development, UI/UX design, Performance optimization

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Vercel** - For seamless deployment platform
- **Open Source Community** - For the incredible tools and libraries

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Yesid Fernando Cepeda B.](https://github.com/fer8614)

</div>
