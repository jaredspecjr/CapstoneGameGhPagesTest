import React from 'react';
import PropTypes from 'prop-types';
import Enemy from './Enemy';

// let enemyIsDefeated = false;
function Room4(props) {
  if (props.enemyIsDefeated === true) {

    return (
      <div className="container">
        <p>room 4</p>
        <style jsx>{`
            .container {
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
      isEnemyDefeated={props.isEnemyDefeated}/>
    }
  }


export default Room4;
