import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
