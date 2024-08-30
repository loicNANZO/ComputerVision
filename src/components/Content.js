import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <div className={`content ${className}`}>
      <div className="left-pane">
        <img
          className="empty-pane-icon"
          loading="lazy"
          alt=""
          src="/frame2@2x.png"
        />
      </div>
      <div className="login-info">
        <h1 className="login1">Login</h1>
      </div>
      <div className="credentials">
        <div className="input-fields">
          <div className="username">
            <span>Username</span>
            <span className="span4">*</span>
          </div>
          <div className="background4">
            <div className="background-child2" />
            <input
              className="enter-your-user"
              placeholder="Enter your user name"
              type="text"
            />
          </div>
        </div>
        <div className="input-fields">
          <div className="password">
            <span>Password</span>
            <span className="span4">*</span>
          </div>
          <div className="background5">
            <div className="background-child2" />
            <input
              className="enter-your-password"
              placeholder="Enter your password"
              type="text"
            />
            <img
              className="remove-red-eye-icon"
              alt=""
              src="/remove-red-eye.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
