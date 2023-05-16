// TransactionForm.js
import React, { useState } from 'react';
import '../../Assets/App.css';
import './TransactionForm.css';

function TransactionForm({ onAmountChange, onAddTransaction }) {
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('expense');

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setTransactionAmount(value);
    onAmountChange(value, type); // Pass the amount value and type to the parent component
  };

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);
  };

  const handleAddTransaction = () => {
    const newTransaction = {
      amount: transactionAmount,
      category: category,
      description: description,
      type: type,
    };

    onAddTransaction(newTransaction); // Pass the new transaction to the parent component

    // Reset the form after adding a transaction
    setTransactionAmount(0);
    setCategory('');
    setDescription('');
    setType('expense');
  };

  return (
    <div className='container'>
      <div className='title'>
        <h2>Add New <span> Transaction</span></h2>
        <hr />
      </div>
      <form className='form'>
        <div className='tt'>
          <div>
            <p>Amount:</p>
            <input
              type="number"
              placeholder='5000 Dh'
              required
              value={transactionAmount}
              onChange={handleAmountChange}
            />
          </div>
          <div>
            <p>Category:</p>
            <select id="category" name="category" required onChange={(e) => setCategory(e.target.value)}>
              <option value="housing">Housing</option>
              <option value="food">Food</option>
              <option value="transportation">Transportation</option>
              <option value="leisure">Leisure</option>
              <option value="personal">Personal</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
        <div>
          <p>Description:</p>
          <input
            type="text"
            placeholder='Grocery shopping'
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <p>Type:</p>
          <div className='type'>
            <div>
              <input
                type="radio"
                id="expense"
                name="type"
                value="expense"
                checked={type === 'expense'}
                onChange={handleTypeChange}
              />
              <label htmlFor="expense">Expense</label>
            </div>
            <div>
              <input
                type="radio"
                id="income"
                name="type"
                value="income"
                checked={type === 'income'}
                onChange={handleTypeChange}
              />
              <label htmlFor="income">Income</label>
            </div>
          </div>
        </div>
        <input type="button" value='Add Transaction' onClick={handleAddTransaction} />
      </form>
    </div>
  );
}

export default TransactionForm;
