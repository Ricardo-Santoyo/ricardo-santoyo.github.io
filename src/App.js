import './App.css';
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <HashRouter basename="/">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
