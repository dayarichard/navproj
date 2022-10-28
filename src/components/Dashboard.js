import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel, CloseButton, Container, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { addCheckBox, deleteCheckBox, onCheckElement } from '../store/actions';
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css"
import { Table } from 'antd';
import AntDes from './AntDes';
import Dashboard2 from './Dasboard';


function Dashboard() {
    const state = useSelector(state=>state)
    const [data , setData] = useState([])
    const dispatch = useDispatch()
    const  [userinfo, setUserInfo] = useState({
        languages: [],
        
      });

      
      const columns = [
        {
          title: 'userId',
          dataIndex: 'userId',
          key: 'userId',
          render: (text) => <a>{text}</a>
        },
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
        },

        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },

        {
          title: 'Body',
          dataIndex: 'body',
          key: 'body',
        },
      ];
      
     let  languageList= [
 {languageId: 1, languageCode: "en", languageName: "English", displayName: "English"},
 {languageId: 2, languageCode: "mr", languageName: "Marathi", displayName: "मराठी"},
 {languageId: 3, languageCode: "te", languageName: "Telugu", displayName: "తెలుగు"},
 {languageId: 5, languageCode: "kn", languageName: "Kannada", displayName: "ಕನ್ನಡ"},
 {languageId: 8, languageCode: "hi", languageName: "Hindi", displayName: "हिंदी"}]
      
 console.log(languageList.filter(s=>s.languageName.toLowerCase().includes("k".toLowerCase())),"sxs")
      useEffect(()=>{


        // console.log(userinfo.languages,"sdhh")
        fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setData(json))
            dispatch(onCheckElement(userinfo.languages))
            
  const products = [
    { name: 'apples', type: 'fruits' },
    { name: 'oranges', category: 'fruits' },
    { name: 'potatoes', type: 'vegetables' }
  ];
  

const groupByCategory = products.reduce((group, product) => {
    let  { type } = product;
    if (type=== undefined){
      type = 'unknown'
    }
    group[type] = group[type] ?? [];
    group[type].push(product);
    return group;
  }, {});
  console.log(groupByCategory);
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
      
      const notify = () => toast.warning('hi')
   

    
  return (
    <div className='dashboard-container'>
        {
            state.chekeckedElements.map((e, i)=>(
                <div key ={i} ><input type='checkbox'  value={e} onChange={handleChange} className='mr-3' /> {e} <button className='text-danger' style={{border:'none'}} onClick={()=>{handleDelete(e)}}>X</button></div>
            ))
        }
        <Dashboard2 />
        <div>
        <Table
         pagination={true}
       dataSource={data} columns={columns} />
        </div>
        <AntDes />
 
        {/* <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer  autoClose={20000} position='top-center'   />
        <Card>
        <Card.Header >Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary" >Go Somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="bg-dark text-dark">
  <Card.Img className='w-40' src="https://telanganatoday.com/wp-content/uploads/2022/04/Google-multisearch-tool-to-help-users-search-with-photos.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://telanganatoday.com/wp-content/uploads/2022/04/Google-multisearch-tool-to-help-users-search-with-photos.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit , consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div> */}
      

    </div>
  )
}

export default Dashboard