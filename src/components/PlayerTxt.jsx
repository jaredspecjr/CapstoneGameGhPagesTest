import React from 'react';



function PlayerTxt(){
  return (
    <div>
      <div className="container">
        <p>You did 10 damage!</p>
        <button>Next</button>
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
