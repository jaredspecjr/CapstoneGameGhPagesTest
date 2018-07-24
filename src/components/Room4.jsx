import React from 'react';
import room4 from '../assets/images/room4.jpg';
import enemy from '../assets/images/enemy.jpg';


function Room4() {
  if (enemyIsDefeted) {

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
    } else {
      return <Enemy />
    }
  }


export default Room4;
