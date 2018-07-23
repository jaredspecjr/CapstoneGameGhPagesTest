import React from 'react';
import PropTypes from 'prop-types';
function HealthBar(props){
  const STATUS = {
    width: `${props.healthLevel}%`
  };
  console.log(props.healthLevel);
  return (
    <div style={STATUS} className="health">
      <div>

      </div>
      <style jsx>{`
        .health {
          background-color: green;
          height: 50px;
          transition: width 1s, background-color: 1s;
        }
    `}</style>
    </div>
  );
}

export default HealthBar;
