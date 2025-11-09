// The Black Cat - Images
import BlackCatCover from "../../optimized-assets/stories/the_black_cat/cover.webp";
import NarratorImg from "../../optimized-assets/stories/the_black_cat/Narrator.webp";
import WifeImg from "../../optimized-assets/stories/the_black_cat/Wife.webp";
import PlutoImg from "../../optimized-assets/stories/the_black_cat/Pluto.webp";
import SecondBlackCatImg from "../../optimized-assets/stories/the_black_cat/SecondBlackCat.webp";
import PolicemenImg from "../../optimized-assets/stories/the_black_cat/Policemen.webp";
import ServantsImg from "../../optimized-assets/stories/the_black_cat/Servants.webp";

export const blackCatData = {
  id: "the-black-cat",
  title: "The Black Cat",
  author: "Edgar Allan Poe",
  description:
    "A dark short story about a man whose love for animals turns into cruelty as he falls into alcoholism and madness. After killing his pet cat Pluto and later his wife, he is haunted by guilt and a second black cat that leads the police to discover his crime. The story reveals how guilt and evil can destroy the human soul.",
  img: BlackCatCover,
  video: "https://www.youtube.com/embed/nzPjlukF54o?si=tjIPctE563CEXNsx",
  fullStories: "https://share.google/4H04KPEzqFI7eI9DN",
  characters: [
    {
      name: "The Narrator",
      img: NarratorImg,
      lines: "",
      description:
        "An unnamed man who begins as a gentle animal lover but falls into violence, alcoholism, and madness. He murders his cat and wife, illustrating moral decay and guilt.",
    },
    {
      name: "The Narrator’s Wife",
      img: WifeImg,
      lines: "",
      description:
        "A kind and patient woman who loves animals. She endures her husband’s cruelty until he kills her in a fit of rage.",
    },
    {
      name: "Pluto",
      img: PlutoImg,
      lines: "",
      description:
        "The narrator’s first black cat, initially affectionate. He is blinded in one eye and later hanged by the narrator. Symbolizes innocence, loyalty, and guilt.",
    },
    {
      name: "The Second Black Cat",
      img: SecondBlackCatImg,
      lines: "",
      description:
        "A mysterious cat resembling Pluto, with a white mark shaped like a gallows. Serves as a symbol of the narrator’s guilt and punishment.",
    },
    {
      name: "The Policemen",
      img: PolicemenImg,
      lines: "",
      description:
        "A group of officers who investigate the narrator’s house and ultimately discover his crime when he inadvertently reveals the body.",
    },
    {
      name: "The Servants",
      img: ServantsImg,
      lines: "",
      description:
        "Background characters present in the household, representing normalcy before the narrator’s descent into isolation and madness.",
    },
  ],
};
