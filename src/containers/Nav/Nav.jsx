import "./Nav.scss";
import menu from "../../assets/images/other/menu-icon.png";

const Nav = () => {
  return (
    <nav className="nav">
      <h3 className="nav__initials">EK</h3>
      <img src={menu} alt="Menu icon" className="nav-item__menu" />
    </nav>
  );
};

export default Nav;
