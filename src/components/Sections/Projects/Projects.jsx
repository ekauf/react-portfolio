import "./Projects.scss";
import ProjectTile from "../../ProjectTile/ProjectTile";

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects__title">03. Projects</h1>
      <div>
        <ProjectTile />
      </div>
    </section>
  );
};

export default Projects;

// carousel
// data.js - map the objects from projects array (image, live link, code link, description, skill tags), display these and have a carousel
