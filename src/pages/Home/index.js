import React from 'react';
// COMPONENTS
import TodoList from '../../components/TodoList';
// UTILS
import { todayDate, todayMonth } from '../../utils/dateUtil';
// CSS
import './Home.sass';

function Home() {
  const date = `${todayMonth} ${todayDate}`;
  return (
    <div className="container">
      <header>
        <h1 className="header_title">
          Today
          <span className="header_date">{date}</span>
        </h1>
        <TodoList />
      </header>
    </div>
  );
}

export default Home;
