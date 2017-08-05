import React, { Component } from 'react';
import { Header } from './components/Header';
import { LeaderTable } from './components/LeaderTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header companyName="freeCodeCamp" />
        <LeaderTable />
      </div>
    );
  }
}

export default App;
