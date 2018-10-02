import React from 'react';
import PropTypes from 'prop-types';
import FoundTxt from './FoundTxt';
import NoneTxt from './NoneTxt';


function Room5(props){
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
        <p>You enter what appears to be a weapons stock room. A struggle took place here and most of the equipment is damaged or unusable. A pedestal in the center of the room, which looks like it could've held something, glows a blue gem on each side. Whoever was fighting here fell back and whoever won took the spoils. You notice a door behind some fallen debris.</p>
        <div>
          {currentContent}
        </div>
      </div>
      <style jsx>{`
        .container {
          font-size: 24px;
          padding: 20px;
          margin: 0;
          margin-top: 50px;
          color: white;
          height: 400px;
        }
    `}</style>
    </div>
  );
}

export default Room5;
