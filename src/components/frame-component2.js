import { useMemo } from "react";
import PropTypes from "prop-types";
import "./frame-component2.css";

const FrameComponent2 = ({
  className = "",
  propTop,
  propFilter,
  propBackground,
  camera3,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      top: propTop,
      filter: propFilter,
      background: propBackground,
    };
  }, [propTop, propFilter, propBackground]);

  return (
    <div className={`frame-parent9 ${className}`} style={frameDiv3Style}>
      <div className="frame-parent10">
        <div className="vector-container">
          <img className="vector-icon6" alt="" src="/vector-21.svg" />
        </div>
        <div className="camera-3">{camera3}</div>
      </div>
      <div className="vector-group">
        <img className="vector-icon7" alt="" src="/vector-4.svg" />
        <img className="vector-icon8" alt="" src="/vector-3.svg" />
        <img className="vector-icon9" alt="" src="/vector-5.svg" />
        <div className="div4">10</div>
        <div className="div5">02</div>
        <div className="div6">05</div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  camera3: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propFilter: PropTypes.any,
  propBackground: PropTypes.any,
};

export default FrameComponent2;
