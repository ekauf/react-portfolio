import "./Home.scss";
import Introduction from "../../components/Sections/Introduction/Introduction";
import AboutMe from "../../components/Sections/AboutMe/AboutMe";
import Skills from "../../components/Sections/Skills/Skills";
import Projects from "../../components/Sections/Projects/Projects";

const Home = () => {
  return (
    <>
      <div className="main">
        <Introduction />
        <AboutMe />
        <Skills />
        <Projects />

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
