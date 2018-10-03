import React from "react";

function Room1(){
  return (
    <div>
      <div className="container">
        <p>You find yourself in a room with 2 doors. Which do you take?</p>
      </div>
      <style jsx>{`
        .container {
          font-size: 24px;
          padding: 80px;
          margin: 0;
          margin-top: 50px;
          color: white;
          height: 400px;
        }
    `}</style>
    </div>
  );
}

export default Room1;
