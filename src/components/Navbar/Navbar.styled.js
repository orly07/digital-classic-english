import styled, { keyframes } from "styled-components";
import { color, shadow, typography, breakpoint } from "../../styles/theme";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ $isScrolled, $isMobileMenuOpen }) =>
    $isScrolled || $isMobileMenuOpen
      ? "rgba(255, 255, 255, 0.95)"
      : color.transparent};
  backdrop-filter: ${({ $isScrolled, $isMobileMenuOpen }) =>
    $isScrolled || $isMobileMenuOpen ? "blur(10px)" : "none"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: ${({ $isScrolled }) => ($isScrolled ? shadow.sm : "none")};
  z-index: 1000;
  transition: all 0.3s ease;

  .logo {
    font-weight: ${typography.fontWeight.bold};
    font-size: ${typography.fontSize.xl};
    color: ${({ $isScrolled }) => ($isScrolled ? color.black : color.white)};
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    z-index: 1001;

    &:hover {
      color: ${color.primary};
    }

    ${breakpoint.mobile} {
      font-size: ${typography.fontSize.lg};
    }
  }

  ${breakpoint.mobile} {
    padding: 1rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  ${breakpoint.mobile} {
    display: none;
  }
`;

export const NavItem = styled.span`
  cursor: pointer;
  font-weight: ${typography.fontWeight.semibold};
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: ${({ $isScrolled }) => ($isScrolled ? color.gray[700] : color.white)};
  white-space: nowrap;

  &:hover {
    color: ${color.primary};
    background: rgba(0, 185, 107, 0.08);
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.6rem;
  color: ${({ $isScrolled }) => ($isScrolled ? color.gray[700] : color.white)};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    background: rgba(0, 185, 107, 0.1);
    color: ${color.primary};
  }

  ${breakpoint.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  z-index: 999;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease forwards;

  ${breakpoint.tablet} {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background: ${color.surface};
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  transition: transform 0.35s ease;
  display: flex;
  flex-direction: column;

  .mobile-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid ${color.gray[200]};

    .logo {
      font-size: ${typography.fontSize.lg};
      font-weight: ${typography.fontWeight.semibold};
      color: ${color.black};
      margin: 0;
      padding-top: 10px;
    }

    svg {
      color: ${color.black};
    }
  }

  .mobile-menu-footer {
    padding: 1.5rem;
    border-top: 1px solid ${color.gray[200]};
    margin-top: auto;

    p {
      color: ${color.gray[500]};
      font-size: ${typography.fontSize.sm};
      text-align: center;
      margin: 0;
    }
  }

  @media (max-width: 480px) {
    width: 280px;
  }
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  gap: 0.5rem;
  flex: 1;
`;

export const MobileNavItem = styled.span`
  display: block;
  padding: 1rem 1.5rem;
  font-weight: ${typography.fontWeight.semibold};
  color: ${color.gray[700]};
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: ${typography.fontSize.lg};

  &:hover {
    background: rgba(0, 185, 107, 0.1);
    color: ${color.primary};
    transform: translateX(8px);
  }

  &:active {
    background: rgba(0, 185, 107, 0.2);
  }
`;
