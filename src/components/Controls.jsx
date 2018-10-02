

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
      <div>
        <div>
          <button onClick={props.searchClicked}>Search Book Shelf</button>
        </div>
        <div onClick={props.updateRoute}>
          <Link to="room10">Go through door.</Link>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room3") {
    return (
      <div onClick={props.updateRoute}>
        <Link to="room5">Proceed</Link>
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
      <div>
        <div>
          <button onClick={props.searchClicked}>Search Desk</button>
        </div>
        <div onClick={props.updateRoute}>
          <Link to="room6">Go through the door</Link>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room5") {
    return (
      <div>
        <div>
          <button onClick={props.searchClicked}>Search room</button>
        </div>
        <div onClick={props.updateRoute}>
          <Link to="room7">Clear rubble and enter</Link>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room6") {
    return (
      <div onClick={props.updateRoute}>
        <Link to="room7">Proceed with Caution</Link>
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
          <Link to="room2">Pick the Green door</Link>
        </div>
        <div onClick={props.updateRoute}>
          <Link to="room9">Pick the Red door</Link>
        </div>
        <div onClick={props.updateRoute}>
          <Link to="room8">Pick the Blue door</Link>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room8") {
    return (
      <div onClick={props.updateRoute}>
        <Link to="room10">Continue through door</Link>
      </div>
    );
  } else if (props.currentRouterPath === "room9" && props.enemyIsDefeated === false){
    return (
      <div>
        <div>
          <button disabled={props.attackDisabled} className="attackButton" onClick={props.damageEnemy}>Attack</button>
        </div>
        <div>
          <button disabled={props.attackDisabled} onClick={props.usePotion}>Use Potion: {props.potions}</button>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room9") {
    return (
      <div onClick={props.updateRoute}>
        <Link to="room10">Enter through the Golden doors</Link>
      </div>
    );
  } else if (props.currentRouterPath === "room10") {
    return (
      <div>
        <p>boss room</p>
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
