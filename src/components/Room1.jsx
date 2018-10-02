import React from 'react';
import room1 from '../assets/images/room1.jpg';


function Room1(){
  return (
    <div>
      <div className="container">
        <p>You find yourself in a room with 2 doors. Which do you take?</p>
      </div>
      <style jsx>{`
        .container {
          color: white;
          height: 400px;
        }
    `}</style>
    </div>
  );
}

export default Room1;
