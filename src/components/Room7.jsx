import React from "react";
import PropTypes from "prop-types";
import Enemy from "./Enemy";


function Room7(props){
  if (props.enemyIsDefeated === true){

    return (
      <div>
        <div className="container">
          <p>Suddenly, a gate slams shut behind you. In front of you stand three huge doors. Atop each door you notice there's a different colored gem.</p>
        </div>
        <style jsx>{`
            .container {
              font-size: 24px;
              padding: 20px;
              margin: 0;
              margin-top: 75px;
              color: white;
              height: 400px;
            }
        `}</style>
      </div>
    );
  } else {
    return <Enemy playerAttacked={props.playerAttacked}  enemyAttacked={props.enemyAttacked} enemyHealth={props.enemyHealth}
      damagePlayer={props.damagePlayer}
      didEnemyAttack={props.didEnemyAttack}
      enemyHurt={props.enemyHurt}
      playerHurt={props.playerHurt}
      potionUsed={props.potionUsed}
      amountHealed={props.amountHealed}
      isEnemyDefeated={props.isEnemyDefeated}/>;
  }
}

Room7.propTypes = {
  enemyIsDefeated: PropTypes.bool.isRequired,
  playerAttacked: PropTypes.bool.isRequired,
  enemyAttacked: PropTypes.bool.isRequired,
  enemyHealth: PropTypes.number.isRequired,
  damagePlayer: PropTypes.func.isRequired,
  didEnemyAttack: PropTypes.func.isRequired,
  enemyHurt: PropTypes.number.isRequired,
  playerHurt: PropTypes.number.isRequired,
  potionUsed: PropTypes.bool.isRequired,
  amountHealed: PropTypes.number.isRequired,
  isEnemyDefeated: PropTypes.func.isRequired
};

export default Room7;
