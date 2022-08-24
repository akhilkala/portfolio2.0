import { useState } from "react";
import useInputState from "../hooks/useInputState";

export default function Index({}) {
  const name = useInputState();
  const email = useInputState();
  const message = useInputState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log(name.value);
  };

  return (
    <>
      <div className="landing">
        <header>
          <h2 className="name">Akhil Kala - Full Stack Developer</h2>
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
            <a href="" className="link link--resume">
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
        <a href="" className="down-arrow">
          <img src="/down.svg" />
        </a>
      </div>
      <div id="contact" className="contact">
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
          Send <img src="/right.png" />
        </button>
      </div>
    </>
  );
}
