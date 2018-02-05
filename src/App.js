import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Routes from './config/routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { Routes }
      </div>
    );
  }
}

export default App;
