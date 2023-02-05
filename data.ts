interface Project {
  name: string;
  image: string;
  description: string;
  repo: string;
  site: string;
}

interface Data {
  projects: Project[];
  skills: {
    web: string[];
    backEnd: string[];
    misc: string[];
  };
}

const data: Data = {
  projects: [
    {
      name: "Design Portal",
      image: "/projects/prism.svg",
      description:
        "Prism is IECSE’s very own design social network for budding designers where we host design competitions. It is built with MERN + Typescript. I worked on the client side with React, we used react query for caching and SWR.",
      repo: "",
      site: "https://design.iecsemanipal.com/",
    },
    {
      name: "Coder",
      image: "/projects/coder.png",
      description:
        "Coder is a competitive coding pseudo social media platform. The end goal is to bring coder to all platforms including web, mobile and also have a browser extension. It is built with MERN + Typescript and containerized with Docker. It has a selenium scraper to scrape leetcode questions.",
      repo: "https://github.com/akhilkala/coder",
      site: "",
    },
    {
      name: "Hawkeye",
      image: "/projects/hawkeye.png",
      description:
        "Hawkeye is signature scavenger hunt of IECSE’s anuual tech fest, Prometheus. It is built with MERN + Typescript. I worked on the client side with React and the Context API. It was containerized with docker and deployed on Digital Ocean.",
      repo: "https://github.com/akhilkala/Hawkeye-2021",
      site: "",
    },
    {
      name: "Cab Booking Backend",
      image: "/projects/hellocabs.png",
      description:
        "Hello Cabs is a cab booking portal built with Node.js and PostgreSQL written with Typescript.",
      repo: "https://github.com/akhilkala/hello-cabs",
      site: "",
    },
    {
      name: "TypeRacer",
      image: "/projects/typeracer.png",
      description:
        "TypeRacer is an online portal where users can compete against eash other in typing races. It used MERNG with Typescript and Socket.io for real time updates.",
      repo: "https://github.com/JeremyBearimy83/typeracer-clone/tree/master",
      site: "",
    },
  ],
  skills: {
    web: [
      "HTML5",
      "CSS3",
      "SASS",
      "JavaScript",
      "React",
      "Redux",
      "Next.js",
      "Vue.js",
    ],
    backEnd: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"],
    misc: ["TypeScript", "GraphQL", "Python"],
  },
};

export default data;
