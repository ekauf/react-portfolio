import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="main">
        <section className="main-intro">
          <h1>Hi, I'm Edgar, web developer</h1>
          <p>I'm a full-stack developer </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            tempora vel debitis quidem consequuntur vitae. Ut, nulla! Atque
            repellendus itaque, libero illo soluta minus! Impedit porro atque
            rerum corrupti quasi?
          </p>
        </section>
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
