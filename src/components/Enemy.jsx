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
    <div className="container">
      <div className="panel">
        <div className="healthBarStyle">
          <div style={ENEMYSTATUS} className="enemyHealth">
            {props.enemyHealth}
          </div>
        </div>
      </div>
      <div className="panel">
        <img src={enemy} className="enemy"/>
      </div>
      <div className="panel">
        {currentContent}
      </div>
        <style jsx>{`
          .container {
            height: 400px;
            display: grid;
            grid-template-columns: repeat(3 , 1fr);
            grid-template-rows: repeat(3, 1fr);
          }
          .panel {
            
          }
          .panel:nth-child(1) {
            display: flex;
            justify-content: flex-end;
            grid-row: 1 / 2;
            grid-column: 2 / 4;
          }
          .panel:nth-child(2) {
            display: flex;
            justify-content: center;
            grid-row: 2 / 3;
            grid-column: 2 / 4;
          }
          .panel:nth-child(3) {
            grid-row: 3 / 4;
            grid-column: 1 / 4;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
          .enemy {
            width: 135px;
          }
          .enemyHealth {
            background-color: red;
            height: 30px;
            transition: width 1s; background-color: 1s;
            color: white;
          }
          .healthBarStyle {
            border: 2px solid white;
            margin-right: 10px;
            height: 30px;
            width: 300px;
            background-color: silver;
          }
      `}</style>
    </div>
  );
}


export default Enemy;
