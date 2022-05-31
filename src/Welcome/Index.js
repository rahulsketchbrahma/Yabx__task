import React,{useState} from 'react'
import './Welcome.css'
import Logo from  '../assets/image3.png'
import{useNavigate} from 'react-router-dom'

function Welcome() {
    const navigate = useNavigate()
    const [ number, setNumber] = useState('');
    const [ errorNumber, setErrorNumber] = useState('');

    const handleNumber = (e) =>{
        setNumber(e.target.value)
    }
   
    const welcomeSubmit = (e) =>{
        e.preventDefault()
        var pattern = new RegExp('^[6-9][0-9]{9}$');
    if(number=== ''){
      setErrorNumber("Number is Required")
      return
    }

    else if(!pattern.test(number)){
        setErrorNumber("Number is invalid")
        return
    }
    
    else{
        navigate('/otp')
    }
    }
  return (
    <div className='welcome__wrapper'>
        <div className='welcome__background'>
            <div className='welcome__login__wrappers'>
                <div className='welcome__login__wrapper'>
                    <img src={Logo} className="logo" alt="logo" />
                    <div className='welcome__login'>
                        <form className='welcome__form' onSubmit={welcomeSubmit}>
                        <h1>Welcome to YABX</h1>
                        <p>Please enter your mobile number</p>
                        <input type="text" value={number} onChange={handleNumber} className='welcome__input'/><br />
                        {errorNumber && <div><p>{errorNumber}</p></div>}
                        <button type="submit" className='welcome__button'>Send OTP</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Welcome