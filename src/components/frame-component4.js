import { useMemo } from "react";
import PropTypes from "prop-types";
import "./frame-component4.css";

const FrameComponent4 = ({
  className = "",
  propTop,
  subtract,
  propLeft,
  propWidth,
  propWidth1,
  notifications,
  prop,
  propLeft1,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const groupDiv1Style = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const groupDiv2Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const div3Style = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={`frame-wrapper5 ${className}`} style={frameDiv4Style}>
      <div className="subtract-container">
        <img className="subtract-icon2" alt="" src={subtract} />
        <div className="group-frame" style={groupDiv1Style}>
          <div className="notifications-parent" style={groupDiv2Style}>
            <div className="notifications">{notifications}</div>
            <div className="div8" style={div3Style}>
              {prop}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  subtract: PropTypes.string,
  notifications: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propLeft1: PropTypes.any,
};

export default FrameComponent4;
