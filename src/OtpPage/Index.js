import React,{useState, useEffect} from 'react'
import './Otp.css'
import Logo from '../assets/image3.png'
import OTPInput from "otp-input-react";

function Otp() {
    const [OTP, setOTP] = useState("");
    const [counter , setCounter] = useState(29);
    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(()=>{
        const timer = counter > 0 && setInterval(()=> setCounter (counter -1), 1000);
        return ()=> clearInterval(timer)
    },[counter])

    const handleReset =()=>{
        if(counter === 0){
           setCounter(59)
        }
    }
    useEffect(()=> {
        if(OTP.length === 6){
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    },[OTP])
  return (
    <div className='otp__wrapper'>
    <div className='otp__background'>
        <div className='otp__login__wrappers'>
            <div className='otp__login__wrapper'>
                <img src={Logo} className="logo" alt="logo" />
                <div className='otp__login'>
                    <form className='otp__form'>
                    <h1>Welcome User</h1>
                    <p>The OTP has sent to - </p>
                    <div className='otp__gen'>
                    <OTPInput value={OTP} onChange={setOTP} OTPLength={6} otpType="number" disabled={false} inputStyles={{
                        border: "1.5px solid #CCCCCC",
                        borderRadius: "6px",
                        fontSize: "12px",
                        textAlign: "center",
                        color: "#000",
                        fontWeight: "400",
                        caretColor: "rgb(115, 15, 255)",
                        outlineColor: '#EB6E7F'
                     }}  /> 
                    </div>
                    <p>Haven't received code yet ? {
                            (counter === 0 ) ?
                            <button onClick={handleReset} className="otp__resend__button">Resend</button> 
                   : 
                 <span className='otp__counter'>Resent in  00:{counter}</span>
                    }
                    </p>
                   
                  

<div>
                    <button type="submit" disabled={buttonDisabled} className="otp__button">send</button>
</div>
                    
                    </form>
                </div>
            </div>
        </div>
    </div>  
</div>
  )
}

export default Otp
