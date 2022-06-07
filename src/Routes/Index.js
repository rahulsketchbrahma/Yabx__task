import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../Container/Welcome/Index";
import OtpPage from "../Container/OtpPage/Index";
import { ToastContainer } from "react-toastify";
import ConsumerAPPJourney from "../Container/consumerAppJourney/index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/consumer-app-journey" element={<ConsumerAPPJourney />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
}
export default Router;
