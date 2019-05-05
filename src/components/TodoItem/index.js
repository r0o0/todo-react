import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../redux/actions';
// COMPONENTS
import Button from '../Button';
// CSS
import './TodoItem.sass';

function TodoItem(props) {
  const {
    id,
    data,
    deleteTodo,
    fetchTodo,
  } = props;

  // delete todo
  const handleDelete = (key, todo) => {
    const todoData = todo;
    deleteTodo(key, todoData);
  };

  console.log('todoItem', data);
  // const setData = () => {
  //   fetch
  // };

  return (
    <li className="todo_item">
      <Link className="todo_item__wrapper" to={`/todo/${id}`}>
        <p className="todo_item__text">{data.todo}</p>
      </Link>
      <Button classname="todo_item__btn--delete" value="Delete" handleClick={() => handleDelete(id, data)} />
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    todo: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    created_on: PropTypes.string,
    due_on: PropTypes.string,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default connect(null, actions)(TodoItem);
