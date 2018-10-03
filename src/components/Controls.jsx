import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  marginRight: "250px",
  marginLeft: "250px"
};
const linkStyle = {
  textDecoration: "none",
  backgroundColor: "darkblue",
  color: "white",
  fontSize: "24px",
  borderRadius: "50px",
  padding: "15px",
  margin: "43px",
  borderStyle: "none",
};
const disabled = {
  textDecoration: "none",
  color: "white",
  padding: "10px",
};
const attackControls = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "600px",
  alignSelf: "center"
};
const attackBtnStyle = {
  fontSize: "24px",
  borderStyle: "none",
};
const centerControls = {
  display: "flex",
  justifyContent: "center",
};



function Controls(props) {
  if (props.currentRouterPath === "") {
    return(
      <div style={containerStyle}>
        <div>
          <button style={linkStyle}>
            <div onClick={props.updateRoute}>
              <Link style={disabled} to="room4">Go through the door on your left</Link>
            </div>
          </button>
        </div>
        <div>
          <button style={linkStyle}>
            <div onClick={props.updateRoute}>
              <Link style={disabled} to="room3">Go through the door on your right</Link>
            </div>
          </button>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room2") {
    return(
      <div style={containerStyle}>
        <div>
          <button className="linkStyle" style={linkStyle} onClick={props.searchClicked}>Search Book Shelf
          </button>
        </div>
        <div>
          <button style={linkStyle}>
            <div  onClick={props.updateRoute}>
              <Link style={disabled} to="room10">Go through door.</Link>
            </div>
          </button>
        </div>
        <style jsx>{`
          .linkStyle:hover {
            cursor: pointer;
          }
      `}</style>
      </div>
    );
  } else if (props.currentRouterPath === "room3") {
    return (
      <div style={containerStyle}>
        <div onClick={props.updateRoute}>
          <Link to="room5" style={linkStyle}>Proceed</Link>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room4" && props.enemyIsDefeated === false ) {
    return (
      <div style={centerControls}>
        <div style={attackControls}>
          <div>
            <button className="green" style={attackBtnStyle} disabled={props.attackDisabled} onClick={props.usePotion} >Use Potion: {props.potions}</button>
          </div>
          <div>
            <button style={attackBtnStyle} disabled={props.attackDisabled} className="attackButton red" onClick={props.damageEnemy}>Attack</button>
          </div>
        </div>
        <style jsx>{`
          .green{
            background-color: #56c456;
            color: #e5e5e5;
          }
          .red{
            background-color: red;
            color: #e5e5e5;
          }
      `}</style>
      </div>
    );
  } else if (props.currentRouterPath === "room4") {
    return (
      <div style={containerStyle}>
        <div>
          <button className="linkStyle" style={linkStyle} onClick={props.searchClicked}>Search Desk
          </button>
        </div>
        <div>
          <button style={linkStyle}>
            <div  onClick={props.updateRoute}>
              <Link style={disabled} to="room6">Go through the door.</Link>
            </div>
          </button>
        </div>
        <style jsx>{`
          .linkStyle:hover {
            cursor: pointer;
          }
      `}</style>
      </div>
    );
  } else if (props.currentRouterPath === "room5") {
    return (
      <div style={containerStyle}>
        <div>
          <button className="linkStyle" style={linkStyle} onClick={props.searchClicked}>Search Room
          </button>
        </div>
        <div>
          <button style={linkStyle}>
            <div  onClick={props.updateRoute}>
              <Link style={disabled} to="room7">Clear rubble and enter</Link>
            </div>
          </button>
        </div>
        <style jsx>{`
          .linkStyle:hover {
            cursor: pointer;
          }
      `}</style>
      </div>
    );
  } else if (props.currentRouterPath === "room6") {
    return (
      <div style={containerStyle}>
        <div onClick={props.updateRoute}>
          <Link to="room7" style={linkStyle}>Proceed with Caution</Link>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room7" && props.enemyIsDefeated === false ) {
    return (
      <div style={centerControls}>
        <div style={attackControls}>
          <div>
            <button className="green" style={attackBtnStyle} disabled={props.attackDisabled} onClick={props.usePotion} >Use Potion: {props.potions}</button>
          </div>
          <div>
            <button style={attackBtnStyle} disabled={props.attackDisabled} className="attackButton red" onClick={props.damageEnemy}>Attack</button>
          </div>
        </div>
        <style jsx>{`
          .green{
            background-color: #56c456;
            color: #e5e5e5;
          }
          .red{
            background-color: red;
            color: #e5e5e5;
          }
      `}</style>
      </div>
    );
  } else if(props.currentRouterPath === "room7"){
    return (
      <div style={containerStyle}>
        <div>
          <button style={linkStyle}>
            <div  onClick={props.updateRoute}>
              <Link style={disabled} to="room2">Pick the Green door</Link>
            </div>
          </button>
        </div>
        <div>
          <button style={linkStyle}>
            <div  onClick={props.updateRoute}>
              <Link style={disabled} to="room9">Pick the Red door</Link>
            </div>
          </button>
        </div>
        <div>
          <button style={linkStyle}>
            <div  onClick={props.updateRoute}>
              <Link style={disabled} to="room8">Pick the Blue door</Link>
            </div>
          </button>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room8") {
    return (
      <div style={containerStyle}>
        <div onClick={props.updateRoute}>
          <Link to="room10" style={linkStyle}>Continue through door</Link>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room9" && props.enemyIsDefeated === false){
    return (
      <div style={centerControls}>
        <div style={attackControls}>
          <div>
            <button className="green" style={attackBtnStyle} disabled={props.attackDisabled} onClick={props.usePotion} >Use Potion: {props.potions}</button>
          </div>
          <div>
            <button style={attackBtnStyle} disabled={props.attackDisabled} className="attackButton red" onClick={props.damageEnemy}>Attack</button>
          </div>
        </div>
        <style jsx>{`
          .green{
            background-color: #56c456;
            color: #e5e5e5;
          }
          .red{
            background-color: red;
            color: #e5e5e5;
          }
      `}</style>
      </div>
    );
  } else if (props.currentRouterPath === "room9") {
    return (
      <div style={containerStyle}>
        <div onClick={props.updateRoute}>
          <Link to="room10" style={linkStyle}>Enter through the Golden doors</Link>
        </div>
      </div>
    );
  } else if (props.currentRouterPath === "room10") {
    return (
      <div className="thankYou">
        <p>Thank you for playing the game! no boss has been implemented at the moment. Sorry!</p>
        <button onClick={props.resetGame}>Reset Game</button>
        <style jsx>{`
          .thankYou {
            color: white;
          }
      `}</style>
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

Controls.propTypes = {
  currentRouterPath: PropTypes.string.isRequired,
  updateRoute: PropTypes.func.isRequired,
  searchClicked: PropTypes.func.isRequired,
  enemyIsDefeated: PropTypes.bool.isRequired,
  attackDisabled: PropTypes.bool.isRequired,
  usePotion: PropTypes.func.isRequired,
  potions: PropTypes.number.isRequired,
  damageEnemy: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired
};

export default Controls;
