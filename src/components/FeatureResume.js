import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import "./FeatureResume.css";

const FeatureResume = ({ className = "" }) => {
  return (
    <div className={`feature-resume ${className}`}>
      <div className="feature-row-parent">
        <div className="feature-row">
          <div className="feature-item">
            <div className="feature-item-child" />
            <img
              className="feature-icon"
              loading="lazy"
              alt=""
              src="/vector2.svg"
            />
          </div>
        </div>
        <div className="real-time-detection-instantly-container">
          <p className="real-time-detection">
            <b>Real-Time Detection</b>
          </p>
          <p className="instantly-detect-and">{`Instantly detect and recognize `}</p>
          <p className="instantly-detect-and">
            employees as they enter and exit.
          </p>
        </div>
      </div>
      <div className="frame-parent17">
        <div className="feature-row">
          <div className="rectangle-parent13">
            <div className="feature-item-child" />
            <img
              className="group-icon"
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
        </div>
        <div className="detailed-activity-tracking-container">
          <p className="instantly-detect-and">
            <b>Detailed Activity Tracking</b>
          </p>
          <p className="monitor-employee-activity">
            Monitor employee activity and productivity with detailed logs and
            reports.
          </p>
        </div>
      </div>
      <GroupComponent
        vector="/vector-13.svg"
        reactive="Reactive"
        realtimeAnormalieDetectio="Realtime Anormalie detection and notification in Crown"
      />
      <GroupComponent
        vector="/vector-23.svg"
        propHeight="2.138rem"
        propHeight1="5.375rem"
        propDisplay="inline-block"
        reactive="Secure and Reliable"
        realtimeAnormalieDetectio="Ensure data security and reliability with state-of-the-art technology."
        frameDivPadding="0.562rem 1rem"
      />
    </div>
  );
};

FeatureResume.propTypes = {
  className: PropTypes.string,
};

export default FeatureResume;
