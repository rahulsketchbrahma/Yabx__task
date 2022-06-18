import React, { useState, useEffect } from "react";
import "./LoanDetails.css";
import Navbar from "../../Components/Navbar/Index";
import Stepper from "../../Components/Stepper/Index";
import { ACTIVE_KYC_ID } from "../../constants";
import {
  KYCdefinition,
  KYCresponsefields,
} from "../../KYC services/KycServices";

function LoanDetails() {
  const [rangeValues, setRangeValues] = useState(0);
  const [rangeYears, setRangeYears] = useState(1);
  const [RequiredLoanAmmount, setRequiredLoanAmmount] = useState();
  const minValue = 0;
  const maxValue = 100000;
  const minYear = 1;
  const maxYear = 5;

  //Simple UI functionality
  const rangeValue = (e) => {
    setRangeValues(e.target.value);
  };
  const rangeYear = (e) => {
    setRangeYears(e.target.value);
  };

  //GetKYCdefintion() , Link both url and uuid
  useEffect(() => {
    const dataID = {
      id: ACTIVE_KYC_ID,
    };
    KYCdefinition(dataID).then((res) => {
      const id = res.data.data.packagesDTOs;

      const loanSimulation = id.find((item) => {
        return item.id === "6225b60783ee70124c8260c0";
      });
      const newChildern = loanSimulation.children;
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

      setRequiredLoanAmmount(childrenArr);
      console.log(childrenArr);
    });
  }, []);

  return (
    <div>
      <div className="loan__simulation__wrapper">
        <div className="loan__simulation__background">
          <div>
            <Navbar />
          </div>
          <form>
            <div className="loan__stepper">
              <div>
                <div>
                  <Stepper initial={1} />
                </div>
                <div className="loan__simulator__pls__wrapper">
                  <div className="loan__simulator__pls">
                    <div className="loan__simulator__header">
                      <div className="loan__simulator__header__h3">
                        <h3>Personal Loan Simulation</h3>
                      </div>
                      <div className="loan__simulator__content">
                        <div className="loan__simulator__content__left">
                          {RequiredLoanAmmount &&
                            RequiredLoanAmmount.map((res) => {
                              if (
                                res.fieldDisplayName === "Required Loan Amount"
                              ) {
                                return (
                                  <>
                                    <div className="loan__simulator__content__left__flex">
                                      <h4>
                                        {res.fieldDisplayName}
                                        {res.mandatory ? (
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        ) : (
                                          ""
                                        )}
                                      </h4>

                                      <input
                                        type="number"
                                        value={rangeValues}
                                        disabled
                                      />
                                    </div>
                                    <div className="loan__simulator__content__left__range">
                                      <input
                                        type="range"
                                        id="value"
                                        min={minValue}
                                        max={maxValue}
                                        value={rangeValues}
                                        onChange={rangeValue}
                                      />
                                    </div>
                                    <div className="loan__simulator__content__left__range__values">
                                      <p>&#8377;{rangeValues}</p>
                                      <p>&#8377;{maxValue}</p>
                                    </div>
                                  </>
                                );
                              }
                              if (
                                res.fieldDisplayName ===
                                "Expected Interest Rate"
                              ) {
                                return (
                                  <div>
                                    <div className="loan__simulator__content__left__EIR">
                                      <label htmlFor="input">
                                        {res.fieldDisplayName}
                                        <input id="input" type="text" />
                                      </label>
                                    </div>
                                  </div>
                                );
                              }
                            })}
                        </div>
                        <div className="loan__simulator__content__left">
                          {RequiredLoanAmmount &&
                            RequiredLoanAmmount.map((res) => {
                              if (
                                res.fieldDisplayName ===
                                "Expected repayment time in months"
                              ) {
                                return (
                                  <>
                                    <div className="loan__simulator__content__left__flex">
                                      <h4>
                                        {res.fieldDisplayName}
                                        {res.mandatory ? (
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        ) : (
                                          ""
                                        )}
                                      </h4>

                                      <input
                                        type="number"
                                        value={rangeYears}
                                        disabled
                                      />
                                    </div>
                                    <div className="loan__simulator__content__left__range">
                                      <input
                                        type="range"
                                        id="year"
                                        min={minYear}
                                        max={maxYear}
                                        value={rangeYears}
                                        onChange={rangeYear}
                                      />
                                    </div>
                                    <div className="loan__simulator__content__left__range__values">
                                      <p>{rangeYears}</p>
                                      <p>{maxYear}Year</p>
                                    </div>
                                  </>
                                );
                              }
                              if (
                                res.fieldDisplayName === "Expected EMI amount"
                              ) {
                                return (
                                  <div>
                                    <div className="loan__simulator__content__left__EIR">
                                      <label htmlFor="input">
                                        {res.fieldDisplayName}
                                        <input id="input" type="text" />
                                      </label>
                                    </div>
                                  </div>
                                );
                              }
                            })}
                        </div>
                      </div>
                    </div>
                    <div className="loan__simulator__content__left__LP__flex">
                      <div className="loan__simulator__content__left__LP">
                        {RequiredLoanAmmount &&
                          RequiredLoanAmmount.map((res) => {
                            if (res.fieldDisplayName === "Loan Purpose") {
                              return (
                                <label htmlFor="input">
                                  {res.fieldDisplayName}
                                  <select>
                                    <option disabled>
                                      Choose the purpose of loan
                                    </option>
                                    {res.options &&
                                      res.options.map((option) => {
                                        return (
                                          <option value={option.value}>
                                            {option.display}
                                          </option>
                                        );
                                      })}
                                  </select>
                                </label>
                              );
                            }
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="loanDetails__button__wrapper">
              <button className="loanDetails__button">continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoanDetails;
