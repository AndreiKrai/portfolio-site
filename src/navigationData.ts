import { ChipPropsColorOverrides } from "@mui/material";

export interface CardData {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  technology: string;
  chipTitle: string;
  chipColor: ChipPropsColorOverrides;
}

const commercialsData: CardData[] = [
  {
    image: "assets/contemplative-reptile.jpg",
    alt: "messo project",
    title: "Messo App",
    subtitle: "Mobile messenger whitout cloud",
    technology:
      "React native | TS | Redux | Node.js | MYSQL | SQL | Firebase | S3 Bucket",
    chipColor: "warning",
    chipTitle: "Mobile",
  },
  {
    image: "assets/contemplative-reptile.jpg",
    alt: "BlueboxDriver project",
    title: "BlueboxDriver App",
    subtitle: "Mobile application for cargo drivers",
    technology: "React native | Node.js | SQL | Firebase | S3 Bucket",
    chipColor: "warning",
    chipTitle: "Mobile",
  },
  {
    image: "assets/job-web-2.png",
    alt: "JobApply24 project",
    title: "JobApply24",
    subtitle: "Job seaching portal",
    technology: "REACT | TS | Bootstrap",
    chipColor: "info",
    chipTitle: "WEB",
  },
  {
    image: "assets/blue-web-1.png",
    alt: "BlueboxDriver project",
    title: "BlueboxDriver",
    subtitle: "Place client can manage parsel storage",
    technology: "React | SQL | Node.js | Bootstrap | Redux",
    chipColor: "info",
    chipTitle: "WEB",
  },
  {
    image: "assets/messo-web-1.png",
    alt: "messo project",
    title: "Messo",
    subtitle: "",
    technology: "React | Bootstrap",
    chipColor: "info",
    chipTitle: "WEB",
  },
];
const petData: CardData[] = [
  {
    image: "assets/node-1.png",
    alt: "messo project",
    title: "Node.js",
    subtitle: "Mobile messenger whitout cloud",
    technology: "Node.js | Express | MangoDB | Mongoose | Postman",
    chipColor: "success",
    chipTitle: "Backend",
  },
  {
    image: "assets/netflix-web-1.png",
    alt: "messo project",
    title: "Netflix movie chart",
    subtitle: "Movies owerview site",
    technology: "HTML | CSS | JS | React | Webpack | REST API | TMDB API",
    chipColor: "info",
    chipTitle: "WEB",
  },
  {
    image: "assets/studio-1.png",
    alt: "messo project",
    title: "WEB Studio Shop",
    subtitle: "Movies owerview site",
    technology: "HTML | SAAS | JS Vanila | Parcel | GIT",
    chipColor: "info",
    chipTitle: "WEB",
  },
  {
    image: "assets/ice-web-1.png",
    alt: "messo project",
    title: "Ice Cream Shop",
    subtitle: "Movies owerview site",
    technology: "HTML | CSS | JS Vanila | Parcel | GIT",
    chipColor: "info",
    chipTitle: "WEB",
  },
];

const pages = [
  { title: "ABOUT", url: "/" },
  { title: "CONTACT", url: "/" },
];
export { commercialsData, petData, pages };
