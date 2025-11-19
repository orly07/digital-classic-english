import React, { memo } from "react";
import { motion as MOTION } from "framer-motion";
import * as S from "./About.styled";
import MissionVisionCard from "../../components/Cards/MissionVisionCard";
import TeamCard from "../../components/Cards/TeamCard";
import Button from "../../components/Buttons/Button";
import { fadeInUp, fadeIn, slideUp } from "../../utils/helpers/motionVariants";
import * as FaIcons from "react-icons/fa";
import LoadingFallback from "../../components/Loading/LoadingFallback";

import { useContact } from "../../utils/hooks/useContact";
import { useAbout } from "../../utils/hooks/useAbout";

const AboutIntro = () => (
  <S.AboutSection id="about">
    <MOTION.h1
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      About Us
    </MOTION.h1>

    <MOTION.p
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Making literature more engaging through Classic English digital
      storytelling.
    </MOTION.p>

    <MOTION.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Who We Are
    </MOTION.h2>

    <MOTION.p
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Classic English is a platform dedicated to reimagining the way students
      and educators experience literature. By blending traditional storytelling
      with digital tools, we make stories more interactive, relatable, and
      impactful for today's generation.
    </MOTION.p>
  </S.AboutSection>
);

const MissionVisionSection = () => {
  const { mission, vision, coreValues, loading, error } = useAbout();

  if (loading) return <LoadingFallback />;
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
    <MOTION.section
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
            values={item.values}
          />
        ))}
      </S.MissionVisionValues>
    </MOTION.section>
  );
};

const TeamSection = () => {
  const { team, loading, error } = useAbout();

  if (loading) return <LoadingFallback />;
  if (error) return <p>Error loading Team info.</p>;

  // Separate the first 3 team members as Proponents and the rest as Web Developers
  const proponents = team.slice(0, 3);
  const webDevelopers = team.slice(3);

  return (
    <>
      {/* Proponents Section */}
      <S.TeamSection $padding="2rem 5rem 0">
        <MOTION.h2>Meet the Team</MOTION.h2>
        <MOTION.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Proponents
        </MOTION.h3>

        <MOTION.div
          className="team-container"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {proponents.map((member) => (
            <TeamCard
              key={member.name}
              member={{
                ...member,
                image: member.image?.url || "",
              }}
            />
          ))}
        </MOTION.div>
      </S.TeamSection>

      {/* Web Developers Section */}
      {webDevelopers.length > 0 && (
        <S.TeamSection $padding="2rem 5rem">
          <MOTION.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Web Developers
          </MOTION.h3>

          <MOTION.div
            className="team-container"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {webDevelopers.map((member) => (
              <TeamCard
                key={member.name}
                member={{
                  ...member,
                  image: member.image?.url || "",
                }}
              />
            ))}
          </MOTION.div>
        </S.TeamSection>
      )}
    </>
  );
};

const ContactSection = () => {
  const { contacts = [], loading, error } = useContact();
  const contact = contacts[0] ?? {};

  if (loading) return <LoadingFallback />;
  if (error) return <p>Error loading contact info.</p>;

  return (
    <S.ContactSection>
      <MOTION.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Contact Us
      </MOTION.h2>

      <MOTION.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        We'd love to hear from you! Reach out with questions or ideas.
      </MOTION.p>

      <MOTION.div
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
      </MOTION.div>

      <MOTION.div
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
      </MOTION.div>
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
