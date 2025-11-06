// The Tell-Tale Heart - Images
import TellTaleCover from "../../assets/stories/the_tell_tale_heart/cover.jpg";
import NarratorImg from "../../assets/stories/the_tell_tale_heart/Narrator.jpg";
import OldManImg from "../../assets/stories/the_tell_tale_heart/OldMan.jpg";
import NeighborImg from "../../assets/stories/the_tell_tale_heart/Neighbor.jpg";
import PoliceOfficersImg from "../../assets/stories/the_tell_tale_heart/PoliceOfficers.jpg";

export const tellTaleHeartData = {
  id: "the-tell-tale-heart",
  title: "The Tell-Tale Heart",
  author: "Edgar Allan Poe",
  description:
    "A short story about a man who insists he is sane while describing how he carefully planned and committed a murder. Obsessed with an old man’s “vulture-like” eye, he kills him and hides the body under the floorboards. When the police arrive, his guilt overwhelms him, and he imagines hearing the old man’s heart still beating beneath the floor, driving him to confess his crime.",
  img: TellTaleCover,
  video: "https://www.youtube.com/embed/97dQOVDnglY?si=seK65APAlQzxSw2s",
  fullStories: "https://share.google/bHuFTwjgQRY8WSgVo",
  characters: [
    {
      name: "Narrator",
      img: NarratorImg,
      lines: "",
      description:
        "A young man who becomes obsessed with the old man’s eye, convinced of his own sanity while descending into madness. His guilt ultimately forces him to confess to murder.",
    },
    {
      name: "Old Man",
      img: OldManImg,
      lines: "",
      description:
        "An elderly and kind man with a pale, 'vulture-like' eye that unintentionally triggers the narrator’s obsession and leads to his tragic death.",
    },
    {
      name: "Neighbor",
      img: NeighborImg,
      lines: "",
      description:
        "A nearby resident who hears a disturbance during the night and alerts the police, unknowingly setting the events of the narrator’s confession in motion.",
    },
    {
      name: "Police Officers",
      img: PoliceOfficersImg,
      lines: "",
      description:
        "Calm and professional men who investigate the noise complaint; their composed presence causes the narrator’s overwhelming guilt to surface.",
    },
  ],
};
