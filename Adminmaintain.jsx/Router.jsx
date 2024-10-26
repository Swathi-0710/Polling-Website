// import Adminpages from '../Adminpages';
// import Adminusagepage from './Adminusage';
// import Coursesadpage from './Courseaddpage';
// import Questionsaddpage from './Qustionsadd';
// import Useraddpage from './Useradding';
// // import RegisterForms from './RegisterForm';
// // import AdminLoginForm from './Adminlogin';
// import Adminregisterform from './Adminregister';

// import Adminpages from './Adminpages';
// import AdminLoginForm from './Adminlogin';
// import Adminusagepage from './Adminusage';
// import React from "react";
// import AdminLoginForm from "./Adminlogin";
// import Adminregisterform from "./Adminregister";
// import {Route,Routes} from 'react-router-dom';
// import Adminpages from "./Adminpages";
// import Adminusagepage from "./Adminusage";
// import  Coursesadpage from './Courseaddpage';
// import Questionsaddpage from "./Qustionsadd";
// import Useraddpage from "./Useradding";
// export default function Routeradmin() {
//   return (
    
//      <div>
//     {/* <AdminLoginForm/> */}
//         <Routes>
//            <Route index element={<AdminLoginForm/>}/>
//            <Route path="/" element={<AdminLoginForm/>}/>
//            <Route path='/registerform'element={<Adminpages/>}/>
//            <Route path="/regis" element={<Adminregisterform/>}/>
//            <Route path="/loginadmin" element={<AdminLoginForm/>}/>
//            <Route path="/admin1" element={<Adminusagepage />} />
//            <Route path='/courses' element={<Coursesadpage/>}/>
//            <Route path='/questions' element={<Questionsaddpage/>}/>
//            <Route path='/addusers' element={<Useraddpage/>}/>
//         {/* <Route index element={<Adminregisterform/>}/>
//           <Route path="/"element={<Adminregisterform/>}/>
//           <Route path="/register" element={<RegisterForms/>}/>
//           <Route path="/login" element={<AdminPage/>}/>
//           <Route path='/' element={<Adminpages/>}/>
//           <Route index element={<Adminusagepage />} />
//             <Route path='/courses' element={<Coursesadpage/>}/>
//             <Route path='/questions' element={<Questionsaddpage/>}/>
//             <Route path='/addusers' element={<Useraddpage/>}/> */}
//         </Routes>
//         </div>
     
//     )}
import React from 'react'
import {Route,Routes} from 'react-router-dom';
import BasicGrid from '../Loginmain';
import BasicGrid1 from '../Loginmain1';
import RegistrationForm from '../Component.jsx/RegisterForm';
import UserRegistrationForm from '../Component.jsx/UserReg';
import ForgotForm from '../Forgot';
import PersistentDrawerLeft from '../Component.jsx/Dashboard';
import DashboardPagea from '../Component.jsx/Dahboard1';
import Completeduser from '../Component.jsx/Completed';
import Resultuser from '../Component.jsx/Result';
import Adminpaging from './Adminpages';
import Adminuse from './Adminusage';
import Questionad from './Qustionsadd';
import Admincourse from './Courseaddpage';
import Adduser from './Useradding';
import RadioButtons from '../Component.jsx/CQuestions';
import Cplusqus from '../Component.jsx/CplusQs';
import Javaqz from '../Component.jsx/Javaquiz';
import Python from '../Component.jsx/Pythonmcq';
import Phpquz from '../Component.jsx/Phpmcq';
import Reactquz from '../Component.jsx/Reactmcq';
import Success from '../Component.jsx/Navigate';
export default function Router() {
  return (
    <>
    <Routes>
      <Route index element={<BasicGrid/>}/>
      <Route path="/Userlogin" element={<BasicGrid/>}/>
      <Route path="/Adminlogin" element={<BasicGrid1/>}/>
      <Route path="/register" element={<RegistrationForm/>}/>
      <Route path="/userregister" element={<UserRegistrationForm/>}/>
      <Route path="/Forgot" element={<ForgotForm/>}/>
      <Route path="/login" element={<PersistentDrawerLeft/>}/>
      <Route path="/n" element={<DashboardPagea/>}/>
      <Route path="/cquestion" element={<Completeduser/>}/>
      <Route path="/result" element={<Resultuser/>}/>
      <Route path="/Adminpage" element={<Adminpaging/>}/>
      <Route path="/admin1" element={<Adminuse/>}/>
      <Route path="/questions" element={<Questionad/>}/>
      <Route path="/courses" element={<Admincourse/>}/>
      <Route path="/addusers" element={<Adduser/>}/>
      <Route path="/CMCQ" element={<RadioButtons/>}/>
      <Route path="/Cplus" element={<Cplusqus/>}/>
      <Route path="/Java" element={<Javaqz/>}/>
      <Route path="/Python" element={<Python/>}/>
      <Route path="/Php" element={<Phpquz/>}/>
      <Route path="/React" element={<Reactquz/>}/>
      <Route path="/submit" element={<Success/>}/>
    </Routes>
    </>
  )
}
