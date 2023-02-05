import "./ProjectTile.scss";

import wordle from "../../assets/images/project-ss/wordle-ss.png";
import external from "../../assets/images/other/external-link-icon.png";
import cat from "../../assets/images/other/github-cat-icon.png";

const ProjectTile = () => {
  return (
    <section className="project-tile">
      <div className="project-tile__container">
        <img
          className="project-tile__container__image"
          src={wordle}
          alt="Wordle"
        />
        <div className="project-tile__container__text-container">
          <h3>Wordle</h3>
          <div className="project-tile__container__text-container__links">
            <a href="https://github.com/ekauf/project-js-game" target="_blank">
              <img src={cat} alt="Link to code on GitHub" />
            </a>
            <a href="https://ekauf.github.io/project-js-game/">
              <img src={external} alt="Link to live demo" />
            </a>
          </div>
          <ul className="project-tile__container__text-container__ul">
            <li>Javascript</li>
          </ul>
        </div>
        <p className="project-tile__container__p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quos ab
          quasi ea ullam sit mollitia laborum quod explicabo architecto aperiam,
          consectetur cupiditate libero, facilis vero! Sapiente sequi natus
          amet!
        </p>
      </div>
    </section>
  );
};

export default ProjectTile;
