import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// COMPONENTS
import TodoItem from '../TodoItem';
// CSS
import './TodoList.sass';

function TodoList(props) {
  const {
    data,
    fetchTodos,
  } = props;
  const callTodos = async () => {
    await fetchTodos();
  };
  useEffect(() => {
    callTodos();
  }, []);

  // eslint-disable-next-line max-len
  const renderItems = () => Object.entries(data).map(key => <TodoItem key={key[0]} id={key[0]} todo={key[1].todo} />);

  return (
    <ul className="todo_list">
      {data !== null ? renderItems() : null}
    </ul>
  );
}

TodoList.defaultProps = {
  data: null,
};

TodoList.propTypes = {
  data: PropTypes.shape({
    todo: PropTypes.string,
    category: PropTypes.number,
    created_at: PropTypes.string,
    due_on: PropTypes.string,
  }),
  fetchTodos: PropTypes.func.isRequired,
};

const mapStateToProps = ({ data }) => ({ data: data.todos });

export default connect(mapStateToProps, actions)(TodoList);
