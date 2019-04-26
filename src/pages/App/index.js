import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// COMPONENTS
import Home from '../Home';
// CSS
import './App.sass';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
