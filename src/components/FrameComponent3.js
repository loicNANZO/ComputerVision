import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`frame-parent1 ${className}`}
      onClick={onFrameContainerClick}
    >
      <div className="frame-parent2" onClick={onGroupContainerClick}>
        <div className="frame-wrapper">
          <img
            className="frame-icon"
            loading="lazy"
            alt=""
            src="/frame@2x.png"
          />
        </div>
        <div className="smartdsvision">SmartDsVision</div>
      </div>
      <div className="frame-child4" />
      <div className="frame-parent3">
        <div className="icdashboard-wrapper">
          <img
            className="icdashboard-icon"
            loading="lazy"
            alt=""
            src="/icdashboard.svg"
          />
        </div>
        <div className="dashboard5">Dashboard</div>
      </div>
      <div className="frame-wrapper1">
        <div className="frame-parent4">
          <div className="frame-wrapper2">
            <div className="camera-icon-wrapper">
              <img
                className="camera-icon"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
          <a className="cameras2">Cameras</a>
        </div>
      </div>
      <div className="frame-wrapper3">
        <div className="frame-parent5" onClick={onGroupContainerClick1}>
          <div className="icrecruitment-wrapper">
            <img
              className="icrecruitment-icon"
              loading="lazy"
              alt=""
              src="/icrecruitment@2x.png"
            />
          </div>
          <div className="personnel1">Personnel</div>
        </div>
      </div>
      <div className="frame-wrapper4">
        <div className="icsettings-parent">
          <img
            className="icsettings-icon"
            loading="lazy"
            alt=""
            src="/icsettings.svg"
          />
          <a className="setttings">Setttings</a>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
