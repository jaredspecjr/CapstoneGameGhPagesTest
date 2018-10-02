import React from 'react';
import PropTypes from 'prop-types';
import FoundTxt from './FoundTxt';
import NoneTxt from './NoneTxt';



function Room2(props) {
  let currentContent = null;
  if(props.roomSearched === true && props.potion1 === true){
    currentContent = <FoundTxt pickUpPotion={props.pickUpPotion}/>
  } else if( props.roomSearched === true && props.potion1 === false){
    currentContent = <NoneTxt noItemsFound={props.noItemsFound}/>
  } else {
    currentContent = null;
  }
  return (
    <div>
      <div className="container">
        <p>The gate slams shut behind you as you see what appears to be the library of the castle. Like previous rooms, it's cluttered. You notice something shining on a Bookshelf next to another door.
        On the right you can see light shining through a gash in the wall.</p>
        <div>
          {currentContent}
        </div>
      </div>
        <style jsx>{`
          .container {
            font-size: 24px;
            padding: 50px;
            margin: 0;
            margin-top: 50px;
            color: white;
            height: 400px;
          }
      `}</style>
    </div>
  );
}


export default Room2;
