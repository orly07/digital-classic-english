import MillerCover from "../../optimized-assets/stories/the-millers-tale/cover.webp";
import JohnImg from "../../optimized-assets/stories/the-millers-tale/John.webp";
import AlisonImg from "../../optimized-assets/stories/the-millers-tale/Alison.webp";
import NicholasImg from "../../optimized-assets/stories/the-millers-tale/Nicholas.webp";
import AbsolonImg from "../../optimized-assets/stories/the-millers-tale/Absolon.webp"
import GervaseImg from "../../optimized-assets/stories/the-millers-tale/Gervase.webp";

export const millersTaleData = {
  id: "millers-tale",
  title: "The Miller's Tale",
  author: "Geoffrey Chaucer",
  description:
    "A humorous and bawdy story about a carpenter named John, his young wife Alison, and her lovers Nicholas and Absolon. It’s a classic example of a medieval fabliau, filled with trickery and comedy.",
  img: MillerCover,
  video: "https://www.youtube.com/embed/3Wkuc8AvIt4?si=VqDlZBXBOxeCCJKF",
  fullStories: "https://share.google/CZaOuZzU6ZWxsxXSu",
  characters: [
    {
      name: "John",
      img: JohnImg,
      lines: "",
      description:
        "The old carpenter and husband of Alison, who becomes the target of trickery by Nicholas and Alison.",
    },
    {
      name: "Alison",
      img: AlisonImg,
      lines: "",
      description:
        "The young and beautiful wife of John, who has an affair with Nicholas while being pursued by Absolon.",
    },
    {
      name: "Nicholas",
      img: NicholasImg,
      lines: "",
      description:
        "A clever scholar who rents a room from John and cunningly plots to sleep with Alison.",
    },
    {
      name: "Absolon",
      img: AbsolonImg,
      lines: "",
      description:
        "A vain parish clerk who is infatuated with Alison and becomes a victim of a cruel prank.",
    },
    {
      name: "Gervase",
      img: GervaseImg,
      lines: "",
      description:
        "A blacksmith who helps Absolon by giving him the hot iron used in the story’s comic revenge.",
    },
  ],
};
