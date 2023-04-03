import "./Projects.scss";
import ProjectTile from "../../ProjectTile/ProjectTile";
import { projects } from "../../../data/data";

const Projects = () => {
  const projectTileJsx = projects.map(
    ({ title, id, description, tags, image, linkWeb, linkGit }) => {
      return (
        <ProjectTile
          key={id}
          title={title}
          description={description}
          tags={tags}
          image={image}
          linkWeb={linkWeb}
          linkGit={linkGit}
        />
      );
    }
  );

  return (
    <section id="projects" className="projects">
      <h1 className="projects__title">03. Projects</h1>
      <div>{projectTileJsx}</div>
    </section>
  );
};

export default Projects;

// carousel
// data.js - map the objects from projects array (image, live link, code link, description, skill tags), display these and have a carousel
