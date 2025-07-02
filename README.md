# Faatihat Mohammed - Portfolio

A modern, responsive portfolio website showcasing my work as a Creative Front-end Developer. Built with React and featuring smooth animations, clean design, and an intuitive user experience.

##  Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Modern UI/UX**: Clean, minimalist design with thoughtful typography and spacing
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Project Showcase**: Dynamic project gallery with hover effects and detailed descriptions
- **Skills & Tools Display**: Comprehensive overview of technical capabilities
- **Contact Integration**: Direct links to social profiles and email contact

##  Live Demo

Visit the live portfolio: [portfolio link](https://mohammed-faatihat-portfolio-25.vercel.app/)


### Core Technologies
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

### Key Dependencies
- **Framer Motion** - Production-ready motion library for React
- **React Router DOM** - Declarative routing for React applications
- **React Scroll** - Smooth scrolling navigation component
- **Lucide React** - Beautiful & consistent icon toolkit

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing
- **Geist Font** - Modern typography from Vercel

##  Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.jsx      # Navigation component with mobile menu
├── sections/           # Main page sections
│   ├── About.jsx       # Hero section and introduction
│   ├── Projects.jsx    # Portfolio showcase
│   ├── Services.jsx    # Skills and tools display
│   └── Contact.jsx     # Contact information and social links
├── ui/                 # UI building blocks
│   ├── Image.jsx       # Optimized image component
│   ├── MainProject.jsx # Featured project card
│   ├── MiniProject.jsx # Smaller project showcase
│   ├── SkillsnTools.jsx# Skills/tools grid component
│   ├── ButtonView.jsx  # Interactive view button
│   └── Line.jsx        # Decorative line separator
├── utils/
│   └── helper.js       # Data constants and configurations
├── assets/             # Images and icons
└── App.jsx            # Main application component
```

##  Design Features

### Color Palette
- **Primary**: White (#fff) - Main text and highlights
- **Muted**: Light Gray (#d2d2d2) - Secondary text
- **Secondary**: Medium Gray (#878787) - Accent elements
- **Background**: Dark (#040404) - Main background
- **Box Background**: Dark Gray (#1A1A1A) - Component backgrounds

### Typography
- **Font Family**: Geist - Modern, clean typeface
- **Responsive Sizing**: Fluid typography that scales across devices
- **Hierarchy**: Clear visual hierarchy with varied font weights and sizes

### Animations
- **Hover Effects**: Smooth scale and opacity transitions
- **Page Navigation**: Smooth scrolling between sections
- **Mobile Menu**: Slide-in animation with backdrop
- **Project Cards**: Interactive hover overlays with view buttons

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd faatihatportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
```

The optimized build will be generated in the `dist` folder.

##  Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

##  Key Sections

### About
- Professional introduction and personal branding
- Direct link to resume
- Hero image and compelling description

### Projects
- **Featured Projects**: Large showcase cards with detailed descriptions
- **Mini Projects**: Compact grid layout for additional work
- **Interactive Elements**: Hover effects and direct project links
- **Technology Stack**: Clear labeling of technologies used

### Services
- **Skills**: Core competencies and specializations
- **Tools**: Technical toolkit and frameworks
- **Visual Icons**: Branded icons for each skill/tool

### Contact
- **Social Links**: GitHub, LinkedIn, and email
- **Professional Messaging**: Clear call-to-action for collaboration
- **Accessibility**: Proper ARIA labels and semantic markup

##  Customization

### Adding New Projects
1. Add project images to `src/assets/`
2. Update the project data in `src/sections/Projects.jsx`
3. Use `MainProject` for featured work or `MiniProject` for smaller showcases

### Updating Skills/Tools
1. Add new icons to `src/assets/icons/`
2. Update the arrays in `src/utils/helper.js`
3. The UI will automatically reflect the changes

### Modifying Colors
Update the color palette in `tailwind.config.js` under the `colors` section.

##  License

This project is open source and available under the [MIT License](LICENSE).

##  Connect

- **Portfolio**:[portfolio link](https://mohammed-faatihat-portfolio-25.vercel.app/)
- **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/faatihat-mohammed/)
- **GitHub**: [GitHub Profile](https://github.com/001Pytom)
- **Email**: mohammedfaatihat@gmail.com

---

**Built with ❤️ by Faatihat Mohammed**