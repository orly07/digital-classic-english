// The Wife of Bath's Tale - Images
import WifeOfBathCover from "../../optimized-assets/stories/the_wife_of_baths_tale/cover.webp";
import TheWifeOfBathImg from "../../optimized-assets/stories/the_wife_of_baths_tale/Wife of Bath.webp";
import TheKnightImg from "../../optimized-assets/stories/the_wife_of_baths_tale/Knight.webp";
import TheQueenImg from "../../optimized-assets/stories/the_wife_of_baths_tale/Queen.webp";
import KingArthurImg from "../../optimized-assets/stories/the_wife_of_baths_tale/King Arthur.webp";
import TheOldWomanImg from "../../optimized-assets/stories/the_wife_of_baths_tale/Old Woman.webp";
import TheMaidenImg from "../../optimized-assets/stories/the_wife_of_baths_tale/Maiden.webp";

export const wifeOfBathsTaleData = {
  id: "the-wife-of-baths-tale",
  title: "The Wife of Bath’s Tale",
  author: "Geoffrey Chaucer",
  description:
    "The tale follows a young knight who commits a grave crime against a maiden and is sentenced to death. However, Queen Guinevere spares his life on one condition: he must discover what women most desire. After a long and difficult quest, he meets an old woman who gives him the correct answer in exchange for marriage. When the knight learns to respect her will, she transforms into a beautiful woman. The tale, told by the bold and wise Wife of Bath, explores themes of power, equality, and respect in marriage.",
  img: WifeOfBathCover,
  video: "https://www.youtube.com/embed/tz9IAWZSRag?si=c-LjaOwPJ8coxq0Q",
  fullStories: "https://share.google/1DH0DGGKVeHj19RSC",
  characters: [
    {
      name: "The Wife of Bath (Alisoun)",
      img: TheWifeOfBathImg,
      lines: "",
      description:
        "The narrator of the tale. A confident, outspoken woman who has been married five times. She uses her story to express her views on love, marriage, and women's desire for power and respect.",
    },
    {
      name: "The Knight",
      img: TheKnightImg,
      lines: "",
      description:
        "The main character of the tale. A young knight who assaults a maiden and must find what women most desire to save his life. His journey leads him to learn about respect and equality.",
    },
    {
      name: "The Queen",
      img: TheQueenImg,
      lines: "",
      description:
        "A wise and fair ruler who shows mercy to the knight and challenges him to discover what women truly want. She represents justice and compassion.",
    },
    {
      name: "King Arthur",
      img: KingArthurImg,
      lines: "",
      description:
        "The ruler who initially condemns the knight to death for his crime but allows the Queen to decide his punishment, showing his trust in her wisdom.",
    },
    {
      name: "The Old Woman (Hag)",
      img: TheOldWomanImg,
      lines: "",
      description:
        "A poor but wise woman who helps the knight by giving him the right answer. In return, she makes him marry her. When he respects her will, she transforms into a beautiful lady.",
    },
    {
      name: "The Maiden (Victim)",
      img: TheMaidenImg,
      lines: "",
      description:
        "The young woman whom the knight assaults at the beginning of the story. Though she does not appear again, her suffering sets the moral and emotional tone of the tale.",
    },
  ],
};
