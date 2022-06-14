import React, { useEffect, useState } from 'react'
import { CloseButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { addCheckBox, deleteCheckBox, onCheckElement } from '../store/actions';


function Dashboard() {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    const  [userinfo, setUserInfo] = useState({
        languages: [],
        
      });
      
      
      useEffect(()=>{
        // console.log(userinfo.languages,"sdhh")
            dispatch(onCheckElement(userinfo.languages))
      },[userinfo.languages])

      const handleChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        const { languages } = userinfo;
          
        console.log(`${value} is ${checked}`);
         
        // Case 1 : The user checks the box
        if (checked) {
          setUserInfo({
            languages: [...languages, value],
            
          });
        }
      
        // Case 2  : The user unchecks the box
        else {
          setUserInfo({
            languages: languages.filter((e) => e !== value),
            
          });
        }
      };
      

      const handleDelete = (each)=>{
        //console.log(state.chekeckedElements.indexOf(each),"zdsd")
        let d = state.chekeckedElements.filter(r=>r!==each)
        let f =state.checkElements.filter(e=> e!== each)
            console.log(f,"sdsd")
            setUserInfo({
                languages:f
            })
          //console.log(d,"sds")
          dispatch(deleteCheckBox(d))
          dispatch(onCheckElement(userinfo.languages))
      }
      
      

    
  return (
    <div className='dashboard-container'>
        {
            state.chekeckedElements.map((e, i)=>(
                <div key ={i} ><input type='checkbox'  value={e} onChange={handleChange} className='mr-3' /> {e} <button className='text-danger' style={{border:'none'}} onClick={()=>{handleDelete(e)}}>X</button></div>
            ))
        }
    </div>
  )
}

export default Dashboard