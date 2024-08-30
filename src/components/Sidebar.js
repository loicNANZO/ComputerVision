import { useCallback } from "react";
import FrameComponent from "./FrameComponent";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ className = "" }) => {
  const navigate = useNavigate();

  const onIcdashboardIconClick = useCallback(() => {
    navigate("/dashboard2");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onGroupContainerClick2 = useCallback(() => {
    navigate("/dashboard1");
  }, [navigate]);

  return (
    <div className={`sidebar1 ${className}`}>
      <FrameComponent />
      <div className="dashboard-menu-item-parent">
        <div className="dashboard-menu-item">
          <img
            className="icdashboard-icon1"
            loading="lazy"
            alt=""
            src="/icdashboard2.svg"
            onClick={onIcdashboardIconClick}
          />
        </div>
        <a className="dashboard6">Dashboard</a>
      </div>
      <div className="cameras-menu-item-wrapper">
        <div className="cameras-menu-item">
          <div className="cameras-menu-container">
            <div className="cameras-menu-inner">
              <div className="cameras-menu-inner-inner">
                <div
                  className="cameras-menu-icon-container-parent"
                  onClick={onGroupContainerClick}
                >
                  <div className="cameras-menu-icon-container">
                    <div className="health-professional-teamamico">
                      <img
                        className="cameras-menu-icon"
                        loading="lazy"
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                  </div>
                  <a className="cameras3">Cameras</a>
                </div>
              </div>
              <div
                className="personnel-menu-item-parent"
                onClick={onGroupContainerClick1}
              >
                <div className="personnel-menu-item">
                  <img
                    className="icrecruitment-icon1"
                    loading="lazy"
                    alt=""
                    src="/icrecruitment1@2x.png"
                  />
                </div>
                <div className="personnel2">Personnel</div>
              </div>
              <div className="cameras-menu-inner-child">
                <div
                  className="icsettings-group"
                  onClick={onGroupContainerClick2}
                >
                  <img
                    className="icsettings-icon1"
                    loading="lazy"
                    alt=""
                    src="/icsettings1.svg"
                  />
                  <a className="setttings1">Setttings</a>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-background" />
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
