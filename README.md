# Layer V Landing Page Wireframe

A standalone black & white wireframe landing page for Layer V, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Wireframe Design**: Strict black/white/gray color scheme with clear boxes and borders
- **All Required Sections**: Header, Hero, Metrics, Product Overview, Details, Why Layer V, How it Works, Builders, Security, FAQ, CTA, Footer
- **Smooth Scroll Navigation**: Anchor links with smooth scrolling behavior
- **Minimal Animations**: Fade-in on scroll for sections, hover effects on buttons and cards
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Vercel Ready**: Configured for easy deployment on Vercel

## Tech Stack

- **Next.js 16.1.6** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **React 19** - UI library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

Start the production server (after building):

```bash
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally (if not already installed):

```bash
npm i -g vercel
```

2. Login to Vercel:

```bash
vercel login
```

3. Deploy from the project directory:

```bash
vercel
```

Follow the prompts to complete deployment.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your Git repository

5. Vercel will automatically detect Next.js and configure the build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

6. Click "Deploy"

7. Your site will be live at a URL like: `https://your-project-name.vercel.app`

### Environment Variables

No environment variables are required for this project.

### Custom Domain (Optional)

After deployment, you can add a custom domain in the Vercel project settings:
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Project Structure

```
landing-page-layer-v/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main landing page component
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── next.config.ts      # Next.js configuration
└── README.md          # This file
```

## Sections

The landing page includes the following sections in order:

1. **Sticky Header** - Logo, navigation, and primary CTA
2. **Hero** - Headline, subheadline, CTAs, and trust line
3. **Metrics Strip** - TVL, Volume, Premium, Markets (placeholder values)
4. **What is Layer V** - Introduction to the platform
5. **Product Overview** - Three product cards (Premium Markets, Protected Leverage, Trading Terminal)
6. **Premium Markets Detail** - How it works with steps and bullets
7. **Protected Leverage Detail** - Inputs and benefits
8. **Why Layer V** - Four pillars
9. **How it Works** - Five-step process
10. **Builders** - Documentation and team contact CTAs
11. **Security & Risk** - Key security features
12. **FAQ** - Frequently asked questions
13. **Final CTA** - Call to action
14. **Footer** - Logo and navigation links

## Styling

The design follows a strict wireframe aesthetic:
- **Colors**: Black (#000000), White (#FFFFFF), Gray shades only
- **Borders**: 2px black borders on major sections and components
- **Typography**: Clear hierarchy with bold headings
- **Spacing**: Generous padding and margins for readability
- **Layout**: Box-based structure with clear visual separation

## Animations

Minimal animations included:
- **Fade-in on scroll**: Sections fade in as they enter the viewport
- **Hover effects**: Buttons and cards have subtle hover state changes
- **Smooth scroll**: Navigation anchor links scroll smoothly to sections

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is a wireframe for Layer V.
