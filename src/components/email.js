import { useMemo } from "react";
import PropTypes from "prop-types";
import "./email.css";

const Email = ({
  className = "",
  propWidth,
  propDisplay,
  propWidth1,
  name1,
  propWidth2,
  propWidth3,
  camera7,
}) => {
  const emailStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const nameStyle = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth1,
    };
  }, [propDisplay, propWidth1]);

  const largeInputStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const textStyle = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  return (
    <div className={`email ${className}`} style={emailStyle}>
      <div className="name2" style={nameStyle}>
        <span>{name1}</span>
        <span className="span6">*</span>
      </div>
      <div className="large-input" style={largeInputStyle}>
        <div className="background6">
          <div className="background-child4" />
        </div>
        <div className="text" style={textStyle}>
          <div className="camera-7">{camera7}</div>
        </div>
      </div>
    </div>
  );
};

Email.propTypes = {
  className: PropTypes.string,
  name1: PropTypes.string,
  camera7: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
  propWidth3: PropTypes.any,
};

export default Email;
