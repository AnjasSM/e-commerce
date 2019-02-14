import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <div>
            <Route exact path="/" Component={Home} />
          </div>
        </Header>
      </div>
    );
  }
}

export default App;
