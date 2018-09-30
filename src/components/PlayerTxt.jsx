import React from 'react';



function PlayerTxt(props){
  return (
    <div>
      <div className="container">
        <p>You did {props.enemyHurt} damage!</p>
        <button onClick={props.damagePlayer}>Next</button>
      </div>
      <style jsx>{`
        .container {
          background-color: #a0a0a0;
          border: 5px groove #c1c1c1;
        }
    `}</style>
    </div>
  );
}

export default PlayerTxt;
