import React, { memo } from "react";
import {
  AboutSection,
  MissionVisionValues,
  TeamSection,
  ContactSection,
} from "./About.styled";
import MissionVisionCard from "../../components/Cards/MissionVisionCard";
import TeamCard from "../../components/Cards/TeamCard";
import Button from "../../components/Buttons/Button";
import { missionVisionData, teamData, contactData } from "../../data"; // Added teamData import

const About = memo(() => {
  return (
    <>
      <AboutSection id="about">
        <h1>About Us</h1>
        <p>
          Making literature more engaging through Classic English digital storytelling.
        </p>

        <h2>Who We Are</h2>
        <p>
          Classic English is a platform dedicated to reimagining the way
          students and educators experience literature. By blending traditional
          storytelling with digital tools, we make stories more interactive,
          relatable, and impactful for today's generation.
        </p>

        <MissionVisionValues>
          {missionVisionData.map((item, index) => (
            <MissionVisionCard
              key={index}
              title={item.title}
              content={item.content}
              values={item.values}
            />
          ))}
        </MissionVisionValues>
      </AboutSection>

      <TeamSection>
        <h2>Meet the Team</h2>
        <div className="team-container">
          {teamData.map((member, index) => (
            <TeamCard
              key={index}
              member={member}
            />
          ))}
        </div>
      </TeamSection>

      <ContactSection>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Reach out with questions or ideas.</p>
        <div className="contact-info">
          <p><strong>Email:</strong> {contactData.email}</p>
          <p><strong>Phone:</strong> {contactData.phone}</p>
          <p><strong>Address:</strong> {contactData.address}</p>
        </div>
        <Button
          as="a"
          href={`mailto:${contactData.email}`}
          variant="primary"
          size="large"
        >
          Send us an Email
        </Button>
      </ContactSection>
    </>
  );
});

About.displayName = 'About';
export default About;