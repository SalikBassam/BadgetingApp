import React from 'react'
import '../../Assets/App.css'
import './StatisticsPage.css'

function StatisticsPage() {
  return (
    <section>
      <div className='container'>
      <div className='title'>
      <h2>Financial <span> Situation</span></h2>
      <hr />
      </div>
      <div id='Statistics'>
      <div className="cb">
        <p>Current balance:</p>
        <p>3500 DH</p>
        </div>
      <div className="te">
        <p>Total expenses:</p>
        <p>4000 DH</p>
        </div>
      <div className="ti">
        <p>Total income:</p>
        <p>10 000 DH</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default StatisticsPage