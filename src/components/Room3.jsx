import React from 'react';
import room2 from '../assets/images/room2.jpg';


function Room3() {
  return (
    <div>
      <img src={room2}/>
        <style jsx>{`
          img {
            width: 100%;
            height: 400px;
          }
      `}</style>
    </div>
  );
}


export default Room3;
