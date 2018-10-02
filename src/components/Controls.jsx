import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Controls(props) {
  if (props.currentRouterPath === "") {
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
  } else if (props.currentRouterPath === "room2") {
    return(
      <div onClick={props.updateRoute}>
        <Link to="room4">Go to room 4</Link>
      </div>
    );
  } else if (props.currentRouterPath === "room3") {
    return (
      <div onClick={props.updateRoute}>
        <p>this works!</p>
      </div>
    );
  } else if (props.currentRouterPath === "room4" && props.enemyIsDefeated === false ) {
    return (
      <div>
        <div>
          <button disabled={props.attackDisabled} className="attackButton" onClick={props.damageEnemy}>Attack</button>
        </div>
        <div>
          <button disabled={props.attackDisabled} onClick={props.usePotion} >Use Potion: {props.potions}</button>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room4") {
    return (
      <div onClick={props.updateRoute}>
        <Link to="room5">go to room 5</Link>
      </div>
    );
  } else if (props.currentRouterPath === "room5") {
    return (
      <div>
        <p>go to a new room 5</p>
      </div>
    );
  } else if (props.currentRouterPath === "room6") {
    return (
      <div>
        <p>go to a new room 6</p>
      </div>
    );
  } else if (props.currentRouterPath === "room7") {
    return (
      <div>
        <p>go to a new room 7</p>
      </div>
    );
  } else if (props.currentRouterPath === "room8") {
    return (
      <div>
        <p>go to a new room 8</p>
      </div>
    );
  } else if (props.currentRouterPath === "room9") {
    return (
      <div>
        <p>go to a new room 9</p>
      </div>
    );
  } else if (props.currentRouterPath === "room10") {
    return (
      <div>
        <p>go to a new room 10</p>
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
