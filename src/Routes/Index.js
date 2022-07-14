import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../Container/Welcome/Index";
import OtpPage from "../Container/OtpPage/Index";
import { ToastContainer } from "react-toastify";
import ConsumerAPPJourney from "../Container/consumerAppJourney/index";
import Loan from "../Container/Loan/Index";
import LoanDetails from "../Container/LoanDetails/Index";
import Index from "../Container/PreviousLoan/Index";
import PreviousLoan from "../Container/PreviousLoan/PreviousLoan";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/consumer-app-journey" element={<ConsumerAPPJourney />} />
        <Route path="/loan-journey" element={<Loan />} />
        <Route path="/loan-details" element={<LoanDetails />} />
        <Route path="/previous-loan-details" element={<PreviousLoan />} />
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
