import React from 'react';
import PropTypes from 'prop-types';

function Controls(props) {
  if(props.currentRouterPath === "") {
    return(
      <div>
        <h1>Go into room2</h1>
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
