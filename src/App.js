import {Header,Footer} from './Layouts/index'
import {StatisticsPage,TransactionForm,TransactionList} from './Components/index'
import React, { useState } from 'react';

function App() {

  const [amount, setAmount] = useState(0);

  const handleAmountChange = (value) => {
    setAmount(value);
  };


  return ( 
    

    
    <>
    <Header />
    <div className="main-content">
      <section className="statistics-section">
        <StatisticsPage amount={amount} />
      </section>
      <section className="form-section">
        <TransactionForm onAmountChange={handleAmountChange}/>
      </section>
    </div>
    <TransactionList />
    {/* <Footer /> */}
  </>
  );
}

export default App;
