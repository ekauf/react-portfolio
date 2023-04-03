import "./Introduction.scss";

const Introduction = () => {
  return (
    <section className="introduction">
      <div>
        <h4 className="introduction__intro">Hi, my name is </h4>
        <h1 className="introduction__name">Edgars Kaufmanis.</h1>
        <h1 className="introduction__title">
          I'm a Junior Software Developer.
        </h1>
      </div>
      <p className="introduction__paragraph">
        I am a Junior Full-Stack Developer, having recently completed a 15-week
        Junior Software Developer course with _nology. I gained hands-on
        experience in: JavaScript, React, Java, APIS and more.
      </p>
      <div className="introduction__container">
        <a href="#projects">
          <button className="introduction__button">
            Take a look at my work &nbsp;{" "}
            <span className="introduction__bigger"> &#8628;</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Introduction;
