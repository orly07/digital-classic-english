import React, { memo } from "react";
import { HeroSection, HeroContent } from "./Hero.styled";
import  Button  from "../../components/Buttons/Button";
import { Link } from "react-scroll";

const Hero = memo(() => {
  return (
    <HeroSection id="hero-section">
      <HeroContent>
        <h1>Bringing Literature to Life through Digital Storytelling</h1>
        <h2>
          Explore stories with narration, visuals, and interactive content
          that make learning more engaging.
        </h2>

        <div>
          <Button
            as={Link}
            to="stories"
            smooth
            duration={1000}
            variant="primary"
            size="large"
          >
            Explore Stories
          </Button>
          <Button
            as={Link}
            to="sonnets"
            smooth
            duration={1000}
            variant="secondary"
            size="large"
          >
            Explore Sonnets
          </Button>
        </div>
      </HeroContent>
    </HeroSection>
  );
});

Hero.displayName = 'Hero';
export default Hero;