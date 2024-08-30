import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSignUpTextClick = useCallback(() => {
    navigate("/dashboard1");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <header className={`top-bar-wrapper ${className}`}>
      <div className="top-bar">
        <div className="frame-parent14">
          <div className="logo-parent">
            <div className="logo" />
            <img
              className="top-bar-element"
              loading="lazy"
              alt=""
              src="/frame1@2x.png"
            />
          </div>
          <div className="smartdsvision-wrapper">
            <div className="smartdsvision2">SmartDsVision</div>
          </div>
        </div>
        <div className="top-bar-divider" />
        <div className="frame-parent15">
          <button className="sign-up-wrapper">
            <b className="sign-up" onClick={onSignUpTextClick}>
              Sign Up
            </b>
          </button>
          <div className="sign-in-wrapper">
            <div className="sign-in" onClick={onSignInTextClick}>
              Sign In
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
