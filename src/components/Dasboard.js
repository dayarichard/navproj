import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BungalowIcon from '@mui/icons-material/Bungalow';
import BadgeIcon from '@mui/icons-material/Badge';
import { Card, CardActionArea, CardContent, CardMedia, Grid,TableFooter } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RecipeReviewCard from './reviewCard';
const drawerWidth = 240;
export default function Dashboard2() {
    const nav = useNavigate();
    let  languageList= [
        {languageId: 1, languageCode: "en", languageName: "English", displayName: "English"},
        {languageId: 2, languageCode: "mr", languageName: "Marathi", displayName: "मराठी"},
        {languageId: 3, languageCode: "te", languageName: "Telugu", displayName: "తెలుగు"},
        {languageId: 5, languageCode: "kn", languageName: "Kannada", displayName: "ಕನ್ನಡ"},
        {languageId: 8, languageCode: "hi", languageName: "Hindi", displayName: "हिंदी"}]
             
        console.log(languageList.filter(s=>s.languageName.toLowerCase().includes("hi".toLowerCase())),"sxs")
            
  return (
    <div   >
      
   <Grid container spacing={5}>
  <Grid item xs={4}>
  <Card style={{backgroundColor:"rgb(205 234 239)",borderRadius:'15px'}} sx={{ maxWidth: 300,maxHeight:300  ,height:200}}>
      <CardActionArea>
       
        <CardContent onClick = {()=>nav("/map")}>
        <Typography sx={{textAlign:'center',lineHeight:3}} variant="body2" color="text.secondary">
          {/* <MailIcon height={80} /> */}
            <PeopleIcon  accentHeight={5}/>
                  
          </Typography>
          <Typography style={{textAlign:"center",lineHeight:2}} gutterBottom variant="h5" component="div">
            Total Employees
          </Typography>
          <Typography style={{textAlign:"center",fontWeight:"bold"}} gutterBottom variant="h5" component="div">
            850+
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card onClick={()=>nav('/tabs')} style={{backgroundColor:"rgb(239 191 199)",borderRadius:'15px'}} sx={{ maxWidth: 300,maxHeight:300  ,height:200}}>
      <CardActionArea>
       
        <CardContent>
        <Typography style={{textAlign:"center",lineHeight:3}} variant="body2" color="text.secondary">
          {/* <MailIcon height={80} /> */}
          <>
                    <BungalowIcon accentHeight={5} />
                  </>
          </Typography>
          <Typography style={{textAlign:"center",lineHeight:2}} gutterBottom variant="h5" component="div">
            Komal Foods
          </Typography>
          <Typography style={{textAlign:"center",fontWeight:"bold"}} gutterBottom variant="h5" component="div">
            40+
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={4} >
  <Card onClick={()=>nav('/dnd')} style={{backgroundColor:"#bedbe7",borderRadius:'15px'}} sx={{ maxWidth: 300,maxHeight:300  ,height:200}}>
      <CardActionArea>
       
        <CardContent>
        <Typography style={{textAlign:"center",lineHeight:3}} variant="body2" color="text.secondary">
          {/* <MailIcon height={80} /> */}
          <>
                    <PeopleIcon accentHeight={5} />
                  </>
          </Typography>
          <Typography style={{textAlign:"center",lineHeight:2}} gutterBottom variant="h5" component="div">
            Administrator
          </Typography>
          <Typography style={{textAlign:"center",fontWeight:"bold"}} gutterBottom variant="h5" component="div">
            20
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card style={{backgroundColor:"rgb(194 233 195)",borderRadius:'15px'}} sx={{ maxWidth: 300,maxHeight:300  ,height:200}}>
      <CardActionArea>
       
        <CardContent onClick={()=>nav('/sortableHoc')}>
        <Typography style={{textAlign:"center",lineHeight:3}} variant="body2" color="text.secondary">
          {/* <MailIcon height={80} /> */}
          <>
                    <AccountBalanceIcon accentHeight={5} />
                  </>
          </Typography>
          <Typography style={{textAlign:"center",lineHeight:2}} gutterBottom variant="h5" component="div">
             Finance
          </Typography>
          <Typography style={{textAlign:"center",fontWeight:"bold"}} gutterBottom variant="h5" component="div">
            150
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card style={{backgroundColor:"rgb(194 194 233)",borderRadius:'15px'}} sx={{ maxWidth: 300,maxHeight:300  ,height:200}}>
      <CardActionArea>
       
        <CardContent>
        <Typography style={{textAlign:"center",lineHeight:3}} variant="body2" color="text.secondary">
          {/* <MailIcon height={80} /> */}
          <>
                    <BadgeIcon accentHeight={5} />
                  </>
          </Typography>
          <Typography style={{textAlign:"center",lineHeight:2}} gutterBottom variant="h5" component="div">
            Account Manager
          </Typography>
          <Typography style={{textAlign:"center",fontWeight:"bold"}} gutterBottom variant="h5" component="div">
            90
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card style={{backgroundColor:"rgb(194 233 195)",borderRadius:'15px'}} sx={{ maxWidth: 300,maxHeight:300  ,height:200}}>
      <CardActionArea>
       
        <CardContent>
        <Typography style={{textAlign:"center",lineHeight:3}} variant="body2" color="text.secondary">
          {/* <MailIcon height={80} /> */}
          <>
                    <PeopleIcon accentHeight={5} />
                  </>
          </Typography>
          <Typography style={{textAlign:"center",lineHeight:2}} gutterBottom variant="h5" component="div">
          Recruiters
          </Typography>
          <Typography style={{textAlign:"center",fontWeight:"bold"}} gutterBottom variant="h5" component="div">
            70
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card style={{backgroundColor:"rgb(239 191 199)",borderRadius:'15px'}} sx={{ maxWidth: 300,maxHeight:300  ,height:200}}>
      <CardActionArea>
       
        <CardContent>
        <Typography style={{textAlign:"center",lineHeight:3}} variant="body2" color="text.secondary">
          {/* <MailIcon height={80} /> */}
          <>
                    <ManageAccountsIcon accentHeight={5} />
                  </>
          </Typography>
          <Typography style={{textAlign:"center",lineHeight:2}} gutterBottom variant="h5" component="div">
            Managers
          </Typography>
          <Typography style={{textAlign:"center",fontWeight:"bold"}} gutterBottom variant="h5" component="div">
            80
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card style={{backgroundColor:"rgb(205 234 239)",borderRadius:'15px'}} sx={{ maxWidth: 300,maxHeight:300  ,height:200}}>
      <CardActionArea>
       
        <CardContent>
        <Typography style={{textAlign:"center",lineHeight:3}} variant="body2" color="text.secondary">
          {/* <MailIcon height={80} /> */}
          <>
                    <PeopleIcon accentHeight={5} />
                  </>
          </Typography>
          <Typography style={{textAlign:"center",lineHeight:2}} gutterBottom variant="h5" component="div">
            HR
          </Typography>
          <Typography style={{textAlign:"center",fontWeight:"bold"}} gutterBottom variant="h5" component="div">
            10
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card style={{backgroundColor:"rgb(194, 194, 233)",borderRadius:'15px'}} sx={{ maxWidth: 300,maxHeight:300  ,height:200}}>
      <CardActionArea>
       
        <CardContent>
        <Typography style={{textAlign:"center",lineHeight:3}} variant="body2" color="text.secondary">
          {/* <MailIcon height={80} /> */}
                    <LaptopChromebookIcon accentHeight={5} />
          </Typography>
          <Typography style={{textAlign:"center",lineHeight:2}} gutterBottom variant="h5" component="div">
            IT
          </Typography>
          <Typography style={{textAlign:"center",fontWeight:"bold"}} gutterBottom variant="h5" component="div">
            30
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <RecipeReviewCard />
  </Grid>
</Grid>
<Toolbar />
    </div>
  )
}