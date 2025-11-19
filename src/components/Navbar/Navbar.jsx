import { memo, useState, useCallback, useEffect, useMemo } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBook, FaTimes, FaBars } from "react-icons/fa";
import Button from "../Buttons/Button";
import * as S from "./Navbar.styled";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = location.pathname === "/";
  const isStoryPage = location.pathname.startsWith("/story/");
  const isSonnetPage = location.pathname.startsWith("/sonnet/");

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

  const navItems = useMemo(() => {
    if (isHome) {
      return [
        { to: "hero-section", label: "Home", type: "scroll" },
        { to: "stories", label: "Stories", type: "scroll" },
        { to: "sonnets", label: "Sonnets", type: "scroll" },
        { to: "about", label: "About", type: "scroll" },
        { to: "authors", label: "Authors", type: "link" },
      ];
    }

    if (isStoryPage) {
      return [
        {
          label: "← Go Back to Stories",
          action: () => navigate("/#stories"),
          button: true,
        },
        { to: "/", label: "Home", type: "link" },
        { to: "/#about", label: "About", type: "link" },
      ];
    }

    if (isSonnetPage) {
      return [
        {
          label: "← Go Back to Sonnets",
          action: () => navigate("/#sonnets"),
          button: true,
        },
        { to: "/", label: "Home", type: "link" },
        { to: "/#about", label: "About", type: "link" },
      ];
    }

    return [
      { to: "/", label: "Home", type: "link" },
      { to: "/#about", label: "About", type: "link" },
    ];
  }, [isHome, isStoryPage, isSonnetPage, navigate]);

  return (
    <>
      <S.NavbarContainer
        $isScrolled={isScrolled}
        $isMobileMenuOpen={isMobileMenuOpen}
      >
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <FaBook /> CLASSIC TALES HUB
        </Link>

        {/* Desktop Navigation */}
        <S.NavLinks>
          {navItems.map((item, i) => {
            if (item.button) {
              return (
                <Button
                  key={i}
                  variant="outline"
                  size="small"
                  onClick={item.action}
                  style={{ marginRight: "8px" }}
                >
                  {item.label}
                </Button>
              );
            }

            if (item.type === "scroll") {
              return (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={800}
                  offset={-64}
                >
                  <S.NavItem $isScrolled={isScrolled}>{item.label}</S.NavItem>
                </ScrollLink>
              );
            }

            return (
              <Link key={item.to} to={item.to}>
                <S.NavItem $isScrolled={isScrolled}>{item.label}</S.NavItem>
              </Link>
            );
          })}
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
            CLASSIC TALES HUB
          </Link>
          <S.MobileMenuButton
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </S.MobileMenuButton>
        </div>

        <S.MobileNavLinks>
          {navItems.map((item, i) => {
            if (item.button) {
              return (
                <Button
                  key={i}
                  variant="outline"
                  size="medium"
                  onClick={() => {
                    item.action();
                    closeMobileMenu();
                  }}
                  style={{ marginBottom: "12px", width: "100%" }}
                >
                  {item.label}
                </Button>
              );
            }

            if (item.type === "scroll") {
              return (
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
              );
            }

            return (
              <Link key={item.to} to={item.to} onClick={closeMobileMenu}>
                <S.MobileNavItem>{item.label}</S.MobileNavItem>
              </Link>
            );
          })}
        </S.MobileNavLinks>

        <div className="mobile-menu-footer">
          <p>Bringing Literature to Life</p>
        </div>
      </S.MobileMenu>
    </>
  );
};

export default memo(Navbar);
