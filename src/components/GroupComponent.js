import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({
  className = "",
  vector,
  propHeight,
  propHeight1,
  propDisplay,
  reactive,
  realtimeAnormalieDetectio,
  frameDivPadding,
}) => {
  const vectorIcon4Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const reactiveRealtimeAnormalieContainerStyle = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay,
    };
  }, [propHeight1, propDisplay]);

  const frameDiv8Style = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <div className={`frame-parent16 ${className}`}>
      <div className="frame-wrapper9">
        <div className="rectangle-parent12" style={frameDiv8Style}>
          <div className="frame-child12" />
          <img
            className="vector-icon17"
            loading="lazy"
            alt=""
            src={vector}
            style={vectorIcon4Style}
          />
        </div>
      </div>
      <div
        className="reactive-realtime-anormalie-container"
        style={reactiveRealtimeAnormalieContainerStyle}
      >
        <p className="reactive">
          <b>{reactive}</b>
        </p>
        <p className="realtime-anormalie-detection">
          {realtimeAnormalieDetectio}
        </p>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  reactive: PropTypes.string,
  realtimeAnormalieDetectio: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propDisplay: PropTypes.any,
  frameDivPadding: PropTypes.any,
};

export default GroupComponent;
