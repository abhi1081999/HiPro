import React,{createContext , useState} from 'react'

 export const CurrentContext = createContext()
    
export const CurrentContextProvider = (props) => {

    const [expense,setExpense] = useState(0)
    const [income,setIncome] = useState(0)
    const [balance,setBalance] = useState(0)
    const [spending,setWet] = useState('')
    const[list,setList] = useState([{
      itemName : "",
      itemPrice: 0  
    }] )

const wet = [
        [expense,setExpense],
        [income,setIncome],
        [balance,setBalance],
        [spending,setWet],
        [list,setList]

]
    
    return (
        <div>
            <CurrentContext.Provider value = {wet
               
                
                } >

                {props.children}

            </CurrentContext.Provider>


        </div>
    )
}
