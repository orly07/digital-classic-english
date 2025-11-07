// The Pardoner's Tale - Images
import PardonerCover from "../../assets/stories/the_pardoners_tale/cover.jpg";
import PardonerImg from "../../assets/stories/the_pardoners_tale/Pardoner.jpg";
import FirstRioterImg from "../../assets/stories/the_pardoners_tale/FirstRioter.jpg";
import SecondRioterImg from "../../assets/stories/the_pardoners_tale/SecondRioter.jpg";
import ThirdRioterImg from "../../assets/stories/the_pardoners_tale/ThirdRioter.jpg";
import OldManImg from "../../assets/stories/the_pardoners_tale/OldMan.jpg";
import DeathImg from "../../assets/stories/the_pardoners_tale/Death.jpg";
import TavernBoyImg from "../../assets/stories/the_pardoners_tale/TavernBoy.jpg";
import TavernKeeperImg from "../../assets/stories/the_pardoners_tale/TavernKeeper.jpg";

export const pardonersTaleData = {
  id: "the-pardoners-tale",
  title: "The Pardoner's Tale",
  author: "Geoffrey Chaucer",
  description:
    "The story is about three greedy men who set out to kill Death after learning it has taken many lives in their town. Along the way, they meet an old man who directs them to a tree where they find gold coins instead of Death. Their greed leads them to plot against each other, and in the end, all three die proving that greed itself is the real Death.",
  img: PardonerCover,
  video: "https://www.youtube.com/embed/DO7OMEmFGeA?si=dZuCKRr6vjmytVmT",
  fullStories:
    "https://www.scribd.com/document/535477845/The-Pardoner-s-Tale-by-Geoffrey-Chaucer",
  characters: [
    {
      name: "The Pardoner",
      img: PardonerImg,
      lines: "",
      description:
        "A corrupt churchman who tells the story to show how greed leads to ruin, even though he is greedy himself.",
    },
    {
      name: "First Rioter",
      img: FirstRioterImg,
      lines: "",
      description:
        "A bold and violent man who plots to kill his friends for the gold they find, representing greed and recklessness.",
    },
    {
      name: "Second Rioter",
      img: SecondRioterImg,
      lines: "",
      description:
        "A drunken and foolish man easily tempted by wealth, whose poor judgment contributes to the group’s downfall.",
    },
    {
      name: "Third Rioter",
      img: ThirdRioterImg,
      lines: "",
      description:
        "The youngest of the three, sly and cunning, who poisons the wine to get the gold alone, illustrating the destructiveness of greed.",
    },
    {
      name: "The Old Man",
      img: OldManImg,
      lines: "",
      description:
        "A mysterious figure who directs the rioters to the tree, symbolizing wisdom or the inevitability of Death itself.",
    },
    {
      name: "Death",
      img: DeathImg,
      lines: "",
      description:
        "A symbolic presence representing the punishment of greed and human sin, ultimately claiming all three rioters.",
    },
    {
      name: "Tavern Boy",
      img: TavernBoyImg,
      lines: "",
      description:
        "A frightened young boy who warns the rioters about Death taking lives nearby, hinting at the story’s moral lesson.",
    },
    {
      name: "Tavern Keeper",
      img: TavernKeeperImg,
      lines: "",
      description:
        "A weary innkeeper who informs the rioters about the plague and Death’s spread, setting the story in motion.",
    },
  ],
};
