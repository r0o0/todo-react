import React, { useState } from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import Input from './components/Input';
// CSS
import './App.sass';
import * as actions from './redux/actions';
// import { addTodo } from './redux/actions';



function App (props) {
  const [value, setValue] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
    props.addTodo(value);
  };
  const handleValue = value => {
    setValue(value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={e => handleSubmit(e)}>
          <Input type="text" name="todo" label="Todo" placeholder="Add a todo" autocomplete="off" value={handleValue} />
        </form>
      </header>
    </div>
  )
}

export default connect(null, actions)(App);