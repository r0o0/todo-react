/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// COMPONENTS
import TodoDetail from '../../components/TodoDetail';
// CSS
import './Todo.sass';

function Todo(props) {
  const {
    match,
    fetchTodo,
    data,
  } = props;

  const todoId = match.params.number;

  // check if data object is empty
  const isObjectEmpty = () => {
    if (Object.entries(data.todo).length === 0 && data.constructor === Object) {
      return true;
    }
    return false;
  };

  const getTodo = async () => {
    await fetchTodo(todoId);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="todo-detail">
      <header className="todo-detail__header">
        <Link to="/">Back</Link>
      </header>
      <main className="todo-detail__main">
        {!isObjectEmpty() ? <TodoDetail todoId={todoId} data={data.todo} /> : null}
      </main>
    </div>
  );
}

Todo.propTypes = {
  // match
  match: PropTypes.shape({
    params: PropTypes.shape({
      number: PropTypes.string,
    }),
  }).isRequired,
  // data
  data: PropTypes.shape({
    todo: PropTypes.object,
  }).isRequired,
  // actions
  fetchTodo: PropTypes.func.isRequired,
};

const mapStateToProps = ({ data }) => ({
  data,
});

export default connect(mapStateToProps, actions)(Todo);
