# Phoebe Emefa Agbesi - Portfolio Website

![Portfolio Preview](public/images/phoebe-working.jpg)

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and professional experience as a Frontend Engineer.

## 🔗 Live Demo

[View Live Demo](https://phoebeagbesi.dev) *(Coming Soon)*

## ✨ Features

- **Modern Design**: Clean, professional UI with dark theme and emerald accents
- **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- **Interactive Elements**: Smooth animations and transitions for engaging user experience
- **Project Showcase**: Featured work section with project details and screenshots
- **Skills Display**: Comprehensive skills section highlighting technical expertise
- **Experience Timeline**: Professional experience with company details
- **Contact Form**: Easy-to-use contact form for potential clients or employers
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Ready**: Proper metadata and structured data for search engines
- **PWA Support**: Installable as a Progressive Web App

## 🛠️ Built With

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Reusable component library
- **[Lucide Icons](https://lucide.dev/)** - Beautiful, consistent icons
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[React Hook Form](https://react-hook-form.com/)** - Form validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Start the development server
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

\`\`\`
portfolio-website/
├── app/                  # Next.js app directory
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page component
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── ExperienceSection.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProjectsSection.tsx
│   └── SkillsSection.tsx
├── public/               # Static assets
│   ├── favicon_io/       # Favicon files
│   └── images/           # Image assets
├── styles/               # Additional styles
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
\`\`\`

## 🔧 Customization

### Personal Information

Edit the content in the component files to update with your own information:

- `components/HeroSection.tsx` - Update name, title, and introduction
- `components/AboutSection.tsx` - Modify about me content
- `components/SkillsSection.tsx` - Update your skills and technologies
- `components/ProjectsSection.tsx` - Add your own projects and details
- `components/ExperienceSection.tsx` - Update work experience
- `components/ContactSection.tsx` - Change contact information

### Styling

- `app/globals.css` - Modify global styles and custom CSS variables
- `tailwind.config.js` - Customize colors, fonts, and other Tailwind settings

### Images

Replace the images in the `public/images/` directory with your own:
- Profile/avatar image
- Project screenshots
- Any other visual assets

## 📱 PWA Configuration

The portfolio includes Progressive Web App (PWA) support. The configuration is in:

- `public/favicon_io/site.webmanifest` - PWA manifest file
- `app/layout.tsx` - PWA metadata and icons

## 📤 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js portfolio:

1. Push your code to a GitHub repository
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will detect Next.js and set up the build configuration automatically
4. Your site will be deployed to a `.vercel.app` domain

### Other Hosting Options

- **Netlify**: Similar to Vercel, with automatic deployments from Git
- **GitHub Pages**: Requires additional configuration for Next.js
- **AWS Amplify**: Good option for AWS users

## 🧪 Testing

Run the test suite with:

\`\`\`bash
npm run test
# or
yarn test
\`\`\`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from various portfolio websites and Dribbble shots
- [Shadcn UI](https://ui.shadcn.com/) for the component library
- [Lucide Icons](https://lucide.dev/) for the beautiful icons
- [Favicon.io](https://favicon.io/) for favicon generation

---

Made with ❤️ by Phoebe Emefa Agbesi
