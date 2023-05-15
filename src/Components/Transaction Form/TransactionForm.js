import React from 'react'
import { useState, useEffect } from 'react';
import '../../Assets/App.css'
import './TransactionForm.css'

function TransactionForm({onAmountChange} ) {
  // Define state variables for form inputs and statistics
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('expense');
  const [currentBalance, setCurrentBalance] = useState(3500);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    onAmountChange(value); // Pass the amount value to the parent component
  };
  
  const handleAddTransaction = () => {
    setAmount(amount + 1)
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
            <input type="number" placeholder='5000 Dh' required   value={amount} onChange={handleAmountChange} />
            </div>
            <div>
            <p for="category">Category:</p>
            <select id="category" name="category" required>
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
            <input type="text" placeholder='Grocery shopping' required/>
          </div>
          <div>
            <p>Type:</p>
            <div className='type'>
              <div>
            <input type="radio" id="expense" name="type" value="expense" checked/>
            <label for="expense"> Expense</label>
            </div>
            <div>
            <input type="radio" id="income" name="type" value="income" />
            <label for="income"> Income</label>
            </div>
            </div>
          </div>
          <input type="button" value='Add Transaction' onClick={handleAddTransaction}/>
        </form>
      </div>
  )
}

export default TransactionForm