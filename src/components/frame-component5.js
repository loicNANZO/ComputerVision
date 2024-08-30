import CamerasHeader from "./CamerasHeader";
import FrameComponent2 from "./frame-component2";
import PropTypes from "prop-types";
import "./frame-component5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={`frame-parent11 ${className}`}>
      <div className="subtract-group">
        <img className="subtract-icon1" alt="" src="/subtract.svg" />
        <img className="vector-icon10" alt="" src="/vector-11.svg" />
        <div className="group-container">
          <div className="persons-detected-parent">
            <div className="persons-detected">Persons detected</div>
            <div className="div7">120</div>
          </div>
        </div>
      </div>
      <CamerasHeader camera1="Camera #1" />
      <CamerasHeader
        propBackgroundColor="unset"
        propBorder="unset"
        propMinHeight="unset"
        frameDivTop="17.938rem"
        frameDivLeft="calc(50% - 213.5px)"
        frameDivWidth="26.688rem"
        frameDivHeight="6.75rem"
        camera1="Camera #2"
        ellipseDivTop="1.563rem"
        ellipseDivLeft="23.688rem"
        frameDivPadding="1.75rem 2.812rem"
        frameDivGap="0.125rem"
        frameDivHeight1="3.25rem"
        frameDivWidth1="1.875rem"
        frameDivHeight2="1.875rem"
        vectorIconWidth="1.25rem"
        vectorIconHeight="1.563rem"
        camera1FontSize="0.806rem"
        groupDivWidth="9.063rem"
        groupDivTop="1.75rem"
        groupDivLeft="14.938rem"
        groupDivHeight="3.25rem"
        vectorIconTop="0.125rem"
        vectorIconLeft="4.125rem"
        vectorIconWidth1="1.438rem"
        vectorIconHeight1="1.438rem"
        vectorIconTop1="0.125rem"
        vectorIconLeft1="0rem"
        vectorIconWidth2="2.375rem"
        vectorIconHeight2="1.438rem"
        vectorIconTop2="0rem"
        vectorIconLeft2="7.25rem"
        vectorIconWidth3="1.813rem"
        vectorIconHeight3="1.813rem"
        divTop="2rem"
        divLeft="0.813rem"
        divFontSize="0.806rem"
        divTop1="2rem"
        divLeft1="4.313rem"
        divFontSize1="0.806rem"
        divTop2="2rem"
        divLeft2="7.688rem"
        divFontSize2="0.806rem"
        ellipseDivWidth="0.563rem"
        ellipseDivHeight="0.563rem"
      />
      <FrameComponent2 camera3="Camera #3" />
      <FrameComponent2
        propTop="31.438rem"
        propFilter="unset"
        propBackground="unset"
        camera3="Camera #4"
      />
      <FrameComponent2
        propTop="38.188rem"
        propFilter="blur(4px)"
        propBackground="linear-gradient(180deg, rgba(0, 4, 26, 0), rgba(153, 153, 153, 0.26))"
        camera3="Camera #5"
      />
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
