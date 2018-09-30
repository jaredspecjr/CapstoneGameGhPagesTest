import React from 'react';



function EnemyTxt(props){
  return (
    <div>
      <div className="container">
        <p>Shady knight did {props.playerHurt} damage!</p>
        <button onClick={props.didEnemyAttack}>Next</button>
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

export default EnemyTxt;
