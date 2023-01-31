import "./AboutMe.scss";
import portrait from "./../../../assets/images/other/EK-portrait.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h1>01. About Me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        dolorum atque omnis temporibus minima dolor. Voluptatum quas eveniet
        tempore fugiat facilis non, incidunt culpa! Placeat obcaecati dolor
        tenetur vel dolorum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        blanditiis asperiores assumenda voluptates nam eum atque tempore
        pariatur, ad quidem ullam dolorum nulla vero quo distinctio! Quam magni
        eligendi delectus.
      </p>
      <div className="about-me__image-container">
        <img className="about-me__portrait" src={portrait} alt="portrait" />
      </div>
    </section>
  );
};

export default AboutMe;
