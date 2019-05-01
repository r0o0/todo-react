/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// COMPONENTS
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import TodoForm from '../../components/TodoForm';

function Todo(props) {
  const { location, showModal, data } = props;
  const todoId = location.pathname.substr(6);

  const {
    todo,
    category,
    description,
    due_on,
  } = data[todoId];

  const openModal = () => {
    showModal('update todo form', true);
  };

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
        <p>{due_on}</p>
        <Button value="Edit" handleClick={openModal} />
        <Modal
          // show={show}
          render={<TodoForm actionType="update" todoId={todoId} />}
          // newShowState={handleShow}
          position="bottom-center"
        />
      </main>
    </div>
  );
}

Todo.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
  showModal: PropTypes.func.isRequired,
};

const mapStateToProps = ({ data }) => ({
  data: data.todos,
});

export default connect(mapStateToProps, actions)(Todo);
