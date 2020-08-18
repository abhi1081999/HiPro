import React,{useState , useContext} from 'react'
import { createContext } from 'react'
import {CurrentContext} from './Contexts/CurrentContext'

 
export const AddExpense = () => {

  const [[expense,setExpense],[income,setIncome],
[balance,setBalance],
[spending,setWet],[list,setList] ]= useContext(CurrentContext)    
let name1,val1,rs;
  const add = () =>{

    setWet(name1)
    setExpense(val1)
    setList((old)=>{
      return([...old , {name1 , val1}])

    })


  }
  const name = (e)=>{
    name1 = e.target.value;
  }
  const amount = (e)=>{
    val1 = e.target.value
  }
  const set = ()=>{
    setIncome(rs)

  }
  const money = (e)=>{
    e.preventDefault()
    rs = e.target.value;
  }
    return (

        <>
        
            <h3>Add new Expense 😎 </h3>
      
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  value = {name1} placeholder="Enter text..." onChange={(e)=> name(e) }/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  value= {val1} placeholder="Enter amount..."  onChange={(e)=> amount(e) } />
        </div>
        <button className="btn" onClick = {add}>Add Transaction or Expense</button>
{/*      
        <div className="form-control">
          <label>Set Income //(Code Not Working currently)<br />
            (:😊 )</label
          >
          <input type="number"  placeholder="Enter/....." onChange={(e)=> money(e) } />
        </div>
        <button className="btn" onClick = {set}>Add Income</button> */}

        

        </>
    )

}
