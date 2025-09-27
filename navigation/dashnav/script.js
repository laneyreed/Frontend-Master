// Mobile Navigation Menu Functionality
class MobileNavigation {
    constructor() {
        this.mobileToggle = document.querySelector('.mobile-menu-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.overlay = document.querySelector('.mobile-menu-overlay');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        // Add event listeners
        this.mobileToggle.addEventListener('click', () => this.toggleMobileMenu());
        this.overlay.addEventListener('click', () => this.closeMobileMenu());
        
        // Add click handlers to nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
        
        // Close menu on window resize if screen becomes larger
        window.addEventListener('resize', () => this.handleResize());
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
    }
    
    toggleMobileMenu() {
        const isOpen = this.navMenu.classList.contains('active');
        
        if (isOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }
    
    openMobileMenu() {
        // Add active classes
        this.navMenu.classList.add('active');
        this.overlay.classList.add('active');
        this.mobileToggle.classList.add('active');
        
        // Update ARIA attributes
        this.mobileToggle.setAttribute('aria-expanded', 'true');
        
        // Change icon to X
        const icon = this.mobileToggle.querySelector('i');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Focus first menu item for accessibility
        const firstNavLink = this.navMenu.querySelector('.nav-link');
        if (firstNavLink) {
            firstNavLink.focus();
        }
    }
    
    closeMobileMenu() {
        // Remove active classes
        this.navMenu.classList.remove('active');
        this.overlay.classList.remove('active');
        this.mobileToggle.classList.remove('active');
        
        // Update ARIA attributes
        this.mobileToggle.setAttribute('aria-expanded', 'false');
        
        // Change icon back to hamburger
        const icon = this.mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Return focus to toggle button
        this.mobileToggle.focus();
    }
    
    handleNavClick(e) {
        const clickedLink = e.currentTarget;
        
        // Remove active class from all links
        this.navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to clicked link
        clickedLink.classList.add('active');
        
        // Close mobile menu if it's open
        if (this.navMenu.classList.contains('active')) {
            this.closeMobileMenu();
        }
        
        // Prevent default for demo purposes
        e.preventDefault();
        
        // You can add your navigation logic here
        console.log(`Navigating to: ${clickedLink.dataset.section}`);
    }
    
    handleResize() {
        // Close mobile menu if screen becomes larger than mobile breakpoint
        if (window.innerWidth > 768 && this.navMenu.classList.contains('active')) {
            this.closeMobileMenu();
        }
    }
    
    handleKeyDown(e) {
        // Close menu on Escape key
        if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
            this.closeMobileMenu();
        }
    }
}

// Initialize mobile navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MobileNavigation();
});

// Additional features for enhanced user experience
class NavigationEnhancer {
    constructor() {
        this.init();
    }
    
    init() {
        // Add smooth scrolling behavior
        this.addSmoothScrolling();
        
        // Add active section detection (if you have sections on the page)
        this.observeSections();
    }
    
    addSmoothScrolling() {
        // Add smooth scrolling if linking to sections
        document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    observeSections() {
        // Observer for highlighting active section (if you have sections)
        const sections = document.querySelectorAll('section[id]');
        
        if (sections.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const correspondingNavLink = document.querySelector(`.nav-link[data-section="${id}"]`);
                    
                    if (correspondingNavLink) {
                        // Remove active from all
                        document.querySelectorAll('.nav-link').forEach(link => {
                            link.classList.remove('active');
                        });
                        
                        // Add active to current
                        correspondingNavLink.classList.add('active');
                    }
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '-100px 0px -100px 0px'
        });
        
        sections.forEach(section => observer.observe(section));
    }
}

// Initialize navigation enhancer
document.addEventListener('DOMContentLoaded', () => {
    new NavigationEnhancer();
});
