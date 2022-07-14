import React, { useEffect } from "react";
import { getCookie } from "../../utilites/cookie-helper";
import { ACTIVE_KYC_ID } from "../../constants";
import { KYCresponsesbody } from "../../KYC services/KycServices";
function Index() {
  useEffect(() => {
    const data = {
      id: ACTIVE_KYC_ID,
      msisdn: getCookie("otp"),
    };
    KYCresponsesbody(data).then((res) => {
      console.log(res);
    });
  }, []);
  return <div>Index</div>;
}

export default Index;
