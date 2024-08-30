import Background from "./background";
import ActionButtons from "./ActionButtons";
import PropTypes from "prop-types";
import "./FionaContent.css";

const FionaContent = ({ className = "" }) => {
  return (
    <form className={`fiona-content ${className}`}>
      <div className="layout4">
        <div className="frame-parent6">
          <div className="mask-group-wrapper">
            <img
              className="mask-group-icon12"
              loading="lazy"
              alt=""
              src="/mask-group-20@2x.png"
            />
          </div>
          <h3 className="fiona-greavesm">Fiona Greavesm</h3>
        </div>
      </div>
      <div className="layout5">
        <div className="fiona-info">
          <div className="info-headers">
            <div className="name">
              <span className="date-of-birth">Name</span>
              <span className="span">*</span>
            </div>
            <div className="background1">
              <div className="background-item" />
              <input
                className="fiona-greavesm1"
                placeholder="Fiona Greavesm"
                type="text"
              />
            </div>
          </div>
          <div className="date-of-birth-parent">
            <div className="date-of-birth-container">
              <span className="date-of-birth">Date of birth</span>
              <span className="span">*</span>
            </div>
            <div className="background2">
              <div className="background-item" />
              <div className="jan-1996-wrapper">
                <div className="jan-1996">12 Jan 1996</div>
              </div>
              <img className="calendar-icon" alt="" src="/vector-2.svg" />
            </div>
          </div>
          <div className="info-headers">
            <div className="post">
              <span className="date-of-birth">Post</span>
              <span className="span">*</span>
            </div>
            <div className="background1">
              <div className="background-item" />
              <input
                className="sales-and-marketist"
                placeholder="Sales and marketist"
                type="text"
              />
            </div>
          </div>
          <div className="info-headers">
            <div className="department">
              <span className="date-of-birth">Department</span>
              <span className="span">*</span>
            </div>
            <Background />
          </div>
        </div>
      </div>
      <ActionButtons updatePersonnelInformatio="Update personnel informations" />
    </form>
  );
};

FionaContent.propTypes = {
  className: PropTypes.string,
};

export default FionaContent;
