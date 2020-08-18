import React,{useContext , useState} from 'react'
import {CurrentContext} from './Contexts/CurrentContext'

const BalanceComp = () => {

const [[expense,setExpense],[income,setIncome],
[balance,setBalance],
[spending,setWet],[list,setList] ]= useContext(CurrentContext)    

const fn = ()=>{
    setBalance();
}
    return (
        <>
            <h4>My Balance {fn()}</h4>
    <h1>{balance}</h1>
        </>
    )
}
export default BalanceComp
