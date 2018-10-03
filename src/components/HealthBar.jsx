import React from "react";
import PropTypes from "prop-types";

function HealthBar(props){
  const STATUS = {
    width: `${props.healthLevel}%`
  };
  
  return (
    <div style={STATUS} className="health">
      <div>
        {props.healthLevel}
      </div>
      <style jsx>{`
        .health {
          background-color: green;
          height: 50px;
          transition: width 1s; background-color: 1s;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
    `}</style>
    </div>
  );
}
HealthBar.propTypes = {
  healthLevel: PropTypes.number.isRequired
};

export default HealthBar;
