import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({
  className = "",
  propBackgroundImage,
  rectangle63,
  propWidth,
  camera1,
  cameraFeedPlaceholderItem,
  cameraFeedCameraPadding,
  camera1MinWidth,
}) => {
  const groupDiv3Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const cameraFeedCameraStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: cameraFeedCameraPadding,
    };
  }, [propWidth, cameraFeedCameraPadding]);

  const camera11Style = useMemo(() => {
    return {
      minWidth: camera1MinWidth,
    };
  }, [camera1MinWidth]);

  return (
    <div className={`camera-feed-item-parent ${className}`}>
      <div className="camera-feed-item">
        <div className="rectangle-parent7" style={groupDiv3Style}>
          <img className="rectangle-icon" alt="" src={rectangle63} />
          <div className="camera-feed-camera" style={cameraFeedCameraStyle}>
            <div className="camera-feed-camera-child" />
            <div className="camera-12" style={camera11Style}>
              {camera1}
            </div>
          </div>
          <div className="camera-feed-date-container">
            <div className="camera-feed-date-container-child" />
            <div className="date-120620251">{`Date : 12/06/2025 14:55:50 `}</div>
          </div>
        </div>
      </div>
      <div className="camera-feed-separator-parent">
        <img
          className="camera-feed-separator"
          loading="lazy"
          alt=""
          src="/vector-12.svg"
        />
        <div className="camera-feed-placeholder-contai">
          <div className="camera-feed-placeholder">03</div>
        </div>
        <div className="camera-feed-separator-wrapper">
          <img
            className="camera-feed-separator1"
            loading="lazy"
            alt=""
            src="/vector-22.svg"
          />
        </div>
        <div className="camera-feed-placeholder-contai">
          <div className="camera-feed-placeholder">00</div>
        </div>
        <div className="camera-feed-bottom-row-wrapper">
          <div className="camera-feed-bottom-row">
            <img
              className="camera-feed-separator2"
              loading="lazy"
              alt=""
              src="/vector-31.svg"
            />
            <div className="camera-feed-placeholder-contai2">
              <div className="camera-feed-placeholder">
                {cameraFeedPlaceholderItem}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  rectangle63: PropTypes.string,
  camera1: PropTypes.string,
  cameraFeedPlaceholderItem: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propWidth: PropTypes.any,
  cameraFeedCameraPadding: PropTypes.any,
  camera1MinWidth: PropTypes.any,
};

export default GroupComponent1;
