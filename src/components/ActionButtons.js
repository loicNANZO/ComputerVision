import PropTypes from "prop-types";
import "./ActionButtons.css";

const ActionButtons = ({ className = "", updatePersonnelInformatio }) => {
  return (
    <div className={`action-buttons ${className}`}>
      <button className="group-button">
        <div className="frame-child5" />
        <div className="update-personnel-informations">
          {updatePersonnelInformatio}
        </div>
      </button>
      <button className="rectangle-parent6">
        <div className="frame-child6" />
        <div className="create-new-personnel1">Create new personnel</div>
      </button>
    </div>
  );
};

ActionButtons.propTypes = {
  className: PropTypes.string,
  updatePersonnelInformatio: PropTypes.string,
};

export default ActionButtons;
