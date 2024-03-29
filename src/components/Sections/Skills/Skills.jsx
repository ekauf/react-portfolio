import "./Skills.scss";
import springBoot from "../../../assets/images/tech-skill-icons/spring_logo.png";
import java from "../../../assets/images/tech-skill-icons/java_logo.png";
import react from "../../../assets/images/tech-skill-icons/React_logo2.png";
import bem from "../../../assets/images/tech-skill-icons/bem_logo.png";
import scss from "../../../assets/images/tech-skill-icons/scss_logo.png";
import javaScript from "../../../assets/images/tech-skill-icons/JavaScript.png";
import css from "../../../assets/images/tech-skill-icons/CSS3_logo.png";
import html from "../../../assets/images/tech-skill-icons/html5_logo.png";
import git from "../../../assets/images/tech-skill-icons/Git_Logo.png";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__content">
        <h1 className="skills__title">02. Technical Skills</h1>
        <p>These are the technical skills that I have been working on.</p>
      </div>
      <div className="skills__grid">
        <figure className="skills__icons">
          <img src={springBoot} alt="Spring Boot icon" />
          <figcaption>Spring Boot</figcaption>
        </figure>
        <figure className="skills__icons">
          <img src={java} alt="Java icon" />
          <figcaption>Java</figcaption>
        </figure>
        <figure className="skills__icons">
          <img src={react} alt="React icon" />
          <figcaption>React</figcaption>
        </figure>
        <figure className="skills__icons">
          <img src={bem} alt="BEM icon" />
          <figcaption>BEM</figcaption>
        </figure>
        <figure className="skills__icons">
          <img src={scss} alt="SCSS icon" />
          <figcaption>SCSS</figcaption>
        </figure>
        <figure className="skills__icons">
          <img src={javaScript} alt="JavaScript icon" />
          <figcaption>JavaScript</figcaption>
        </figure>
        <figure className="skills__icons">
          <img src={css} alt="CSS3 icon" />
          <figcaption>CSS3</figcaption>
        </figure>
        <figure className="skills__icons">
          <img src={html} alt="HTML5 icon" />
          <figcaption>HTML5</figcaption>
        </figure>
        <figure className="skills__icons">
          <img src={git} alt="Git icon" />
          <figcaption>Git</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Skills;
