import React, { useState } from 'react';
// COMPONENTS
import TodoList from '../../components/TodoList';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import TodoForm from '../../components/TodoForm';
// UTILS
import { todayDate, todayMonth } from '../../utils/dateUtil';
// CSS
import './Home.sass';

function Home() {
  // state
  const [show, setShow] = useState(false);
  // ref
  const modal = React.createRef();
  const date = `${todayMonth} ${todayDate}`;

  // modal methods
  const openModal = () => setShow(true);
  const handleShow = (newState) => {
    setShow(newState);
  };

  return (
    <div className="container">
      <header>
        <h1 className="header_title">
          Today
          <span className="header_date">{date}</span>
        </h1>
        <TodoList />
        <Button value="Add todo" handleClick={openModal} />
        <Modal show={show} render={<TodoForm />} ref={modal} newState={handleShow} />
      </header>
    </div>
  );
}

export default Home;
