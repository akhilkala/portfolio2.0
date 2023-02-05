import { useState } from "react";
import useInputState from "../hooks/useInputState";
import data from "../data";
import { useInView } from "react-intersection-observer";
import cn from "classnames";
import Lottie from "lottie-react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { scaleDown as Menu } from "react-burger-menu";

const inViewOptions = {
  threshold: 0.6,
  triggerOnce: true,
};

export default function Index({}) {
  const name = useInputState();
  const email = useInputState();
  const message = useInputState();
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [skillsRef, skillsInView] = useInView(inViewOptions);
  const [aboutRef, aboutInView] = useInView(inViewOptions);
  const [projectsRef, projectsInView] = useInView(inViewOptions);
  const [contactRef, contactInView] = useInView(inViewOptions);

  const handleSubmit = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("name", name.value);
    data.append("email", email.value);
    data.append("message", message.value);
    try {
      await axios.post("https://formspree.io/f/mpznwvqz", data, {
        headers: { Accept: "application/json" },
      });
      toast.success("Message sent successfully!");
      name.handleReset();
      email.handleReset();
      message.handleReset();
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <Menu
        isOpen={menuOpen}
        right
        pageWrapId={"page-wrap"}
        outerContainerId={"wrapper"}
        width={"100%"}
      >
        <div className="nav-mobile">
          <a href="#projects" className="link-mobile">
            Projects
          </a>
          <a href="#skills" className="link-mobile">
            Skills
          </a>
          <a href="#about" className="link-mobile">
            About
          </a>
          <a href="#contact" className="link-mobile">
            Contact
          </a>
          <a href="/Akhil.pdf" className="link-mobile link-mobile--resume">
            Resume
          </a>
        </div>
      </Menu>
      <div className="landing" id="page-wrap">
        <header>
          <h2 className="name">Akhil Kala - Full Stack Developer</h2>
          <h2 className="name-mobile">
            <span className="full-name">Akhil Kala</span>
            <br />
            <span className="role">Full Stack Developer</span>
          </h2>
          <div onClick={() => setMenuOpen(true)} className="hamburger">
            <div className="hamburger--line hamburger--line__1"></div>
            <div className="hamburger--line hamburger--line__2"></div>
            <div className="hamburger--line hamburger--line__3"></div>
          </div>
          <nav>
            <a href="#projects" className="link">
              Projects
            </a>
            <a href="#skills" className="link">
              Skills
            </a>
            <a href="#about" className="link">
              About
            </a>
            <a href="#contact" className="link">
              Contact
            </a>
            <a href="/Akhil.pdf" className="link link--resume">
              Resume
            </a>
          </nav>
        </header>
        <main>
          <div className="left">
            <h1>
              I Build Experiences <br /> For The Web
              <img src="/grid.svg" />
            </h1>
            <h2>And I make them look good</h2>
            <div className="cta">
              <a href="#projects">My Projects</a>
              <img src="/arrow.svg" alt="" />
            </div>
          </div>
          <div className="right">
            <a href="https://github.com/akhilkala" className="social">
              <img src="/github.svg" alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-kala-b185131b0/"
              className="social"
            >
              <img src="/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="mailto:kalaakki@gmail.com" className="social">
              <img src="/mail.svg" alt="Mail" />
            </a>
          </div>
        </main>
        <img src="/building.svg" className="building" />
        <a href="#skills" className="down-arrow">
          <img src="/down.svg" />
        </a>
      </div>
      <div
        ref={skillsRef}
        className={cn("skills skills--inview", {
          "skills--inview": skillsInView,
        })}
        id="skills"
      >
        <h1>My Skills</h1>
        <img src="/xx.png" className="xx" />
        <div className="cards">
          <div className="card">
            <h2>Web</h2>
            <div className="skill-list">
              {data.skills.web.map((skill) => (
                <h4 className="skill">
                  <span>{skill}</span>
                  <img src={`/skills/${skill.toLowerCase()}.png`} alt={skill} />
                </h4>
              ))}
            </div>
          </div>
          <div className="card">
            <h2>Backend</h2>
            <div className="skill-list">
              {data.skills.backEnd.map((skill) => (
                <h4 className="skill">
                  <span>{skill}</span>
                  <img src={`/skills/${skill.toLowerCase()}.png`} alt={skill} />
                </h4>
              ))}
            </div>
          </div>
          <div className="card">
            <h2>Miscellaneous</h2>
            <div className="skill-list">
              {data.skills.misc.map((skill) => (
                <h4 className="skill">
                  <span>{skill}</span>
                  <img src={`/skills/${skill.toLowerCase()}.png`} alt={skill} />
                </h4>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        ref={aboutRef}
        className={cn("about about--inview", { "about--inview": aboutInView })}
        id="about"
      >
        <img src="/globe.svg" alt="" className="globe" />
        <section>
          <img src="/akhil.svg" alt="" className="dp" />
          <h1>ABOUT ME</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam enim
            at urna, eu e ementum id sapien in. Arcu, amet mattis egestas a eget
            urna ipsum ultricies. lementum id apien in. Arcu, amet mattis
            egestas a eget urna ipsum ultricies. lementum id sapien in. Arcu,
            ametmattis egestas a eget urna ipsum ultricies.
          </p>
          <img src="/about-arrows.png" className="arrows" />
        </section>
      </div>
      <div
        ref={projectsRef}
        className={cn("projects projects--inview", {
          "projects--inview": projectsInView,
        })}
        id="projects"
      >
        <h1>Projects</h1>
        <div className="projects-list">
          {data.projects.map((project) => (
            <div className="project">
              <div className="left">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="right">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="decor">
          <img src="/projects-decor.svg" />
        </div>
      </div>
      <div
        ref={contactRef}
        className={cn("contact contact--inview", {
          "contact--inview": contactInView,
        })}
        id="contact"
      >
        <h1>GET IN TOUCH</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam enim at
          urna, eu e lementum id sapien in. Arcu, amet mattis egestas a eget
          urna ipsum ultricies.{" "}
        </p>
        <img src="/paper-plane.svg" className="paper-plane" />
        <main>
          <div className="form">
            <div className="input">
              <label htmlFor="name">NAME</label>
              <input id="name" type="text" {...name.props} />
            </div>
            <div className="input">
              <label htmlFor="email">EMAIL</label>
              <input id="email" type="text" {...email.props} />
            </div>
            <div className="input">
              <label htmlFor="message">MESSAGE</label>
              <textarea id="message" {...message.props} />
            </div>
          </div>
          <img src="/or.svg" alt="OR" className="or" />
          <div className="socials">
            <a href="https://github.com/akhilkala" className="social">
              <img src="/github-square.svg" alt="Github" />
              <span>/akhilkala</span>
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-kala-b185131b0/"
              className="social"
            >
              <img src="/linkedin-square.svg" alt="LinkedIn" />
              <span>/in/akhil-kala-b185131b0/</span>
            </a>
            <a href="mailto:kalaakki@gmail.com" className="social">
              <img src="/mail.svg" alt="Mail" />
              <span>kalaakki@gmail.com</span>
            </a>
          </div>
        </main>
        <button onClick={handleSubmit} className="send">
          {loading && (
            <div className="loading">
              <Lottie
                animationData={require("../public/loading.json")}
                loop={true}
              />
            </div>
          )}
          {!loading && (
            <>
              Send <img src="/right.png" />
            </>
          )}
        </button>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
