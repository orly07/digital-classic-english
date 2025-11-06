import { FaBookOpen, FaLightbulb, FaHandshake, FaGlobe } from "react-icons/fa";

import GeanImg from "../assets/team/gean-jpg.jpg";
import DarcyImg from "../assets/team/darcy-jpg.jpg";
import IrisImg from "../assets/team/iris-jpg.jpg";
import OrlandoImg from "../assets/team/orlando.webp";

export const missionVisionData = [
  {
    title: "Our Mission",
    content:
      "To empower learners and educators by making literature more immersive, accessible, and enjoyable through digital storytelling.",
  },
  {
    title: "Our Vision",
    content:
      "To transform literature education into an inspiring journey where classic and modern stories come alive for all ages.",
  },
  {
    title: "Core Values",
    values: [
      { icon: FaBookOpen, text: "Passion for Literature" },
      { icon: FaLightbulb, text: "Innovation in Education" },
      { icon: FaHandshake, text: "Collaboration & Inclusivity" },
      { icon: FaGlobe, text: "Lifelong Learning" },
    ],
  },
];

export const teamData = [
  {
    name: "Gean Villamor",
    role: "Project Lead",
    description: "Leads the thesis project and ensures overall progress.",
    image: GeanImg,
  },
  {
    name: "Darcy Mae Tabafunda",
    role: "Theoretical Framework Specialist",
    description: "Builds and writes the theoretical and conceptual foundation.",
    image: DarcyImg,
  },
  {
    name: "Iris Jean Polintang",
    role: "Research & Documentation Specialist",
    description: "Assists in research, writing, and documentation.",
    image: IrisImg,
  },
  {
    name: "Orlando Jr. Dela Cruz",
    role: "Web Developer",
    description:
      "Designs and develops the website's frontend interface, ensuring functionality, responsiveness, and a user-friendly experience.",
    image: OrlandoImg,
  },
];
