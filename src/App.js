import React from 'react';
import './App.css';
import {CurrentContextProvider} from './Components/Contexts/CurrentContext.jsx'
import Main11 from './Components/Main11.jsx'
import BalanceComp from './Components/BalanceComp.jsx'
import {Expenses} from './Components/Expenses.jsx'
import {ExpenseList} from './Components/ExpenseList.jsx'
import {AddExpense} from './Components/AddExpense.jsx'

function App() {
  return (
    <CurrentContextProvider>
    <div>
      <Main11/>
      
     <div className = "container">
       <BalanceComp/>
       <Expenses/>
       <ExpenseList/>
       <AddExpense/>
       
       </div>
       
    </div>
    </CurrentContextProvider>
  );
}

export default App;
