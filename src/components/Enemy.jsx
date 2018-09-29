import React from 'react';
import PropTypes from 'prop-types';
import enemy from '../assets/images/swordsman_t.png';


function Enemy(props) {
  const ENEMYSTATUS = {
    width: `${props.enemyHealth}%`
  };
  return (
    <div>
      <div style={ENEMYSTATUS} className="enemyHealth">
        {props.enemyHealth}
      </div>
      <img src={enemy}className="container"/>
        <style jsx>{`
          .container {
            color: white;
          }
          .enemyHealth{
            background-color: red;
            height: 40px;
            width: 200px;
            transition: width 1s; background-color: 1s;
            color: white;
          }
      `}</style>
    </div>
  );
}


export default Enemy;
