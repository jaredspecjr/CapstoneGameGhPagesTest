

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Controls(props) {
  if (props.currentRouterPath === "") {
    return(
      <div>
        <div onClick={props.updateRoute}>
          <Link to="room4">Go through the door on your left</Link>
        </div>
        <div onClick={props.updateRoute}>
          <Link to="room3">Go through the door on your right</Link>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room2") {
    return(
      <div onClick={props.updateRoute}>
        <Link to="room10">go to boss room from 2</Link>
      </div>
    );
  } else if (props.currentRouterPath === "room3") {
    return (
      <div onClick={props.updateRoute}>
        <Link to="room5">go to room 5 </Link>
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
        <Link to="room6">go to room 6</Link>
      </div>
    );
  } else if (props.currentRouterPath === "room5") {
    return (
      <div onClick={props.updateRoute}>
        <Link to="room7">go to room 7</Link>
      </div>
    );
  } else if (props.currentRouterPath === "room6") {
    return (
      <div onClick={props.updateRoute}>
        <Link to="room7">go to room 7</Link>
      </div>
    );
  } else if (props.currentRouterPath === "room7" && props.enemyIsDefeated === false ) {
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
  } else if(props.currentRouterPath === "room7"){
    return (
      <div>
        <div onClick={props.updateRoute}>
          <Link to="room2">go to room 2 has potion</Link>
        </div>
        <div onClick={props.updateRoute}>
          <Link to="room8">go to room 8 should have nothing</Link>
        </div>
        <div onClick={props.updateRoute}>
          <Link to="room9">go to room 9 should be enemy</Link>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room8") {
    return (
      <div onClick={props.updateRoute}>
        <Link to="room10">go to boss room from 8</Link>
      </div>
    );
  } else if (props.currentRouterPath === "room9") {
    return (
      <div onClick={props.updateRoute}>
        <Link to="room10">go to boss room from 9</Link>
      </div>
    );
  } else if (props.currentRouterPath === "room10") {
    return (
      <div>
        <p>boss room</p>
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
