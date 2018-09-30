import React from 'react';



function EnemyTxt(){
  return (
    <div>
      <div className="container">
        <p>Shady knight did 10 damage!</p>
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

export default EnemyTxt;
