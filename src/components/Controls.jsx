import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Controls(props) {
  if(props.currentRouterPath === "") {
    return(
      <div onClick={props.updateRoute}>
        <Link to="room2">Go to room 2</Link>
      </div>
    );
  } else if(props.currentRouterPath === "room2") {
    return(
      <div>
        <h1>Go to room4</h1>
      </div>
    );
  } else {
    return (
      <div>
        <p>this did not work</p>
      </div>
    );
  }
}

export default Controls
