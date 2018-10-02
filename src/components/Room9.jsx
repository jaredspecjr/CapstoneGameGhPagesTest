import React from 'react';
import PropTypes from 'prop-types';
import Enemy from './Enemy';


function Room9(props){
  if (props.enemyIsDefeated === true){
    return (
      <div>
        <div className="container">
          <h5>Room 9</h5>
        </div>
        <style jsx>{`
            .container {
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
        isEnemyDefeated={props.isEnemyDefeated}/>
    }
  }

  export default Room9;
