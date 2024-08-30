import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ className = "" }) => {
  return (
    <button className={`button ${className}`}>
      <b className="button1">Login</b>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
