import React from 'react'
import {Route,Routes} from 'react-router-dom';
import DashboardPage from './Dashboard';
import Completeds from './Completed';
import DashboardPagea from './Dahboard1';
import Dash from './Result';
import BasicGrid from './CQuestions';
import Cplusquiz from './CplusQs';
import Javamcq from './Javaquiz';
import Pythonmcq from './Pythonmcq';
import Reactquiz from './Reactmcq';
import Phpquiz from './Phpmcq';
import RegisterForms from './RegisterForm';
import AdminPage from './Admin';
export default function Routerpage() {
  return (
    <>
        <Routes>
          <Route index element={<AdminPage/>}/>
          <Route path="/"element={<AdminPage/>}/>
          <Route path="/register" element={<RegisterForms/>}/>
          <Route path="/login" element={<AdminPage/>}/>
          <Route path="/n"  element={<DashboardPagea />} />
          <Route path='/result' element={<Dash/>}/>
          <Route path='/cquestion' element={<Completeds/>}/>
          <Route path='/Questions' element={<BasicGrid/>}/>
          <Route path='/Cplus' element={<Cplusquiz/>}/>
          <Route path='/Java' element={<Javamcq/>}/>
         <Route path='/Python' element={<Pythonmcq/>}/>
         <Route path='/React' element={<Reactquiz/>}/>
          <Route path='/Php' element={<Phpquiz/>}/>
          
        </Routes>
        {/* </div> */}

    </>
  )
}
