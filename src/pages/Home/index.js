import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// COMPONENTS
import TodoList from '../../components/TodoList';
import Button from '../../components/shared/Button';
import Modal from '../../components/shared/Modal';
import TodoForm from '../../components/TodoForm';
// UTILS
import { todayDate, todayMonth } from '../../utils/dateUtil';
// CSS
import './Home.sass';

function Home(props) {
  const { showModal } = props;
  // state
  // const [show, setShow] = useState(false);
  const date = `${todayMonth} ${todayDate}`;

  // modal methods
  const openModal = () => {
    // setShow(true);
    showModal('todo form', true);
  };
  // const handleShow = (newState) => {
  //   setShow(newState);
  // };

  return (
    <div className="container">
      <header>
        <h1 className="header_title">
          Today
          <span className="header_date">{date}</span>
        </h1>
        <TodoList />
        <Button value="Add todo" handleClick={openModal} />
        <Modal
          // show={show}
          render={<TodoForm />}
          // newShowState={handleShow}
          position="bottom-center"
        />
      </header>
    </div>
  );
}

Home.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default connect(null, actions)(Home);
