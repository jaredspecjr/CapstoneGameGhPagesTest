import React, { Component } from 'react';
import Room1 from './Room1';
import Room2 from './Room2';
import Room3 from './Room3';
import Room4 from './Room4';
import Room5 from './Room5';
import Room6 from './Room6';
import Room7 from './Room7';
import Room8 from './Room8';
import Room9 from './Room9';
import Room10 from './Room10';
import HealthBar from './HealthBar';
import Controls from './Controls';
import { Route, Switch } from 'react-router-dom';
// import { browserHistory } from 'react-router';

//Your initialization

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      healthLevel: 100,
      playerHurt: 0,
      enemyHurt: 0,
      amountHealed:0,
      currentRoute: "",
      enemyHealth: 100,
      enemyIsDefeated: false,
      attackDisabled: false,
      enemyAttacked: false,
      playerAttacked: false,
      potionUsed: false,
      potions: 0,
      potion1: true,
      potion2: true,
      roomSearched: false
    };
    this.damagePlayer = this.damagePlayer.bind(this);
    this.damageEnemy = this.damageEnemy.bind(this);
    this.updateRoute = this.updateRoute.bind(this);
    this.cleanExtension = this.cleanExtension.bind(this);
    this.checkClear = this.checkClear.bind(this);
    this.enemyDefeated = this.enemyDefeated.bind(this);
    this.isEnemyDefeated = this.isEnemyDefeated.bind(this);
    this.isPlayerDefeated = this.isPlayerDefeated.bind(this);
    this.didPlayerAttack = this.didPlayerAttack.bind(this);
    this.didEnemyAttack = this.didEnemyAttack.bind(this);
    this.usePotion = this.usePotion.bind(this);
    this.wasPotionUsed = this.wasPotionUsed.bind(this);
    this.checkDefeated = this.checkDefeated.bind(this);
    this.enemyReset = this.enemyReset.bind(this);
    this.pickUpPotion = this.pickUpPotion.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
    this.noItemsFound = this.noItemsFound.bind(this);
    this.resetPotion = this.resetPotion.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }
  componentWillMount() {
    this.updateRoute();
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }


  cleanExtension(routeExtension) {
    let cleanedExtension = routeExtension.replace("#/", "");
    return cleanedExtension;
  }

  updateRoute() {
    this.enemyReset();
    this.resetPotion();
    const routeExtension = location.hash;
    const cleanedExtension = this.cleanExtension(routeExtension);
    console.log(cleanedExtension);
    this.setState({
      currentRoute: cleanedExtension
    });
  }

  checkClear() {
    this.isPlayerDefeated();

  }
  checkDefeated(){
    this.isEnemyDefeated();
    this.isPlayerDefeated();
  }

  isEnemyDefeated() {
    if(this.state.enemyHealth < 1){
      this.enemyDefeated();
      console.log("dis enemy DED");
    } else {
      console.log("this enemy is still alive!");
    }
  }

  isPlayerDefeated() {
    if(this.state.healthLevel <= 0){
      window.location.href = "http://localhost:8080/";
    } else {
      console.log("player is alive");
    }
  }

  enemyDefeated() {
    let newEnemyIsDefeated = true;
    this.setState({
      enemyIsDefeated: newEnemyIsDefeated
    });
  }

  enemyReset() {
    let newEnemyIsDefeated = false;
    let newEnemyHealth = 100;
    this.setState({
      enemyIsDefeated: newEnemyIsDefeated
    });
    this.setState({
      enemyHealth: newEnemyHealth
    });
    this.didEnemyAttack();
  }

  damagePlayer() {
    let newPlayerAttacked = false;
    let newEnemyAttacked = true;
    let newPotionUsed = false;
    if(this.state.enemyHealth < 1){
      this.isEnemyDefeated();
    } else {
      let newHealthLevel = this.state.healthLevel -  Math.floor((Math.random() * 18) + 1);
      let playerDead = 0;
      if(newHealthLevel <= 0){
        this.setState({
          healthLevel: playerDead
        });
      } else {
        this.setState({
          healthLevel: newHealthLevel
        });
      }
      let playerHealthDif = this.state.healthLevel - newHealthLevel;
      this.setState({
        playerHurt: playerHealthDif
      });
    }
    this.setState({
      playerAttacked: newPlayerAttacked
    });
    this.setState({
      enemyAttacked: newEnemyAttacked
    });
    this.setState({
      potionUsed: newPotionUsed
    });
  }

  damageEnemy() {
    let newEnemyHealth = this.state.enemyHealth -  Math.floor((Math.random() * 20) + 100);
    let enemyDead = 0;
    let newAttackDisabled = true;
    if(newEnemyHealth <= 0){
      this.setState({
        enemyHealth: enemyDead
      });
    } else {
      this.setState({
        enemyHealth: newEnemyHealth
      });
    }
    this.setState({
      attackDisabled: newAttackDisabled
    });
    this.didPlayerAttack();
    let enemyHealthDif = this.state.enemyHealth - newEnemyHealth;
    this.setState({
      enemyHurt: enemyHealthDif
    });
  }

  didPlayerAttack() {
    let newPlayerAttacked = true;
    this.setState({
      playerAttacked: newPlayerAttacked
    });
  }

  didEnemyAttack() {
    this.isPlayerDefeated();
    let newEnemyAttacked = false;
    let newAttackDisabled = false;
    this.setState({
      enemyAttacked: newEnemyAttacked
    });
    this.setState({
      attackDisabled: newAttackDisabled
    });
  }

  wasPotionUsed() {
    let newPotionUsed = true;
    this.setState({
      potionUsed: newPotionUsed
    });
  }

  usePotion() {
    if(this.state.potions > 0){
      if(this.state.healthLevel < 100){
        let newPotions = this.state.potions -1;
        this.wasPotionUsed();
        this.setState({
          potions: newPotions
        });
        let newAttackDisabled = true;
        this.setState({
          attackDisabled: newAttackDisabled
        });
        let newHealthLevel = this.state.healthLevel + Math.floor((Math.random() * 20) + 30);
        if(newHealthLevel >= 100){
          let currentHealthLevel = this.state.healthLevel;
          let revisedHealthLevel = 100;
          let potionDif = revisedHealthLevel - currentHealthLevel;
          this.setState({
            amountHealed: potionDif
          });
          this.setState({
            healthLevel: revisedHealthLevel
          });
        } else {
          this.setState({
            healthLevel: newHealthLevel
          });
          let potionDif = newHealthLevel - this.state.healthLevel;
          this.setState({
            amountHealed: potionDif
          });
        }
      } else {
        console.log("you have max health...");
      }
    } else {
      console.log("you have no potions!");
    }
  }

  pickUpPotion(){
    let newPotions = this.state.potions + 1;
    let newPotion1 = false;
    let newRoomSeached = false;
    this.setState({
      potions: newPotions
    });
    this.setState({
      potion1: newPotion1
    });
    this.setState({
      roomSearched: newRoomSeached
    });
  }
  // checks to see if potion is in room or not
  resetPotion(){
    let newPotion1 = true;
    this.setState({
      potion1: newPotion1
    });
  }
  searchClicked(){
    let newRoomSeached = true;
    this.setState({
      roomSearched: newRoomSeached
    });
  }
  noItemsFound(){
    let newRoomSeached = false;
    this.setState({
      roomSearched: newRoomSeached
    });
  }
  resetGame() {
    if(this.state.healthLevel > 0){
      window.location.href = "http://localhost:8080/";
    } else {
      console.log("something happened");
    }
  }

  render() {
    return (

      <div className="App">
        <div className="healthBar">
          <HealthBar healthLevel={this.state.healthLevel} />
        </div>
        <div className="stage">
          <Switch>
            <Route exact path="/" render={()=><Room1/>} />
            <Route path="/room2" render={()=><Room2
              potion1={this.state.potion1}
              roomSearched={this.state.roomSearched}
              pickUpPotion={this.pickUpPotion}
              noItemsFound={this.noItemsFound}/>} />
            <Route path="/room3" render={()=><Room3/>} />
            <Route path="/room4" render={()=><Room4
              enemyHealth={this.state.enemyHealth}
              enemyIsDefeated={this.state.enemyIsDefeated}
              enemyAttacked={this.state.enemyAttacked}
              playerAttacked={this.state.playerAttacked}
              potionUsed={this.state.potionUsed}
              damagePlayer={this.damagePlayer}
              didEnemyAttack={this.didEnemyAttack}
              enemyHurt={this.state.enemyHurt}
              playerHurt={this.state.playerHurt}
              amountHealed={this.state.amountHealed}
              isEnemyDefeated={this.isEnemyDefeated}
              potion1={this.state.potion1}
              roomSearched={this.state.roomSearched}
              pickUpPotion={this.pickUpPotion}
              noItemsFound={this.noItemsFound}/>}/>
            <Route path="/room5" render={()=><Room5
              potion1={this.state.potion1}
              roomSearched={this.state.roomSearched}
              pickUpPotion={this.pickUpPotion}
              noItemsFound={this.noItemsFound}/>}/>
            <Route path="/room6" render={()=><Room6/>}/>
            <Route path="/room7" render={()=><Room7
              enemyHealth={this.state.enemyHealth}
              enemyIsDefeated={this.state.enemyIsDefeated}
              enemyAttacked={this.state.enemyAttacked}
              playerAttacked={this.state.playerAttacked}
              potionUsed={this.state.potionUsed}
              damagePlayer={this.damagePlayer}
              didEnemyAttack={this.didEnemyAttack}
              enemyHurt={this.state.enemyHurt}
              playerHurt={this.state.playerHurt}
              amountHealed={this.state.amountHealed}
              isEnemyDefeated={this.isEnemyDefeated}/>}/>
            <Route path="/room8" render={()=><Room8/>}/>
            <Route path="/room9" render={()=><Room9
              enemyHealth={this.state.enemyHealth}
              enemyIsDefeated={this.state.enemyIsDefeated}
              enemyAttacked={this.state.enemyAttacked}
              playerAttacked={this.state.playerAttacked}
              potionUsed={this.state.potionUsed}
              damagePlayer={this.damagePlayer}
              didEnemyAttack={this.didEnemyAttack}
              enemyHurt={this.state.enemyHurt}
              playerHurt={this.state.playerHurt}
              amountHealed={this.state.amountHealed}
              isEnemyDefeated={this.isEnemyDefeated}/>}/>
            <Route path="/room10" render={()=><Room10/>}/>
          </Switch>
        </div>
        <div className="controls">
          <Controls currentRouterPath={this.state.currentRoute}
            updateRoute={this.updateRoute}
            enemyIsDefeated={this.state.enemyIsDefeated} damageEnemy={this.damageEnemy}
            attackDisabled={this.state.attackDisabled}
            potions={this.state.potions}
            usePotion={this.usePotion}
            pickUpPotion={this.pickUpPotion}
            searchClicked={this.searchClicked}
            resetGame={this.resetGame}/>
        </div>
        <style jsx>{`
          .App {
            display: flex;
            flex-direction: column;
            background-color: black;
            margin: -10px;
          }
          .stage {
            border: 5px solid black;
            margin-top: 30px;
            background-color: black;
            width: 600px;
            height: 400px;
            align-self: center;
          }
          .controls {
            border: 10px solid black;
            margin-top: 50px;
            height: 279px;
            width: 100%;
            align-self: center;
          }
          .healthBar {
            width: 600px;
            height: 50px;
            background-color: silver;
            border: 5px solid black;
            align-self: center;
          }
      `}</style>
      </div>

    );
  }
}



export default App;
