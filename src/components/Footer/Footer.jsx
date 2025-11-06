import { memo } from "react";
import { FooterContainer, SocialIcon } from "./Footer.styled";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaFacebook />,
    url: "https://facebook.com",
    label: "Visit our Facebook page",
  },
  {
    icon: <FaInstagram />,
    url: "https://instagram.com",
    label: "Visit our Instagram profile",
  },
];

const Footer = memo(() => (
  <FooterContainer>
    <p>
      © {new Date().getFullYear()} Digital Storytelling | All Rights Reserved
    </p>

    <div className="socials">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          <SocialIcon>{item.icon}</SocialIcon>
        </a>
      ))}
    </div>
  </FooterContainer>
));

Footer.displayName = "Footer";
export default Footer;
