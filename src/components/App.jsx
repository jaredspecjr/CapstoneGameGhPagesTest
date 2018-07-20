import React, { Component } from 'react';
import Room1 from './Room1';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="stage">
          <Switch>
            <Route exact path="/" render={()=> <Room1/>} />
          </Switch>
        </div>
        <div className="controls">
          <p>controls will go here</p>
        </div>
        <style jsx>{`
          .App {
            text-align: center;
          }
          .stage {
            border: 1px solid black;
            margin-top: 30px;
            margin-right: 250px;
            margin-left: 250px;
            background-color: black;
            min-width: 400px;

          }
          .controls {
            border: 10px solid black;
            margin-top: 100px;
            height: 279px;
          }
          img {
            width: 100%;
            min-width: 400px;

          }
      `}</style>
      </div>

    );
  }
}

export default App;
