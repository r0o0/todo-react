import React from 'react';
// UTILS
import { todayDate } from '../../utils/dateUtil';

function Home() {
  return (
    <div className="container">
      <header>
        <h1>
          Today
          <span>{todayDate}</span>
        </h1>
      </header>
    </div>
  );
}

export default Home;
