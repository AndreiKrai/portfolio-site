import { ChipPropsColorOverrides } from "@mui/material";
import handleDownload from "./servises/handleDowload.ts";
import messoApp  from "./assets/messo-app-face.png";
import blueApp from "./assets/blue-app-face.png";
import jobApply24 from  "./assets/job-web-2.png";
import blueboxRent from "./assets/blue-web-2.png";
import messo from  "./assets/messo-web-1.png";
import node from  "./assets/node-1.png";
import netflix from "./assets/netflix-web-1.png";
import webstudio from  "./assets/studio-1.png";
import ice from  "./assets/ice-web-1.png";


export interface CardData {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  technology: string;
  chipTitle: "Mobile" | "WEB" | "Backend";
  chipColor: ChipPropsColorOverrides;
  link?: string;
  gitLink?:string;
  screenshorts?: [string, string] | [string, string, string, string];
  descriptionImage: string;
  projectReview:string;
}

const commercialsData: CardData[] = [
  {
    id: 1,
    image: messoApp,
    alt: "messo project",
    title: "Messo",
    subtitle: "Mobile messenger whitout cloud",
    technology:
      "React native | TS | Redux | Node.js | MYSQL | SQL | Firebase | S3 Bucket",
    chipColor: "warning",
    chipTitle: "Mobile",
    link: "https://apps.apple.com/us/app/messo-secure-private-messaging/id6447208302?itsct=apps_box_badge&itscg=30200",
    screenshorts: [
      "../assets/messo-mob-2.png",
      "../assets/messo-mob-1.png",
      "../assets/messo-mob-3.png",
      "../assets/messo-mob-4.png",
    ],
    descriptionImage: "../assets/messo-mob-5.png",
    projectReview:"The main task was to develop and deliver a secure messenger application built entirely from scratch. The app was designed to prioritize user data privacy by ensuring that no data is stored in the cloud. Instead, all data resides securely on the user's device, with the capability to export it as an encrypted file for transfer to another device. To maintain a high level of security, all data within the app is fully encrypted, and we implemented custom messaging logic without utilizing any third-party messaging libraries. This approach allowed us to ensure complete control over the messaging system's security and functionality. The Minimum Viable Product (MVP) was completed and successfully launched on both the iOS App Store and the Google Play Store, marking a significant milestone in the project's development."
  },
  {
    id: 2,
    image: blueApp,
    alt: "BlueboxDriver project",
    title: "BlueboxDriver",
    subtitle: "Mobile application for cargo drivers",
    technology: "React native | Node.js | SQL | Firebase | S3 Bucket",
    chipColor: "warning",
    chipTitle: "Mobile",
    link: "https://apps.apple.com/us/app/bluebox-rent/id6450204692",
    screenshorts: [
      "../assets/Blue-mob-1.png",
      "../assets/Blue-mob-2.png",
      "../assets/Blue-mob-3.png",
      "../assets/Blue-mob-4.png",
    ],
    descriptionImage: "../assets/blue-mob-h.png",
    projectReview:"A comprehensive application was successfully developed and delivered for a transport company, tailored specifically for their drivers. The app enables individual driver logins and provides a centralized platform for managing all transport service operations. Through the app, drivers can seamlessly check orders, search for clients, create packages, and handle various logistics tasks in one place. The application was completed and successfully launched on the App Store, aligning with the company's requirements and providing an efficient solution for their drivers."
  },
  {
    id: 3,
    image:jobApply24,
    alt: "JobApply24 project",
    title: "JobApply24",
    subtitle: "Job seaching portal",
    technology: "REACT | TS | Bootstrap",
    chipColor: "info",
    chipTitle: "WEB",
    link: "https://jobapply24.com/" ,
    screenshorts: ["../assets/job24-2.png", "../assets/job24-3.png"],
    descriptionImage: "../assets/job24-4.png",
    projectReview:"A fully functional job search portal was developed and deployed, designed to connect job seekers and employers seamlessly. The platform enables users to create profiles, upload resumes, search for job opportunities, and apply for positions effortlessly. Employers can post job listings, manage applications, and communicate with potential candidates directly through the portal. The project emphasized user-friendly design, efficient search functionality, and secure data handling. The portal was successfully launched and is now operational, providing a robust solution for streamlining recruitment processes and enhancing the job-seeking experience."
  },
  {
    id: 4,
    image: blueboxRent ,
    alt: "BlueboxDriver",
    title: "BlueboxRent",
    subtitle: "Storage servise site",
    technology: "React | SQL | Node.js | Bootstrap | Redux",
    chipColor: "info",
    chipTitle: "WEB",
    link: "https://bluebox.rent/",
    screenshorts: ["../assets/blue-2.png", "../assets/blue-3.png"],
    descriptionImage: "../assets/blue-4.png",
    projectReview:"A comprehensive web portal was developed for a transport company, providing tailored solutions for both clients and administration. The platform enables clients to manage orders, track deliveries, and access real-time updates. Meanwhile, the administrative panel offers tools for overseeing business operations, managing logistics, and ensuring smooth workflow across the company. The system seamlessly integrates with a dedicated mobile application for drivers, allowing them to log in, view assigned tasks, and manage transport services efficiently from their devices. This interconnected approach ensures synchronized data across the web portal and the mobile app, enhancing operational transparency and overall efficiency. The solution was successfully implemented and is actively streamlining the company’s transport operations."
  },
  {
    id: 5,
    image: messo,
    alt: "messo project",
    title: "Messo",
    subtitle: "Product info site",
    technology: "React | Bootstrap",
    chipColor: "info",
    chipTitle: "WEB",
    link: "https://messo.io/",
    screenshorts: ["../assets/messo-web-2.png", "../assets/messo-web-3.png"],
    descriptionImage: "../assets/messo-mob-5.png",
    projectReview:"A website was developed for a secure messaging app, highlighting its privacy features. The site explains that the app stores all data on the user’s device, ensuring no cloud storage, and allows for secure data export and transfer. It also emphasizes that the messaging system operates without third-party libraries, enhancing security. The website provides clear, concise information about these features in a user-friendly format."
  },
];
const petData: CardData[] = [
  {
    id: 6,
    image: node,
    alt: "Node",
    title: "Node.js",
    subtitle: "Mobile messenger whitout cloud",
    technology: "Node.js | Express | MangoDB | Mongoose | Postman",
    chipColor: "success",
    chipTitle: "Backend",
    gitLink:"https://github.com/AndreiKrai/goit-reactNode-hw-Rest-API",
    descriptionImage: "../assets/node-h.png",
    projectReview:"A personal project was created using Node.js and Express for the backend, incorporating modern technologies such as MongoDB for data storage,and JWT for authentication. The project features RESTful APIs for handling client requests and uses middleware for improved error handling and request validation. The backend is designed to be scalable and secure, following best practices for modern web development. This project serves as a solid example of building a robust backend architecture with current industry tools and technologies."
  },
  {
    id: 7,
    image: netflix,
    alt: "netflix",
    title: "Movie chart",
    subtitle: "Movies owerview site",
    technology: "HTML | CSS | JS | React | Webpack | REST API | TMDB API",
    chipColor: "info",
    chipTitle: "WEB",
    link:"https://andreikrai.github.io/Net-flix-movie-chart",
    gitLink: "https://github.com/AndreiKrai/Net-flix-movie-chart",
    screenshorts: [
      "../assets/net-web-1.png",
      "../assets/net-web-2.png",
    ],
    descriptionImage: "../assets/tmbd.webp",
    projectReview:"A personal project was developed utilizing the TMDB API to create a movie database application. The app allows users to search for movies based on various criteria such as title, genre, release year, or popularity. Detailed information about each movie, including its synopsis, cast, and ratings, is fetched and displayed dynamically. The project is built with a focus on user-friendly design and efficient API integration, offering seamless search functionality and real-time data retrieval. This project highlights skills in API consumption, responsive UI development, and handling complex data structures."
  },
  {
    id: 9,
    image: webstudio,
    alt: "WEB Studio Shop",
    title: "WEB Studio Shop",
    subtitle: "Movies owerview site",
    technology: "HTML | SAAS | JS Vanila | Parcel | GIT",
    chipColor: "info",
    chipTitle: "WEB",
    link: "https://andreikrai.github.io/WEB-Studio-goit-markup-hw-CSS-HTML-/",
    gitLink:"https://github.com/AndreiKrai/WEB-Studio-goit-markup-hw-CSS-HTML-",
    screenshorts: [
      "../assets/web-1.png",
      "../assets/web-2.png",
    ],
    descriptionImage: "../assets/web-h.png",
    projectReview:"A personal project was created to practice and enhance skills in HTML, SASS, and responsive UI development. The project involved designing a fully responsive website with modern layouts and styling techniques, ensuring optimal display across various screen sizes and devices. Custom SASS modules were used to organize and streamline the styling process, emphasizing scalability and maintainability. This hands-on experience focused on implementing flexible grids, media queries, and interactive design elements to deliver a polished and user-friendly interface."
  },
  {
    id: 10,
    image: ice,
    alt: "Ice Cream Shop",
    title: "Ice Cream Shop",
    subtitle: "Movies owerview site",
    technology: "HTML | CSS | JS Vanila | Parcel | GIT",
    chipColor: "info",
    chipTitle: "WEB",
    link: "https://andreikrai.github.io/Ice-cream-command-project/",
    gitLink:"https://github.com/AndreiKrai/Ice-cream",
    screenshorts: [
      "../assets/ice-web-2.png",
      "../assets/ice-web-3.png",
    ],
    descriptionImage: "../assets/ice-h.png",
projectReview:"A group project was undertaken to develop a dynamic website for an ice cream shop using vanilla JavaScript, HTML, and CSS. The project aimed to deliver a clean and visually appealing interface, featuring interactive elements like a dynamic menu, and engaging animations."
  },
];

const pages = [{ title: "Download CV", onClick: handleDownload }];

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
