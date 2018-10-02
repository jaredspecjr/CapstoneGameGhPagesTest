import React from 'react';
import PropTypes from 'prop-types';
import Enemy from './Enemy';
import FoundTxt from './FoundTxt';
import NoneTxt from './NoneTxt';

// let enemyIsDefeated = false;
function Room4(props) {

  if (props.enemyIsDefeated === true) {
    let currentContent = null;
    if(props.roomSearched === true && props.potion1 === true){
      currentContent = <FoundTxt pickUpPotion={props.pickUpPotion}/>
    } else if( props.roomSearched === true && props.potion1 === false){
      currentContent = <NoneTxt noItemsFound={props.noItemsFound}/>
    } else {
      currentContent = null;
    }
    return (
      <div className="container">
        <p>room 4</p>
        <div>
          {currentContent}
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


  export default Room4;
