// ICONS
import { FaBookOpen, FaLightbulb, FaHandshake, FaGlobe } from "react-icons/fa";

// TEAM IMAGES
import GeanImg from "../assets/team/gean-jpg.jpg";
import DarcyImg from "../assets/team/darcy-jpg.jpg";
import IrisImg from "../assets/team/iris-jpg.jpg";
import OrlandoImg from "../assets/team/orlando.webp";

// STORY IMAGES
import RomeoJulietCover from "../assets/stories/romeo-and-juliet/romeo-and-juliet-cover.webp";
import RomeoImg from "../assets/stories/romeo-and-juliet/characters/romeo.webp";
import JulietImg from "../assets/stories/romeo-and-juliet/characters/juliet.webp";
import FriarLaurenceImg from "../assets/stories/romeo-and-juliet/characters/friar-laurence.webp";
import MercutioImg from "../assets/stories/romeo-and-juliet/characters/mercutio.webp";
import TybaltImg from "../assets/stories/romeo-and-juliet/characters/Tybalt Capulet.webp";
import NurseImg from "../assets/stories/romeo-and-juliet/characters/The Nurse.webp";
import LordCapuletImg from "../assets/stories/romeo-and-juliet/characters/Lord Capulet.webp";
import LadyCapuletImg from "../assets/stories/romeo-and-juliet/characters/Lady Capulet.webp";
import LadyMontagueImg from "../assets/stories/romeo-and-juliet/characters/Lady Montague.webp";
import LordMontagueImg from "../assets/stories/romeo-and-juliet/characters/Lord Montague.webp";
import ParisImg from "../assets/stories/romeo-and-juliet/characters/paris.webp";
import PrinceEscalusImg from "../assets/stories/romeo-and-juliet/characters/Prince Escalus.webp";
import SampsonGregoryImg from "../assets/stories/romeo-and-juliet/characters/Sampson and Gregory.webp";
import BenvolioImg from "../assets/stories/romeo-and-juliet/characters/Benvolio.webp";
import BalthasarImg from "../assets/stories/romeo-and-juliet/characters/Balthasar.webp";
import ApothecaryImg from "../assets/stories/romeo-and-juliet/characters/The Apothecary.webp";

// The Knight Tale
import TheKnightTaleCover from "../assets/stories/the-knights-tale/the-knight-tale-cover.jpg";
import TheseusImg from "../assets/stories/the-knights-tale/theseus.jpg";
import HippolytaImg from "../assets/stories/the-knights-tale/hippolyta.jpg";
import EmelyeImg from "../assets/stories/the-knights-tale/emelye.jpg";
import PalamonImg from "../assets/stories/the-knights-tale/palamon.jpg";
import ArciteImg from "../assets/stories/the-knights-tale/arcite.jpg";
import CreonImg from "../assets/stories/the-knights-tale/creo.jpg";
import PerotheusImg from "../assets/stories/the-knights-tale/perotheus.jpg";
import EgeusImg from "../assets/stories/the-knights-tale/egeus.jpg";
import VenusImg from "../assets/stories/the-knights-tale/venus.jpg";
import MarsImg from "../assets/stories/the-knights-tale/mars.jpg";
import DianaImg from "../assets/stories/the-knights-tale/diana.jpg";
import SaturnImg from "../assets/stories/the-knights-tale/saturn.jpg";
import JailerImg from "../assets/stories/the-knights-tale/jailer.jpg";
import ServantsImg from "../assets/stories/the-knights-tale/the-servants.jpg";

// STORIES
export const storiesData = [
  {
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
        lines:
          "O happy dagger, this is thy sheath; there rust, and let me die.",
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
  },

  // The Knight's Tale
  {
    id: "the-knights-tale",
    title: "The Knight's Tale",
    author: "Geoffrey Chaucer",
    description:
      "Two knights, Palamon and Arcite, both fall in love with the same lady, Emily. Their friendship turns into deadly rivalry, and fate decides their tragic ending.",
    img: TheKnightTaleCover,
    video: "https://www.youtube.com/embed/f58u4bDlmnw?si=1zaUJ_-ZRhJkdFyU",
    fullStories:
      "https://www.owleyes.org/text/canterbury-tales/read/the-knights-tale#root-218796-3",
    characters: [
      {
        name: "Theseus",
        img: TheseusImg,
        lines: "",
        description:
          "He is the Duke of Athens, a noble and wise ruler who values order and justice. After winning a war against Thebes, he shows mercy and fairness. Theseus represents the ideal leader in both love and law, balancing power with compassion.",
      },
      {
        name: "Hippolyta",
        img: HippolytaImg,
        lines: "",
        description:
          "She is the Queen of the Amazons and wife of Theseus. Once a warrior queen, she now symbolizes peace and unity, showing how strength can exist alongside grace and harmony.",
      },
      {
        name: "Emelye (Emily)",
        img: EmelyeImg,
        lines: "",
        description:
          "She is the younger sister of Hippolyta and the woman both Palamon and Arcite fall in love with. Emelye is beautiful, kind, and pure, representing the image of ideal womanhood in medieval courtly love.",
      },
      {
        name: "Palamon",
        img: PalamonImg,
        lines: "",
        description:
          "A noble Theban knight who is captured and imprisoned by Theseus. While in prison, he sees Emelye and immediately falls in love with her. His love is sincere and faithful, showing devotion and loyalty above all.",
      },
      {
        name: "Arcite",
        img: ArciteImg,
        lines: "",
        description:
          "Palamon’s cousin and fellow prisoner. He also falls in love with Emelye, but his love is more passionate and ambitious. Arcite’s actions reveal the struggle between desire and honor.",
      },
      {
        name: "Creon",
        img: CreonImg,
        lines: "",
        description:
          "The cruel king of Thebes who disrespects the dead and rules with tyranny. His defeat by Theseus begins the events of the story. Creon represents pride, injustice, and the downfall of corrupt rulers.",
      },
      {
        name: "Perotheus",
        img: PerotheusImg,
        lines: "",
        description:
          "A loyal friend of both Theseus and Arcite. His friendship with Arcite helps to free him from prison. Perotheus stands for loyalty and the value of true friendship.",
      },
      {
        name: "Egeus",
        img: EgeusImg,
        lines: "",
        description:
          "Theseus’s old and wise father. He offers guidance and reminds Theseus about destiny and how people must accept the will of the gods.",
      },
      {
        name: "Venus",
        img: VenusImg,
        lines: "",
        description:
          "The goddess of love. Palamon prays to her for success in love, showing his pure emotional devotion. She symbolizes love’s gentleness and constancy.",
      },
      {
        name: "Mars",
        img: MarsImg,
        lines: "",
        description:
          "The god of war. Arcite prays to him for victory in battle, showing his fiery passion and ambition. Mars symbolizes strength, conflict, and desire.",
      },
      {
        name: "Diana",
        img: DianaImg,
        lines: "",
        description:
          "The goddess of chastity and the hunt. Emelye prays to her because she wishes to remain unmarried and pure. Diana represents independence and the freedom of choice.",
      },
      {
        name: "Saturn",
        img: SaturnImg,
        lines: "",
        description:
          "The god of fate and time who has the final say in the outcome of the story. He shows that destiny controls human life no matter what mortals plan.",
      },
      {
        name: "Jailer (or Gaoler)",
        img: JailerImg,
        lines: "",
        description:
          "The man who watches over Palamon and Arcite while they are imprisoned. He represents the control of society and the limitations placed on individuals by authority.",
      },
      {
        name: "The Servants and Attendants",
        img: ServantsImg,
        lines: "",
        description:
          "Unnamed figures who serve Theseus and others. They add to the courtly setting and help show the order and discipline of noble life in Athens.",
      },
    ],
  },
];

// SONNETS
import Sonnet18Cover from "../assets/sonnets/Sonnet18.png";
import Sonnet29Cover from "../assets/sonnets/Sonnet29.png";
import Sonnet73Cover from "../assets/sonnets/Sonnet73.png";
import Soonet55Cover from "../assets/sonnets/Sonnet55.png";

export const sonnetsData = [
  {
    id: "sonnet-18",
    title: "Sonnet 18",
    author: "William Shakespeare",
    description: "A celebration of beauty and love.",
    img: Sonnet18Cover,
    content: `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date:
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance or nature's changing course untrimm'd;
But thy eternal summer shall not fade
Nor lose possession of that fair thou owest;
Nor shall Death brag thou wander'st in his shade,
When in eternal lines to time thou growest:
So long as men can breathe or eyes can see,
So long lives this, and this gives life to thee.`,
  },
  {
    id: "sonnet-29",
    title: "Sonnet 29",
    author: "William Shakespeare",
    description: "When, in disgrace with fortune and men’s eyes",
    img: Sonnet29Cover,
    content: `When, in disgrace with fortune and men’s eyes,
I all alone beweep my outcast state,
And trouble deaf heaven with my bootless cries,
And look upon myself and curse my fate,
Wishing me like to one more rich in hope,
Featured like him, like him with friends possessed,
Desiring this man’s art and that man’s scope,
With what I most enjoy contented least;
Yet in these thoughts myself almost despising,
Haply I think on thee—and then my state,
Like to the lark at break of day arising
From sullen earth, sings hymns at heaven’s gate;
For thy sweet love remembered such wealth brings
That then I scorn to change my state with kings.`,
  },
  {
    id: "sonnet-73",
    title: "Sonnet 73",
    author: "William Shakespeare",
    description: "That time of year thou mayst in me behold",
    img: Sonnet73Cover,
    content: `That time of year thou mayst in me behold
When yellow leaves, or none, or few, do hang
Upon those boughs which shake against the cold,
Bare ruined choirs, where late the sweet birds sang.
In me thou see’st the twilight of such day
As after sunset fadeth in the west,
Which by and by black night doth take away,
Death’s second self, that seals up all in rest.
In me thou see’st the glowing of such fire
That on the ashes of his youth doth lie,
As the death-bed whereon it must expire,
Consumed with that which it was nourished by.
This thou perceiv’st, which makes thy love more strong,
To love that well which thou must leave ere long.`,
  },
  {
    id: "sonnet-55",
    title: "Sonnet 55",
    author: "William Shakespeare",
    description: "Not marble, nor the gilded monuments",
    img: Soonet55Cover,
    content: `Not marble, nor the gilded monuments
Of princes, shall outlive this powerful rhyme;
But you shall shine more bright in these contents
Than unswept stone, besmeared with sluttish time.
When wasteful war shall statues overturn,
And broils root out the work of masonry,
Nor Mars his sword, nor war’s quick fire shall burn
The living record of your memory.
’Gainst death, and all-oblivious enmity,
Shall you pace forth; your praise shall still find room,
Even in the eyes of all posterity
That wear this world out to the ending doom.
So, till the judgment that yourself arise,
You live in this, and dwell in lovers’ eyes.`,
  },

  // Add more sonnets as needed
];

// About Section Data
export const missionVisionData = [
  {
    title: "Our Mission",
    content:
      "To empower learners and educators by making literature more immersive, accessible, and enjoyable through digital storytelling.",
  },
  {
    title: "Our Vision",
    content:
      "To transform literature education into an inspiring journey where classic and modern stories come alive for all ages.",
  },
  {
    title: "Core Values",
    values: [
      { icon: FaBookOpen, text: "Passion for Literature" },
      { icon: FaLightbulb, text: "Innovation in Education" },
      { icon: FaHandshake, text: "Collaboration & Inclusivity" },
      { icon: FaGlobe, text: "Lifelong Learning" },
    ],
  },
];

export const teamData = [
  {
    name: "Gean Villamor",
    role: "Project Lead",
    description: "Leads the thesis project and ensures overall progress.",
    image: GeanImg,
  },
  {
    name: "Darcy Mae Tabafunda",
    role: "Theoretical Framework Specialist",
    description: "Builds and writes the theoretical and conceptual foundation.",
    image: DarcyImg,
  },
  {
    name: "Iris Jean Polintang",
    role: "Research & Documentation Specialist",
    description: "Assists in research, writing, and documentation.",
    image: IrisImg,
  },
  {
    name: "Orlando Jr. Dela Cruz",
    role: "Web Developer",
    description:
      "Designs and develops the website’s frontend interface, ensuring functionality, responsiveness, and a user-friendly experience.",
    image: OrlandoImg,
  },
];

// Contact Information
export const contactData = {
  email: "classicstories@gmail.com",
  phone: "09095984478",
  address: "Candelaria, Quezon",
  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
};
