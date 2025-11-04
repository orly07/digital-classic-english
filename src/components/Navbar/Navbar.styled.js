import styled from "styled-components";
import { color } from "../../styles/theme"

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${props => 
    props.$isScrolled || props.$isMobileMenuOpen 
      ? 'rgba(255, 255, 255, 0.95)' 
      : 'transparent'};
  backdrop-filter: ${props => 
    props.$isScrolled || props.$isMobileMenuOpen 
      ? 'blur(10px)' 
      : 'none'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: ${props => 
    props.$isScrolled && !props.$isMobileMenuOpen 
      ? '0 2px 20px rgba(0, 0, 0, 0.1)' 
      : 'none'};
  z-index: 1000;
  transition: all 0.3s ease;

  .logo {
    font-weight: 800;
    font-size: 1.4rem;
    color: ${props => props.$isScrolled ? '#1a202c' : 'white'};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    z-index: 1001;

    &:hover {
      color: #00b96b;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.span`
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: ${props => props.$isScrolled ? '#4a5568' : 'white'};
  white-space: nowrap;

  &:hover {
    color: #00b96b;
    background: rgba(0, 185, 107, 0.1);
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.$isScrolled ? '#4a5568' : 'white'};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    background: rgba(0, 185, 107, 0.1);
    color: #00b96b;
  }

  @media (max-width: 768px) {
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
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 999;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transform: translateX(${props => props.$isOpen ? '0' : '100%'});
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  .mobile-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #e2e8f0;

    .logo {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0;
      color: #${color.black};
      padding-top: 10px;
    }

    svg {
      color: ${color.black};
    }
  }

  .mobile-menu-footer {
    padding: 1.5rem;
    border-top: 1px solid #e2e8f0;
    margin-top: auto;

    p {
      color: #718096;
      font-size: 0.9rem;
      text-align: center;
      margin: 0;
    }
  }

  @media (min-width: 769px) {
    display: none;
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
  font-weight: 600;
  color: #4a5568;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1.1rem;


  &:hover {
    background: rgba(0, 185, 107, 0.1);
    color: #00b96b;
    transform: translateX(8px);
  }

  &:active {
    background: rgba(0, 185, 107, 0.2);
  }
`;