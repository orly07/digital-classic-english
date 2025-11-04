import { memo, useState, useCallback, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { FaBook, FaTimes, FaBars } from "react-icons/fa";
import { 
  NavbarContainer, 
  NavLinks, 
  NavItem, 
  MobileMenuButton,
  MobileMenu,
  MobileMenuOverlay,
  MobileNavLinks,
  MobileNavItem
} from "./Navbar.styled";

const Navbar = memo(() => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > heroHeight - 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleNavClick = useCallback(() => {
    closeMobileMenu();
  }, [closeMobileMenu]);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [location, closeMobileMenu]);

  // Navigation items configuration
  const navItems = isHome 
    ? [
        { to: "stories", label: "Stories", type: "scroll" },
        { to: "sonnets", label: "Sonnets", type: "scroll" },
        { to: "about", label: "About", type: "scroll" }
      ]
    : [
        { to: "/", label: "Home", type: "link" },
        { to: "/#about", label: "About", type: "link" }
      ];

  return (
    <>
      <NavbarContainer $isScrolled={isScrolled} $isMobileMenuOpen={isMobileMenuOpen}>
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <FaBook /> CLASSIC ENGLISH
        </Link>
        
        {/* Desktop Navigation */}
        <NavLinks>
          {navItems.map((item) => 
            item.type === "scroll" ? (
              <ScrollLink 
                key={item.to}
                to={item.to} 
                smooth 
                duration={1000} 
                offset={-80}
              >
                <NavItem $isScrolled={isScrolled}>{item.label}</NavItem>
              </ScrollLink>
            ) : (
              <Link key={item.to} to={item.to}>
                <NavItem $isScrolled={isScrolled}>{item.label}</NavItem>
              </Link>
            )
          )}
        </NavLinks>

        {/* Mobile Menu Button */}
        <MobileMenuButton 
          onClick={toggleMobileMenu} 
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          $isScrolled={isScrolled}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavbarContainer>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <MobileMenuOverlay onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu Sidebar */}
      <MobileMenu $isOpen={isMobileMenuOpen} aria-hidden={!isMobileMenuOpen}>
        <div className="mobile-menu-header">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            CLASSIC ENGLISH
          </Link>
          <MobileMenuButton 
            onClick={toggleMobileMenu} 
            aria-label="Close menu"
          >
            <FaTimes />
          </MobileMenuButton>
        </div>

        <MobileNavLinks>
          {navItems.map((item) => 
            item.type === "scroll" ? (
              <ScrollLink 
                key={item.to}
                to={item.to} 
                smooth 
                duration={1000} 
                offset={-80}
                onClick={handleNavClick}
              >
                <MobileNavItem>{item.label}</MobileNavItem>
              </ScrollLink>
            ) : (
              <Link 
                key={item.to} 
                to={item.to}
                onClick={handleNavClick}
              >
                <MobileNavItem>{item.label}</MobileNavItem>
              </Link>
            )
          )}
        </MobileNavLinks>

        <div className="mobile-menu-footer">
          <p>Bringing Literature to Life</p>
        </div>
      </MobileMenu>
    </>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;