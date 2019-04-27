import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// COMPONENTS
import Home from '../Home';
import Todo from '../Todo';
// CSS
import './App.sass';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/todo/:number" component={Todo} />
    </BrowserRouter>
  );
}

export default App;
