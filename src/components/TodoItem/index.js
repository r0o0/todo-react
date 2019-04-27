import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// COMPONENTS
import Button from '../Button';
// CSS
import './TodoItem.sass';

function TodoItem(props) {
  const {
    id,
    todo,
    deleteTodo,
  } = props;
  const handleClick = (key, data) => {
    console.log('delete todo:', key);
    const todoData = data;
    deleteTodo(key, todoData);
  };

  return (
    <li className="todo_item">
      <p className="todo_item__text">{todo}</p>
      <Button classname="todo_item__btn--delete" value="Delete" handleClick={() => handleClick(id, todo)} />
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  todo: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default connect(null, actions)(TodoItem);
