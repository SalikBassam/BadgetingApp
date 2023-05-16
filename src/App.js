import React, { useState } from 'react';
import { Header, Footer } from './Layouts';
import { StatisticsPage, TransactionForm, TransactionList } from './Components';

function App() {
  const [amount, setAmount] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    const newValue = Number(newTransaction.amount);

    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);

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
          <TransactionList transactions={transactions} />
      </div>
      <Footer />
    </>
  );
}

export default App;
