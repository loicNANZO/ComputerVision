import PropTypes from "prop-types";
import "./background.css";

const Background = ({ className = "" }) => {
  return (
    <div className={`background ${className}`}>
      <div className="background-child" />
      <input className="economics" placeholder="Economics" type="text" />
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
