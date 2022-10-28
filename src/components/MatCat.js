import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from '@mui/material';
import {
  arrayMove
} from "react-sortable-hoc";
import Dashboard2 from './Dasboard';
import { useTranslation } from 'react-i18next';
import SimpleMap from './GoogleMaps';
import RecipeReviewCard from './reviewCard';
import { SortableContainer } from 'react-sortable-hoc';
import { SortableListContainer } from './ReactSortableHoc';
import MusicPlayerSlider from './musicplayer';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const drawerWidth = 240;
const iconList = [<InboxIcon />, <MailIcon /> ,  <MailIcon /> , <InboxIcon />]

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const location = useLocation()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([{ id: "1", text: "Item 1" },
  { id: "2", text: "Item 2" },
  { id: "3", text: "Item 3" },
  { id: "4", text: "Item 4" }])
  const {t} = useTranslation()
  const [menuSide, setMenuSide] = React.useState(0)

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  useEffect(()=>{
    let prevTitle = document.title;
    document.title = location.pathname.replace('/','');

    return () => {
      document.title = prevTitle;
    };
  },[])
  
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(items => arrayMove(items, oldIndex, newIndex));
  };
 const sideBarHandler = ()=>{
  
    switch (menuSide) {
      case 0:
        return <Dashboard2 />
        break;
      case 1:
        return  <SimpleMap />
      case 2:
        return  <RecipeReviewCard />
      case 3:
        return <SortableListContainer items={items}
        onSortEnd={onSortEnd}
        useDragHandle={true}
        lockAxis="y" />
      case 4:
        return <MusicPlayerSlider />
      default:
        break;
    }
  
 }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let fileBase64Array = [`data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
  AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
      9TXL0Y4OHwAAAABJRU5ErkJggg==`]
  let convertedFiles = fileBase64Array.map((fileBase64, index) => {
    let fileType = fileBase64.substring(
      fileBase64.indexOf(":") + 1,
      fileBase64.lastIndexOf(";")
    );
    let fileExtension = fileType.split('/');
    return new File([fileBase64], `file${index}.${fileExtension[1]}`, {type: fileType});
  });
  console.log(convertedFiles);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className='d-flex flex-row justify-content-between'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <h1>{t('Welcome to React')}</h1>

          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
          <Typography variant="h6" noWrap component="div">
            Logout  
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts','damn'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={()=>{setMenuSide(index)}}>
                <ListItemIcon >
                  {iconList[index]
                  }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam','damn'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <img src={convertedFiles[0].name} alt='yes' />
                {iconList[index]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        
        
        {sideBarHandler()}
       
      </Main>
    </Box>
  );
}
