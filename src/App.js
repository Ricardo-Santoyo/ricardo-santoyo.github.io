import './App.css';
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
      </Switch>
    </HashRouter>
  );
}

export default App;

//<Route exact path="/" component={Home} />
