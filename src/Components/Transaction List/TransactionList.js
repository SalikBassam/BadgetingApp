import React from 'react';
import '../../Assets/App.css';
import './TransactionList.css';

function TransactionList({ transactions }) {
  return (
    <section id="TransactionListSection">
      <div className='container'>
        <div className='title'>
          <h2>-- Recent <span> Transactions</span></h2>
          <hr />
        </div>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Description</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.description}</td>
                <td>{transaction.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TransactionList;
