import "./ProjectTile.scss";

import wordle from "../../assets/images/project-ss/wordle-ss.png";
import external from "../../assets/images/other/external-link-icon.png";
import cat from "../../assets/images/other/github-cat-icon.png";

const ProjectTile = ({ title, description, tags, image, linkWeb, linkGit }) => {
  return (
    <section className="project-tile">
      <div className="project-tile__container">
        <div className="project-tile__image__container">
          <img
            className="project-tile__container__project"
            src={image}
            alt="Wordle"
          />
        </div>
        <div className="project-tile__container__text-container">
          <h3 className="project-tile__container__text-container__title">
            {title}
            <div className="project-tile__container__text-container__links">
              <a href={linkGit} target="_blank">
                <img src={cat} alt="Link to code on GitHub" />
              </a>
              <a href={linkWeb}>
                <img src={external} alt="Link to live demo" />
              </a>
            </div>
          </h3>
          <p className="project-tile__container__p">{description}</p>
          <p>
            <span className="project-tile__container__text-container__tag">
              {tags}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectTile;
