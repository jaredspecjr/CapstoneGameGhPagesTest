import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Controls(props) {
  if(props.currentRouterPath === "") {
    return(
      <div>
        <div onClick={props.updateRoute}>
          <Link to="room2">Go to room 2</Link>
        </div>
        <div onClick={props.updateRoute}>
          <Link to="room3">Go to room 3</Link>
        </div>
      </div>
    );
  } else if(props.currentRouterPath === "room2") {
    return(
      <div onClick={props.updateRoute}>
        <Link to="room4">Go to room 4</Link>
      </div>
    );
  } else if(props.currentRouterPath === "room3"){
    return (
      <div onClick={props.updateRoute}>
        <p>this works!</p>
      </div>
    );
  } else if (props.currentRouterPath === "room4" && props.enemyIsDefeated === false ){
    return (
      <div>
        <p>attack controls</p>
      </div>
    );
  } else if (props.currentRouterPath === "room4"){
    return (
      <div>
        <p>go to room 5</p>
      </div>
    );
  } else {
    return(
      <div>
        <p>this did not work</p>
      </div>
    );
  }
}

export default Controls
