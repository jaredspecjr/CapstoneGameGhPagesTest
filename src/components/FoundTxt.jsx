import React from 'react';



function FoundTxt(props){
  return (
    <div>
      <div className="container">
        <p>You found a potion!</p>
        <button onClick={props.pickUpPotion}>Next</button>
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

export default FoundTxt;
