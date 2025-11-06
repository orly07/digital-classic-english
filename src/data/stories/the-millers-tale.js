import MillerCover from "../../assets/stories/the-millers-tale/cover.jpg";
import JohnImg from "../../assets/stories/the-millers-tale/John.jpg";
import AlisonImg from "../../assets/stories/the-millers-tale/Alison.jpg";
import NicholasImg from "../../assets/stories/the-millers-tale/Nicholas.jpg";
import AbsolonImg from "../../assets/stories/the-millers-tale/Absolon.jpg";
import GervaseImg from "../../assets/stories/the-millers-tale/Gervase.jpg";

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
