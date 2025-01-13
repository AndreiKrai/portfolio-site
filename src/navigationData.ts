import { ChipPropsColorOverrides } from "@mui/material";
import { NavigateTo } from "../src/context/navigationContext";
import img from "../src/assets/Blue-mob-1.png";

export interface CardData {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  technology: string;
  chipTitle: "Mobile" | "WEB" | "Backend";
  chipColor: ChipPropsColorOverrides;
  link: string;
  screenshorts: [string, string] | [string, string, string, string];
  descriptionImage: string;
}

const commercialsData: CardData[] = [
  {
    id: 1,
    image: "assets/messo-app-face.png",
    alt: "messo project",
    title: "Messo App",
    subtitle: "Mobile messenger whitout cloud",
    technology:
      "React native | TS | Redux | Node.js | MYSQL | SQL | Firebase | S3 Bucket",
    chipColor: "warning",
    chipTitle: "Mobile",
    link: "",
    screenshorts: [
      "../assets/messo-mob-2.png",
      "../assets/messo-mob-1.png",
      "../assets/messo-mob-3.png",
      "../assets/messo-mob-4.png",
    ],
    descriptionImage: "../assets/messo-mob-h.png",
  },
  {
    id: 2,
    image: "assets/blue-app-face.png",
    alt: "BlueboxDriver project",
    title: "BlueboxDriver App",
    subtitle: "Mobile application for cargo drivers",
    technology: "React native | Node.js | SQL | Firebase | S3 Bucket",
    chipColor: "warning",
    chipTitle: "Mobile",
    link: "",
    screenshorts: [
      "../assets/Blue-mob-1.png",
      "../assets/Blue-mob-2.png",
      "../assets/Blue-mob-3.png",
      "../assets/Blue-mob-4.png",
    ],
    descriptionImage: "../assets/blue-mob-h.png",
  },
  {
    id: 3,
    image: "assets/job-web-2.png",
    alt: "JobApply24 project",
    title: "JobApply24",
    subtitle: "Job seaching portal",
    technology: "REACT | TS | Bootstrap",
    chipColor: "info",
    chipTitle: "WEB",
    link: "",
    screenshorts: ["../assets/job24-2.png", "../assets/job24-3.png"],
    descriptionImage: "../assets/job24-4.png",
  },
  {
    id: 4,
    image: "assets/blue-web-2.png",
    alt: "BlueboxDriver project",
    title: "BlueboxDriver",
    subtitle: "Place client can manage parsel storage",
    technology: "React | SQL | Node.js | Bootstrap | Redux",
    chipColor: "info",
    chipTitle: "WEB",
    link: "",
    screenshorts: ["../assets/blue-2.png", "../assets/blue-3.png"],
    descriptionImage: "../assets/blue-4.png",
  },
  {
    id: 5,
    image: "assets/messo-web-1.png",
    alt: "messo project",
    title: "Messo",
    subtitle: "",
    technology: "React | Bootstrap",
    chipColor: "info",
    chipTitle: "WEB",
    link: "",
    screenshorts: ["../assets/messo-web-2.png", "../assets/messo-web-3.png"],
    descriptionImage: "../assets/messo-mob-h.png",
  },
];
const petData: CardData[] = [
  {
    id: 6,
    image: "assets/node-1.png",
    alt: "messo project",
    title: "Node.js",
    subtitle: "Mobile messenger whitout cloud",
    technology: "Node.js | Express | MangoDB | Mongoose | Postman",
    chipColor: "success",
    chipTitle: "Backend",
    link: "",
    screenshorts: [
      "../assets/Blue-mob-1.png",
      "../assets/Blue-mob-2.png",
      "../assets/Blue-mob-3.png",
    ],
    descriptionImage: "../assets/messo-mob-h.png",
  },
  {
    id: 7,
    image: "assets/netflix-web-1.png",
    alt: "messo project",
    title: "Netflix movie chart",
    subtitle: "Movies owerview site",
    technology: "HTML | CSS | JS | React | Webpack | REST API | TMDB API",
    chipColor: "info",
    chipTitle: "WEB",
    link: "",
    screenshorts: [
      "../assets/Blue-mob-1.png",
      "../assets/Blue-mob-2.png",
      "../assets/Blue-mob-3.png",
    ],
    descriptionImage: "../assets/messo-mob-h.png",
  },
  {
    id: 9,
    image: "assets/studio-1.png",
    alt: "messo project",
    title: "WEB Studio Shop",
    subtitle: "Movies owerview site",
    technology: "HTML | SAAS | JS Vanila | Parcel | GIT",
    chipColor: "info",
    chipTitle: "WEB",
    link: "",
    screenshorts: [
      "../assets/Blue-mob-1.png",
      "../assets/Blue-mob-2.png",
      "../assets/Blue-mob-3.png",
    ],
    descriptionImage: "../assets/messo-mob-h.png",
  },
  {
    id: 10,
    image: "assets/ice-web-1.png",
    alt: "messo project",
    title: "Ice Cream Shop",
    subtitle: "Movies owerview site",
    technology: "HTML | CSS | JS Vanila | Parcel | GIT",
    chipColor: "info",
    chipTitle: "WEB",
    link: "",
    screenshorts: [
      "../assets/Blue-mob-1.png",
      "../assets/Blue-mob-2.png",
      "../assets/Blue-mob-3.png",
    ],
    descriptionImage: "../assets/messo-mob-h.png",
  },
];

const pages = [{ title: "my profile", onClick: "profile" }];

const techList = [
  "REACT",
  "MSQL",
  "SQL",
  "HTML",
  "CSS",
  "SASS",
  "Responsive,Adaptive design",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux,",
  "Web-socket",
  "REST API",
  "GIT",
  "Firebase",
  "Firestore",
  "SQL",
  "NoSQL",
  "Node.js",
  "React Native (Expo)",
];
export { commercialsData, petData, pages, techList };
