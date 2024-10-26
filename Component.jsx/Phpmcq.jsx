import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {  alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import Drawer from '@mui/material/Drawer';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import  Button  from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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
const drawerWidth = 205;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  width:"900px",
  height:"auto",
  marginLeft:"60px",
  marginTop:"20px",
  boxShadow: "0px 2px 2px 1px lightblue"
 
}));
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

export default function Phpquz() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

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
    const submit = () => {
      setAnchorEl(null);
      window.location.href = '/submit';
    };
  return (
    <>
    
      <Main open={open}>
      <Box sx={{ display: 'flex' }}>
      
        <Box sx={{ flexGrow: 1,marginTop:"50px",marginLeft:"290px" }}>
      <Container>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item>
            <FormControl  sx={{marginLeft:"30px",marginTop:"80px"}}>
      <FormLabel id="demo-radio-buttons-group-label" sx={{paddingLeft:"20px",paddingTop:"5px",fontWeight:550}}>Q1 of 10</FormLabel>
      <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}> PHP stands for -</Typography>
      <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}} >
        <FormControlLabel value="val1" control={<Radio  size='small'/>} label="Hypertext Preprocessor" />
        <FormControlLabel value="val2" control={<Radio  size='small'/>} label="Pretext Hypertext Preprocessor" />   
        <FormControlLabel value="val2" control={<Radio  size='small'/>} label="Personal Home Processor" />   
        <FormControlLabel value="val2" control={<Radio  size='small'/>} label="None of the above" />   
      </RadioGroup>
    </FormControl><br/>
    <FormControl  sx={{marginLeft:"30px",marginTop:"30px"}}>
    <FormLabel id="demo-radio-buttons-group-label" sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q2 of 10</FormLabel>
    <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}>Who is known as the father of PHP?</Typography>
         <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
        <FormControlLabel value="val5" control={<Radio  size='small'/>} label="Drek Kolkevi" />
        <FormControlLabel value="val6" control={<Radio  size='small'/>} label=" List Barely" />
        <FormControlLabel value="val7" control={<Radio  size='small' />} label="Rasmus Lerdrof" />
        <FormControlLabel value="val8" control={<Radio  size='small'/>} label="None of the above" />      
      </RadioGroup>
    </FormControl><br/>
    <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
      <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q3 of 10</FormLabel>
      <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}> Variable name in PHP starts with -</Typography>
      <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
        <FormControlLabel value="val9" control={<Radio  size='small'/>} label="! (Exclamation)" />
        <FormControlLabel value="val10" control={<Radio  size='small'/>} label="$ (Dollar)" />
        <FormControlLabel value="val11" control={<Radio  size='small' />} label="& (Ampersand)" />
        <FormControlLabel value="val12" control={<Radio  size='small'/>} label="# (Hash)" />      
      </RadioGroup>
    </FormControl><br/>
    <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
      <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q4 of 10</FormLabel>
      <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}>Which of the following is not a variable scope in PHP?</Typography>
      <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
        <FormControlLabel value="values1" control={<Radio  size='small'/>} label="Extern" />
        <FormControlLabel value="values2" control={<Radio  size='small'/>} label="Local" />
        <FormControlLabel value="values3" control={<Radio  size='small' />} label="Static" />
        <FormControlLabel value="values4" control={<Radio  size='small'/>} label= "Global" />      
      </RadioGroup>
    </FormControl><br/>
    <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
      <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q5 of 10</FormLabel>
      <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}>Which of the following is correct to add a comment in php? </Typography>
      <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
        <FormControlLabel value="female" control={<Radio  size='small'/>} label="& …… &" />
        <FormControlLabel value="male" control={<Radio  size='small'/>} label="// ……" />
        <FormControlLabel value="other" control={<Radio  size='small' />} label="/* …… */" />
        <FormControlLabel value="main" control={<Radio  size='small'/>} label= "Both (b) and (c)" />      
      </RadioGroup>
    </FormControl><br/>
    <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
      <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q6 of 10</FormLabel>
      <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}>Which of the following is used to display the output in PHP?</Typography>
      <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
        <FormControlLabel value="female" control={<Radio  size='small'/>} label="echo" />
        <FormControlLabel value="male" control={<Radio  size='small'/>} label="write" />
        <FormControlLabel value="other" control={<Radio  size='small' />} label="print" />
        <FormControlLabel value="main" control={<Radio  size='small'/>} label= "Both (a) and (c)" />      
      </RadioGroup>
    </FormControl><br/>
    <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
      <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q7 of 10</FormLabel>
      <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}>Which of the following is used for concatenation in PHP?</Typography>
      <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
        <FormControlLabel value="female" control={<Radio  size='small'/>} label="+ (plus)" />
        <FormControlLabel value="male" control={<Radio  size='small'/>} label="* (Asterisk)" />
        <FormControlLabel value="feme" control={<Radio  size='small'/>} label=". (dot)" />
        <FormControlLabel value="mae" control={<Radio  size='small'/>} label="append()" />
      </RadioGroup>
    </FormControl><br/>
    <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
      <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q8 of 10</FormLabel>
      <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}>What does PEAR stands for? </Typography>
      <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
        <FormControlLabel value="female" control={<Radio  size='small'/>} label="Create myFunction()" />
        <FormControlLabel value="male" control={<Radio  size='small'/>} label="New_function myFunction()" />
        <FormControlLabel value="other" control={<Radio  size='small' />} label="function myFunction()" />
        <FormControlLabel value="main" control={<Radio  size='small'/>} label= "None of the above" />      
      </RadioGroup>
    </FormControl><br/>
    <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
      <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q9 of 10</FormLabel>
      <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}>Which of the following PHP function is used to generate unique id?</Typography>
      <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
        <FormControlLabel value="female" control={<Radio  size='small'/>} label="id()" />
        <FormControlLabel value="male" control={<Radio  size='small'/>} label="mdid()" />
        <FormControlLabel value="other" control={<Radio  size='small' />} label="uniqueid()" />
        <FormControlLabel value="main" control={<Radio  size='small'/>} label= "None of the above" />      
      </RadioGroup>
    </FormControl><br/>
    <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
      <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q10 of 10</FormLabel>
      <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}>Which of the following is the correct way of defining a variable in PHP?</Typography>
      <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
        <FormControlLabel value="female" control={<Radio  size='small'/>} label="$variable name = value;" />
        <FormControlLabel value="male" control={<Radio  size='small'/>} label="$variable_name = value;" />
        <FormControlLabel value="other" control={<Radio  size='small' />} label="$variable_name = value" />
        <FormControlLabel value="main" control={<Radio  size='small'/>} label= "$variable name as value;" />      
      </RadioGroup>
    </FormControl><br/>
    <Button variant="contained"sx={{marginBottom:"100px",marginLeft:"390px",marginTop:"90px",backgroundColor:"#4682b4"}} onClick={submit}>Submit</Button> 
         </Item>
        </Grid>
     
      </Grid>
      </Container>
    </Box>
     
    </Box>
     </Main>
   
    </>
  );
}
