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

export default function Cplusqus() {
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
      <DrawerHeader />
      <Box sx={{ display: 'flex' }}>
      
     
      <Box sx={{ flexGrow: 1,marginTop:"50px",marginLeft:"290px" }}>
    <Container>
    <Grid container spacing={2}>
      <Grid xs={8}>
        <Item>
          <FormControl  sx={{marginLeft:"30px",marginTop:"80px"}}>
    <FormLabel id="demo-radio-buttons-group-label" sx={{paddingLeft:"20px",paddingTop:"5px",fontWeight:550}}>Q1 of 10</FormLabel>
    <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}>  What is C++?</Typography>
    <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}} >
      <FormControlLabel value="val1" control={<Radio  size='small'/>} label=" C++ is an object oriented programming language" />
      <FormControlLabel value="val2" control={<Radio  size='small'/>} label="C++ is a procedural programming language" />
      <FormControlLabel value="val3" control={<Radio  size='small' />} label="C++ supports both procedural and object oriented programming language" />
      <FormControlLabel value="val4" control={<Radio  size='small'/>} label=" C++ is a functional programming language" />      
    </RadioGroup>
  </FormControl><br/>
  <FormControl  sx={{marginLeft:"30px",marginTop:"30px"}}>
  <FormLabel id="demo-radio-buttons-group-label" sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q2 of 10</FormLabel>
  <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}> Which of the following user-defined header file extension used in c++?</Typography>
       <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
      <FormControlLabel value="val5" control={<Radio  size='small'/>}  label="hg" />
      <FormControlLabel value="val6" control={<Radio  size='small'/>} label="cpp" />
      <FormControlLabel value="val7" control={<Radio  size='small' />} label="h" />
      <FormControlLabel value="val8" control={<Radio  size='small'/>} label="hf" />      
    </RadioGroup>
  </FormControl>
  <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
    <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q3 of 10</FormLabel>
    <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}> Which of the following is a correct identifier in C++? </Typography>
    <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
      <FormControlLabel value="val9" control={<Radio  size='small'/>} label= "VAR_1234" />
      <FormControlLabel value="val10" control={<Radio  size='small'/>} label="$var_name" />
      <FormControlLabel value="val11" control={<Radio  size='small' />} label="7VARNAME " />
      <FormControlLabel value="val12" control={<Radio  size='small'/>} label="7var_name" />      
    </RadioGroup>
  </FormControl>
  <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
    <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q4 of 10</FormLabel>
    <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}>What is virtual inheritance in C++? </Typography>
    <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
      <FormControlLabel value="values1" control={<Radio  size='small'/>} label="C++ technique to enhance multiple inheritance" />
      <FormControlLabel value="values2" control={<Radio  size='small'/>} label=" C++ technique to ensure that a private member of the base class can be accessed somehow" />
      <FormControlLabel value="values3" control={<Radio  size='small' />} label="C++ technique to avoid multiple inheritances of classes " />
      <FormControlLabel value="values4" control={<Radio  size='small'/>} label= "C++ technique to avoid multiple copies of the base class into children/derived class" />      
    </RadioGroup>
  </FormControl><br/>
  <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
    <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q5 of 10</FormLabel>
    <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}> Which of the following correctly declares an array in C++?
      </Typography>
    <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
      <FormControlLabel value="female" control={<Radio  size='small'/>} label="array{10};" />
      <FormControlLabel value="male" control={<Radio  size='small'/>} label="array array[10];" />
      <FormControlLabel value="other" control={<Radio  size='small' />} label="int array;" />
      <FormControlLabel value="main" control={<Radio  size='small'/>} label= "int array[10];" />      
    </RadioGroup>
  </FormControl><br/>
  <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
    <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q6 of 10</FormLabel>
    <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}> What is the size of wchar_t in C++?</Typography>
    <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
      <FormControlLabel value="female" control={<Radio  size='small'/>} label="Based on the number of bits in the system" />
      <FormControlLabel value="male" control={<Radio  size='small'/>} label="2 or 4" />
      <FormControlLabel value="other" control={<Radio  size='small' />} label="4" />
      <FormControlLabel value="main" control={<Radio  size='small'/>} label= "2" />      
    </RadioGroup>
  </FormControl><br/>
  <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
    <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q7 of 10</FormLabel>
    <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}> Which is more effective while calling the C++ functions?</Typography>
    <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
      <FormControlLabel value="female" control={<Radio  size='small'/>} label="call by object" />
      <FormControlLabel value="male" control={<Radio  size='small'/>} label="call by pointer" />
      <FormControlLabel value="mal" control={<Radio  size='small'/>} label="call by value" />
      <FormControlLabel value="mae" control={<Radio  size='small'/>} label="call by reference" />
    </RadioGroup>
  </FormControl>
  <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
    <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q8 of 10</FormLabel>
    <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}> Which of the following is used to terminate the function declaration in C++?</Typography>
    <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
      <FormControlLabel value="female" control={<Radio  size='small'/>} label=";" />
      <FormControlLabel value="male" control={<Radio  size='small'/>} label="]" />
      <FormControlLabel value="other" control={<Radio  size='small' />} label=")" />
      <FormControlLabel value="main" control={<Radio  size='small'/>} label= ":" />      
    </RadioGroup>
  </FormControl>
  <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
    <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q9 of 10</FormLabel>
    <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}>  Which keyword is used to define the macros in c++?</Typography>
    <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
      <FormControlLabel value="female" control={<Radio  size='small'/>} label="#macro" />
      <FormControlLabel value="male" control={<Radio  size='small'/>} label=" #define" />
      <FormControlLabel value="other" control={<Radio  size='small' />} label="macro" />
      <FormControlLabel value="main" control={<Radio  size='small'/>} label= " define" />      
    </RadioGroup>
  </FormControl><br/>
  <FormControl   sx={{marginLeft:"30px",marginTop:"30px"}}>
    <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"5px",fontWeight:550}}>Q10 of 10</FormLabel>
    <Typography sx={{marginLeft:"50px",marginTop:"10px",fontWeight:700}}> What is Inheritance in C++?</Typography>
    <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
      <FormControlLabel value="female" control={<Radio  size='small'/>} label="Deriving new classes from existing classes" />
      <FormControlLabel value="male" control={<Radio  size='small'/>} label="Overloading of classes" />
      <FormControlLabel value="other" control={<Radio  size='small' />} label="Classes with same names" />
      <FormControlLabel value="main" control={<Radio  size='small'/>} label= "Wrapping of data into a single class" />      
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
