// ICONS
import { FaBookOpen, FaLightbulb, FaHandshake, FaGlobe } from "react-icons/fa";

// TEAM IMAGES
import GeanImg from "../assets/team/gean-jpg.jpg";
import DarcyImg from "../assets/team/darcy-jpg.jpg";
import IrisImg from "../assets/team/iris-jpg.jpg";
import OrlandoImg from "../assets/team/orlando.webp";

// STORY IMAGES
import RomeoJulietCover from "../assets/stories/romeo-and-juliet/romeo-and-juliet-cover.webp";
import RomeoImg from "../assets/stories/romeo-and-juliet/characters/romeo.webp";
import JulietImg from "../assets/stories/romeo-and-juliet/characters/juliet.webp";
import FriarLaurenceImg from "../assets/stories/romeo-and-juliet/characters/friar-laurence.webp";
import MercutioImg from "../assets/stories/romeo-and-juliet/characters/mercutio.webp";
import TybaltImg from "../assets/stories/romeo-and-juliet/characters/Tybalt Capulet.webp";
import NurseImg from "../assets/stories/romeo-and-juliet/characters/The Nurse.webp";
import LordCapuletImg from "../assets/stories/romeo-and-juliet/characters/Lord Capulet.webp";
import LadyCapuletImg from "../assets/stories/romeo-and-juliet/characters/Lady Capulet.webp";
import LadyMontagueImg from "../assets/stories/romeo-and-juliet/characters/Lady Montague.webp";
import LordMontagueImg from "../assets/stories/romeo-and-juliet/characters/Lord Montague.webp";
import ParisImg from "../assets/stories/romeo-and-juliet/characters/paris.webp";
import PrinceEscalusImg from "../assets/stories/romeo-and-juliet/characters/Prince Escalus.webp";
import SampsonGregoryImg from "../assets/stories/romeo-and-juliet/characters/Sampson and Gregory.webp";
import BenvolioImg from "../assets/stories/romeo-and-juliet/characters/Benvolio.webp";
import BalthasarImg from "../assets/stories/romeo-and-juliet/characters/Balthasar.webp";
import ApothecaryImg from "../assets/stories/romeo-and-juliet/characters/The Apothecary.webp";

// SETTINGS IMAGES



// STORIES
export const storiesData = [
  {
    id: "romeo-juliet",
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    description:
      "A timeless tragedy of two young lovers from feuding families whose fate is sealed by love and loss.",
    img: RomeoJulietCover,
    video: "https://www.youtube.com/embed/tSfExfrP1oI?si=BufcT2Taj30ofP4A",
    fullStories:
      "https://www.folger.edu/explore/shakespeares-works/romeo-and-juliet/read/",
    characters: [
      { name: "Romeo", img: RomeoImg, description: "..." },
      { name: "Juliet", img: JulietImg, description: "..." },
      { name: "Friar Laurence", img: FriarLaurenceImg, description: "..." },
      { name: "Mercutio", img: MercutioImg, description: "..." },
      { name: "Tybalt Capulet", img: TybaltImg, description: "..." },
      { name: "the Nurse", img: NurseImg, description: "..." },
      { name: "Lord Capulet", img: LordCapuletImg, description: "..." },
      { name: "Lady Capulet", img: LadyCapuletImg, description: "..." },
      { name: "Lady Montague", img: LadyMontagueImg, description: "..." },
      { name: "Lord Montague", img: LordMontagueImg, description: "..." },
      { name: "Paris", img: ParisImg, description: "..." },
      { name: "Prince Escalus", img: PrinceEscalusImg, description: "..." },
      { name: "Sampson and Gregory", img: SampsonGregoryImg, description: "..." },
      { name: "Benvolio", img: BenvolioImg, description: "..." },
      { name: "Balthasar", img: BalthasarImg, description: "..." },
      { name: "The Apothecary", img: ApothecaryImg, description: "..." },
    ],
    settings: [
      {
        name: "Verona",
        img: "VeronaImg",
        description: "The city in Italy where the story takes place.",
      },
    ],
  },
];


export const sonnetsData = [
  { id: "sonnet-18", title: "Sonnet 18", author: "William Shakespeare", description: "A celebration of beauty and love.", img: "Sonnet18Img" },
  { id: "sonnet-116", title: "Sonnet 116", author: "William Shakespeare", description: "A story of steadfast love.", img: "Sonnet116Img" },
];



// About Section Data
export const missionVisionData = [
  {
    title: "Our Mission",
    content: "To empower learners and educators by making literature more immersive, accessible, and enjoyable through digital storytelling."
  },
  {
    title: "Our Vision", 
    content: "To transform literature education into an inspiring journey where classic and modern stories come alive for all ages."
  },
  {
    title: "Core Values",
    values: [
      { icon: FaBookOpen, text: "Passion for Literature" },
      { icon: FaLightbulb, text: "Innovation in Education" },
      { icon: FaHandshake, text: "Collaboration & Inclusivity" },
      { icon: FaGlobe, text: "Lifelong Learning" }
    ]
  }
];

export const teamData = [
  { name: "Gean Villamor", role: "Project Lead", description: "Leads the thesis project and ensures overall progress.", image: GeanImg },
  { name: "Darcy Mae Tabafunda", role: "Theoretical Framework Specialist", description: "Builds and writes the theoretical and conceptual foundation.", image: DarcyImg },
  { name: "Iris Jean Polintang", role: "Research & Documentation Specialist", description: "Assists in research, writing, and documentation.", image: IrisImg },
  { name: "Orlando Jr. Dela Cruz", role: "Web Developer", description: "Designs and develops the website’s frontend interface, ensuring functionality, responsiveness, and a user-friendly experience.", image: OrlandoImg }
];


// Contact Information
export const contactData = {
  email: "classicstories@gmail.com",
  phone: "09095984478",
  address: "Candelaria, Quezon",
  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#"
  }
};