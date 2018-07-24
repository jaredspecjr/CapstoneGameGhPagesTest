import React from 'react';
import room1 from '../assets/images/room1.jpg';

function Room1(){
  return (
    <div>
      <div>
        <img src={room1}/>
      </div>
      <style jsx>{`
        img {
          width: 100%;
          height: 400px;
        }
    `}</style>
    </div>
  );
}

export default Room1;
