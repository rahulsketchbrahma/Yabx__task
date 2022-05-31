import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Welcome from '../Welcome/Index';
import OtpPage from '../OtpPage/Index'

function Router() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Welcome/>}/>
  <Route path="/otp" element={<OtpPage/>}/>
</Routes>
    </BrowserRouter>
  )
}
export default Router