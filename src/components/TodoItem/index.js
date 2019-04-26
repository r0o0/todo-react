import React from 'react';
import PropTypes from 'prop-types';
// CSS
import './TodoItem.sass';

function TodoItem(props) {
  const {
    todo,
  } = props;
  return (
    <li className="todo_item">{todo}</li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
};

export default TodoItem;
