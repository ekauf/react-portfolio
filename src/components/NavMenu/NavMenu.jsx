import "./NavMenu.scss";
import blackCross from "../../assets/images/other/black-cross.png";

const NavMenu = () => {
  return (
    <div className="nav-menu">
      <img src={blackCross} alt="Close menu" className="nav-menu__cross" />
      <p>Skills</p>
      <p>Projects</p>
      <p>About Me</p>
      <p>Contact Me</p>
    </div>
  );
};

export default NavMenu;
