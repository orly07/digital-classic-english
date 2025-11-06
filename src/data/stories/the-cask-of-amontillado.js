// The Cask of Amontillado - Images
import CaskCover from "../../assets/stories/the-cask-of-amontillado/cover.jpg";
import MontresorImg from "../../assets/stories/the-cask-of-amontillado/Montresor.jpg";
import FortunatoImg from "../../assets/stories/the-cask-of-amontillado/Fortunato.jpg";
import ServantsImg from "../../assets/stories/the-cask-of-amontillado/The Montresor Family's Servants.jpg";

export const theCaskOfAmontilladoData = {
  id: "the-cask-of-amontillado",
  title: "The Cask of Amontillado",
  author: "Edgar Allan Poe",
  description:
    "A gothic short story by Edgar Allan Poe about Montresor seeking revenge on Fortunato. He lures Fortunato into the catacombs with the promise of tasting a rare wine, Amontillado, and ultimately traps him alive behind a wall.",
  img: CaskCover,
  video: [
    "https://www.youtube.com/embed/utOm0Pw9pe4?si=YU6V3VajeW_qNvPX",
  ],
  fullStories: "https://share.google/eCKDWZmFSqWT6Gyky",
  characters: [
    {
      name: "Montresor",
      img: MontresorImg,
      lines: "",
      description:
        "The narrator and protagonist. Montresor seeks revenge against Fortunato for an unspecified insult. His intelligence, cunning, and calm demeanor make the story chilling.",
    },
    {
      name: "Fortunato",
      img: FortunatoImg,
      lines: "",
      description:
        "The victim of Montresor’s revenge, a wine connoisseur who is tricked into the catacombs. His pride and overconfidence lead to his tragic end.",
    },
    {
      name: "The Montresor Family's Servants",
      img: ServantsImg,
      lines: "",
      description:
        "Mentioned briefly in the story; they obey Montresor’s orders but stay home during his revenge plan. Their absence ensures Montresor’s crime goes unnoticed.",
    },
  ],
};
