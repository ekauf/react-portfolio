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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        aperiam odit ducimus iste vero autem qui repudiandae similique est!
        Aliquid tempore corporis pariatur delectus quia magni fugit commodi vel
        asperiores.
      </p>
      <div className="introduction__container">
        <button className="introduction__button">
          Take a look at my work &nbsp;{" "}
          <span className="introduction__bigger"> &#8628;</span>
        </button>
      </div>
    </section>
  );
};

export default Introduction;
