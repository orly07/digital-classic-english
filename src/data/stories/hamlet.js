// Hamlet - Images
import HamletCover from "../../optimized-assets/stories/hamlet/cover.webp";
import HamletImg from "../../optimized-assets/stories/hamlet/Hamlet.webp";
import KingClaudiusImg from "../../optimized-assets/stories/hamlet/KingClaudius.webp";
import QueenGertrudeImg from "../../optimized-assets/stories/hamlet/QueenGertrude.webp";
import PoloniusImg from "../../optimized-assets/stories/hamlet/Polonius.webp";
import OpheliaImg from "../../optimized-assets/stories/hamlet/Ophelia.webp";
import LaertesImg from "../../optimized-assets/stories/hamlet/Laertes.webp";
import HoratioImg from "../../optimized-assets/stories/hamlet/Horatio.webp";
import RosencrantzImg from "../../optimized-assets/stories/hamlet/Rosencrantz.webp";
import GuildensternImg from "../../optimized-assets/stories/hamlet/Guildenstern.webp";
import FortinbrasImg from "../../optimized-assets/stories/hamlet/Fortinbras.webp";
import OsricImg from "../../optimized-assets/stories/hamlet/Osric.webp";
import MarcellusImg from "../../optimized-assets/stories/hamlet/Marcellus.webp";
import BernardoImg from "../../optimized-assets/stories/hamlet/Bernardo.webp";
import FranciscoImg from "../../optimized-assets/stories/hamlet/Francisco.webp";
import ReynaldoImg from "../../optimized-assets/stories/hamlet/Reynaldo.webp";
import GravediggersImg from "../../optimized-assets/stories/hamlet/Gravediggers.webp";
import PriestImg from "../../optimized-assets/stories/hamlet/Priest.webp";
import GentlemanImg from "../../optimized-assets/stories/hamlet/Gentleman.webp";
import VoltemandCorneliusImg from "../../optimized-assets/stories/hamlet/VoltemandCornelius.webp";
import CaptainImg from "../../optimized-assets/stories/hamlet/Captain.webp";
import AmbassadorsImg from "../../optimized-assets/stories/hamlet/Ambassadors.webp";
import MessengersServantsImg from "../../optimized-assets/stories/hamlet/MessengersServants.webp";

export const hamletData = {
  id: "hamlet",
  title: "Hamlet",
  author: "William Shakespeare",
  description:
    "A tragic story about revenge, betrayal, and madness set in the royal court of Denmark. It follows Prince Hamlet, who is devastated by his father’s sudden death and his mother Queen Gertrude’s quick remarriage to his uncle, King Claudius. Haunted by this truth, Hamlet vows revenge but becomes trapped between thought and action. In the end, a duel between Hamlet and Laertes brings tragedy to everyone — Hamlet, Claudius, Gertrude, and Laertes all die.",
  img: HamletCover,
  video: "https://www.youtube.com/embed/6md4g-WmdUs?si=gSZhMftFBFS5uev_",
  fullStories: "https://www.folger.edu/explore/shakespeares-works/hamlet/read/",
  characters: [
    {
      name: "Hamlet",
      img: HamletImg,
      lines: "",
      description:
        "Prince of Denmark, son of the late King Hamlet and Queen Gertrude. The main character who seeks revenge for his father’s murder.",
    },
    {
      name: "King Claudius",
      img: KingClaudiusImg,
      lines: "",
      description:
        "Hamlet’s uncle and the new King of Denmark. He murders his brother, the former king, to take the throne and marry Gertrude.",
    },
    {
      name: "Queen Gertrude",
      img: QueenGertrudeImg,
      lines: "",
      description:
        "Hamlet’s mother and the Queen of Denmark. She quickly remarries Claudius after her husband’s death.",
    },
    {
      name: "Polonius",
      img: PoloniusImg,
      lines: "",
      description:
        "The Lord Chamberlain of the Danish court, father of Laertes and Ophelia. Meddlesome and talkative, he is accidentally killed by Hamlet.",
    },
    {
      name: "Ophelia",
      img: OpheliaImg,
      lines: "",
      description:
        "Polonius’s daughter and Hamlet’s love interest. She goes mad with grief after her father’s death and drowns herself.",
    },
    {
      name: "Laertes",
      img: LaertesImg,
      lines: "",
      description:
        "Polonius’s son and Ophelia’s brother. He seeks revenge on Hamlet for killing their father, leading to the tragic duel.",
    },
    {
      name: "Horatio",
      img: HoratioImg,
      lines: "",
      description:
        "Hamlet’s loyal friend and confidant. He remains alive at the end to tell Hamlet’s story.",
    },
    {
      name: "Rosencrantz",
      img: RosencrantzImg,
      lines: "",
      description:
        "Hamlet’s old schoolmate, summoned by Claudius to spy on him under the guise of friendship.",
    },
    {
      name: "Guildenstern",
      img: GuildensternImg,
      lines: "",
      description:
        "Another of Hamlet’s schoolmates who joins Rosencrantz in spying on him for the king.",
    },
    {
      name: "Fortinbras",
      img: FortinbrasImg,
      lines: "",
      description:
        "Prince of Norway whose father was killed by King Hamlet. He leads an army toward Denmark and restores order at the end.",
    },
    {
      name: "Osric",
      img: OsricImg,
      lines: "",
      description:
        "A foppish courtier who arranges the fatal duel between Hamlet and Laertes.",
    },
    {
      name: "Marcellus",
      img: MarcellusImg,
      lines: "",
      description:
        "A guard at Elsinore who first witnesses the Ghost of King Hamlet.",
    },
    {
      name: "Bernardo",
      img: BernardoImg,
      lines: "",
      description:
        "Another guard who sees the Ghost along with Marcellus and Horatio.",
    },
    {
      name: "Francisco",
      img: FranciscoImg,
      lines: "",
      description:
        "A soldier and guard at Elsinore who appears in the opening scene.",
    },
    {
      name: "Reynaldo",
      img: ReynaldoImg,
      lines: "",
      description:
        "Servant to Polonius, sent to spy on Laertes in Paris and report on his behavior.",
    },
    {
      name: "The Gravediggers (Clowns)",
      img: GravediggersImg,
      lines: "",
      description:
        "Two workers who dig Ophelia’s grave. They provide dark comic relief and reflect on death’s equality.",
    },
    {
      name: "A Priest",
      img: PriestImg,
      lines: "",
      description:
        "Performs Ophelia’s funeral rites, revealing society’s judgment of her death.",
    },
    {
      name: "A Gentleman",
      img: GentlemanImg,
      lines: "",
      description:
        "A minor court attendant who brings news and assists Horatio and others throughout the play.",
    },
    {
      name: "Voltemand and Cornelius",
      img: VoltemandCorneliusImg,
      lines: "",
      description:
        "Courtiers sent by Claudius to Norway to deliver messages to Fortinbras’s uncle.",
    },
    {
      name: "Captain",
      img: CaptainImg,
      lines: "",
      description:
        "A soldier in Fortinbras’s army who speaks briefly with Hamlet in Act IV, symbolizing action versus hesitation.",
    },
    {
      name: "Ambassadors from England",
      img: AmbassadorsImg,
      lines: "",
      description:
        "Envoys who deliver the grim message that Rosencrantz and Guildenstern have been executed.",
    },
    {
      name: "Messengers and Servants",
      img: MessengersServantsImg,
      lines: "",
      description:
        "Various unnamed attendants and bearers of news throughout the play, contributing to the court’s intrigue and tension.",
    },
  ],
};
