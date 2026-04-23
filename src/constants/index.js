import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  skyrabbit,
  medimate,
  crypto, 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack & Mobile Developer",
    company_name: "SkyRabbit (Featured Project)",
    icon: starbucks,
    iconBg: "#fff",
    date: "2024 - Present",
    points: [
      "Built a cross-platform mobile app (iOS & Android) from scratch using React Native + Expo, featuring real-time chat, live weather feeds, IoT sensor dashboards, and an embedded AI assistant.",
      "Architected a Node.js/Express + Firebase backend with MongoDB, designing RESTful APIs that handle concurrent sensor payloads and messaging with sub-300ms response times under load.",
      "Integrated third-party weather and AI APIs with graceful fallback handling to keep core features functional during upstream outages.",
      "Managed end-to-end product delivery across web, mobile, and IoT domains independently.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Stegno + Crypto Web App",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Built a browser-based steganography tool to encode and decode secret messages within images using AES encryption, with zero server-side data storage.",
      "Designed an intuitive drag-and-drop UI with real-time encode/decode feedback, streamlining the user workflow compared to traditional desktop tools.",
      "Implemented fully client-side cryptographic operations using React.js for maximum privacy and security.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "MedReminder App",
    icon: shopify,
    iconBg: "#fff",
    date: "2023",
    points: [
      "Developed a medication scheduling application with push notification reminders to reduce missed-dose errors for users.",
      "Implemented local and cloud synchronization via Firebase to ensure reminder persistence across device reinstalls.",
      "Delivered a seamless cross-platform mobile experience using React Native.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "E-Book Digital Library",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Built a searchable web platform to catalogue and serve digitized versions of old and damaged books using HTML, CSS, and JavaScript.",
      "Implemented full-text search with keyword highlighting to enhance content accessibility for users.",
      "Focused on responsive design and clean UI to improve discoverability of archived content.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ruthik proved me wrong.",
    name: "Bhoomi",
    designation: "CFO",
    company: "Acme Co",
    image: "https://images.pexels.com/photos/30276533/pexels-photo-30276533.jpeg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ruthik does.",
    name: "Ranganath",
    designation: "COO",
    company: "DEF Corp",
    image: "https://images.pexels.com/photos/2382808/pexels-photo-2382808.jpeg",
  },
  {
    testimonial:
      "After Ruthik optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Shambavi",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://images.pexels.com/photos/30002394/pexels-photo-30002394.jpeg",
  },
];

const projects = [
  {
    name: "SkyRabbit",
    description:
      "AI-powered cross-platform mobile app featuring real-time chat, live weather feeds, IoT sensor dashboards, and an embedded AI assistant — built end-to-end for iOS and Android.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: skyrabbit,
    source_code_link: "https://github.com/ruthikx/skyRabbit.git",
  },
  {
    name: "Stegno + Crypto",
    description:
      "Browser-based tool to encode and decode secret messages inside images using steganography combined with AES encryption, with zero server-side data storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "aes-encryption",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/ruthikx/Stegno-Crypto.gitx",
  },
  // {
  //   name: "MedReminder App",
  //   description:
  //     "Medication scheduling mobile app with push notification reminders and local and cloud synchronization via Firebase to ensure persistence across device reinstalls.",
  //   tags: [
  //     {
  //       name: "react-native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "firebase",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "expo",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: medimate,
  //   source_code_link: "https://github.com/ruthikx",
  // },
];

export { services, technologies, experiences, testimonials, projects };
