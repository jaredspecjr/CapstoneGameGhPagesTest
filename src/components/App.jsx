import React, { Component } from 'react';
import Room1 from './Room1';
import Room2 from './Room2';
import HealthBar from './HealthBar';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      healthLevel: 100,
      hurt: 1,
      currentRoute: ""
    };
    this.damagePlayer = this.damagePlayer.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.cleanExtension = this.cleanExtension.bind(this);
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

  damagePlayer() {
    let newHealthLevel = this.state.healthLevel - this.state.hurt;
    console.log(location);
    this.setState({
      healthLevel: newHealthLevel
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
            <Route exact path="/" render={()=> <Room1/>} />
            <Route path="/room2" render={()=><Room2/>} />
          </Switch>
        </div>
        <div className="controls">
          <button onClick={this.damagePlayer}>test health</button>
          <button onClick={this.handleOnClick}>test cleaned extension</button>
          <p>controls will go here</p>
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
            max-width: 600px;
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
            background-color: white;
            border: 5px solid black;
            align-self: center;
          }
      `}</style>
      </div>

    );
  }
}



export default App;
