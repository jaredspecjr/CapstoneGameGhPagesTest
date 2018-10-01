import React from 'react';
import PropTypes from 'prop-types';
import enemy from '../assets/images/swordsman_t.png';
import EnemyTxt from './EnemyTxt';
import PlayerTxt from './PlayerTxt';
import PotionTxt from './PotionTxt';

function Enemy(props) {
  const ENEMYSTATUS = {
    width: `${props.enemyHealth}%`
  };
  let currentContent = null;
  if(props.enemyAttacked === true){
    currentContent = <EnemyTxt playerHurt={props.playerHurt} didEnemyAttack={props.didEnemyAttack}/>
  } else if(props.playerAttacked === true){
    currentContent = <PlayerTxt enemyHurt={props.enemyHurt} damagePlayer={props.damagePlayer}
    isEnemyDefeated={props.isEnemyDefeated}/>
  } else if(props.potionUsed === true){
    currentContent = <PotionTxt amountHealed={props.amountHealed}
    damagePlayer={props.damagePlayer}/>
  } else {
    console.log(props.playerAttacked);
    currentContent = "lol";
  }
  return (
    <div>
      <div style={ENEMYSTATUS} className="enemyHealth">
        {props.enemyHealth}
      </div>
      <img src={enemy}className="container"/>
      <div>
        {currentContent}
      </div>
        <style jsx>{`
          .container {
            color: white;
          }
          .enemyHealth{
            background-color: red;
            height: 40px;
            width: 200px;
            transition: width 1s; background-color: 1s;
            color: white;
          }
      `}</style>
    </div>
  );
}


export default Enemy;
