import React, { useState, useEffect } from 'react';
import { Header, Footer } from './Layouts/index';
import { StatisticsPage, TransactionForm, TransactionList } from './Components/index';

function App() {
  const [amount, setAmount] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const handleAddTransaction = (transactionAmount, transactionType) => {
    const newValue = Number(transactionAmount);

    if (transactionType === 'expense') {
      setCurrentBalance(prevBalance => prevBalance - newValue);
      setTotalExpenses(prevExpenses => prevExpenses + newValue);
    } else {
      setCurrentBalance(prevBalance => prevBalance + newValue);
      setTotalIncome(prevIncome => prevIncome + newValue);
    }
  };

  useEffect(() => {
    const storedCurrentBalance = localStorage.getItem('currentBalance');
    const storedTotalExpenses = localStorage.getItem('totalExpenses');
    const storedTotalIncome = localStorage.getItem('totalIncome');

    if (storedCurrentBalance) setCurrentBalance(parseFloat(storedCurrentBalance));
    if (storedTotalExpenses) setTotalExpenses(parseFloat(storedTotalExpenses));
    if (storedTotalIncome) setTotalIncome(parseFloat(storedTotalIncome));
  }, []);

  return (
    <>
      <Header />
      <div className="main-content">
        <section className="statistics-section">
          <StatisticsPage
            amount={amount}
            currentBalance={currentBalance}
            totalExpenses={totalExpenses}
            totalIncome={totalIncome}
          />
        </section>
        <section className="form-section">
          <TransactionForm
            onAmountChange={setAmount}
            onAddTransaction={handleAddTransaction}
            currentBalance={currentBalance}
            totalExpenses={totalExpenses}
            totalIncome={totalIncome}
          />
        </section>
      </div>
      <TransactionList />
      <Footer />
    </>
  );
}

export default App;
