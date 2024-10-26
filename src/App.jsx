// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Routerpage from './Component.jsx/Routernew';
// export default function App() {
//   return (
//     <div>
//        <BrowserRouter> 
//         <Routerpage/>
//         </BrowserRouter> 
//          </div>
//   )
// }
// import React from 'react'
// import Routeradmin from './Adminmaintain.jsx/Router';
// import { BrowserRouter } from 'react-router-dom';
// export default function App() {
//   return (
//     <div>
//    <BrowserRouter>
//    <Routeradmin/>
//    </BrowserRouter>

//     </div>
//   )
// }
import React from 'react'
import AdminLoginForm from './Loginmain';
import { BrowserRouter } from 'react-router-dom';
import Router from './Adminmaintain.jsx/Router';
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
   {/* <BasicGrids/> */}
    </>
  )
}
// import React from 'react'
// import Success from './Component.jsx/Navigate'
// export default function App() {
//   return (
//     <>
//       <Success/>
//   </>
//   )
// }
