import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import  Container  from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import { Styles} from './Styleing.jsx/style';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width:"33em",
  height:"440px",
//   marginLeft:"10px",
  borderRadius:"20px 0px 0px 20px",
//   marginLeft:"135px",
  border:"1px solid #146C94",
  marginTop:"101px",
  marginLeft:"-602px"

}));
const Item1 = styled(Paper)(({ theme }) => ({
    //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width:"34em",
      height:"440px",
      marginLeft:"596px",
       backgroundColor:"#146C94",
      borderRadius:"0px 20px 20px 0px",
    //   marginLeft:"610px",
      border:"1px solid #146C94",
      marginTop:"-473px"
    }));
    const signup = {
      position:"relative",
    color:"white",
    marginTop:"35px",
    backgroundColor:"#146C94",
    fontFamily: "sans-serif",
    borderRadius:"20px",
    width:"120px",
    border:"1px solid white"
    
    };
    const loginup = {
    marginTop:"35px",
    marginRight:"40px",
     backgroundColor:" #146C94",
     width:"280px",
     height:"43px",
     borderRadius:"30px",
     fontSize:"17px",
     color:"white"
    };
  
export default function BasicGrid() {
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogin = (e) => {
      e.preventDefault();
      if (username === 'swathi' && password === 'swathidurai') {
        alert('Login successful!');
        window.location.href = '/login';
      } else {
        setError(<h5 style={{color:"#FF3333"}}>'Invalid credentials. Please try again.'</h5>);
      }
    };
  const handleclick=(em)=>{
    em.preventDefault();
    window.location.href="/Adminlogin"
  }
  const handleclicks=(em)=>{
    em.preventDefault();
    window.location.href="/Userlogin"
  }

    const buttonStyle = { 
      width:"110px",borderRadius:"0px 20px 20px 0px",backgroundColor:"#146C94",color:"white",border:"1px solid #146C94 ",  Cursor:"text", TextDecoration: "None"
      // Replace 'your_desired_color' with the color you want
    };
    const buttonStyles = {
      width:"110px",borderRadius:"20px 0px 0px 20px",backgroundColor:"white",color:"#146C94",border:"1px solid #146C94 ",  Cursor:"text", TextDecoration: "None" // Replace 'your_desired_color' with the color you want
    };
  
  return (
    <Container >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid sx={{marginLeft:"502px",marginTop:"50px"}}>
        <Box >
        <Styles>
        <ButtonGroup variant="outlined" aria-label="outlined primary button group" sx={{marginBottom:"120px"}}>
                <Button   style={buttonStyles}  onClick={handleclick}>Admin</Button>
                <Button  style={buttonStyle} onClick={handleclicks}>User </Button>
           </ButtonGroup>
           </Styles>
        </Box>
      </Grid>
        <Grid item xs={4} >
          <Item>
            <Styles>
            
                <AccountCircleIcon className='head1'/>
          <Typography  className="heads"variant='h4'> User Login</Typography>
     <TextField  sx={{  width: '35ch' }} className="TxtFstylefirst"variant='outlined' size="small" placeholder="Username"  value={username}
            onChange={(e) => setUsername(e.target.value)}InputProps={{startAdornment: (
     <InputAdornment position="start"><PersonIcon  size="small" className="iconstyle"/></InputAdornment>),}} /><br/>
      <FormControl sx={{  width: '35ch' }} variant="outlined" className='new'>
          <OutlinedInput sx={{paddingLeft:"34px"}} InputProps={{startAdornment: (
              <InputAdornment position="start"><LockIcon  size="small" className="iconstyle"/></InputAdornment>),}}
           className="TxtFstylemain"
            type={showPassword ? 'text' : 'password'}
            
            endAdornment={
              <InputAdornment position="end">
                <LockIcon  size="small" className="iconstyle1"/>
                <IconButton aria-label="toggle password visibility"onClick={handleClickShowPassword}onMouseDown={handleMouseDownPassword}edge="end">{showPassword ? <VisibilityOff sx={{color:"#146C94"}}/> : <Visibility sx={{color:"#146C94"}} />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="Password"  value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        </Styles>
        <Styles>
    <Button style={loginup} variant="contained" onClick={handleLogin}>Login</Button>
    <Typography variant='h6'sx={{paddingTop:"16px",marginLeft:"-10px",fontSize:"16px",color:"#146C94"}}> Forgot <Link to="/Forgot">Password?</Link></Typography>
     </Styles>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item1>
          <Styles>
    <Typography className='imagestyle' variant="h4">Welcome to Login</Typography>
    <Typography className='imagestyles' variant="h6">Don't have an account ?</Typography>
    <Button style={signup}  variant="contained" > <Link to="/userregister"  style={{color:"white"}}>Sign Up</Link></Button>
     </Styles>
          </Item1>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}
