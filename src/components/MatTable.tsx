import React, { useEffect, useRef, useState } from "react";
// import { makeStyles  } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Checkbox, Grid, Pagination, Select, TablePagination, Typography } from "@mui/material";
import ControlledAccordions from "./FilterComponent";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


interface food {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  checked:boolean;
}


// const useStyles:any = makeStyles({
//   table: {
//     minWidth: 650
//   },
//   drawer: {
//     position: "relative",
//     marginLeft: "auto",
//     width: 200,
//     "& .MuiBackdrop-root": {
//       display: "none"
//     },
//     "& .MuiDrawer-paper": {
//       width: 200,
//       position: "absolute",
//       height: (props: { height: number }) => props.height,
//       transition: "none !important"
//     }
//   }
// });



const originalRows: food[] = [
  { name: "Pizza", calories: 200, fat: 6.0, carbs: 24, protein: 5.0 ,checked:false},
  { name: "Hot Dog", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 ,checked:false},
  { name: "Burger", calories: 400, fat: 8.0, carbs: 24, protein: 4.0,checked:false },
  { name: "Hamburger", calories: 500, fat: 6.0, carbs: 24, protein: 4.0,checked:false },
  { name: "Fries", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 ,checked:false },
  { name: "Ice Cream", calories: 700, fat: 7.0, carbs: 14, protein: 4.0,checked:false }
];

export default function BasicTable() {
  const [open, setOpen] = useState(false);
  const containerRef :any = useRef();
  const [sortConfig, setSortConfig] = useState<{key:any,direction:any}>({}as any)
  const [height, setHeight] = useState(0);
  const [page, setPage] = useState(1)
  const [data, setData] = useState<food[]>(originalRows)
  const [allChecked,setAllChecked] = useState<any>(false)


  // const classes = useStyles({ height: height });

  useEffect(() => {
    if (open) {
      setHeight(containerRef.current.clientHeight - 64);
    } else {
      setHeight(0);
    }
  }, [open]);

  const handleFilterIconClick = () => {
    setOpen(!open);
  };
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const handleChange = (e:any)=>{
    console.log(parseInt(e.target.textContent))

    //setData(data.slice(parseInt(e.target.textContent),Math.ceil(Math.abs(data.length / 5))))
    
       
  }
  const requestSort = (key:any) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  const getClassNamesFor = (name:any) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const handleAllselect = (e:any)=>{
    if(e.target.checked){
      setAllChecked(e.target.checked)
    let f = data.map((d:any)=>({...d,checked:e.target.checked}))
    setData(f)
    }
    else{
      setAllChecked(false)
      let f = data.map((d:any)=>({...d,checked:e.target.checked}))
      setData(f)
    }
    

  }

  const handleSelectEachRow = (e:any,row:any)=>{
    
    
    if(e.target.checked){
      let filtered = data.map((f:any)=>{
        if(f.name===row.name){
           let d = {...f,checked:e.target.checked}
           return d
        }
        else{
          return f
        }
      })
      console.log(filtered)
      setAllChecked(data.length===data.filter((r:any)=>r.checked===true).length)
      setData(filtered)
     
    }
    else{
      let filtered = data.map((f:any)=>{
        if(f.name===row.name){
           let d = {...f,checked:e.target.checked}
           return d
        }
        else{
          return f
        }
      })
      setData(filtered)
    }
  }
  const handleDragEnd = (e:any) => {
    if (!e.destination) return;
    let tempData = Array.from(sortedItems);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setData(tempData);
  };
  return (
    <Grid  >
      
    <Grid  >
      <div ref={containerRef} style={{ position: "relative" }}>
        <AppBar position="static">
          <Toolbar style={{ display: "flex" }}>
            <Typography >Table</Typography>
            <IconButton
              style={{ marginLeft: "auto" }}
              color="inherit"
              aria-label="filterButton"
              onClick={handleFilterIconClick}
            >
              <FilterListIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {open?
        <div className="dropdown" style={{backgroundColor:"white",zIndex:2,width:'300px',marginRight:'auto',right:0,height:'200px',position:'absolute'}}>
          <ControlledAccordions />
    </div>:""}
        
        {/* <Drawer
          open={open}
          style={{
                position: "relative",
                marginLeft: "auto",
                
            
              
                                }}
          variant="persistent"
          anchor="right"
        >
          <Container style={{height:100,width:100}}></Container>
        </Drawer> */}
        <Paper >
        <DragDropContext onDragEnd={handleDragEnd}>

          <TableContainer>
            <Table className={"table"} aria-label="customized table">
              <TableHead>

                <TableRow sx={{
                        width:'100%',
                        padding: '10px',
                        borderRadius: '6px',
                        boxShadow: `0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)`,
                        background: 'white',
                        
                        display: 'flex',
                        justifyContent:'space-around',
                        flexDirection: 'row'}}>
                  <TableCell padding="checkbox" sx={{borderColor:'transparent'}}>
                  <Checkbox checked={!data.some((rows)=>rows.checked!==true)}
                  onChange={handleAllselect}/>
                  </TableCell>
                  {
                    Object.keys(originalRows[0]).map(r=>{if(r==="checked"){
                      return
                    }else{
                      return(
                    <TableCell sx={{borderColor:'transparent'}}><Button disableRipple onClick={() => requestSort(r)}
                    className={getClassNamesFor(r)}>{r}</Button></TableCell>)}})
                  }
                  {/* <TableCell>Food (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                </TableRow>
              </TableHead>
              <Droppable droppableId="droppable">
            {(provider:any,snapshot:any) => (
              <TableBody
                className="text-capitalize"
                ref={provider.innerRef}
                {...provider.droppableProps}
                

              >
                {sortedItems?.map((user, index) => (
                  
                  <Draggable
                    key={user.name}
                    draggableId={user.name}
                    index={index}
                  >
                    {(provider:any,snapshot:any) => (
                      
                      <TableRow sx={{
                        width:'100%',
                        padding: '10px',
                        borderRadius: '6px',
                        boxShadow: `0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)`,
                        background: 'white',
                        
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent:'space-around',
                        alignItems:'stretch'
                        }} snapshot={snapshot} key={user.name} {...provider.draggableProps} ref={provider.innerRef} 
                      
                      >
                      <TableCell padding="checkbox" sx={{borderColor:'transparent'}}>
                        <Checkbox checked={user.checked}
                        onChange={(e)=> handleSelectEachRow(e,user)}
                      />
                      </TableCell>
                      <TableCell component="th" scope="row" sx={{borderColor:'transparent'}}>
                        {user.name}
                      </TableCell>
                      <TableCell align="right" sx={{borderColor:'transparent'}}>{user.calories}</TableCell>
                      <TableCell align="right" sx={{borderColor:'transparent'}}>{user.fat}</TableCell>
                      <TableCell align="right" sx={{borderColor:'transparent'}}>{user.carbs}</TableCell>
                      <TableCell sx={{borderColor:'transparent'}} {...provider.dragHandleProps} align="right">{user.protein} <DragIndicatorIcon sx={{ml:'10px'}} /></TableCell>
                    </TableRow>
                    
                      // <tr {...provider.draggableProps} ref={provider.innerRef}>
                        
                      //   <td>{user.name}</td>
                      //   <td>{user.age}</td>
                      //   <td>{user.gender}</td>
                      //   <td {...provider.dragHandleProps}> x </td>
                      // </tr>
                    )}
                  </Draggable>
                ))}
                {provider.placeholder}
              </TableBody>
            )}
          </Droppable>
              {/* <TableBody>
                {sortedItems.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell >
                      <Checkbox checked={row.checked}
                      onChange={(e)=> handleSelectEachRow(e,row)}
                    />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody> */}
              
              
            </Table>
            <Paper >
            {/* <Pagination count={Math.ceil(Math.abs(data.length / 5))} page={page*5} onChange={handleChange} /> */}
            </Paper>
          </TableContainer>
          </DragDropContext>
          <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={Math.ceil(Math.abs(sortedItems.length / 5))}
          rowsPerPage={page*5}
          page={page}
          onPageChange={handleChange}
          onRowsPerPageChange={handleChange}
        />
        </Paper>
      </div>
      <br/>
      </Grid>
    </Grid>
  );
}

