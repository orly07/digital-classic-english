// The Fall of the House of Usher - Images
import UsherCover from "../../assets/stories/the_fall_of_the_house_of_usher/cover.jpg";
import RoderickUsherImg from "../../assets/stories/the_fall_of_the_house_of_usher/RoderickUsher.jpg";
import MadelineUsherImg from "../../assets/stories/the_fall_of_the_house_of_usher/MadelineUsher.jpg";
import NarratorImg from "../../assets/stories/the_fall_of_the_house_of_usher/Narrator.jpg";

export const fallOfTheHouseOfUsherData = {
  id: "the-fall-of-the-house-of-usher",
  title: "The Fall of the House of Usher",
  author: "Edgar Allan Poe",
  description:
    "A dark and haunting tale about Roderick Usher, a man tormented by fear and madness, and his twin sister Madeline, whose mysterious illness parallels the physical and spiritual decay of their ancestral home. When the narrator visits to help his old friend, he becomes a witness to the ultimate collapse of both the Usher family and their mansion.",
  img: UsherCover,
  video: "https://www.youtube.com/embed/UaD6b6rUeUk?si=-k1hosSMDCOv7Wx9",
  fullStories: "https://share.google/PU5VeG23oH9BmeKL2",
  characters: [
    {
      name: "Roderick Usher",
      img: RoderickUsherImg,
      lines: "",
      description:
        "The mentally disturbed master of the house, suffering from extreme sensory sensitivity and deep fear. An artist consumed by despair, his fate mirrors the decay of his home.",
    },
    {
      name: "Madeline Usher",
      img: MadelineUsherImg,
      lines: "",
      description:
        "Roderick's cataleptic twin sister, whose mysterious illness and death symbolize the final collapse of the Usher bloodline.",
    },
    {
      name: "The Narrator",
      img: NarratorImg,
      lines: "",
      description:
        "An unnamed childhood friend of Roderick who visits the Usher mansion to offer comfort, only to witness the house’s and family’s eerie downfall.",
    },
  ],
};
