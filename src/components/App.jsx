import React, { Component } from 'react';
import Room1 from './Room1';
import Room2 from './Room2';
import Room3 from './Room3';
import Room4 from './Room4';
import HealthBar from './HealthBar';
import Controls from './Controls';
import { Route, Switch } from 'react-router-dom';
import { browserHistory } from 'history';

//Your initialization

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      healthLevel: 100,
      hurt: 1,
      currentRoute: "",
      enemyHealth: 60,
      enemyIsDefeated: false
    };
    this.damagePlayer = this.damagePlayer.bind(this);
    this.damageEnemy = this.damageEnemy.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.cleanExtension = this.cleanExtension.bind(this);
    this.checkOptions = this.checkOptions.bind(this);
    this.enemyDefeated = this.enemyDefeated.bind(this);
    this.isEnemyDefeated = this.isEnemyDefeated.bind(this);
  }

  componentWillMount() {
    this.handleOnClick();
    this.isEnemyDefeated();
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

  isEnemyDefeated() {
    if(this.state.enemyHealth < 1){
      this.enemyDefeated();
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
    let newHealthLevel = this.state.healthLevel - this.state.hurt;
    this.setState({
      healthLevel: newHealthLevel
    });
  }

  damageEnemy() {
    let newEnemyHealth = this.state.enemyHealth - this.state.hurt;
    this.setState({
      enemyHealth: newEnemyHealth
    });
    this.isEnemyDefeated();
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
            <Route path="/room4" render={()=><Room4 enemyHealth={this.state.enemyHealth} enemyIsDefeated={this.state.enemyIsDefeated}/>} />
          </Switch>
        </div>
        <div className="controls">
          <button onClick={this.damageEnemy}>test health</button>
          <button onClick={this.handleOnClick}>test cleaned extension</button>
          <button onClick={this.checkOptions}>test equal to</button>
          <Controls currentRouterPath={this.state.currentRoute} updateRoute={this.handleOnClick} enemyIsDefeated={this.state.enemyIsDefeated}/>
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
