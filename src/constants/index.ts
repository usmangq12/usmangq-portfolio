import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SvgIconComponent } from "@mui/icons-material";

export const navItems: string[] = [
  "HOME",
  "WORK",
  "ABOUT",
  "EXPERIENCES",
  "PORTFOLIO",
];

export const frontendLanguages = [
  { name: "HTML", path: "https://www.w3schools.com/html/" },
  { name: "CSS", path: "https://www.w3schools.com/css/default.asp" },
  { name: "SASS", path: "https://sass-lang.com/" },
  { name: " Chakra UI", path: "https://chakra-ui.com/" },
  { name: " D3.js", path: "https://d3js.org/" },
  { name: "Tailwind", path: "https://tailwindcss.com/" },
  { name: "MUI", path: "https://mui.com/" },
  {
    name: "Bootstrap",
    path: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
  },
  { name: "JavaScript", path: "https://www.w3schools.com/js/default.asp" },
  { name: "React.js", path: "https://reactjs.org/" },
];

export const backendLanguages = [
  { name: "Node JS", path: "https://nodejs.org/en/" },
  { name: "Express", path: "https://expressjs.com/" },
  { name: "PostgreSQL", path: "https://www.postgresql.org/" },
];

export const portfolioDetail = [
  {
    img_poster: "https://rococo-babka-760a17.netlify.app/images/login.jpg",
    text: "Login and Registration Form",
    path: "https://github.com/usmangq12",
  },
  {
    img_poster: "https://rococo-babka-760a17.netlify.app/images/fylo.jpg",
    text: "Fylo Landing Page",
    path: "https://github.com/usmangq12",
  },
  {
    img_poster: "https://rococo-babka-760a17.netlify.app/images/mist.jpg",
    text: "Mist Garden",
    path: "https://github.com/usmangq12",
  },
  {
    img_poster: "https://rococo-babka-760a17.netlify.app/images/weather.jpg",
    text: "Web Weather Application",
    path: "https://github.com/usmangq12",
  },
  {
    img_poster: "https://rococo-babka-760a17.netlify.app/images/note.jpg",
    text: "Note Application",
    path: "https://github.com/usmangq12",
  },
  {
    img_poster: "https://rococo-babka-760a17.netlify.app/images/filterable.jpg",
    text: "Note Application",
    path: "https://github.com/usmangq12",
  },
];

export const contactsMethod = [
  {
    name: "Email",
    contactDetail: "usmangq12@gmail.com",
    path: "mailto:usmangq12@gmail.com",
  },
  {
    name: "Whatsapp",
    contactDetail: "+92 311 4942040",
    path: "https://api.whatsapp.com/send?phone+2348138900164",
  },
  {
    name: "Skype",
    contactDetail: "+92 311 4942040",
    path: "https://join.skype.com/invite/MDJ44XPKrkCa",
  },
];

export const testimonialsItem = [
  {
    img: "https://play-lh.googleusercontent.com/5BgUBYo-maFTSwVBaqebt1wULoe3jyCX0bU1lvmXWI4rM2FnrKO4vl5eK2MpsiiU0K0",
  },
  {
    img: "https://play-lh.googleusercontent.com/5BgUBYo-maFTSwVBaqebt1wULoe3jyCX0bU1lvmXWI4rM2FnrKO4vl5eK2MpsiiU0K0",
  },
  {
    img: "https://play-lh.googleusercontent.com/5BgUBYo-maFTSwVBaqebt1wULoe3jyCX0bU1lvmXWI4rM2FnrKO4vl5eK2MpsiiU0K0",
  },
];

export const links: { href: string; icon: SvgIconComponent }[] = [
  { href: "https://twitter.com/Muhamma28090557", icon: TwitterIcon },
  { href: "https://github.com/usmangq12", icon: GitHubIcon },
  {
    href: "https://instagram.com/uxmangq?igshid=YmMyMTA2M2Y=",
    icon: InstagramIcon,
  },
  {
    href: "https://www.linkedin.com/in/muhammad-usman-759b55129",
    icon: LinkedInIcon,
  },
];
