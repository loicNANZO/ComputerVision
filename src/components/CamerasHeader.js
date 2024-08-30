import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CamerasHeader.css";

const CamerasHeader = ({
  className = "",
  propBackgroundColor,
  propBorder,
  propMinHeight,
  frameDivTop,
  frameDivLeft,
  frameDivWidth,
  frameDivHeight,
  camera1,
  ellipseDivTop,
  ellipseDivLeft,
  frameDivPadding,
  frameDivGap,
  frameDivHeight1,
  frameDivWidth1,
  frameDivHeight2,
  vectorIconWidth,
  vectorIconHeight,
  camera1FontSize,
  groupDivWidth,
  groupDivTop,
  groupDivLeft,
  groupDivHeight,
  vectorIconTop,
  vectorIconLeft,
  vectorIconWidth1,
  vectorIconHeight1,
  vectorIconTop1,
  vectorIconLeft1,
  vectorIconWidth2,
  vectorIconHeight2,
  vectorIconTop2,
  vectorIconLeft2,
  vectorIconWidth3,
  vectorIconHeight3,
  divTop,
  divLeft,
  divFontSize,
  divTop1,
  divLeft1,
  divFontSize1,
  divTop2,
  divLeft2,
  divFontSize2,
  ellipseDivWidth,
  ellipseDivHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
      minHeight: propMinHeight,
      top: frameDivTop,
      left: frameDivLeft,
      width: frameDivWidth,
      height: frameDivHeight,
      padding: frameDivPadding,
      gap: frameDivGap,
    };
  }, [
    propBackgroundColor,
    propBorder,
    propMinHeight,
    frameDivTop,
    frameDivLeft,
    frameDivWidth,
    frameDivHeight,
    frameDivPadding,
    frameDivGap,
  ]);

  const ellipseDivStyle = useMemo(() => {
    return {
      top: ellipseDivTop,
      left: ellipseDivLeft,
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivTop, ellipseDivLeft, ellipseDivWidth, ellipseDivHeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      height: frameDivHeight1,
    };
  }, [frameDivHeight1]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: frameDivWidth1,
      height: frameDivHeight2,
    };
  }, [frameDivWidth1, frameDivHeight2]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  const camera1Style = useMemo(() => {
    return {
      fontSize: camera1FontSize,
    };
  }, [camera1FontSize]);

  const groupDivStyle = useMemo(() => {
    return {
      width: groupDivWidth,
      top: groupDivTop,
      left: groupDivLeft,
      height: groupDivHeight,
    };
  }, [groupDivWidth, groupDivTop, groupDivLeft, groupDivHeight]);

  const vectorIcon1Style = useMemo(() => {
    return {
      top: vectorIconTop,
      left: vectorIconLeft,
      width: vectorIconWidth1,
      height: vectorIconHeight1,
    };
  }, [vectorIconTop, vectorIconLeft, vectorIconWidth1, vectorIconHeight1]);

  const vectorIcon2Style = useMemo(() => {
    return {
      top: vectorIconTop1,
      left: vectorIconLeft1,
      width: vectorIconWidth2,
      height: vectorIconHeight2,
    };
  }, [vectorIconTop1, vectorIconLeft1, vectorIconWidth2, vectorIconHeight2]);

  const vectorIcon3Style = useMemo(() => {
    return {
      top: vectorIconTop2,
      left: vectorIconLeft2,
      width: vectorIconWidth3,
      height: vectorIconHeight3,
    };
  }, [vectorIconTop2, vectorIconLeft2, vectorIconWidth3, vectorIconHeight3]);

  const divStyle = useMemo(() => {
    return {
      top: divTop,
      left: divLeft,
      fontSize: divFontSize,
    };
  }, [divTop, divLeft, divFontSize]);

  const div1Style = useMemo(() => {
    return {
      top: divTop1,
      left: divLeft1,
      fontSize: divFontSize1,
    };
  }, [divTop1, divLeft1, divFontSize1]);

  const div2Style = useMemo(() => {
    return {
      top: divTop2,
      left: divLeft2,
      fontSize: divFontSize2,
    };
  }, [divTop2, divLeft2, divFontSize2]);

  return (
    <div className={`frame-parent7 ${className}`} style={frameDivStyle}>
      <div className="frame-parent8" style={frameDiv1Style}>
        <div className="vector-wrapper" style={frameDiv2Style}>
          <img
            className="vector-icon2"
            alt=""
            src="/vector-21.svg"
            style={vectorIconStyle}
          />
        </div>
        <div className="camera-11" style={camera1Style}>
          {camera1}
        </div>
      </div>
      <div className="vector-parent" style={groupDivStyle}>
        <img
          className="vector-icon3"
          alt=""
          src="/vector-4.svg"
          style={vectorIcon1Style}
        />
        <img
          className="vector-icon4"
          alt=""
          src="/vector-3.svg"
          style={vectorIcon2Style}
        />
        <img
          className="vector-icon5"
          alt=""
          src="/vector-5.svg"
          style={vectorIcon3Style}
        />
        <div className="div1" style={divStyle}>
          10
        </div>
        <div className="div2" style={div1Style}>
          02
        </div>
        <div className="div3" style={div2Style}>
          05
        </div>
      </div>
      <div className="ellipse-div" style={ellipseDivStyle} />
    </div>
  );
};

CamerasHeader.propTypes = {
  className: PropTypes.string,
  camera1: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBorder: PropTypes.any,
  propMinHeight: PropTypes.any,
  frameDivTop: PropTypes.any,
  frameDivLeft: PropTypes.any,
  frameDivWidth: PropTypes.any,
  frameDivHeight: PropTypes.any,
  ellipseDivTop: PropTypes.any,
  ellipseDivLeft: PropTypes.any,
  frameDivPadding: PropTypes.any,
  frameDivGap: PropTypes.any,
  frameDivHeight1: PropTypes.any,
  frameDivWidth1: PropTypes.any,
  frameDivHeight2: PropTypes.any,
  vectorIconWidth: PropTypes.any,
  vectorIconHeight: PropTypes.any,
  camera1FontSize: PropTypes.any,
  groupDivWidth: PropTypes.any,
  groupDivTop: PropTypes.any,
  groupDivLeft: PropTypes.any,
  groupDivHeight: PropTypes.any,
  vectorIconTop: PropTypes.any,
  vectorIconLeft: PropTypes.any,
  vectorIconWidth1: PropTypes.any,
  vectorIconHeight1: PropTypes.any,
  vectorIconTop1: PropTypes.any,
  vectorIconLeft1: PropTypes.any,
  vectorIconWidth2: PropTypes.any,
  vectorIconHeight2: PropTypes.any,
  vectorIconTop2: PropTypes.any,
  vectorIconLeft2: PropTypes.any,
  vectorIconWidth3: PropTypes.any,
  vectorIconHeight3: PropTypes.any,
  divTop: PropTypes.any,
  divLeft: PropTypes.any,
  divFontSize: PropTypes.any,
  divTop1: PropTypes.any,
  divLeft1: PropTypes.any,
  divFontSize1: PropTypes.any,
  divTop2: PropTypes.any,
  divLeft2: PropTypes.any,
  divFontSize2: PropTypes.any,
  ellipseDivWidth: PropTypes.any,
  ellipseDivHeight: PropTypes.any,
};

export default CamerasHeader;
