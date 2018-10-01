import React from 'react';



function PotionTxt(props){
  return (
    <div>
      <div className="container">
        <p>You healed for {props.amountHealed} points!</p>
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

export default PotionTxt;
