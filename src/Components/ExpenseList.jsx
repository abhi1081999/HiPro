import React , {useContext , useState} from 'react'
import {Name , Value} from './AddExpense.jsx'
import {CurrentContext} from './Contexts/CurrentContext'

// import {Value} from './AddExpense.jsx'

export const ExpenseList = () => {
// const [itemlist ,setItemName] = useState([])
// const [pzlist ,setItemPz] = useState([])

const [[expense,setExpense],[income,setIncome],
[balance,setBalance],
[spending,setWet],[list,setList] ]= useContext(CurrentContext)    

// const namefn = () =>{
//   //  let itemName = spending
//   pricefn()
//     setItemName((old)=>{

//       return([...old , spending])
//     })
// }
// const pricefn = () =>{
// //  let itemPz = expense
//   setItemPz((old)=>{

//     return([...old , expense])
//   })
// }

  return (
        <>
                <h3>History</h3>
        <ul class="list">
           <li className="minus">
  <span>
  
  {list.map((i)=>{return<li>{i.name1} .....🌄{i.val1} </li>})}

  </span><button class="delete-btn">X</button>
  {/* <button class="delete-btn1" onClick ={namefn}>Del</button> */}
          </li> 
        </ul>
        </>
    )
}
