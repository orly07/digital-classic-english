import React, { memo } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import * as S from "./About.styled";
import MissionVisionCard from "../../components/Cards/MissionVisionCard";
import TeamCard from "../../components/Cards/TeamCard";
import Button from "../../components/Buttons/Button";
import { missionVisionData, teamData, contactData } from "../../data";
import { fadeInUp, fadeIn, slideUp } from "../../utils/motionVariants";


const AboutIntro = () => (
  <S.AboutSection id="about">
    <motion.h1
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      About Us
    </motion.h1>

    <motion.p
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Making literature more engaging through Classic English digital storytelling.
    </motion.p>

    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Who We Are
    </motion.h2>

    <motion.p
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Classic English is a platform dedicated to reimagining the way students and educators
      experience literature. By blending traditional storytelling with digital tools, we make
      stories more interactive, relatable, and impactful for today's generation.
    </motion.p>
  </S.AboutSection>
);

const MissionVisionSection = () => (
  <motion.section
    variants={slideUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <S.MissionVisionValues>
      {missionVisionData.map((item) => (
        <MissionVisionCard
          key={item.title}
          title={item.title}
          content={item.content}
          values={item.values}
        />
      ))}
    </S.MissionVisionValues>
  </motion.section>
);

const TeamSection = () => (
  <S.TeamSection>
    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Meet the Team
    </motion.h2>

    <motion.div
      className="team-container"
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {teamData.map((member) => (
        <TeamCard key={member.name} member={member} />
      ))}
    </motion.div>
  </S.TeamSection>
);

const ContactSection = () => (
  <S.ContactSection>
    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Contact Us
    </motion.h2>

    <motion.p
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      We'd love to hear from you! Reach out with questions or ideas.
    </motion.p>

    <motion.div
      className="contact-info"
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <p>
        <strong>Email:</strong> {contactData.email}
      </p>
      <p>
        <strong>Phone:</strong> {contactData.phone}
      </p>
      <p>
        <strong>Address:</strong> {contactData.address}
      </p>
    </motion.div>

    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Button
        as="a"
        href={`mailto:${contactData.email}`}
        variant="primary"
        size="large"
        aria-label="Send us an email"
      >
        Send us an Email
      </Button>
    </motion.div>
  </S.ContactSection>
);

const About = memo(() => (
  <>
    <AboutIntro />
    <MissionVisionSection />
    <TeamSection />
    <ContactSection />
  </>
));

About.displayName = "About";
export default About;
