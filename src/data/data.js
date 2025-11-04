// src/data/data.js
import { FaBookOpen, FaLightbulb, FaHandshake, FaGlobe } from "react-icons/fa";

// STORIES
export const storiesData = [
  // Romeo And Juliet
  {
    id: "romeo-juliet",
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    description:
      "A timeless tragedy of two young lovers from feuding families whose fate is sealed by love and loss.",
    img: "/src/assets/stories/romeo-and-juliet/romeo-and-juliet-cover.webp",
    video: "https://www.youtube.com/embed/tSfExfrP1oI?si=BufcT2Taj30ofP4A",
    fullStories:
      "https://www.folger.edu/explore/shakespeares-works/romeo-and-juliet/read/",
    characters: [
      {
        name: "Romeo",
        img: "../assets/stories/romeo-and-juliet/characters/romeo.webp",
        description:
          "The male protagonist, who is passionate, impulsive, and romantic young man, about 16 years old. He is deeply emotional and idealistic about love. At first, he’s infatuated with Rosaline, but upon meeting Juliet, he falls in love instantly.",
      },
      {
        name: "Juliet",
        img: "/src/assets/stories/romeo-and-juliet/characters/juliet.webp",
        description:
          "The female protagonist, 13-year-old girl who is innocent, strong-willed, loyal, courageous, passionate and from a wealthy family. Though young, she shows maturity, intelligence, and determination. She defies her family for love.",
      },
      {
        name: "Friar Laurence",
        img: "/src/assets/stories/romeo-and-juliet/characters/friar-laurence.webp",
        description:
          "A Franciscan priest and wise advisor to both Romeo and Juliet. Kind and peace-loving man who secretly marries Romeo and Juliet, hoping to end the feud between their families.",
      },
      {
        name: "Mercutio",
        img: "/src/assets/stories/romeo-and-juliet/characters/mercutio.webp",
        description:
          "Romeo’s close friend and relative to Prince Escalus. He is Witty, clever, and full of humor, Mercutio often mocks love. His death at the hands of Tybalt marks the turning point of the play.",
      },
      {
        name: "Tybalt Capulet",
        img: "/src/assets/stories/romeo-and-juliet/characters/Tybalt Capulet.webp",
        description:
          "A Franciscan priest and wise advisor to both Romeo and Juliet. Kind and peace-loving man who secretly marries Romeo and Juliet, hoping to end the feud between their families.",
      },
      {
        name: "the Nurse",
        img: "/src/assets/stories/romeo-and-juliet/characters/The Nurse.webp",
        description:
          "Juliet’s caretaker and confidante. A humorous and talkative woman who has cared for Juliet since birth. She supports Juliet’s romance but later advises her to marry Paris, which hurts Juliet deeply.",
      },
      {
        name: "Lord Capulet",
        img: "/src/assets/stories/romeo-and-juliet/characters/Lord Capulet.webp",
        description:
          "Juliet’s father. A proud and controlling man who loves Juliet but becomes furious when she refuses to marry Paris.",
      },
      {
        name: "Lady Capulet",
        img: "/src/assets/stories/romeo-and-juliet/characters/Lady Capulet.webp",
        description:
          "Juliet’s mother. A distant mother who relies on the Nurse to raise Juliet. She supports her husband’s decision to marry Juliet off to Paris.",
      },
      {
        name: "Lady Montague",
        img: "/src/assets/stories/romeo-and-juliet/characters/Lady Montague.webp",
        description:
          "Juliet’s mother. A distant mother who relies on the Nurse to raise Juliet. She supports her husband’s decision to marry Juliet off to Paris.",
      },
      {
        name: "Lord Montague",
        img: "/src/assets/stories/romeo-and-juliet/characters/Lord Montague.webp",
        description:
          "Romeo’s father. Head of the Montague family. He worried and concern about Romeo’s sadness early in the play.",
      },
      {
        name: "Paris",
        img: "/src/assets/stories/romeo-and-juliet/characters/paris.webp",
        description:
          "A nobleman and suitor chosen by Lord Capulet for Juliet, well-mannered, polite,  and wealthy young man who genuinely loves Juliet, though she does not love him.",
      },
      {
        name: "Prince Escalus",
        img: "/src/assets/stories/romeo-and-juliet/characters/Prince Escalus.webp",
        description:
          "The ruler of Verona. Fair but strict leader trying to maintain peace between the Montagues and Capulets.",
      },
      {
        name: "Sampson and Gregory",
        img: "/src/assets/stories/romeo-and-juliet/characters/Sampson and Gregory.webp",
        description:
          "(Minor Character) Capulet's servants who provoke the street fight in Act I.",
      },
      {
        name: "Benvolio",
        img: "/src/assets/stories/romeo-and-juliet/characters/Benvolio.webp",
        description:
          "(Minor Character) Romeo’s cousin and friend, peace-loving and a loyal servant who brings him the false news of Juliet’s death.",
      },
      {
        name: "Balthasar",
        img: "/src/assets/stories/romeo-and-juliet/characters/Balthasar.webp",
        description:
          "(Minor Character) Romeo’s loyal servant who brings him the false news of Juliet’s death.",
      },
            {
        name: "The Apothecary",
        img: "/src/assets/stories/romeo-and-juliet/characters/The Apothecary.webp",
        description:
          "(Minor Character) The poor pharmacist who sells poison to Romeo.",
      },
    ],
    settings: [
      {
        name: "Verona",
        img: "/assets/img/settings/verona.jpg",
        description: "The city in Italy where the story takes place.",
      },
    ],
  },

  // Hamlet

];

// SONNETS
export const sonnetsData = [
  {
    id: "sonnet-18",
    title: "Sonnet 18",
    author: "William Shakespeare",
    description: "A celebration of beauty and love.",
    img: "/assets/img/sonnet/sonnet-18.jpg",
  },
  {
    id: "sonnet-116",
    title: "Sonnet 116",
    author: "William Shakespeare",
    description: "A story of steadfast love.",
    img: "/assets/img/sonnet/sonnet-116.jpg",
  },
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
  {
    name: "Gean Villamor",
    role: "Project Lead",
    description: "Leads the thesis project and ensures overall progress.",
    image: "/src/assets/team/gean-jpg.jpg"
  },
  {
    name: "Darcy Mae Tabafunda",
    role: "Theoretical Framework Specialist", 
    description: "Builds and writes the theoretical and conceptual foundation.",
    image: "/src/assets/team/darcy-jpg.jpg"
  },
  {
    name: "Iris Jean Polintang",
    role: "Research & Documentation Specialist",
    description: "Assists in research, writing, and documentation.",
    image: "/src/assets/team/iris-jpg.jpg"
  },
{
  name: "Orlando Jr. Dela Cruz",
  role: "Web Developer",
  description: "Designs and develops the website’s frontend interface, ensuring functionality, responsiveness, and a user-friendly experience.",
  image: "/src/assets/team/orlando.webp"
}
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