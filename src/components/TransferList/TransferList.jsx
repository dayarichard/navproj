import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
//initial value set for Arrow
const upArrow = -1;
const downArrow = 1;

const TransferList = ({ props }) => {
//calling props
    const [propsVal, setStatePropsFun] = useState(props);
//setting states with callings props and updating new values    
    useEffect(() => {
      axios.get('./myjson.json')
      .then(response => {
            setStatePropsFun({
                list1: response.data.itemList1,
                list2: response.data.itemList2
            })
         })
      .catch(() =>{
    // handle error
         console.log("Error Loading data");
      })
    },[])

//Handeling Array to set value to checkbox from false to true
    const handleChange = (e) => {
        let value = e.target.value;
        propsVal.list1.map((res1) => {
            if(res1.subList.length>0){
                res1.subList.map(subRes=>{

                    if(subRes.id === value){
                        subRes.checked = e.target.checked
                        return subRes.checked
                    }
                }) 
            }
            if (res1.id == value) {
                res1.checked = e.target.checked;
                return res1.checked
            }
            
        })

        propsVal.list2.map((res2) => {
            if(res2.subList.length>0 && res2.id == value){
                res2.subList.map(subRes2=>{
                    if(subRes2.id === value){
                        subRes2.checked = e.target.checked
                        return subRes2.checked
                    }
                }) 
            }
            if (res2.id == value) {
                res2.checked = e.target.checked;
                return res2.checked 
            }
            return res2
        })
        //update list state
        setStatePropsFun({
            list1: propsVal.list1,
            list2: propsVal.list2
        });
    }
    const handleMove = (direction) => {
        if (direction === 'left') {
            propsVal.list1.map((result) => {
                if(result.subList.length>0 && propsVal.list2.filter(res1=>res1.id == result.id)  ){
                    result.subList.map(subRes=>{    
                        if(subRes.checked == true ){
                            let obj = Object.assign({},result)
                            let subObj =  propsVal.list2.filter(res1=>res1.id == result.id)
                            obj.subList = obj.subList.filter(i=>i.checked)
                            let subArray = [...obj.subList,...subObj[0]?.subList]
                            console.log( subObj && subObj[0]?.subList,obj.subList,subArray,"lsis");

                            propsVal.list2.map(res1=>{
                                console.log(res1.id== result.id,"before");
                                if(res1.id== result.id){
                                    console.log(res1.id== result.id,"aftre",res1);

                                    let obj = Object.assign({},res1)
                                    obj.subList = subArray
                                    res1.subList = subArray
                                }
                                return res1
                            })
                            console.log(propsVal.list1,"jsxbjs")
                            setStatePropsFun({
                                list2: [...propsVal.list2],
                                list1: propsVal.list1.map(re=>{
                                    if(re.subList.length>0){
                                        re.subList = re.subList.filter(i=>!i.checked)
                                    }
                                    return re
                            })
                            });
                        }
                    }) 
                }else{
                    result.subList.map(subRes=>{    
                        if(subRes.checked == true ){
                            let obj = Object.assign({},result)
                            obj.subList = obj.subList.filter(i=>i.checked)

                            propsVal.list2.push(obj)
                            console.log(propsVal.list1,"jsxbjs")
                            setStatePropsFun({
                                list2: [...propsVal.list2],
                                list1: propsVal.list1.map(re=>{
                                    if(re.subList.length>0){
                                        re.subList = re.subList.filter(i=>!i.checked)
                                    }
                                    return re
                            })
                            });
                        }
                    }) 
                }
                if (result.checked === true) {
                    console.log("sdaf",propsVal.list1.filter(i => !i.checked));

                    propsVal.list2.push(result);
                    setStatePropsFun({
                        list1: propsVal.list1.filter(i => !i.checked),
                        list2: [...propsVal.list2]
                    });
                }
                return null
            });

        }
        else {
            if (direction === 'right') {
                propsVal.list2.map((result) => {
                    console.log(propsVal.list1.filter(res1=>res1.id == result.id),"sdssds");
                    if(result.subList.length>0 && propsVal.list1.filter(res1=>res1.id == result.id)  ){
                        result.subList.map(subRes=>{    
                            if(subRes.checked == true ){
                                let obj = Object.assign({},result)
                                let subObj =  propsVal.list1.filter(res1=>res1.id == result.id)
                                obj.subList = obj.subList.filter(i=>i.checked)
                                let subArray = [...obj.subList,...subObj[0]?.subList]
                                console.log( subObj && subObj[0]?.subList,obj.subList,subArray,"lsis");
    
                                propsVal.list1.map(res1=>{
                                    console.log(res1.id== result.id,"before");
                                    if(res1.id== result.id){
                                        console.log(res1.id== result.id,"aftre",res1);

                                        let obj = Object.assign({},res1)
                                        obj.subList = subArray
                                        res1.subList = subArray
                                    }
                                    return res1
                                })
                                console.log(propsVal.list1,"jsxbjs")
                                setStatePropsFun({
                                    list1: [...propsVal.list1],
                                    list2: propsVal.list2.map(re=>{
                                        if(re.subList.length>0){
                                            re.subList = re.subList.filter(i=>!i.checked)
                                        }
                                        return re
                                })
                                });
                            }
                        }) 
                    }
                    if (result.checked === true) {
                        propsVal.list1.push(result);
                        setStatePropsFun({
                            list1: [...propsVal.list1],
                            list2: propsVal.list2.filter(i => !i.checked)
                        });
                    }
                    return null
                });
            }
        }
    }

    const moveItems = (id, direction) => {
        const position = propsVal.list2.findIndex((i) => i.id === id)
        if (position < 0) {
            throw new Error("Id and Direction not found.")
        } else if ((direction === upArrow && position === 0) || (direction === downArrow && position === propsVal.list2.length - 1)) {
            return console.log("Can't Go Down/Up") // canot move outside of array
        }

        const itemPosition = propsVal.list2[position] // Stored the clicked postion object
        const filterItems = propsVal.list2.filter((i) => i.id !== id)
         // remove item from array
        filterItems.splice(position + direction, 0, itemPosition)
        setStatePropsFun({ list2: filterItems,
        list1:[...propsVal.list1] })
    }

    const moveAllData = (direction) => {
        if (direction === 'left') {
            setStatePropsFun({
                list1: [...propsVal.list1, ...propsVal.list2],
                list2: []
            })
        } else {
            setStatePropsFun({
                list2: [...propsVal.list2, ...propsVal.list1],
                list1: []
            })
        }
    }

    const LeftlistDisplay = propsVal.list1.length ? (propsVal.list1.map(leftRes => {
        return (
            <div className="subContainer" key={leftRes.id} >
                <input type="checkbox" checked={leftRes.checked} value={leftRes.id} className="fa fa-checkbox" onChange={handleChange} />
                <span>{leftRes.text}</span>
                {leftRes.subList &&<>{
                    leftRes.subList.map(subLeftRes=>(<div className="subContainer" key={subLeftRes.id} >
                    <input type="checkbox" checked={subLeftRes.checked} value={subLeftRes.id} className="fa fa-checkbox" onChange={handleChange} />
                    <span>{subLeftRes.text}</span>
                </div>))
                }</>}
            </div>
        )
    })
    ) : (
            <div className="error">Empty Content Please enter Data</div>
        )
    const RightlistDisplay = propsVal.list2.length ? (propsVal.list2.map(rightRes => {
        return (
            <div key={rightRes.id}>
                <div className="subContainer" >
                    <input type="checkbox" checked={rightRes.checked} className="fa fa-checkbox" value={rightRes.id} onChange={handleChange} />
                    <span>{rightRes.text}</span>
                    {rightRes.subList.length &&<>{
                    rightRes.subList.map(subrightRes=>(<div className="subContainer" key={subrightRes.id} >
                    <input type="checkbox" checked={subrightRes.checked} value={subrightRes.id} className="fa fa-checkbox" onChange={handleChange} />
                    <span>{subrightRes.text}</span>
                </div>))
                }</>}
                    <div className="moveArrows">
                        <Link to="#" className="fa fa-sort-up" onClick={() => moveItems(rightRes.id, upArrow)}></Link>
                        <Link to="#" className="fa fa-sort-down" onClick={() => moveItems(rightRes.id, downArrow)}></Link>
                    </div>
                </div>
            </div>
        )
    })
    ) : (
            <div className="error">Empty Content Please enter Data</div>
        )

    return (

        <div className="container">
            <div className="left-side">{LeftlistDisplay}</div>
            <div className="buttons-container">
                <button className="fa fa-caret-right" onClick={() => { handleMove('left') }}></button><br />
                <button className="fa fa-angle-double-right" onClick={() => { moveAllData('right') }}></button><br />
                <button className="fa fa-caret-left" onClick={() => { handleMove('right') }}></button><br />
                <button className="fa fa-angle-double-left" onClick={() => { moveAllData('left') }}></button><br />
            </div>
            <div className="right-side">{RightlistDisplay}</div>
        </div>
    );


}
export default TransferList