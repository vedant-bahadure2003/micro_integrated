# Micro Integrated Semiconductor Systems Pvt Ltd

A modern web application built with React and Vite, showcasing Semiconductor-based automation and verification systems.

## 🚀 Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000/portal`

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── App.jsx              # Main app component with routing
├── main.jsx             # Application entry point
├── index.css            # Global styles and Tailwind imports
├── components/          # Reusable components
│   ├── layout/         # Layout components (Navbar, Footer)
│   ├── home/           # Home page sections
│   ├── about/          # About page components
│   └── contact/        # Contact page components
├── pages/              # Route pages
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
└── constants/          # Constants and configuration

public/
└── homepage/           # Static assets (images, icons)
```

## 🔧 Configuration

- **Base Path**: `/portal` (configured in `vite.config.js` and router)
- **Path Aliases**: `@/` points to `src/` directory
- **Fonts**: Google Fonts (Inter, Orbitron) loaded via CDN

## 🎨 Features

- Responsive design with mobile-first approach
- Smooth animations and transitions
- Modern glassmorphism effects
- Custom scrollbar styling
- SEO-friendly meta tags
- Accessible navigation

## 🔄 Migration from Next.js

This project was migrated from Next.js to Vite + React. Key changes:

1. **Routing**: Next.js App Router → React Router v6
2. **Images**: `next/image` → standard `<img>` tags
3. **Links**: `next/link` → `react-router-dom` Link
4. **Fonts**: Next.js font optimization → Google Fonts CDN
5. **Build Tool**: Next.js → Vite
6. **Base Path**: Configured in Vite config and router basename

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The application is configured with a base path `/portal`. Make sure your hosting environment serves the app from this path or update the `base` in `vite.config.js` and `basename` in `src/main.jsx`.

## 📄 License

Private - All rights reserved
