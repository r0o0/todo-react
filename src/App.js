import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// COMPONENTS
import Input from './components/Input';
// CSS
import './App.sass';
import * as actions from './redux/actions';
// import { addTodo } from './redux/actions';

function App(props) {
  const [value, setValue] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { addTodo } = props;
    addTodo(value);
  };
  const handleValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={e => handleSubmit(e)}>
          <Input type="text" name="todo" label="Todo" placeholder="Add a todo" autocomplete="off" value={handleValue} />
        </form>
      </header>
    </div>
  );
}

App.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(null, actions)(App);
