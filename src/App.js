import React, { useState } from 'react';
import { Header, Footer } from './Layouts';
import { StatisticsPage, TransactionForm, TransactionList } from './Components';

function App() {
  // State variables to track the app's data
  const [currentBalance, setCurrentBalance] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  // Event handler for adding a new transaction
  const handleAddTransaction = (newTransaction) => {
    const newValue = Number(newTransaction.amount);

    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);

    // Update the current balance and total amounts based on the new transaction type
    if (newTransaction.type === 'expense') {
      setCurrentBalance((prevBalance) => prevBalance - newValue);
      setTotalExpenses((prevExpenses) => prevExpenses + newValue);
    } else {
      setCurrentBalance((prevBalance) => prevBalance + newValue);
      setTotalIncome((prevIncome) => prevIncome + newValue);
    }
  };

  return (
    <>
      <Header />
      <div className="main-content">
        <section className="statistics-section">
          <StatisticsPage
            currentBalance={currentBalance}
            totalExpenses={totalExpenses}
            totalIncome={totalIncome}
          />
        </section>
        <section className="form-section">
          <TransactionForm
            onAddTransaction={handleAddTransaction}
          />
        </section>
        <TransactionList transactions={transactions} />
      </div>
      <Footer />
    </>
  );
}

export default App;
