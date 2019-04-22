import React from 'react';
// COMPONENTS
import TodoForm from './components/TodoForm';
// CSS
import './App.sass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
