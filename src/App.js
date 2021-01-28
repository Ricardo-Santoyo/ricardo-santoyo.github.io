import './App.css';
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <HashRouter basename="/">
      <Navbar />

      <Switch>
        <FormspreeProvider  project="1601430454819356538">
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </FormspreeProvider>
      </Switch>
    </HashRouter>
  );
}

export default App;
