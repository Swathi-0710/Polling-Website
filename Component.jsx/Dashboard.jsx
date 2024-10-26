import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {  alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import CImage from '..//assets/C_Logo.png';
import { NewItem} from '../Styleing.jsx/style';
import C1Image from '..//assets/C++_Logo.png';
import Java from '../assets/Javanew.png';
import Python from '..//assets/Python-logo.png';
import Reactnew from '..//assets/reactjs_logo.png';
import Phplogo from '..//assets/PHP-logo.png';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
 import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import {Styles} from '../Styleing.jsx/style';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import { Link } from 'react-router-dom'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
const drawerWidth = 240;

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
const StyledMenu = styled((props) => (
      <Menu elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        {...props}/>
    ))(({ theme }) => ({
      '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
          theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
          padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
          '& .MuiSvgIcon-root': {
            fontSize: 18,
            color: theme.palette.text.secondary,
            marginRight: theme.spacing(1.5),
          },
          '&:active': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity,
            ),
          },
        },
      },
    }));



    

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
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClosing = () => {
      setAnchorEl(null);
      window.location.href = '/Userlogin';
      alert("logout successfully")
    };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{backgroundColor:" #146C94"}}>
        <Toolbar>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ textDecoration:" none",mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon  sx={{color:"white"}}/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <div sx={{display:"flex"}}>
        <AccountCircleRoundedIcon sx={{color:"white",fontSize:"35px",position:"absolute",right:110,bottom:"10px"}}/>
      </div>
      <div>
      <Button
        id="demo-customized-button"
        aria-controls={opens ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={opens ? 'true' : undefined}
        variant="text"
        position="end"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />} sx={{color:"white",fontSize:"17px",position:"absolute",right:18,bottom:"6px"}}
       >
        User
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={opens}
        onClose={handleClose}
      >
      
        <MenuItem onClick={handleClosing} disableRipple>
          {/* <FileCopyIcon /> */}
          <LogoutIcon/>
          Logout 
        </MenuItem>
      </StyledMenu>
    </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',backgroundColor:"#146C94"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{color:"white"}}/> : <ChevronRightIcon sx={{color:"white"}} />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Styles>
          <AccountCircleRoundedIcon sx={{fontSize:"120px",color:"white",marginLeft:"50px"}}/>
         <List sx={{ backgroundColor: "#146C94 ",height:"300px",paddingTop:"20px"}}>
             <ListItem disablePadding>
               <ListItemButton>
                 <ListItemIcon><HomeIcon sx={{color:"white",fontSize: 30 }}/></ListItemIcon>
                 < Link to="/n">
                 <Typography className="Dashboard" >Dashboard</Typography>
                 </Link>
               </ListItemButton>
               </ListItem>
               <ListItem disablePadding sx={{paddingTop:"10px"}}>
              <ListItemButton>
               <ListItemIcon><ThumbUpAltIcon sx={{color:"white",fontSize: 30}}/></ListItemIcon>
               < Link to="/cquestion">
               <Typography className="Dashboards" >Completed</Typography>
                 </Link>
              </ListItemButton>
               </ListItem>
               <ListItem disablePadding sx={{paddingTop:"10px"}}>
               <ListItemButton>
               <ListItemIcon><WysiwygIcon sx={{color:"white",fontSize: 30}}/></ListItemIcon>
               <Link to="/result">
               <Typography className="Dashboards" >Result</Typography>
                 </Link>
               </ListItemButton>
               </ListItem>
           
           {/* ))} */}         </List>
        </Styles>       
       



      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        
<Box component="main"sx={{ flexGrow: 1, p: 10, backgroundColor:"#ECF3F9"}}>
<Grid container spacing={9} sx={{display:"flex"}}>
<Grid item xs={4} md={12} lg={4}>
  <NewItem>
    <Styles>
      <Link to="/CMCQ">
   <Box sx={{display:"flex"}}>
     
  < img src={CImage }className="Logostyle"/>
   <Typography variant="h5" className="cstyle">C</Typography>
   </Box>
   <Typography sx={{marginTop:"25px",fontSize:"17px", color:"#4682b4",}}>No.of questions:10/10</Typography>
   </Link>
   </Styles>
  </NewItem>
</Grid>
<Grid item xs={12}  md={12} lg={4}>
  <NewItem>
  <Styles>
    <Link to='/Cplus'>
      <Box sx={{display:"flex"}}>
  < img src={C1Image }className="Logostyle"/>
   <Typography variant="h5" className="cstyle">C++</Typography>
   </Box>

   <Typography sx={{marginTop:"25px",fontSize:"17px", color:"#4682b4",}}>No.of questions:10/10</Typography>
   </Link>
   </Styles>
  </NewItem>
</Grid>

<Grid item xs={12} md={12} lg={4}>
  <NewItem>
  <Styles>
  <Link to='/Java'>
  <Box sx={{display:"flex"}}>
  < img src={Java }className="Logostyle"/>
   <Typography variant="h5" className="cstyles">Java</Typography>
   </Box>
   <Typography sx={{marginTop:"25px",fontSize:"17px", color:"#4682b4",}}>No.of questions:10/10</Typography>
   </Link>
   </Styles>
  </NewItem>
</Grid>
<Grid item xs={12} md={12} lg={4}>
  <NewItem>
  <Styles>
  <Link to='/Python'>
  <Box sx={{display:"flex"}}>
  < img src={Python}className="Logostyle"/>
   <Typography variant="h5" className="cstyle">Python</Typography>
   </Box>
   <Typography sx={{marginTop:"25px",fontSize:"17px", color:"#4682b4",}}>No.of questions:10/10</Typography>
  </Link>
   </Styles>
  </NewItem>
</Grid>
<Grid item xs={12} md={12} lg={4}>
  <NewItem>
  <Styles>
  <Link to='/React'>
  <Box sx={{display:"flex"}}>
  < img src={Reactnew}className="Logostyle"/>
   <Typography variant="h5" className="cstyle">React</Typography>
   </Box>
   <Typography sx={{marginTop:"25px",fontSize:"17px", color:"#4682b4",}}>No.of questions:10/10</Typography>
 </Link>
   </Styles>
  </NewItem>
</Grid>
<Grid item xs={12} md={12} lg={4}>
  <NewItem>
  <Styles>
  <Link to='/Php'>
  <Box sx={{display:"flex"}}>
  < img src={Phplogo}className="Logostyles"/>
   <Typography variant="h5" className="cstyling">PHP</Typography>
   </Box>
   <Typography sx={{marginTop:"30px",fontSize:"17px", color:"#4682b4",}}>No.of questions:10/10</Typography>
  </Link>
   </Styles>
  </NewItem>
</Grid>
</Grid>
</Box>
      </Main>
    </Box>
  );
}
