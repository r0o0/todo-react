/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// COMPONENTS
import Button from '../shared/Button';
import Modal from '../shared/Modal';
import TodoForm from '../TodoForm';
// CSS
import './TodoDetail.sass';
// UTILS
import { isDateToday } from '../../utils/dateUtil';

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
    <div className="todo-detail__content">
      <div className="todo-detail__content-header">
        <h1 className="todo-detail__content-header__title">
          <span className="a11y-hidden">Title</span>
          {todo}
        </h1>
        <h2 className="todo-detail__content-header__category">
          <span className="a11y-hidden">Category</span>
          {category}
        </h2>
      </div>
      <div className="todo-detail__content-main">
        <h3 className="todo-detail__content-main__title">Description</h3>
        <p className="todo-detail__content-main__text">{description}</p>
        <h3 className="todo-detail__content-main__title">Due</h3>
        <p className="todo-detail__content-main__text">{isDateToday(due_on)}</p>
      </div>
      <Button value="Edit" handleClick={openModal} />
      <Modal
        // show={show}
        render={<TodoForm actionType="update" todoId={todoId} />}
        // newShowState={handleShow}
        position="bottom-center"
      />
    </div>
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
