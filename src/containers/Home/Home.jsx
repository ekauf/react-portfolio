import "./Home.scss";
import Introduction from "../../components/Sections/Introduction/Introduction";
import AboutMe from "../../components/Sections/AboutMe/AboutMe";
import Skills from "../../components/Sections/Skills/Skills";

const Home = () => {
  return (
    <>
      <div className="main">
        <Introduction />
        <AboutMe />
        <Skills />

        <section className="main-skills">
          <h2>Skills</h2>
        </section>
        <section className="main-projects">
          <h2>Projects</h2>
        </section>
        <section className="main-about">
          <h2>About Me</h2>
        </section>
        <section className="main-contact">
          <h2>Contact</h2>
        </section>
      </div>
    </>
  );
};

export default Home;
