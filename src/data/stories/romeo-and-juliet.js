// src/data/stories/romeo-and-juliet.js

// STORY IMAGES
import RomeoJulietCover from "../../optimized-assets/stories/romeo-and-juliet/romeo-and-juliet-cover.webp";
import RomeoImg from "../../optimized-assets/stories/romeo-and-juliet/characters/romeo.webp";
import JulietImg from "../../optimized-assets/stories/romeo-and-juliet/characters/juliet.webp";
import FriarLaurenceImg from "../../optimized-assets/stories/romeo-and-juliet/characters/friar-laurence.webp";
import MercutioImg from "../../optimized-assets/stories/romeo-and-juliet/characters/mercutio.webp";
import TybaltImg from "../../optimized-assets/stories/romeo-and-juliet/characters/Tybalt Capulet.webp";
import NurseImg from "../../optimized-assets/stories/romeo-and-juliet/characters/The Nurse.webp";
import LordCapuletImg from "../../optimized-assets/stories/romeo-and-juliet/characters/Lord Capulet.webp";
import LadyCapuletImg from "../../optimized-assets/stories/romeo-and-juliet/characters/Lady Capulet.webp";
import LadyMontagueImg from "../../optimized-assets/stories/romeo-and-juliet/characters/Lady Montague.webp";
import LordMontagueImg from "../../optimized-assets/stories/romeo-and-juliet/characters/Lord Montague.webp";
import ParisImg from "../../optimized-assets/stories/romeo-and-juliet/characters/paris.webp";
import PrinceEscalusImg from "../../optimized-assets/stories/romeo-and-juliet/characters/Prince Escalus.webp";
import SampsonGregoryImg from "../../optimized-assets/stories/romeo-and-juliet/characters/Sampson and Gregory.webp";
import BenvolioImg from "../../optimized-assets/stories/romeo-and-juliet/characters/Benvolio.webp";
import BalthasarImg from "../../optimized-assets/stories/romeo-and-juliet/characters/Balthasar.webp";
import ApothecaryImg from "../../optimized-assets/stories/romeo-and-juliet/characters/The Apothecary.webp";

export const romeoAndJulietData = {
  id: "romeo-juliet",
  title: "Romeo and Juliet",
  author: "William Shakespeare",
  description:
    "A timeless tragedy of two young lovers from feuding families whose fate is sealed by love and loss.",
  img: RomeoJulietCover,
  video: "https://www.youtube.com/embed/tSfExfrP1oI?si=BufcT2Taj30ofP4A",
  fullStories:
    "https://www.folger.edu/explore/shakespeares-works/romeo-and-juliet/read/",
  characters: [
    {
      name: "Romeo Montague",
      img: RomeoImg,
      lines: "Thus with a kiss I die.",
      description:
        "The male protagonist, who is passionate, impulsive, and romantic young man, about 16 years old. He is deeply emotional and idealistic about love. At first, he’s infatuated with Rosaline, but upon meeting Juliet, he falls in love instantly.",
    },
    {
      name: "Juliet Capulet",
      img: JulietImg,
      lines: "O happy dagger, this is thy sheath; there rust, and let me die.",
      description:
        "The female protagonist, 13-year-old girl who is innocent, strong-willed, loyal, courageous, passionate and from a wealthy family. Though young, she shows maturity, intelligence, and determination. She defies her family for love.",
    },
    {
      name: "Friar Laurence",
      img: FriarLaurenceImg,
      lines: "Wisely and slow; they stumble that run fast.",
      description:
        "A Franciscan priest and wise advisor to both Romeo and Juliet. Kind and peace-loving man who secretly marries Romeo and Juliet, hoping to end the feud between their families.",
    },
    {
      name: "Mercutio",
      img: MercutioImg,
      lines: "A plague o’ both your houses!",
      description:
        "Romeo’s close friend and relative to Prince Escalus. He is witty, clever, and full of humor, often mocking love. His death at the hands of Tybalt marks the turning point of the play.",
    },
    {
      name: "Tybalt Capulet",
      img: TybaltImg,
      lines:
        "What, drawn, and talk of peace! I hate the word, as I hate hell, all Montagues, and thee.",
      description:
        "Juliet’s fiery cousin, quick-tempered and aggressive, who despises the Montagues. His duel with Mercutio leads to tragedy.",
    },
    {
      name: "The Nurse",
      img: NurseImg,
      lines:
        "His name is Romeo, and a Montague; the only son of your great enemy.",
      description:
        "Juliet’s caretaker and confidante. A humorous and talkative woman who has cared for Juliet since birth. She supports Juliet’s romance but later advises her to marry Paris, which hurts Juliet deeply.",
    },
    {
      name: "Lord Capulet",
      img: LordCapuletImg,
      lines: "Hang thee, young baggage! disobedient wretch!",
      description:
        "Juliet’s father. A proud and controlling man who loves Juliet but becomes furious when she refuses to marry Paris.",
    },
    {
      name: "Lady Capulet",
      img: LadyCapuletImg,
      lines:
        "Talk not to me, for I’ll not speak a word. Do as thou wilt, for I have done with thee.",
      description:
        "Juliet’s mother. A distant mother who relies on the Nurse to raise Juliet. She supports her husband’s decision to marry Juliet off to Paris.",
    },
    {
      name: "Lady Montague",
      img: LadyMontagueImg,
      lines: "O, where is Romeo? Saw you him to-day?",
      description:
        "Romeo’s mother. A gentle and caring woman who dies of grief after Romeo’s banishment.",
    },
    {
      name: "Lord Montague",
      img: LordMontagueImg,
      lines: "Thou villain Capulet!—Hold me not, let me go.",
      description:
        "Romeo’s father. Head of the Montague family. He worries about Romeo’s sadness early in the play.",
    },
    {
      name: "Paris",
      img: ParisImg,
      lines: "Sweet flower, with flowers thy bridal bed I strew.",
      description:
        "A nobleman and suitor chosen by Lord Capulet for Juliet, well-mannered, polite, and wealthy young man who genuinely loves Juliet, though she does not love him.",
    },
    {
      name: "Prince Escalus",
      img: PrinceEscalusImg,
      lines: "All are punish’d.",
      description:
        "The ruler of Verona. A fair but strict leader trying to maintain peace between the Montagues and Capulets.",
    },
    {
      name: "Sampson and Gregory",
      img: SampsonGregoryImg,
      lines: "Gregory, o' my word, we'll not carry coals.",
      description:
        "(Minor Characters) Capulet's servants who provoke the street fight in Act I.",
    },
    {
      name: "Benvolio",
      img: BenvolioImg,
      lines:
        "I do but keep the peace. Put up thy sword, or manage it to part these men with me.",
      description:
        "(Minor Character) Romeo’s cousin and friend, peace-loving and loyal, who tries to prevent conflict between the families.",
    },
    {
      name: "Balthasar",
      img: BalthasarImg,
      lines:
        "Then she is well, and nothing can be ill. Her body sleeps in Capel’s monument.",
      description:
        "(Minor Character) Romeo’s loyal servant who brings him the false news of Juliet’s death.",
    },
    {
      name: "The Apothecary",
      img: ApothecaryImg,
      lines: "My poverty, but not my will, consents.",
      description:
        "(Minor Character) The poor pharmacist who sells poison to Romeo.",
    },
  ],
};
