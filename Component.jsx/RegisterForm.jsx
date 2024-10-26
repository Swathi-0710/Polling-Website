import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Item ,Styles,Item1} from '../Styleing.jsx/style';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const [showPasswords, setShowPasswords] = React.useState(false);
  
    const handleClickShowPasswords = () => setShowPasswords((show) => !show);
  
    const handleMouseDownPasswords = (e) => {
      e.preventDefault();
    };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data here
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Redirect to the login page (replace '/login' with your desired route)
      // You can use useHistory or a link, but in this example, we're using a simple link
      window.location.href = '/Adminlogin';
    }
  };
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
  const register={
    marginTop:"35px",
    marginRight:"160px",
     backgroundColor:"#146C94",
     width:"280px",
     height:"43px",
     borderRadius:"30px",
     fontSize:"19px",
     color:"white"
    }
  return (
    <>
    <Container>
    <Grid sx={{display:"flex"}}>
      <Grid >
    <Item>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
      <Styles>
      <Typography  className="head"variant='h4'>Registration</Typography>
        <Grid item xs={12}>
          <TextField  size="small" className='box'
                   sx={{  width: '35ch', }}           
            variant="outlined"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
            InputProps={{startAdornment: (
     <InputAdornment position="start"><PersonIcon  size="small" className="iconstyle"/></InputAdornment>),}} />
         
        </Grid>
        <Grid >
          <TextField className='box1'
            size="small"
            sx={{  width: '35ch' }}  
            variant="outlined"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email} 
            InputProps={{startAdornment: (
     
              <InputAdornment position="start"><EmailIcon  size="small" className="iconstyle"/></InputAdornment>),}} />
        </Grid>
        {/* </Styles>
        <Styles> */}
        <Grid >
         <FormControl sx={{  width: '35ch' }} variant="outlined" className='new' >
           <OutlinedInput sx={{paddingLeft:"34px"}} InputProps={{startAdornment: (
              <InputAdornment position="start"><LockIcon  size="small" className="iconstyle"/></InputAdornment>),}}
           className="TxtFstyles"
            type={showPassword ? 'text' : 'password'}
            
            endAdornment={
              <InputAdornment position="end">
                <LockIcon  size="small" className="iconstyle1"/>
                <IconButton aria-label="toggle password visibility"onClick={handleClickShowPassword}onMouseDown={handleMouseDownPassword}edge="end">{showPassword ? <VisibilityOff sx={{color:" #146C94"}}/> : <Visibility sx={{color:" #146C94"}} />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="Password"   name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
        </FormControl>
        </Grid>
        <Grid >
           <FormControl sx={{  width: '35ch' }} variant="outlined" className='new'>
          <OutlinedInput sx={{paddingLeft:"34px"}} InputProps={{startAdornment: (
              <InputAdornment position="start"><LockIcon  size="small" className="iconstyle"/></InputAdornment>),}}
           className="TxtFstyles"
            type={showPasswords ? 'text' : 'password'}
            
            endAdornment={
              <InputAdornment position="end">
                <LockIcon  size="small" className="iconstyle1"/>
                <IconButton onClick={handleClickShowPasswords}onMouseDown={handleMouseDownPasswords}edge="end">{showPasswords ? <VisibilityOff sx={{color:" #146C94"}}/> : <Visibility sx={{color:" #146C94"}} />}
                </IconButton>
              </InputAdornment>
             
            }
            placeholder="Confirm Password"  name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
        </FormControl>
        </Grid>
        </Styles>
      </Grid>
      <Styles>
      <Button type="submit" style={register} variant="contained" color="primary">
        Register
      </Button>
      </Styles>
      <p style={{paddingRight:"200px"}}>
        Already have an account? <Link to="/Adminlogin">Login here</Link>
      </p>
    </form>
    </Item>
    </Grid>
     <Grid  sx={{position:"relative",marginLeft:"540px"}}>
        <Item1>
          <Styles>
         <Typography className='imagestyle' variant="h4">New Here?</Typography>
          <Typography className='imagestyles' variant="h6">Sign up and discover a great<br/> amount of new oppurtunities!</Typography>
          <Button style={signup}variant="contained" >Sign Up</Button>
           </Styles>
         </Item1>
          </Grid>
      </Grid>
          </Container>
          </>
  );
};

export default RegistrationForm;