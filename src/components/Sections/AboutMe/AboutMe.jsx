import "./AboutMe.scss";
import portrait from "./../../../assets/images/other/EK-portrait.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h1 className="about-me__title">01. About Me</h1>
      <p>
        I’m a motivated and hardworking individual with professional experience
        working in multiple sectors, with proven successes, whether managing a
        team to deliver a successful operation or organising fundraising
        projects and community events. ​ ​ I’m eager to be challenged in order
        to improve and further develop my skillset.
      </p>
      <p>
        Although I have only just finished the _nology full stack course, I know
        that a career in software development is perfect for me.
      </p>
      <div className="about-me__image-container">
        <img className="about-me__portrait" src={portrait} alt="portrait" />
      </div>
    </section>
  );
};

export default AboutMe;
