import './App.css';
import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <HashRouter basename="/">
      <Navbar />

      <Switch>
      </Switch>
    </HashRouter>
  );
}

export default App;

//<Route exact path="/" component={Home} />
