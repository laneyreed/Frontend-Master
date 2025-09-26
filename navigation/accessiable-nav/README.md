# Accessible Nav Bar
**Demonstrates a comprehensive accessible and responsive navigation bar, implemented using HTML, CSS, and JavaScript.**

📋 Project Overview

**The navigation bar is designed to be fully accessible for users with disabilities, responsive across different screen sizes, and includes modern web development best practices.**

### 🏗️ HTML Features
- **Skip to Content Link**
    - Allows keyboard users to bypass navigation and jump directly to main content
    - Visually hidden but becomes visible when focused (via Tab key)

- **ARIA Attributes**
    - `aria-label="Open Menu"`: Describes button function for screen readers
    - `aria-expanded="false/true"`: Indicates menu open/closed state
    - `aria-controls="nav-menu"`: Associates button with the menu it controls
    - `aria-current="page"`: Indicates the current active page
    - `aria-hidden="true"`: Hides overlay from screen readers

- **Semantic HTML**
    - Proper use of `<nav>`, `<main>`, `<header>` elements  
    - Structured navigation with `<ul>` and `<li>` elements

### 🎨 CSS Features
- **Responsive Design**
    - Uses` @media screen and (max-width: 600px)` for mobile breakpoint
    - Navigation transforms from horizontal to slide-in mobile menu
- **Desktop Navigation**
    - Horizontal flexbox layout
    - Sticky header (`position: sticky`)
    - Hover effects with smooth transitions
    - Active link styling with bottom border
- **Mobile Navigation**
    - Fixed positioned slide-in menu from the right
    - Full-height overlay with semi-transparent background
    - Smooth slide animation (`transition: right 300ms ease`)
    - Hamburger menu button appears on mobile
- **Skip-to-Content Styling**
    - Hidden by default (positioned off-screen)
    - Becomes visible when focused for keyboard navigation

### ⚡ JavaScript Functionality
- Media Query Management
    - Monitors viewport width changes
    - Manages `inert` attribute for mobile vs desktop
- Inert Attribute Implementation
    - Makes navigation non-interactive when closed on mobile
    - Prevents keyboard/screen reader access to hidden menu
    - Browser support: Chrome, Edge, Firefox (not Safari yet)
- Menu Control Functions
    - `openMenu()`: Opens mobile menu, sets focus to first link
    - `closeMenu()`: Closes menu, returns focus to menu button
    - Updates `aria-expanded` attributes appropriately
    - Implements proper focus trapping
    - Ensures keyboard accessibility
- Auto-Close Feature
    - Automatically closes mobile menu when a link is clicked


#### 🔧 Accessibility Best Practices Implemented:
- **Keyboard Navigation**: Full tab-key support with proper focus management
- **Screen Reader Support**: Comprehensive ARIA labels and semantic HTML
- **Focus Trapping**: Keeps keyboard focus within open menu
- **Visual Indicators**: Clear active states and focus indicators
- **Responsive Design**: Works across all device sizes
- **Color Contrast**: Uses high-contrast color scheme
- **Skip Links**: Allows bypassing repetitive navigation

#### 📱 Responsive Behavior:
- ***Desktop (>600px)**: Horizontal navigation bar with hover effects
- ***Mobile (≤600px)**: Hamburger menu with slide-in navigation panel
- ***Overlay**: Semi-transparent background when mobile menu is open
- ***Touch-Friendly**: Larger tap targets on mobile devices


**Feel free to explore the code to use and customize it for your own projects!**