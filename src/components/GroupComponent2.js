import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent2.css";

const GroupComponent2 = ({
  className = "",
  propBackgroundImage,
  rectangle63,
  camera3,
  prop,
  prop1,
}) => {
  const groupDiv4Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={`frame-parent12 ${className}`}>
      <div className="frame-wrapper6">
        <div className="rectangle-parent8" style={groupDiv4Style}>
          <img className="frame-child8" alt="" src={rectangle63} />
          <div className="rectangle-parent9">
            <div className="frame-child9" />
            <div className="camera-31">{camera3}</div>
          </div>
          <div className="rectangle-parent10">
            <div className="frame-child10" />
            <div className="date-120620252">{`Date : 12/06/2025 14:55:50 `}</div>
          </div>
        </div>
      </div>
      <div className="vector-parent1">
        <img
          className="vector-icon11"
          loading="lazy"
          alt=""
          src="/vector-12.svg"
        />
        <div className="wrapper">
          <div className="div9">{prop}</div>
        </div>
        <div className="vector-frame">
          <img
            className="vector-icon12"
            loading="lazy"
            alt=""
            src="/vector-22.svg"
          />
        </div>
        <div className="wrapper">
          <div className="div9">00</div>
        </div>
        <div className="frame-wrapper7">
          <div className="vector-parent2">
            <img
              className="vector-icon13"
              loading="lazy"
              alt=""
              src="/vector-31.svg"
            />
            <div className="div11">{prop1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  rectangle63: PropTypes.string,
  camera3: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default GroupComponent2;
