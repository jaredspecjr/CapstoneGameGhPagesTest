import React, { Component } from 'react';
import Room1 from './Room1';
// import { Route, Switch, HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="stage">

          <p>this works</p>
        </div>
        <div className="controls">
          <p>controls will go here</p>
        </div>
        <style jsx>{`
          .stage {
            text-align: center;
          }
      `}</style>
      </div>

    );
  }
}

export default App;
