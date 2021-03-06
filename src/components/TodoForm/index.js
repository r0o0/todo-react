import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// COMPONENTS
import Input from '../shared/Input';
import Button from '../shared/Button';
import Textarea from '../shared/Textarea';
import DatePicker from '../shared/DatePicker';
// ACTIONS
import * as actions from '../../redux/actions';
// UTILS
import { todayFullDate } from '../../utils/dateUtil';
// CSS
import './TodoForm.sass';

function TodoForm(props) {
  const {
    todoId,
    actionType,
    hideModal,
    // actions
    modal,
  } = props;

  // STATE
  const initialState = {
    todo: null,
    category: null,
    description: null,
    due_on: todayFullDate,
    created_on: todayFullDate,
  };
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);
  // console.log('form', state);

  // HOOKS
  // When component loads focus on todo input
  useEffect(() => {
    console.log(modal);
    const target = document.querySelectorAll('.input')[0];
    if (modal.type === 'todo form' && modal.status) {
      target.focus();
    }
  }, [modal.status]);

  // EVENTS
  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const { addTodo, updateTodo } = props;
    if (actionType === 'update') {
      updateTodo(todoId, state);
    } else {
      addTodo(state);
    }
  };
  // Date Button
  const handleDate = (newDate) => {
    setState({
      due_on: newDate,
    });
  };
  // TO CHANGE LATER
  const checkSubmit = () => {
    hideModal('', false);
  };

  return (
    <div className="form_wrapper">
      <form onSubmit={e => handleSubmit(e)}>
        <div className="form__input">
          <Input type="text" name="todo" label="Todo" placeholder="Add a todo" autocomplete="off" value={(newValue) => { setState({ todo: newValue }); }} />
        </div>
        <div className="form__input">
          <Input type="text" name="category" label="Category" placeholder="Add a category" autocomplete="off" value={(newValue) => { setState({ category: newValue }); }} />
        </div>
        <Textarea label="description" value={newValue => setState({ description: newValue })} />
        <DatePicker date={newDate => handleDate(newDate)} />
        <Button type="submit" value="Submit" handleClick={checkSubmit} />
      </form>
    </div>
  );
}

TodoForm.defaultProps = {
  todoId: '',
  actionType: 'add',
};

TodoForm.propTypes = {
  todoId: PropTypes.string,
  actionType: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  modal: PropTypes.shape({
    type: PropTypes.string,
    status: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = store => ({
  modal: store.modal,
});

export default connect(mapStateToProps, actions)(TodoForm);
