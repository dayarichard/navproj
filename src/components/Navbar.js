import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCheckBox } from '../store/actions'

function Navbar() {
    const [inputValue, setInputValue] = useState('')
    const state = useSelector(s=>s)
    const dispatch = useDispatch()
    const addCheckBoxHandler = ()=>{
        //console.log(inputValue , state, "entered")
        //let arr = state.chekeckedElements
        
        //arr.push({isChecked:false,key:inputValue})
        //console.log(arr,"sdsd")
        if(inputValue!==''){
            dispatch(addCheckBox(inputValue))
            setInputValue('')
            
        }
        
    }
  return (
    <nav style={{height:'10vh', backgroundColor:'#97dbef', display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
        <ul style={{display:'flex'}}>
            
            {
                state.checkElements.map((e, i)=>{
                    
                   return (<li style={{marginLeft:'10px'}} key ={i} > {e}</li>)
    
                }
                
                    
                )
            }
        </ul>

    <div className='m-3'>
        <input type={'text'}  value = {inputValue} onChange = {e=>setInputValue(e.target.value)}/>
        <button className='bg-primary' onClick={addCheckBoxHandler}>Add</button>
    </div>

    </nav>
  )
}

export default Navbar