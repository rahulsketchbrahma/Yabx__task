import React from 'react'
import './Otp.css'
import Logo from '../assets/image3.png'

function Otp
() {
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
                    <input type="text" className='otp__input'/>
                    <input type="text" className='otp__input'/>
                    <input type="text" className='otp__input'/>
                    <input type="text" className='otp__input'/>
                    <input type="text" className='otp__input'/>
                    <input type="text" className='otp__input'/><br />
                    <p>Haven't received code yet ? <span>Resend in</span> </p>
                    <button type="submit" className='otp__button'>Send OTP</button>
                    </form>
                </div>
            </div>
        </div>
    </div>   
</div>
  )
}

export default Otp
