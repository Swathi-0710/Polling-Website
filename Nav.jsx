import React from 'react'
import CQpage from './CQuestions';
import Routerpage from './Component.jsx/Router';
export default function NavPage() {
  return (
    <>
    <Routerpage/>
   <Link to='/cquestions' element={<CQpage/>}>Hello</Link>
   </>
  )
}
