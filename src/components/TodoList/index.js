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
  console.log(props);
  
  const callTodos = async () => {
    await fetchTodos();
  };
  useEffect(() => {
    callTodos();
  }, []);

  // eslint-disable-next-line max-len
  const renderItems = () => Object.entries(data).map(key => <TodoItem key={key[0]} id={key[0]} data={key[1]} />);

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
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  fetchTodos: PropTypes.func.isRequired,
};

const mapStateToProps = ({ data }) => ({ data: data.todos });

export default connect(mapStateToProps, actions)(TodoList);
