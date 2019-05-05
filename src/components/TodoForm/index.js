import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
// COMPONENTS
import Input from '../Input';
import Button from '../Button';
import DatePicker from '../DatePicker';
// ACTIONS
import * as actions from '../../redux/actions';
// CSS
import './TodoForm.sass';

function TodoForm(props) {
  const {
    todoId,
    actionType,
    hideModal,
  } = props;
  // STATE
  const initialState = {
    todo: null,
    category: null,
    description: null,
    due_on: moment()._d.toString(),
    created_on: moment()._d.toString(),
  };
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);
  console.log(state);

  // HOOKS
  // When component loads focus on todo input
  const focusOnLoad = React.createRef();
  useEffect(() => {
    window.addEventListener('load', () => focusOnLoad.current.focus());
  });

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
        <Input classname="todo_input" type="text" name="todo" label="Todo" placeholder="Add a todo" autocomplete="off" value={(newValue) => { setState({ todo: newValue }); }} ref={focusOnLoad} />
        <Input type="text" name="category" label="Category" placeholder="Add a category" autocomplete="off" value={(newValue) => { setState({ category: newValue }); }} />
        <DatePicker date={newDate => handleDate(newDate)} />
        <Button type="submit" value="Submit" handleClick={checkSubmit} />
      </form>
    </div>
  );
}

TodoForm.defaultProps = {
  actionType: 'add',
};

TodoForm.propTypes = {
  actionType: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default connect(null, actions)(TodoForm);
