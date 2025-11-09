// The Masque of the Red Death - Images
import RedDeathCover from "../../optimized-assets/stories/the_masque_of_the_red_death/cover.webp";
import PrinceProsperoImg from "../../optimized-assets/stories/the_masque_of_the_red_death/PrinceProspero.webp";
import RedDeathImg from "../../optimized-assets/stories/the_masque_of_the_red_death/RedDeath.webp";
import MusiciansDancersImg from "../../optimized-assets/stories/the_masque_of_the_red_death/MusiciansDancers.webp";
import ServantsGuardsImg from "../../optimized-assets/stories/the_masque_of_the_red_death/ServantsGuards.webp";

export const masqueOfTheRedDeathData = {
  id: "the-masque-of-the-red-death",
  title: "The Masque of the Red Death",
  author: "Edgar Allan Poe",
  description:
    "The story is about Prince Prospero, who tries to escape a deadly plague called the Red Death by hiding inside his castle with a thousand wealthy guests. They hold a grand masquerade ball in seven colorful rooms, ignoring the suffering outside. But when a mysterious figure dressed as the Red Death appears, it moves through the rooms, and one by one, everyone dies. In the end, the plague enters the castle, showing that no one—not even the rich or powerful—can escape death.",
  img: RedDeathCover,
  video: "https://www.youtube.com/embed/DpnwqRGTWmE?si=JmzL0_j-mbDDQdd1",
  fullStories: "https://share.google/8cZLTKOnxpEL4El6f",
  characters: [
    {
      name: "Prince Prospero",
      img: PrinceProsperoImg,
      lines: "",
      description:
        "The wealthy and powerful noble who tries to avoid the deadly plague by isolating himself and his followers inside a lavish abbey.",
    },
    {
      name: "The Mysterious Figure / The Red Death",
      img: RedDeathImg,
      lines: "",
      description:
        "A strange, masked guest who appears at the masquerade, symbolizing the plague and the inevitability of death.",
    },
    {
      name: "Musicians and Dancers",
      img: MusiciansDancersImg,
      lines: "",
      description:
        "Entertainers at the masquerade ball, unnamed, who contribute to the grand illusion of safety and festivity within the castle.",
    },
    {
      name: "Servants and Guards",
      img: ServantsGuardsImg,
      lines: "",
      description:
        "Attendants to Prince Prospero who maintain the abbey and serve the guests, illustrating the hierarchy and order within the isolated castle.",
    },
  ],
};
