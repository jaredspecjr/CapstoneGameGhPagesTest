import React from "react";
import PropTypes from "prop-types";
import Enemy from "./Enemy";
import FoundTxt from "./FoundTxt";
import NoneTxt from "./NoneTxt";

// let enemyIsDefeated = false;
function Room4(props) {

  if (props.enemyIsDefeated === true) {
    let currentContent = null;
    if(props.roomSearched === true && props.potion1 === true){
      currentContent = <FoundTxt pickUpPotion={props.pickUpPotion}/>;
    } else if( props.roomSearched === true && props.potion1 === false){
      currentContent = <NoneTxt noItemsFound={props.noItemsFound}/>;
    } else {
      currentContent = null;
    }
    return (
      <div className="container">
        <p className="description">After defeating your ambusher, You see a desk near a window and a door on the far end of the room.
        The desk seems cluttered with papers and random tools youve never seen before.</p>
        <div>
          {currentContent}
        </div>
        <style jsx>{`
            .container {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              color: white;
              height: 400px;
            }
            .description {
              margin: 0;
              margin-top: 80px;
              font-size: 24px;
              padding: 50px;
            }
        `}</style>
      </div>
    );
  } else {
    return <Enemy playerAttacked={props.playerAttacked}
      enemyAttacked={props.enemyAttacked}
      enemyHealth={props.enemyHealth}
      damagePlayer={props.damagePlayer}
      didEnemyAttack={props.didEnemyAttack}
      enemyHurt={props.enemyHurt}
      playerHurt={props.playerHurt}
      potionUsed={props.potionUsed}
      amountHealed={props.amountHealed}
      isEnemyDefeated={props.isEnemyDefeated}/>;
  }
}

Room4.propTypes = {
  enemyIsDefeated: PropTypes.bool.isRequired,
  roomSearched: PropTypes.bool.isRequired,
  potion1: PropTypes.bool.isRequired,
  pickUpPotion: PropTypes.func.isRequired,
  noItemsFound: PropTypes.func.isRequired,
  playerAttacked: PropTypes.bool.isRequired,
  enemyAttacked: PropTypes.bool.isRequired,
  enemyHealth: PropTypes.number.isRequired,
  damagePlayer: PropTypes.func.isRequired,
  didEnemyAttack: PropTypes.func.isRequired,
  enemyHurt: PropTypes.number.isRequired,
  playerHurt: PropTypes.number.isRequired,
  potionUsed: PropTypes.bool.isRequired,
  amountHealed: PropTypes.number.isRequired,
  isEnemyDefeated: PropTypes.func.isRequired,
};


export default Room4;
