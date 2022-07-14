import React,{useEffect , useState} from 'react'
import './PreviousLoan.css'
import {
    KYCdefinition,
  } from "../../KYC services/KycServices";
import { ACTIVE_KYC_ID } from "../../constants";
import Navbar from '../../Components/Navbar/Index';
import Stepper from "../../Components/Stepper/Index";
import write from '../../assets/Frame.svg'

function PreviousLoanEdit() {
    const [previousLoandDetails , setPreviousLoanDetails] = useState();

    useEffect(()=>{
        const dataID = {
            id: ACTIVE_KYC_ID,
          };
          KYCdefinition(dataID).then((res) => {
            const id = res.data.data.packagesDTOs;
            const previousLoandID = id.find((item) => {
              return item.id === "622328a383ee70124c825fca";
            });
            const newChildern = previousLoandID .children;
            const childrenArr = newChildern.map((iteam) => {
                return {
                  id: iteam.id,
                  fieldName: iteam.fieldName,
                  fieldDisplayName: iteam.fieldDisplayName,
                  mandatory: iteam.mandatory,
                  options: iteam.options,
                  editable: iteam.editable,
                  type: iteam.type,
                };
              });
              setPreviousLoanDetails(childrenArr)
              console.log(childrenArr)
             
    })},[])

    return (
        <div className='previousLoan__wrapper'>
            <div className='previousLoan__background__edit'>
            <div>
            <Navbar />
            </div>
            <form>
                <div className='previousLoan__stepper'>
                <Stepper initial={2} name={'Previous Loan'}/>
                </div>
                <div className='prgress_value'/>  
             
                <div className='previousLoan__content__wrapper'>
                {
                      previousLoandDetails && previousLoandDetails.map((res , id) =>{
                        if(res.fieldName === 'past_loan_in_n_years'){
                          return(
                            <div key={id}>
                                <div className='previousLoan__content__wrapper__header'>
                     <h3>Previous loan details</h3>
                     <button><img src={write}/>edit</button>
                     </div>

                     <div className='Body__wrapper'>
                        <div className='Body__wrapper__flex'>
                            <div>
                                <div  key={id}>
                                <label htmlFor="input"
                                className='Edit__block'>
                                                {res.fieldDisplayName}
                                                <input id="input" type="text"
                                                 />
                                              </label>
                                </div>
                            </div>
                            <div>
                     {
                          previousLoandDetails && previousLoandDetails.map((res , id) =>{
                            if(res.fieldName === 'loan_amount'){
                              return(
                                <div  key={id}>
                                <label htmlFor="input"
                                className='Edit__block'>
                                                {res.fieldDisplayName}
                                                <input id="input" type="text"
                                                 />
                                              </label>
                                              </div>
                              )
                            }
                          })
                        }
                            </div>
                            <div>
                            {
                          previousLoandDetails && previousLoandDetails.map((res , id) =>{
                            if(res.fieldName === 'borrowing_source'){
                              return(
                                <div  key={id}>
                                <label htmlFor="input"
                                 className='Edit__block'>
                                                {res.fieldDisplayName}
                                                <input id="input" type="text" />
                                              </label>
                                              </div>
                              )
                            }
                          })
                           
                        }
                            </div>
                            <div>
                            {
                          previousLoandDetails && previousLoandDetails.map((res , id) =>{
                            if(res.fieldName === 'repaid_on_time'){
                              return(
                                <div  key={id}>
                                <label htmlFor="input"
                                 className='Edit__block'>
                                                {res.fieldDisplayName} 
                                                <input id="input" type="text"/>
                                                
                                              </label>
                                              </div>
                              )
                            }
                          })
                           
                        }
                            </div>
                            <div>
                            {
                          previousLoandDetails && previousLoandDetails.map((res , id) =>{
                            if(res.fieldName === 'reason_for_default'){
                              return(
                                <div  key={id}>
                                <label htmlFor="input"
                                 className='Edit__block'>
                                                {res.fieldDisplayName} 
                                                <input id="input" type="text"/>
                                                
                                              </label>
                                              </div>
                              )
                            }
                          })
                           
                        }         
                            </div>
                        </div>
                    </div>
                     </div>

                     )
                    }
                  })
                 }
                </div>

                <div className='buttons'>
                <div className="previousLoan__button__wrapper">
          <button className="previousLoan__button__left" type="submit">Previous</button>
        </div>
        <div className="previousLoan__button__wrapper">
          <button className="previousLoan__button__right" type="submit">Continue</button>
        </div>
        </div>
            </form>
            </div>
        </div>
)
}

export default PreviousLoanEdit