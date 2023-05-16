import React from 'react'
import '../../Assets/App.css'
import './StatisticsPage.css'



function StatisticsPage({ amount, currentBalance, totalExpenses, totalIncome }) {
  return (
    <div className='container'>
      <div className='title'>
        <h2>Financial <span> Situation</span></h2>
        <hr />
      </div>
      <div id='Statistics'>
        <div className="cb">
          <p>Current balance:</p>
          <p>{currentBalance} DH</p>
        </div>
        <div className="te">
          <p>Total expenses:</p>
          <p>{totalExpenses} DH</p>
        </div>
        <div className="ti">
          <p>Total income:</p>
          <p>{totalIncome} DH</p>
        </div>
      </div>
    </div>
  );
}



export default StatisticsPage;
