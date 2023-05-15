import React from 'react'
import '../../Assets/App.css'
import './TransactionList.css'

function TransactionList() {
  return (
    <section id="TransactionListSection">
		<div className='container'>
		<div className='title'>
          <h2>-- Recent <span> Transaction ++</span></h2>
          <hr />
        </div>

<table>
<tr>
<th>#</th>	
<th>Amount</th>	
<th>Category</th>	
<th>Description</th>	
<th>Type</th>	
</tr>	
<tr>
	<td>1</td>
	<td>+ 3500 DH</td>
	<td>Housing</td>
	<td>random description</td>
	<td>Expense</td>
</tr>
<tr>
	<td>2</td>
	<td>- 3500 DH</td>
	<td>Housing</td>
	<td>random description</td>
	<td>Expense</td>
</tr>
<tr>
	<td>3</td>
	<td>+ 3500 DH</td>
	<td>Housing</td>
	<td>random description</td>
	<td>Expense</td>
</tr>
<tr>
	<td>1</td>
	<td>+ 3500 DH</td>
	<td>Housing</td>
	<td>random description</td>
	<td>Expense</td>
</tr>
<tr>
	<td>2</td>
	<td>- 3500 DH</td>
	<td>Housing</td>
	<td>random description</td>
	<td>Expense</td>
</tr>
<tr>
	<td>3</td>
	<td>+ 3500 DH</td>
	<td>Housing</td>
	<td>random description</td>
	<td>Expense</td>
</tr>
</table>
</div>
    </section>
  )
}

export default TransactionList