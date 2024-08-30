import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent3.css";

const GroupComponent3 = ({
  className = "",
  propBackgroundImage,
  rectangle63,
  camera5,
  prop,
  propMinWidth,
  prop1,
  propMinWidth1,
  prop2,
  frameDivPadding,
  frameDivPadding1,
  frameDivPadding2,
  divMinWidth,
}) => {
  const groupDiv5Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const div4Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div5Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const frameDiv5Style = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const frameDiv6Style = useMemo(() => {
    return {
      padding: frameDivPadding1,
    };
  }, [frameDivPadding1]);

  const frameDiv7Style = useMemo(() => {
    return {
      padding: frameDivPadding2,
    };
  }, [frameDivPadding2]);

  const div6Style = useMemo(() => {
    return {
      minWidth: divMinWidth,
    };
  }, [divMinWidth]);

  return (
    <div className={`frame-parent13 ${className}`}>
      <div className="rectangle-parent11" style={groupDiv5Style}>
        <img className="frame-child11" alt="" src={rectangle63} />
        <div className="camera-feed-placeholder3">
          <div className="camera-feed-placeholder-child" />
          <div className="camera-5">{camera5}</div>
        </div>
        <div className="camera-feed-placeholder4">
          <div className="camera-feed-placeholder-item" />
          <div className="date-120620253">{`Date : 12/06/2025 14:55:50 `}</div>
        </div>
      </div>
      <div className="vector-parent3">
        <img
          className="vector-icon14"
          loading="lazy"
          alt=""
          src="/vector-12.svg"
        />
        <div className="frame" style={frameDiv5Style}>
          <div className="div12" style={div4Style}>
            {prop}
          </div>
        </div>
        <div className="vector-wrapper1">
          <img
            className="vector-icon15"
            loading="lazy"
            alt=""
            src="/vector-22.svg"
          />
        </div>
        <div className="wrapper1" style={frameDiv6Style}>
          <div className="div13" style={div5Style}>
            {prop1}
          </div>
        </div>
        <div className="frame-wrapper8">
          <div className="vector-parent4">
            <img
              className="vector-icon16"
              loading="lazy"
              alt=""
              src="/vector-31.svg"
            />
            <div className="wrapper2" style={frameDiv7Style}>
              <div className="div13" style={div6Style}>
                {prop2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
  rectangle63: PropTypes.string,
  camera5: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  frameDivPadding: PropTypes.any,
  frameDivPadding1: PropTypes.any,
  frameDivPadding2: PropTypes.any,
  divMinWidth: PropTypes.any,
};

export default GroupComponent3;
