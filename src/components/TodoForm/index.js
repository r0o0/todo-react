import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// COMPONENTS
import Input from '../Input';
import Button from '../Button';
// ACTIONS
import * as actions from '../../redux/actions';
// CSS
import './TodoForm.sass';

function TodoForm(props) {
  const initialState = {
    todo: null,
    category: null,
    description: null,
    created_on: new Date().toString(),
  };
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addTodo } = props;
    addTodo(state);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <Input classname="todo_input" type="text" name="todo" label="Todo" placeholder="Add a todo" autocomplete="off" value={(newValue) => { setState({ todo: newValue }); }} />
      <Input type="text" name="category" label="Category" placeholder="Add a category" autocomplete="off" value={(newValue) => { setState({ category: newValue }); }} />
      <Button type="submit" value="Submit" />
    </form>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(null, actions)(TodoForm);
