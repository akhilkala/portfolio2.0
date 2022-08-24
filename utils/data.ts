interface Project {
  name: string;
  image: string;
  description: string;
  stack: string[];
  repo: string;
  site: string;
  ongoing: boolean;
}

interface Data {
  resume: string;
  projects: Project[];
  about: string;
  skills: {
    frontEnd: string[];
    backEnd: string[];
    misc: string[];
  };
}

const data: Data = {
  resume: "/Akhil.pdf",
  projects: [
    {
      name: "Design Portal",
      image: "/projects/prism.png",
      description:
        "Prism is IECSE’s very own design social network for budding designers where we host design competitions. It is built with MERN + Typescript. I worked on the client side with React, we used react query for caching and SWR.",
      stack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      repo: "",
      site: "https://design.iecsemanipal.com/",
      ongoing: false,
    },
    {
      name: "Coder",
      image: "/projects/coder.png",
      description:
        "Coder is a competitive coding pseudo social media platform. The end goal is to bring coder to all platforms including web, mobile and also have a browser extension. It is built with MERN + Typescript and containerized with Docker. It has a selenium scraper to scrape leetcode questions.",
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
        "Python",
      ],
      repo: "https://github.com/akhilkala/coder",
      site: "",
      ongoing: true,
    },
    {
      name: "Hawkeye",
      image: "/projects/hawk.png",
      description:
        "Hawkeye is signature scavenger hunt of IECSE’s anuual tech fest, Prometheus. It is built with MERN + Typescript. I worked on the client side with React and the Context API. It was containerized with docker and deployed on Digital Ocean.",
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
      ],
      repo: "https://github.com/akhilkala/Hawkeye-2021",
      site: "",
      ongoing: false,
    },
    {
      name: "TypeRacer",
      image: "/projects/typeracer.png",
      description:
        "TypeRacer is an online portal where users can compete against eash other in typing races. It used MERNG with Typescript and Socket.io for real time updates.",
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "GraphQL",
      ],
      repo: "https://github.com/JeremyBearimy83/typeracer-clone/tree/master",
      site: "",
      ongoing: true,
    },
  ],
  about:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt voluptatibus sequi odio necessitatibus nobis repellendus",
  skills: {
    frontEnd: ["HTML5", "CSS3", "SASS", "JavaScript", "React", "Next.js"],
    backEnd: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    misc: ["TypeScript", "GraphQL", "Socket.io", "Python"],
  },
};

export default data;
