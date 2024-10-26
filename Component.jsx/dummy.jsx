
// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Styles from '../Styleing.jsx/style'
// import { Link } from 'react-router-dom';
// const styles = {
//   switchButton: {
//     width: '100px', // Adjust the width as needed
//   },
// };

// function ToggleSwitch() {
//   const [activeButton, setActiveButton] = useState('user');

//   const handleToggle = (value) => {
//     setActiveButton(value);
//     if(value=='user'){
//     window.location.href='/Userlogin';
//     }
//     else
//     if(value=='admin'){
//       setActiveButton(value);
//       window.location.href='/Adminlogin';
//     }
//   };

//   return (
   
//       <Styles>
//      <ButtonGroup variant="outlined" aria-label="outlined primary button group" sx={{marginBottom:"120px"}}>
//                 <Button  className='newbutton'  style={{ ...styles.switchButton, backgroundColor: activeButton === 'user' ? '#3f51b5' : 'white', color: activeButton === 'user' ? 'white' : 'black' }}  onClick={() => handleToggle('user')}>Admin</Button>
//                 <Button className='button1'   style={{ ...styles.switchButton, backgroundColor: activeButton === 'admin' ? '#3f51b5' : 'white', color: activeButton === 'admin' ? 'pink' : 'black' }}onClick={() => handleToggle('admin')}>User</Button>
//            </ButtonGroup> 
//             </Styles>
           
    
//   );
// }

// export default ToggleSwitch;
