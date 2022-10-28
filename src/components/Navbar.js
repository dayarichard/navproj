import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCheckBox } from '../store/actions'
import RecipeReviewCard from './reviewCard'

function Navbar() {
    const [inputValue, setInputValue] = useState('')
    const state = useSelector(s=>s)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <Button variant="primary" onClick={handleShow} className="me-2">
        {'hi'}
      </Button>
      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
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
        <button className='btn-primary' style={{border:'none'}} onClick={addCheckBoxHandler}>Add</button>
    </div>
      
    </nav>
  )
}

export default Navbar