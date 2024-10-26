import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Item ,Styles,Item1} from '../Styleing.jsx/style';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function AdminPage() {
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
        window.location.href = '/n';
      } else {
        setError(<h4 style={{color:"#b30000"}}>'Invalid credentials. Please try again.'</h4>);
      }
    };
  
  return (
   <Box >
    <Container >
   <Grid sx={{display:"flex"}}>
    
    <Grid >
   <Item>
    <Styles>
     <Typography  className="head1"variant='h4'>Login</Typography>
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
                <IconButton aria-label="toggle password visibility"onClick={handleClickShowPassword}onMouseDown={handleMouseDownPassword}edge="end">{showPassword ? <VisibilityOff sx={{color:"#4682b4"}}/> : <Visibility sx={{color:"#4682b4"}} />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="Password"  value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
     </Styles>
     <Styles>
    {/* <Link to="/new"> */}
        <Button className="buttonstyle" variant="contained" onClick={handleLogin}>Login</Button>
        {/* </Link> */}
    {error && <p>{error}</p>}
     <Typography className='accountstyle'>Do not have an account?<Link to="/register">Sign Up</Link></Typography>
     </Styles>
   </Item>
    </Grid>
    <Grid >
   <Item1>
    <Styles>
    <Typography className='imagestyle' variant="h4">New Here?</Typography>
    <Typography className='imagestyles' variant="h6">Sign up and discover a great<br/> amount of new oppurtunities!</Typography>
    <Button className="imagestyling" variant="contained" > Login</Button>
     </Styles>
   </Item1>
    </Grid>
    </Grid>
    </Container>
   </Box>
  )
}
