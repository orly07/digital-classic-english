import React, { memo } from "react";
import { motion } from "framer-motion";
import * as S from "./About.styled";
import MissionVisionCard from "../../components/Cards/MissionVisionCard";
import TeamCard from "../../components/Cards/TeamCard";
import Button from "../../components/Buttons/Button";
import { fadeInUp, fadeIn, slideUp } from "../../utils/helpers/motionVariants";
import * as FaIcons from "react-icons/fa";

import { useContact } from "../../utils/hooks/useContact";
import { useAbout } from "../../utils/hooks/useAbout";

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
      Making literature more engaging through Classic English digital
      storytelling.
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
      Classic English is a platform dedicated to reimagining the way students
      and educators experience literature. By blending traditional storytelling
      with digital tools, we make stories more interactive, relatable, and
      impactful for today's generation.
    </motion.p>
  </S.AboutSection>
);

const MissionVisionSection = () => {
  const { mission, vision, coreValues, loading, error } = useAbout();

  if (loading) return <p>Loading About info...</p>;
  if (error) return <p>Error loading About info.</p>;

  // Transform coreValues into {icon, text} array for each value
  const formattedCoreValues = coreValues.map((item) => ({
    title: item.title,
    values: item.icon.map((iconName, index) => ({
      icon: FaIcons[iconName] || FaIcons.FaBook, // fallback icon
      text: item.text[index] || "",
    })),
  }));

  // Combine mission, vision, and coreValues for rendering
  const missionVisionData = [
    ...mission.map((item) => ({ title: item.title, content: item.content })),
    ...vision.map((item) => ({ title: item.title, content: item.content })),
    ...formattedCoreValues.map((item) => ({
      title: item.title,
      values: item.values,
    })),
  ];

  return (
    <motion.section
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <S.MissionVisionValues>
        {missionVisionData.map((item, index) => (
          <MissionVisionCard
            key={index}
            title={item.title}
            content={item.content}
            values={item.values} // only coreValues will have values array
          />
        ))}
      </S.MissionVisionValues>
    </motion.section>
  );
};

const TeamSection = () => {
  const { team, loading, error } = useAbout();

  if (loading) return <p>Loading Team info...</p>;
  if (error) return <p>Error loading Team info.</p>;

  return (
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
        {team.map((member) => (
          <TeamCard
            key={member.name}
            member={{
              ...member,
              image: member.image?.url || "", // ensure image url is passed
            }}
          />
        ))}
      </motion.div>
    </S.TeamSection>
  );
};

const ContactSection = () => {
  const { contacts = [], loading, error } = useContact();
  const contact = contacts[0] ?? {};

  if (loading) return <p>Loading contact info...</p>;
  if (error) return <p>Error loading contact info.</p>;

  return (
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
          <strong>Email:</strong> {contact.email || "N/A"}
        </p>
        <p>
          <strong>Phone:</strong> {contact.number || "N/A"}
        </p>
        <p>
          <strong>Address:</strong> {contact.address || "N/A"}
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
          href={`mailto:${contact.email}`}
          variant="primary"
          size="large"
          aria-label="Send us an email"
        >
          Send us an Email
        </Button>
      </motion.div>
    </S.ContactSection>
  );
};

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
