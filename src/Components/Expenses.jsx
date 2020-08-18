import React,{useContext , useState} from 'react'
import {CurrentContext} from './Contexts/CurrentContext'

export const Expenses = () => {

  const [[expense,setExpense],[income,setIncome],
  [balance,setBalance],
  [spending,setWet],[list,setList] ]= useContext(CurrentContext)    
    return (
        <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">+{income} INR 🔹 </p>
        </div>
        <div>
          <h4>Expense</h4>
    <p id="money-minus" class="money minus">-{expense} INR 🔸  </p>
        </div>
      </div>
    )
}
