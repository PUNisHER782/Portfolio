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
  threejs,
  tech,
  cyco,
  techcom,
  graphics,
  adamas,
  CYCODERS,
  techwizard,
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
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web & Graphics Designer",
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
    title: "Front-End Developer",
    company_name: "Adamas University",
    icon: adamas,
    iconBg: "#F0F3F5",
    date: "March 2023 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Cy-Coders Club",
    icon: CYCODERS,
    iconBg: "#F7F7F7",
    date: "Jan 2023 - Feb 2024",
    points: [
      "Led the design and development of visual content for the Cy-Coders Club website, ensuring a cohesive and engaging user experience.",
      "Created eye-catching graphics, illustrations, and layouts that aligned with the club’s brand identity and digital presence",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Enhanced the website’s visual appeal through innovative design concepts, focusing on user engagement and accessibility.",
      "Successfully revamped the website’s overall design, leading to increased user engagement and positive feedback from club members and visitors.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Tech-Wizard",
    icon: techwizard,
    iconBg: "#000000",
    date: "Jul 2024 - Present",
    points: [
      "Spearheaded the establishment and growth of Tech Wizard, focusing on delivering innovative digital solutions, including website development, custom web applications, and graphic design.",
      "Managed and led a diverse team of developers, designers, and digital strategists to execute projects that meet client specifications and exceed expectations.",
      "Designed and developed visually appealing and user-friendly interfaces, ensuring an optimal user experience across all devices and platforms.",
      "Engaged in continuous learning and adoption of the latest industry trends and technologies to keep the company at the forefront of digital innovation.",
      "Implemented cutting-edge technologies and best practices in front-end and back-end development, enhancing website performance, security, and scalability.",
      "Built a robust portfolio showcasing a wide range of expertise in web development, graphic design, and digital strategy.",
      "Positioned Tech Wizard as a trusted partner for businesses seeking transformative digital solutions, contributing to the company’s reputation for excellence and innovation.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Arijit proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Arijit does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Arijit optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Cy-Coders",
    description:
      "Web-based platform that allows users to search, and manage about club and see whats going on from providing a convenient and efficient solution for club needs.",
    tags: [
      {
        name: "Google Sites",
        color: "blue-text-gradient",
      },
      {
        name: "GoDaddy",
        color: "green-text-gradient",
      },
      {
        name: "Embedeb Code HTML",
        color: "pink-text-gradient",
      },
    ],
    image: cyco,
    source_code_link: "https://github.com/",
  },
  {
    name: "Graphic Designing",
    description:
      "Creative graphic designer with a passion for crafting impactful visuals that elevate brands.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Canva",
        color: "green-text-gradient",
      },
      {
        name: "Logo",
        color: "pink-text-gradient",
      },
    ],
    image: graphics,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tech-Wizard",
    description:
      "Led the design and development of impactful visual content for Tech Wizard, enhancing brand presence and creating seamless user experiences across digital platforms.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "pink-text-gradient",
      },
    ],
    image: techcom,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
