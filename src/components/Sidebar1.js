import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Sidebar1.css";

const Sidebar1 = ({
  className = "",
  rectangleDivTop,
  onFrameContainerClick,
  icdashboard,
  dashboardColor,
  onGroupContainerClick1,
  onGroupContainerClick2,
  icsettings,
  onIcsettingsClick,
  icsettingsIconLeft,
  setttingsColor,
  sidebarTop,
  sidebarLeft,
  sidebarWidth,
  sidebarHeight,
  sidebarPadding,
  sidebarGap,
  rectangleDivWidth,
  rectangleDivLeft,
  rectangleDivHeight,
  frameDivWidth,
  frameDivGap,
  groupDivWidth,
  groupDivHeight,
  groupDivTop,
  groupDivLeft,
  groupDivWidth1,
  groupDivHeight1,
  smartDsVisionTop,
  smartDsVisionLeft,
  smartDsVisionFontSize,
  frameIconTop,
  frameIconLeft,
  frameIconWidth,
  frameIconHeight,
  frameDivTop,
  frameDivLeft,
  frameDivWidth1,
  frameDivHeight,
  frameDivGap1,
  icdashboardIconWidth,
  icdashboardIconHeight,
  dashboardFontSize,
  groupDivWidth2,
  groupDivHeight2,
  frameDivTop1,
  frameDivLeft1,
  frameDivWidth2,
  frameDivHeight1,
  vectorIconWidth,
  vectorIconHeight,
  camerasTop,
  camerasLeft,
  camerasFontSize,
  camerasWidth,
  camerasHeight,
  groupDivWidth3,
  groupDivHeight3,
  icrecruitmentIconTop,
  icrecruitmentIconWidth,
  icrecruitmentIconHeight,
  personnelTop,
  personnelLeft,
  personnelFontSize,
  personnelWidth,
  personnelHeight,
  groupDivWidth4,
  groupDivHeight4,
  icsettingsIconTop,
  icsettingsIconWidth,
  icsettingsIconHeight,
  setttingsTop,
  setttingsLeft,
  setttingsFontSize,
  setttingsWidth,
  setttingsHeight,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      top: rectangleDivTop,
      width: rectangleDivWidth,
      left: rectangleDivLeft,
      height: rectangleDivHeight,
    };
  }, [
    rectangleDivTop,
    rectangleDivWidth,
    rectangleDivLeft,
    rectangleDivHeight,
  ]);

  const dashboardStyle = useMemo(() => {
    return {
      color: dashboardColor,
      fontSize: dashboardFontSize,
    };
  }, [dashboardColor, dashboardFontSize]);

  const icsettingsIconStyle = useMemo(() => {
    return {
      left: icsettingsIconLeft,
      top: icsettingsIconTop,
      width: icsettingsIconWidth,
      height: icsettingsIconHeight,
    };
  }, [
    icsettingsIconLeft,
    icsettingsIconTop,
    icsettingsIconWidth,
    icsettingsIconHeight,
  ]);

  const setttingsStyle = useMemo(() => {
    return {
      color: setttingsColor,
      top: setttingsTop,
      left: setttingsLeft,
      fontSize: setttingsFontSize,
      width: setttingsWidth,
      height: setttingsHeight,
    };
  }, [
    setttingsColor,
    setttingsTop,
    setttingsLeft,
    setttingsFontSize,
    setttingsWidth,
    setttingsHeight,
  ]);

  const sidebarStyle = useMemo(() => {
    return {
      top: sidebarTop,
      left: sidebarLeft,
      width: sidebarWidth,
      height: sidebarHeight,
      padding: sidebarPadding,
      gap: sidebarGap,
    };
  }, [
    sidebarTop,
    sidebarLeft,
    sidebarWidth,
    sidebarHeight,
    sidebarPadding,
    sidebarGap,
  ]);

  const frameDiv9Style = useMemo(() => {
    return {
      width: frameDivWidth,
      gap: frameDivGap,
    };
  }, [frameDivWidth, frameDivGap]);

  const groupDiv6Style = useMemo(() => {
    return {
      width: groupDivWidth,
      height: groupDivHeight,
    };
  }, [groupDivWidth, groupDivHeight]);

  const groupDiv7Style = useMemo(() => {
    return {
      top: groupDivTop,
      left: groupDivLeft,
      width: groupDivWidth1,
      height: groupDivHeight1,
    };
  }, [groupDivTop, groupDivLeft, groupDivWidth1, groupDivHeight1]);

  const smartDsVisionStyle = useMemo(() => {
    return {
      top: smartDsVisionTop,
      left: smartDsVisionLeft,
      fontSize: smartDsVisionFontSize,
    };
  }, [smartDsVisionTop, smartDsVisionLeft, smartDsVisionFontSize]);

  const frameIconStyle = useMemo(() => {
    return {
      top: frameIconTop,
      left: frameIconLeft,
      width: frameIconWidth,
      height: frameIconHeight,
    };
  }, [frameIconTop, frameIconLeft, frameIconWidth, frameIconHeight]);

  const frameDiv10Style = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      width: frameDivWidth1,
      height: frameDivHeight,
    };
  }, [frameDivTop, frameDivLeft, frameDivWidth1, frameDivHeight]);

  const frameDiv11Style = useMemo(() => {
    return {
      gap: frameDivGap1,
    };
  }, [frameDivGap1]);

  const icdashboardIconStyle = useMemo(() => {
    return {
      width: icdashboardIconWidth,
      height: icdashboardIconHeight,
    };
  }, [icdashboardIconWidth, icdashboardIconHeight]);

  const groupDiv8Style = useMemo(() => {
    return {
      width: groupDivWidth2,
      height: groupDivHeight2,
    };
  }, [groupDivWidth2, groupDivHeight2]);

  const frameDiv12Style = useMemo(() => {
    return {
      top: frameDivTop1,
      left: frameDivLeft1,
      width: frameDivWidth2,
      height: frameDivHeight1,
    };
  }, [frameDivTop1, frameDivLeft1, frameDivWidth2, frameDivHeight1]);

  const vectorIcon5Style = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  const camerasStyle = useMemo(() => {
    return {
      top: camerasTop,
      left: camerasLeft,
      fontSize: camerasFontSize,
      width: camerasWidth,
      height: camerasHeight,
    };
  }, [camerasTop, camerasLeft, camerasFontSize, camerasWidth, camerasHeight]);

  const groupDiv9Style = useMemo(() => {
    return {
      width: groupDivWidth3,
      height: groupDivHeight3,
    };
  }, [groupDivWidth3, groupDivHeight3]);

  const icrecruitmentIconStyle = useMemo(() => {
    return {
      top: icrecruitmentIconTop,
      width: icrecruitmentIconWidth,
      height: icrecruitmentIconHeight,
    };
  }, [icrecruitmentIconTop, icrecruitmentIconWidth, icrecruitmentIconHeight]);

  const personnelStyle = useMemo(() => {
    return {
      top: personnelTop,
      left: personnelLeft,
      fontSize: personnelFontSize,
      width: personnelWidth,
      height: personnelHeight,
    };
  }, [
    personnelTop,
    personnelLeft,
    personnelFontSize,
    personnelWidth,
    personnelHeight,
  ]);

  const groupDiv10Style = useMemo(() => {
    return {
      width: groupDivWidth4,
      height: groupDivHeight4,
    };
  }, [groupDivWidth4, groupDivHeight4]);

  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  return (
    <div className={`sidebar2 ${className}`} style={sidebarStyle}>
      <div className="sidebar-child" style={rectangleDivStyle} />
      <div className="group-parent" style={frameDiv9Style}>
        <div
          className="group-parent1"
          onClick={onGroupContainerClick}
          style={groupDiv6Style}
        >
          <div className="smartdsvision-parent" style={groupDiv7Style}>
            <div className="smartdsvision3" style={smartDsVisionStyle}>
              SmartDsVision
            </div>
            <img
              className="frame-icon1"
              alt=""
              src="/frame@2x.png"
              style={frameIconStyle}
            />
          </div>
          <div className="group-child4" style={frameDiv10Style} />
        </div>
        <div
          className="icdashboard-parent"
          onClick={onFrameContainerClick}
          style={frameDiv11Style}
        >
          <img
            className="icdashboard-icon2"
            alt=""
            src={icdashboard}
            style={icdashboardIconStyle}
          />
          <div className="dashboard7" style={dashboardStyle}>
            Dashboard
          </div>
        </div>
        <div
          className="frame-parent18"
          onClick={onGroupContainerClick1}
          style={groupDiv8Style}
        >
          <div className="vector-wrapper2" style={frameDiv12Style}>
            <img
              className="vector-icon18"
              alt=""
              src="/vector.svg"
              style={vectorIcon5Style}
            />
          </div>
          <div className="cameras4" style={camerasStyle}>
            Cameras
          </div>
        </div>
        <div
          className="icrecruitment-parent"
          onClick={onGroupContainerClick2}
          style={groupDiv9Style}
        >
          <img
            className="icrecruitment-icon2"
            alt=""
            src="/icrecruitment1@2x.png"
            style={icrecruitmentIconStyle}
          />
          <div className="personnel3" style={personnelStyle}>
            Personnel
          </div>
        </div>
        <div className="icsettings-container" style={groupDiv10Style}>
          <img
            className="icsettings-icon2"
            alt=""
            src={icsettings}
            onClick={onIcsettingsClick}
            style={icsettingsIconStyle}
          />
          <div className="setttings2" style={setttingsStyle}>
            Setttings
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar1.propTypes = {
  className: PropTypes.string,
  icdashboard: PropTypes.string,
  icsettings: PropTypes.string,

  /** Style props */
  rectangleDivTop: PropTypes.any,
  dashboardColor: PropTypes.any,
  icsettingsIconLeft: PropTypes.any,
  setttingsColor: PropTypes.any,
  sidebarTop: PropTypes.any,
  sidebarLeft: PropTypes.any,
  sidebarWidth: PropTypes.any,
  sidebarHeight: PropTypes.any,
  sidebarPadding: PropTypes.any,
  sidebarGap: PropTypes.any,
  rectangleDivWidth: PropTypes.any,
  rectangleDivLeft: PropTypes.any,
  rectangleDivHeight: PropTypes.any,
  frameDivWidth: PropTypes.any,
  frameDivGap: PropTypes.any,
  groupDivWidth: PropTypes.any,
  groupDivHeight: PropTypes.any,
  groupDivTop: PropTypes.any,
  groupDivLeft: PropTypes.any,
  groupDivWidth1: PropTypes.any,
  groupDivHeight1: PropTypes.any,
  smartDsVisionTop: PropTypes.any,
  smartDsVisionLeft: PropTypes.any,
  smartDsVisionFontSize: PropTypes.any,
  frameIconTop: PropTypes.any,
  frameIconLeft: PropTypes.any,
  frameIconWidth: PropTypes.any,
  frameIconHeight: PropTypes.any,
  frameDivTop: PropTypes.any,
  frameDivLeft: PropTypes.any,
  frameDivWidth1: PropTypes.any,
  frameDivHeight: PropTypes.any,
  frameDivGap1: PropTypes.any,
  icdashboardIconWidth: PropTypes.any,
  icdashboardIconHeight: PropTypes.any,
  dashboardFontSize: PropTypes.any,
  groupDivWidth2: PropTypes.any,
  groupDivHeight2: PropTypes.any,
  frameDivTop1: PropTypes.any,
  frameDivLeft1: PropTypes.any,
  frameDivWidth2: PropTypes.any,
  frameDivHeight1: PropTypes.any,
  vectorIconWidth: PropTypes.any,
  vectorIconHeight: PropTypes.any,
  camerasTop: PropTypes.any,
  camerasLeft: PropTypes.any,
  camerasFontSize: PropTypes.any,
  camerasWidth: PropTypes.any,
  camerasHeight: PropTypes.any,
  groupDivWidth3: PropTypes.any,
  groupDivHeight3: PropTypes.any,
  icrecruitmentIconTop: PropTypes.any,
  icrecruitmentIconWidth: PropTypes.any,
  icrecruitmentIconHeight: PropTypes.any,
  personnelTop: PropTypes.any,
  personnelLeft: PropTypes.any,
  personnelFontSize: PropTypes.any,
  personnelWidth: PropTypes.any,
  personnelHeight: PropTypes.any,
  groupDivWidth4: PropTypes.any,
  groupDivHeight4: PropTypes.any,
  icsettingsIconTop: PropTypes.any,
  icsettingsIconWidth: PropTypes.any,
  icsettingsIconHeight: PropTypes.any,
  setttingsTop: PropTypes.any,
  setttingsLeft: PropTypes.any,
  setttingsFontSize: PropTypes.any,
  setttingsWidth: PropTypes.any,
  setttingsHeight: PropTypes.any,

  /** Action props */
  onFrameContainerClick: PropTypes.func,
  onGroupContainerClick1: PropTypes.func,
  onGroupContainerClick2: PropTypes.func,
  onIcsettingsClick: PropTypes.func,
};

export default Sidebar1;
