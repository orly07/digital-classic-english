import { memo, useState, useCallback, useEffect, useMemo } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { FaBook, FaTimes, FaBars } from "react-icons/fa";
import * as S from "./Navbar.styled";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = location.pathname === "/";

  // Handle scroll
  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (!heroSection) return;
      const heroHeight = heroSection.offsetHeight;
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > heroHeight - 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location, closeMobileMenu]);

  const navItems = useMemo(
    () =>
      isHome
        ? [
            { to: "hero-section", label: "Home", type: "scroll" },
            { to: "stories", label: "Stories", type: "scroll" },
            { to: "sonnets", label: "Sonnets", type: "scroll" },
            { to: "about", label: "About", type: "scroll" },
            {to: "authors", label: "Authors", type: "link"}
          ]
        : [
            { to: "/", label: "Home", type: "link" },
            { to: "/#about", label: "About", type: "link" },
          ],
    [isHome]
  );

  return (
    <>
      <S.NavbarContainer
        $isScrolled={isScrolled}
        $isMobileMenuOpen={isMobileMenuOpen}
      >
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <FaBook /> CLASSIC ENGLISH
        </Link>

        {/* Desktop Navigation */}
        <S.NavLinks>
          {navItems.map((item) =>
            item.type === "scroll" ? (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth
                duration={800}
                offset={-80}
              >
                <S.NavItem $isScrolled={isScrolled}>{item.label}</S.NavItem>
              </ScrollLink>
            ) : (
              <Link key={item.to} to={item.to}>
                <S.NavItem $isScrolled={isScrolled}>{item.label}</S.NavItem>
              </Link>
            )
          )}
        </S.NavLinks>

        {/* Mobile Menu Button */}
        <S.MobileMenuButton
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          $isScrolled={isScrolled}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </S.MobileMenuButton>
      </S.NavbarContainer>

      {/* Overlay */}
      {isMobileMenuOpen && <S.MobileMenuOverlay onClick={closeMobileMenu} />}

      {/* Mobile Sidebar */}
      <S.MobileMenu $isOpen={isMobileMenuOpen} aria-hidden={!isMobileMenuOpen}>
        <div className="mobile-menu-header">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            CLASSIC ENGLISH
          </Link>
          <S.MobileMenuButton onClick={toggleMobileMenu} aria-label="Close menu">
            <FaTimes />
          </S.MobileMenuButton>
        </div>

        <S.MobileNavLinks>
          {navItems.map((item) =>
            item.type === "scroll" ? (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth
                duration={800}
                offset={-80}
                onClick={closeMobileMenu}
              >
                <S.MobileNavItem>{item.label}</S.MobileNavItem>
              </ScrollLink>
            ) : (
              <Link key={item.to} to={item.to} onClick={closeMobileMenu}>
                <S.MobileNavItem>{item.label}</S.MobileNavItem>
              </Link>
            )
          )}
        </S.MobileNavLinks>

        <div className="mobile-menu-footer">
          <p>Bringing Literature to Life</p>
        </div>
      </S.MobileMenu>
    </>
  );
};

export default memo(Navbar);
