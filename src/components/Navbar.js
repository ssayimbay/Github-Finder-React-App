import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className={`${icon} mr-2`}></i> {title}
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
