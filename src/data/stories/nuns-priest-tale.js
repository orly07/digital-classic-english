// The Nun’s Priest’s Tale - Images
import NunsPriestCover from "../../optimized-assets/stories/nunspriest/cover.webp";
import NunsPriestImg from "../../optimized-assets/stories/nunspriest/NunsPriest.webp";
import ChanticleerImg from "../../optimized-assets/stories/nunspriest/Chanticleer.webp";
import PerteloteImg from "../../optimized-assets/stories/nunspriest/Pertelote.webp";
import FoxImg from "../../optimized-assets/stories/nunspriest/Fox.webp";
import WidowImg from "../../optimized-assets/stories/nunspriest/Widow.webp";
import DaughtersImg from "../../optimized-assets/stories/nunspriest/WidowsDaughters.webp";
import HensImg from "../../optimized-assets/stories/nunspriest/Hens.webp";

export const nunsPriestData = {
  id: "nuns-priest-tale",
  title: "The Nun’s Priest’s Tale",
  author: "Geoffrey Chaucer",
  description:
    "The Nun’s Priest’s Tale is a humorous and moral fable told by the Nun’s Priest in The Canterbury Tales. It takes place in a poor widow’s small farm, where a proud rooster named Chanticleer lives with his favorite hen, Pertelote, and several other hens. Later, a sly fox named Sir Russel flatters Chanticleer into singing with his eyes closed and catches him. Chanticleer manages to escape when he tricks the fox into speaking.",
  img: NunsPriestCover,
  video: "https://www.youtube.com/embed/20R_g8E5AxQ?si=CnFxSwvDLSfMNvLT",
  fullStories:
    "https://www.scribd.com/document/310998636/The-Nun-s-Priest-s-Tale",
  characters: [
    {
      name: "The Nun’s Priest",
      img: NunsPriestImg,
      lines: "",
      description:
        "The humble yet clever storyteller who narrates the tale with humor and wisdom. A priest traveling with the Prioress, he uses animals to teach moral lessons about pride and deception.",
    },
    {
      name: "Chanticleer",
      img: ChanticleerImg,
      lines: "",
      description:
        "A proud and handsome rooster who loves to crow and believes deeply in his dreams. His pride almost leads to his downfall when he is tricked by the fox.",
    },
    {
      name: "Pertelote",
      img: PerteloteImg,
      lines: "",
      description:
        "Chanticleer’s favorite hen, known for her beauty and intelligence. She teases him for being frightened by his dreams, showing the contrast between reason and intuition.",
    },
    {
      name: "The Fox (Sir Russel)",
      img: FoxImg,
      lines: "",
      description:
        "A sly and cunning fox who flatters Chanticleer to lure him into a trap. He represents deceit and the danger of falling for flattery.",
    },
    {
      name: "The Widow",
      img: WidowImg,
      lines: "",
      description:
        "A poor old woman who owns the small farm where the story takes place. She lives a simple, honest life with her two daughters and few animals.",
    },
    {
      name: "The Widow’s Two Daughters",
      img: DaughtersImg,
      lines: "",
      description:
        "The widow’s hardworking daughters who help with daily chores such as cooking and tending the animals. They are mentioned briefly but symbolize rural simplicity and duty.",
    },
    {
      name: "Other Hens",
      img: HensImg,
      lines: "",
      description:
        "Chanticleer’s seven other hens who admire and follow him. They represent his pride and the admiration that feeds it.",
    },
  ],
};
