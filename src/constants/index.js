const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// constants.js
const counterItems = [
  { label: "LEETCODE RATING", value: 1600, suffix: "+", key: "experience" },
  { label: "CODEFORCES RATING", value: 1200, suffix: "+", key: "clients" },
  { label: "CODECHEF RATING", value: 1300, suffix: "+", key: "projects" },
  { label: "TOTAL PROBLEMS SOLVED", value: 800, suffix: "+", key: "retention" },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/icons8-github-500.png",
    url: "https://github.com/Ks167948"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/kishor-solanki-507514285/"
  },
];

export {
  words,
  counterItems,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
