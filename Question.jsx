import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DashboardPage from './Dashboard';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  width:"950px",
  height:"auto",
  marginLeft:"130px",
  marginTop:"30px",
  boxShadow: "2px 2px 8px 3px lightblue"
 
}));

export default function BasicGrid() {
  return (
    <>
    <DashboardPage/>
   
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item>
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"80px"}}>  1. Who is the father of C language?</FormLabel>
      <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}
        // aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue="female"
        // name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio  size='small'/>} label="Steve Jobs" />
        <FormControlLabel value="male" control={<Radio  size='small'/>} label="James Gosling" />
        <FormControlLabel value="other" control={<Radio  size='small' />} label="Dennis Ritchie" />
        <FormControlLabel value="other" control={<Radio  size='small'/>} label="Rasmus Lerdorf" />      
      </RadioGroup>
    </FormControl><br/>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"30px"}}>2. Which of the following is true for variable names in C?</FormLabel>
      <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}
        // aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue="female"
        // name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio  size='small'/>} label="They can contain alphanumeric characters as well as special characters" />
        <FormControlLabel value="male" control={<Radio  size='small'/>} label="It is not an error to declare a variable to be one of the keywords(like goto, static)" />
        <FormControlLabel value="other" control={<Radio  size='small' />} label=" Variable names cannot start with a digit" />
        <FormControlLabel value="other" control={<Radio  size='small'/>} label="Variable can be of any length" />      
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"30px"}}>3. Which of the following typecasting is accepted by C language?</FormLabel>
      <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
        <FormControlLabel value="female" control={<Radio  size='small'/>} label="Widening conversions" />
        <FormControlLabel value="male" control={<Radio  size='small'/>} label="Narrowing conversions" />
        <FormControlLabel value="other" control={<Radio  size='small' />} label=" Widening & Narrowing conversions" />
        <FormControlLabel value="other" control={<Radio  size='small'/>} label="None of the mentioned" />      
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label"  sx={{marginLeft:"30px",marginTop:"30px"}}>3. Which of the following typecasting is accepted by C language?</FormLabel>
      <RadioGroup sx={{marginLeft:"80px",marginTop:"10px"}}>
        <FormControlLabel value="female" control={<Radio  size='small'/>} label="Widening conversions" />
        <FormControlLabel value="male" control={<Radio  size='small'/>} label="Narrowing conversions" />
        <FormControlLabel value="other" control={<Radio  size='small' />} label=" Widening & Narrowing conversions" />
        <FormControlLabel value="other" control={<Radio  size='small'/>} label="None of the mentioned" />      
      </RadioGroup>
    </FormControl>
          </Item>
        </Grid>
     
      </Grid>
      </Container>
    </Box>
    </>
  );
}