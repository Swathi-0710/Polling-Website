// import React from 'react';

// function About() {
//   return (
//     <div>
//       <h1>About Page</h1>
//     </div>
//   );
// }

// export default About;
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
const MyButton = () => {
  const buttonStyle = {
    backgroundColor: 'pink', // Replace 'your_desired_color' with the color you want
  };
  const buttonStyles = {
    backgroundColor: 'white', // Replace 'your_desired_color' with the color you want
  };
  const handleclick=(em)=>{
    em.preventDefault();
    window.location.href="/Adminlogin"
  }
  const handleclicks=(em)=>{
    em.preventDefault();
    window.location.href="/Userlogin"
  }
  return (
    <>
    {/* <Button style={buttonStyle}>
      My Custom Button
    </Button> */}
     <ButtonGroup variant="outlined" aria-label="outlined primary button group" >
     <Button   style={buttonStyle}  onClick={handleclick} >Admin</Button>
     <Button  style={buttonStyles}  onClick={handleclicks}>User </Button>
</ButtonGroup>
</>
  );
};

export default MyButton;
