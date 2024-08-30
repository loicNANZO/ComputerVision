import Content from "./Content";
import Button from "./Button";
import PropTypes from "prop-types";
import "./Login.css";

const Login = ({ className = "" }) => {
  return (
    <form className={`login ${className}`}>
      <section className="background-image3" />
      <Content />
      <div className="actions">
        <Button />
        <div className="signup">
          <div className="no-account-yet-parent">
            <div className="no-account-yet">No account yet ?</div>
            <b className="crer-un-compte"> Sign Up</b>
          </div>
        </div>
      </div>
    </form>
  );
};

Login.propTypes = {
  className: PropTypes.string,
};

export default Login;
