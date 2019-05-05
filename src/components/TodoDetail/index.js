import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// COMPONENTS
import Button from '../Button';
import Modal from '../Modal';
import TodoForm from '../TodoForm';

function TodoDetail(props) {
  const {
    // fetchTodo,
    todoId,
    data,
    showModal,
  } = props;

  const openModal = () => {
    showModal('update todo form', true);
  };

  const {
    todo,
    category,
    description,
    due_on,
  } = data;

  return (
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
  );
}

TodoDetail.propTypes = {
  todoId: PropTypes.string.isRequired,
  data: PropTypes.shape({
    todo: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    due_on: PropTypes.string,
  }).isRequired,
  // actions
  showModal: PropTypes.func.isRequired,
};

export default connect(null, actions)(TodoDetail);
