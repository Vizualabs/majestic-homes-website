# 🏛️ Majestic Homes - Architecture & Design Studio

Crafted with Precision. Defined by Vision.

Majestic Homes is a premium, minimalist frontend web application designed for a luxury architecture, engineering, and construction firm. True to the brand's philosophy, this platform showcases a sophisticated, high-contrast dark user interface optimized for displaying high-end architectural portfolios, dynamic project breakdowns, and professional structural services.

Built entirely using **Next.js (App Router)** and **Tailwind CSS**, this is a completely serverless, pure frontend application featuring exceptional performance, smooth layouts, and modern web aesthetics.

---

## ✨ Features

- **Premium Dark UI:** A sleek, minimal layout tailored for high-end real estate, builders, and architectural studios.
- **Next.js App Router Navigation:** Fast, client-side routing across single-page sections and dedicated sub-pages.
- **Dynamic Portfolio Showcase:** Modern layouts for displaying construction stages, 3D renderings, and project imagery.
- **Structural Service Grids:** Dedicated presentations for House Planning, Construction, BOQ, and 3D Visualization.
- **Fully Responsive Design:** Beautifully optimized and fluid across Desktop, Tablet, and Mobile devices.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React / React Icons
- **Image Optimization:** Built-in Next.js `next/image` component for fast-loading architectural photos.

---

## 📂 Project Structure

This project follows a clean, atomic directory structure separating global pages, reusable components, and homepage sections:

```text
majestic-homes/
├── public/
│   └── assets/                # Architectural images, icons, and branding logos
├── src/
│   ├── components/            # Reusable UI components (Shared globally)
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   └── ProjectCard.jsx
│   ├── sections/              # Page sections used exclusively on the Home Landing Page
│   │   ├── Hero.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── ContactSection.jsx
│   └── app/                   # Next.js App Router (Routing and Pages)
│       ├── layout.js          # Main layout wrapping the app (Navbar & Footer)
│       ├── page.js            # Home Page (Combines all elements from sections/)
│       ├── globals.css        # Tailwind directives and global styles
│       ├── services/
│       │   └── page.js        # Services Sub-page (/services)
│       └── projects/
│           └── [id]/
│               └── page.js    # Dynamic Project Detail Sub-page (/projects/project-id)

## 🚀 Getting Started

Follow these steps to setup and run the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.x or higher recommended) installed.

### Installation & Local Setup

1. **Clone the repository:**
```bash
git clone [https://github.com/YOUR_USERNAME/majestic-homes-website.git](https://github.com/YOUR_USERNAME/majestic-homes-website.git)

```


2. **Navigate into the project directory:**
```bash
cd majestic-homes-website/majestic-homes

```


*(Note: If your repository is linked directly to the inner folder, simply run `cd majestic-homes`)*
3. **Install project dependencies:**
```bash
npm install

```


4. **Start the development server:**
```bash
npm run dev

```


5. Open your browser and navigate to **[http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)** to view the application live.

---

## 🏗️ Production Deployment

To build and compile the application for a highly optimized static or production environment:

```bash
npm run build
npm run start

```

### One-Click Deployment

This pure frontend Next.js application is fully structured and ready for a seamless production deployment onto cloud platforms like **Vercel**, **Netlify**, **Hostinger** or **GitHub Pages**.

---

Developed with 🖤 for luxury web experiences.
