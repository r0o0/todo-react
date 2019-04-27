import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Todo(props) {
  const { location } = props;
  const {
    todo,
    category,
    description,
    due,
  } = location.state.data;

  return (
    <div className="todo_detail">
      <header className="todo_detail__header">
        <Link to="/">Back</Link>
      </header>
      <main className="todo_detail__main">
        <h1 className="todo_detail__title">{todo}</h1>
        <h2 className="todo_detail__category">{category}</h2>
        <h3>Description</h3>
        <p>{description}</p>
        <h3>Due</h3>
        <p>{due}</p>
      </main>
    </div>
  );
}

Todo.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};

export default Todo;
