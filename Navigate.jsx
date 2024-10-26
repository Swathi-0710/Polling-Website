import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import  Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width:"400px",
  height:"400px",
  marginLeft:"425px",
  borderRadius:"10px",
  boxShadow: "2px 4px 2px 2px lightblue"
}));
const response={
  backgroundColor:"#146C94",
  color:"white",width:"90px",
  height:"38px",borderRadius:"13px",
  marginTop:"45px"
}
const ok = () => {
  window.location.href = '/login';
};
export default function Success() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
              <CheckCircleIcon sx={{color:"green",fontSize:"100px",paddingTop:"40px",paddingBottom:"10px"}}/><br/>
               <Typography variant="h5" sx={{color:"#146C94"}}>Submitted!</Typography><br/>
               <Typography variant="h6" sx={{color:"#146C94",fontSize:"17px"}}>Your response has been successfully <br/>recorded.</Typography>
                <Button variant='contained' style={response} onClick={ok}>Ok</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
