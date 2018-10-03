import React from "react";
import PropTypes from "prop-types";
import Enemy from "./Enemy";


function Room9(props){
  if (props.enemyIsDefeated === true){
    return (
      <div>
        <div className="container">
          <p>The gate slams shut behind you. You can see four torches lit, illuminating a big golden door. On the left is a gash in the wall, It's to big to fit through and too dark to see what"s on the other side.</p>
        </div>
        <style jsx>{`
            .container {
              font-size: 24px;
              padding: 30px;
              margin: 0;
              margin-top: 85px;
              color: white;
              height: 400px;
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

Room9.propTypes = {
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

export default Room9;
