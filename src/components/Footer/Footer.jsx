import { memo } from "react";
import { FooterContainer } from "./Footer.styled";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = memo(() => (
  <FooterContainer>
    <p>© 2025 Digital Storytelling | All Rights Reserved</p>
    <div className="socials">
      <FaFacebook /> <FaInstagram />
    </div>
  </FooterContainer>
));

Footer.displayName = 'Footer';
export default Footer;