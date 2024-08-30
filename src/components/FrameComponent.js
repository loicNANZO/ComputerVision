import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  return (
    <div className={`sidebar-inner ${className}`}>
      <div
        className="smart-ds-vision-container-parent"
        onClick={onGroupContainerClick}
      >
        <div className="smart-ds-vision-container">
          <img
            className="smart-ds-vision-inner"
            loading="lazy"
            alt=""
            src="/frame@2x.png"
          />
        </div>
        <div className="smartdsvision1">SmartDsVision</div>
        <div className="frame-child7" />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
