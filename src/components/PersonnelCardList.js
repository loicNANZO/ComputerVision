import { useMemo } from "react";
import PropTypes from "prop-types";
import "./PersonnelCardList.css";

const PersonnelCardList = ({
  className = "",
  propFlex,
  propAlignSelf,
  maskGroup,
  fabriceMoukete,
  propAlignSelf1,
  maskGroup1,
  propAlignSelf2,
  maskGroup2,
  propAlignSelf3,
  maskGroup3,
  propAlignSelf4,
  maskGroup4,
  propAlignSelf5,
  maskGroup5,
  propAlignSelf6,
  maskGroup6,
  propAlignSelf7,
  maskGroup7,
  personnelCardListContentPadding,
  fabriceMouketeMinWidth,
}) => {
  const personnelCardListStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const personnelCardListContentStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: personnelCardListContentPadding,
    };
  }, [propAlignSelf, personnelCardListContentPadding]);

  const personnelCardListContent1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const personnelCardListContent2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  const personnelCardListContent3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf3,
    };
  }, [propAlignSelf3]);

  const personnelCardListContent4Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf4,
    };
  }, [propAlignSelf4]);

  const personnelCardListContent5Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf5,
    };
  }, [propAlignSelf5]);

  const personnelCardListContent6Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf6,
    };
  }, [propAlignSelf6]);

  const personnelCardListContent7Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf7,
    };
  }, [propAlignSelf7]);

  const fabriceMouketeStyle = useMemo(() => {
    return {
      minWidth: fabriceMouketeMinWidth,
    };
  }, [fabriceMouketeMinWidth]);

  return (
    <div
      className={`personnel-card-list ${className}`}
      style={personnelCardListStyle}
    >
      <div
        className="personnel-card-list-content"
        style={personnelCardListContentStyle}
      >
        <img
          className="mask-group-icon4"
          loading="lazy"
          alt=""
          src={maskGroup}
        />
        <div className="personnel-card-details">
          <div className="fabrice-moukete4" style={fabriceMouketeStyle}>
            {fabriceMoukete}
          </div>
        </div>
      </div>
      <div
        className="personnel-card-list-content"
        style={personnelCardListContent1Style}
      >
        <img
          className="mask-group-icon4"
          loading="lazy"
          alt=""
          src={maskGroup1}
        />
        <div className="personnel-card-details">
          <div className="fabrice-moukete4">Fabrice Moukete</div>
        </div>
      </div>
      <div
        className="personnel-card-list-content2"
        style={personnelCardListContent2Style}
      >
        <img
          className="mask-group-icon4"
          loading="lazy"
          alt=""
          src={maskGroup2}
        />
        <div className="fabrice-moukete-wrapper2">
          <div className="fabrice-moukete4">Fabrice Moukete</div>
        </div>
      </div>
      <div
        className="personnel-card-list-content2"
        style={personnelCardListContent3Style}
      >
        <img
          className="mask-group-icon4"
          loading="lazy"
          alt=""
          src={maskGroup3}
        />
        <div className="fabrice-moukete-wrapper2">
          <div className="fabrice-moukete4">Fabrice Moukete</div>
        </div>
      </div>
      <div
        className="personnel-card-list-content"
        style={personnelCardListContent4Style}
      >
        <img
          className="mask-group-icon4"
          loading="lazy"
          alt=""
          src={maskGroup4}
        />
        <div className="personnel-card-details">
          <div className="fabrice-moukete4">Fabrice Moukete</div>
        </div>
      </div>
      <div
        className="personnel-card-list-content"
        style={personnelCardListContent5Style}
      >
        <img
          className="mask-group-icon4"
          loading="lazy"
          alt=""
          src={maskGroup5}
        />
        <div className="fabrice-moukete-wrapper2">
          <div className="fabrice-moukete4">Fabrice Moukete</div>
        </div>
      </div>
      <div
        className="personnel-card-list-content2"
        style={personnelCardListContent6Style}
      >
        <img
          className="mask-group-icon4"
          loading="lazy"
          alt=""
          src={maskGroup6}
        />
        <div className="fabrice-moukete-wrapper2">
          <div className="fabrice-moukete4">Fabrice Moukete</div>
        </div>
      </div>
      <div
        className="personnel-card-list-content"
        style={personnelCardListContent7Style}
      >
        <img
          className="mask-group-icon4"
          loading="lazy"
          alt=""
          src={maskGroup7}
        />
        <div className="personnel-card-details">
          <div className="fabrice-moukete4">Fabrice Moukete</div>
        </div>
      </div>
    </div>
  );
};

PersonnelCardList.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  fabriceMoukete: PropTypes.string,
  maskGroup1: PropTypes.string,
  maskGroup2: PropTypes.string,
  maskGroup3: PropTypes.string,
  maskGroup4: PropTypes.string,
  maskGroup5: PropTypes.string,
  maskGroup6: PropTypes.string,
  maskGroup7: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propAlignSelf3: PropTypes.any,
  propAlignSelf4: PropTypes.any,
  propAlignSelf5: PropTypes.any,
  propAlignSelf6: PropTypes.any,
  propAlignSelf7: PropTypes.any,
  personnelCardListContentPadding: PropTypes.any,
  fabriceMouketeMinWidth: PropTypes.any,
};

export default PersonnelCardList;
