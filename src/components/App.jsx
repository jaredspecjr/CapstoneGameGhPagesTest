import React, { Component } from 'react';
import Room1 from './Room1';
import Room2 from './Room2';
import Room3 from './Room3';
import Room4 from './Room4';
import HealthBar from './HealthBar';
import Controls from './Controls';
import { Route, Switch } from 'react-router-dom';
// import { browserHistory } from 'history';

//Your initialization

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      healthLevel: 100,
      playerHurt: 0,
      enemyHurt: 0,
      currentRoute: "",
      enemyHealth: 60,
      enemyIsDefeated: false,
      attackDisabled: false,
      enemyAttacked: false,
      playerAttacked: false
    };
    this.damagePlayer = this.damagePlayer.bind(this);
    this.damageEnemy = this.damageEnemy.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.cleanExtension = this.cleanExtension.bind(this);
    this.checkClear = this.checkClear.bind(this);
    this.enemyDefeated = this.enemyDefeated.bind(this);
    this.isEnemyDefeated = this.isEnemyDefeated.bind(this);
    this.didPlayerAttack = this.didPlayerAttack.bind(this);
    this.didEnemyAttack = this.didEnemyAttack.bind(this);
  }
  componentWillMount() {
    this.handleOnClick();
  }
  componentDidMount(){
    let checkIfDeadTimer = setInterval(() => this.isEnemyDefeated(), 1000);
    return checkIfDeadTimer;
  }
  componentWillUnmount(){

  }

  cleanExtension(routeExtension) {
    let cleanedExtension = routeExtension.replace("#/", "");
    return cleanedExtension;
  }

  handleOnClick() {
    const routeExtension = location.hash;
    const cleanedExtension = this.cleanExtension(routeExtension);
    console.log(cleanedExtension);
    this.setState({
      currentRoute: cleanedExtension
    });
  }


  checkOptions() {

  }
  checkClear() {

  }

  isEnemyDefeated() {
    if(this.state.enemyHealth < 1){
      this.enemyDefeated();
      console.log("dis enemy DED");
    } else {
      console.log("this enemy is still alive!");
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
    this.setState({
      enemyIsDefeated: newEnemyIsDefeated
    });
  }

  damagePlayer() {
    let newPlayerAttacked = false;
    let newEnemyAttacked = true;
    if(this.state.enemyHealth < 1){
      console.log("I died");
    } else {
      let newHealthLevel = this.state.healthLevel -  Math.floor((Math.random() * 20) + 1);
      this.setState({
        healthLevel: newHealthLevel
      });
    }
    this.setState({
      playerAttacked: newPlayerAttacked
    });
    this.setState({
      enemyAttacked: newEnemyAttacked
    });
    let playerHealthDif = this.state.healthLevel - newHealthLevel;
    this.setState({
      playerHurt: playerHealthDif
    });
  }

  damageEnemy() {
    let newEnemyHealth = this.state.enemyHealth -  Math.floor((Math.random() * 30) + 5);
    let newAttackDisabled = true;
    this.setState({
      enemyHealth: newEnemyHealth
    });
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
    let newEnemyAttacked = false;
    let newAttackDisabled = false;
    this.setState({
      enemyAttacked: newEnemyAttacked
    });
    this.setState({
      attackDisabled: newAttackDisabled
    });
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
            <Route path="/room2" render={()=><Room2/>} />
            <Route path="/room3" render={()=><Room3/>} />
            <Route path="/room4" render={()=><Room4 enemyHealth={this.state.enemyHealth} enemyIsDefeated={this.state.enemyIsDefeated}
            enemyAttacked={this.state.enemyAttacked}
            playerAttacked={this.state.playerAttacked}
            damagePlayer={this.damagePlayer}
            didEnemyAttack={this.didEnemyAttack}
            enemyHurt={this.state.enemyHurt}
            playerHurt={this.state.playerHurt} />} />
          </Switch>
        </div>
        <div className="controls">
          <button onClick={this.damageEnemy}>test health</button>
          <button onClick={this.handleOnClick}>test cleaned extension</button>
          <button onClick={this.checkClear}>test cleard interval</button>
          <Controls currentRouterPath={this.state.currentRoute} updateRoute={this.handleOnClick} enemyIsDefeated={this.state.enemyIsDefeated} damageEnemy={this.damageEnemy}
          attackDisabled={this.state.attackDisabled}/>
        </div>
        <style jsx>{`
          .App {
            text-align: center;
            display: flex;
            flex-direction: column;
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
