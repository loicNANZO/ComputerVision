import Sidebar1 from "../components/Sidebar1";
import Email from "../components/email";
import CamerasHeader from "../components/CamerasHeader";
import PropTypes from "prop-types";
import "./Dashboard3.css";

const Dashboard3 = ({ className = "" }) => {
  return (
    <div className={`dashboard4 ${className}`}>
      <div className="background-image4" />
      <Sidebar1 icdashboard="/icdashboard.svg" icsettings="/icsettings2.svg" />
      <div className="settings">Settings</div>
      <div className="dashboard-item" />
      <div className="dashboard-inner">
        <div className="subtract-parent">
          <img className="subtract-icon" alt="" src="/subtract1.svg" />
          <div className="group-wrapper">
            <div className="cameras-group">
              <div className="cameras1">Cameras</div>
              <div className="div">06</div>
            </div>
          </div>
        </div>
      </div>
      <div className="email-parent">
        <Email name1="Name" camera7="Camera #7" />
        <Email
          propWidth="340px"
          propDisplay="unset"
          propWidth1="unset"
          name1="Sector"
          propWidth2="340px"
          propWidth3="29px"
          camera7="West"
        />
        <Email
          propWidth="340px"
          propDisplay="unset"
          propWidth1="unset"
          name1="Department"
          propWidth2="340px"
          propWidth3="83px"
          camera7="Administration"
        />
        <Email
          propWidth="157px"
          propDisplay="inline-block"
          propWidth1="116.9px"
          name1="Video quality"
          propWidth2="157px"
          propWidth3="23px"
          camera7="3GP"
        />
        <Email
          propWidth="157px"
          propDisplay="inline-block"
          propWidth1="116.9px"
          name1="ips"
          propWidth2="157px"
          propWidth3="11px"
          camera7="10"
        />
        <Email
          propWidth="340px"
          propDisplay="unset"
          propWidth1="unset"
          name1="Compression mode"
          propWidth2="340px"
          propWidth3="40px"
          camera7="x H.256"
        />
      </div>
      <div className="rectangle-parent3">
        <div className="group-child1" />
        <div className="create-new-personnel">Create new personnel</div>
      </div>
      <div className="rectangle-parent4">
        <div className="group-child2" />
        <div className="create-new-personnel">Update camera informations</div>
      </div>
      <CamerasHeader
        propBackgroundColor="#000"
        propBorder="2px solid #ff5151"
        propMinHeight="unset"
        frameDivTop="379px"
        frameDivLeft="calc(50% - 322px)"
        frameDivWidth="431px"
        frameDivHeight="112px"
        camera1="Camera #1"
        ellipseDivTop="30px"
        ellipseDivLeft="324px"
        frameDivPadding="28px 45px"
        frameDivGap="2px"
        frameDivHeight1="52px"
        frameDivWidth1="30px"
        frameDivHeight2="30px"
        vectorIconWidth="20px"
        vectorIconHeight="25px"
        camera1FontSize="12.9px"
        groupDivWidth="145px"
        groupDivTop="28px"
        groupDivLeft="239px"
        groupDivHeight="52px"
        vectorIconTop="2px"
        vectorIconLeft="66px"
        vectorIconWidth1="23px"
        vectorIconHeight1="23px"
        vectorIconTop1="2px"
        vectorIconLeft1="0px"
        vectorIconWidth2="38px"
        vectorIconHeight2="23px"
        vectorIconTop2="0px"
        vectorIconLeft2="116px"
        vectorIconWidth3="29px"
        vectorIconHeight3="29px"
        divTop="32px"
        divLeft="13px"
        divFontSize="12.9px"
        divTop1="32px"
        divLeft1="69px"
        divFontSize1="12.9px"
        divTop2="32px"
        divLeft2="123px"
        divFontSize2="12.9px"
        ellipseDivWidth="9px"
        ellipseDivHeight="9px"
      />
      <CamerasHeader
        propBackgroundColor="unset"
        propBorder="1px solid #fff"
        propMinHeight="unset"
        frameDivTop="498px"
        frameDivLeft="calc(50% - 321px)"
        frameDivWidth="429px"
        frameDivHeight="110px"
        camera1="Camera #1"
        ellipseDivTop="30px"
        ellipseDivLeft="324px"
        frameDivPadding="28px 45px"
        frameDivGap="2px"
        frameDivHeight1="52px"
        frameDivWidth1="30px"
        frameDivHeight2="30px"
        vectorIconWidth="20px"
        vectorIconHeight="25px"
        camera1FontSize="12.9px"
        groupDivWidth="145px"
        groupDivTop="28px"
        groupDivLeft="239px"
        groupDivHeight="52px"
        vectorIconTop="2px"
        vectorIconLeft="66px"
        vectorIconWidth1="23px"
        vectorIconHeight1="23px"
        vectorIconTop1="2px"
        vectorIconLeft1="0px"
        vectorIconWidth2="38px"
        vectorIconHeight2="23px"
        vectorIconTop2="0px"
        vectorIconLeft2="116px"
        vectorIconWidth3="29px"
        vectorIconHeight3="29px"
        divTop="32px"
        divLeft="13px"
        divFontSize="12.9px"
        divTop1="32px"
        divLeft1="69px"
        divFontSize1="12.9px"
        divTop2="32px"
        divLeft2="123px"
        divFontSize2="12.9px"
        ellipseDivWidth="9px"
        ellipseDivHeight="9px"
      />
      <CamerasHeader
        propBackgroundColor="unset"
        propBorder="1px solid #fff"
        propMinHeight="unset"
        frameDivTop="618px"
        frameDivLeft="calc(50% - 321px)"
        frameDivWidth="429px"
        frameDivHeight="110px"
        camera1="Camera #1"
        ellipseDivTop="30px"
        ellipseDivLeft="324px"
        frameDivPadding="28px 45px"
        frameDivGap="2px"
        frameDivHeight1="52px"
        frameDivWidth1="30px"
        frameDivHeight2="30px"
        vectorIconWidth="20px"
        vectorIconHeight="25px"
        camera1FontSize="12.9px"
        groupDivWidth="145px"
        groupDivTop="28px"
        groupDivLeft="239px"
        groupDivHeight="52px"
        vectorIconTop="2px"
        vectorIconLeft="66px"
        vectorIconWidth1="23px"
        vectorIconHeight1="23px"
        vectorIconTop1="2px"
        vectorIconLeft1="0px"
        vectorIconWidth2="38px"
        vectorIconHeight2="23px"
        vectorIconTop2="0px"
        vectorIconLeft2="116px"
        vectorIconWidth3="29px"
        vectorIconHeight3="29px"
        divTop="32px"
        divLeft="13px"
        divFontSize="12.9px"
        divTop1="32px"
        divLeft1="69px"
        divFontSize1="12.9px"
        divTop2="32px"
        divLeft2="123px"
        divFontSize2="12.9px"
        ellipseDivWidth="9px"
        ellipseDivHeight="9px"
      />
      <div className="rectangle-parent5">
        <div className="group-child3" />
        <img className="vector-icon1" alt="" src="/vector-1.svg" />
      </div>
    </div>
  );
};

Dashboard3.propTypes = {
  className: PropTypes.string,
};

export default Dashboard3;
