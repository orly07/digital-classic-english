import { memo } from "react";
import { Link } from "react-scroll";
import * as S from "./Hero.styled";
import Button from "../../components/Buttons/Button";
import { motion } from "framer-motion";

const Hero = memo(() => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.4, duration: 1 } },
  };

  return (
    <S.HeroSection id="hero-section">
      <S.HeroContent
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h1 variants={fadeInUp}>
          Bringing Literature to Life through Digital Storytelling
        </motion.h1>

        <motion.h2 variants={fadeIn}>
          Explore stories with narration, visuals, and interactive content
          that make learning more engaging.
        </motion.h2>

        <motion.div variants={fadeIn} className="hero-buttons">
          <Button
            as={Link}
            to="stories"
            smooth
            duration={1000}
            offset={-80}
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
            offset={-80}
            variant="secondary"
            size="large"
          >
            Explore Sonnets
          </Button>
        </motion.div>
      </S.HeroContent>
    </S.HeroSection>
  );
});

Hero.displayName = "Hero";
export default Hero;
