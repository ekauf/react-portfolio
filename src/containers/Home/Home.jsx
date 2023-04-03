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
      </div>
    </>
  );
};

export default Home;
