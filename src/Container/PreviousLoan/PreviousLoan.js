import React, { useEffect, useState } from "react";
import "./PreviousLoan.css";
import { KYCdefinition } from "../../KYC services/KycServices";
import { ACTIVE_KYC_ID } from "../../constants";
import Navbar from "../../Components/Navbar/Index";
import Stepper from "../../Components/Stepper/Index";

function PreviousLoan() {
  const [previousLoandDetails, setPreviousLoanDetails] = useState();
  const [hideData, setHideData] = useState(true);
  const [hideRepaidData, setRepaidData] = useState(false);

  useEffect(() => {
    const dataID = {
      id: ACTIVE_KYC_ID,
    };
    KYCdefinition(dataID).then((res) => {
      const id = res.data.data.packagesDTOs;
      const previousLoandID = id.find((item) => {
        return item.id === "622328a383ee70124c825fca";
      });
      const newChildern = previousLoandID.children;
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
      setPreviousLoanDetails(childrenArr);
      console.log(childrenArr);
    });
  }, []);

  const pastLoan = (e) => {
    console.log(e.target.value);
    var showdata = e.target.value;
    console.log(showdata);
    if (showdata === "false") {
      setHideData(false);
    } else {
      setHideData(true);
    }
  };
  const repaid = (e) => {
    var showRepaidData = e.target.value;
    if (showRepaidData === "false") {
      setRepaidData(true);
    } else {
      setRepaidData(false);
    }
  };
  return (
    <div className="previousLoan__wrapper">
      <div className="previousLoan__background">
        <div>
          <Navbar />
        </div>
        <form>
          <div className="previousLoan__stepper">
            <Stepper initial={2} name={"Previous Loan"} />
          </div>
          <div className="prgress_value" />

          <div className="previousLoan__content__wrapper">
            {previousLoandDetails &&
              previousLoandDetails.map((res, id) => {
                if (res.fieldName === "past_loan_in_n_years") {
                  return (
                    <div key={id}>
                      <h3>Previous loan details</h3>
                      <p>{res.fieldDisplayName}</p>
                      <select onChange={pastLoan}>
                        {res.options &&
                          res.options.map((option, id) => {
                            return (
                              <option value={option.value} key={id}>
                                {option.display}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  );
                }
              })}

            {hideData ? (
              <div className="previous__loan__form">
                <div className="previous__loan__form__content">
                  {previousLoandDetails &&
                    previousLoandDetails.map((res, id) => {
                      if (res.fieldName === "loan_amount") {
                        return (
                          <div key={id}>
                            <label htmlFor="input" className="label__block">
                              {res.fieldDisplayName}
                              <input id="input" type="text" />
                            </label>
                          </div>
                        );
                      }
                    })}
                  {previousLoandDetails &&
                    previousLoandDetails.map((res, id) => {
                      if (res.fieldName === "borrowing_source") {
                        return (
                          <div key={id}>
                            <label htmlFor="input" className="label__block">
                              {res.fieldDisplayName}
                              <input id="input" type="text" />
                            </label>
                          </div>
                        );
                      }
                    })}

                  {previousLoandDetails &&
                    previousLoandDetails.map((res, id) => {
                      if (res.fieldName === "repaid_on_time") {
                        return (
                          <div key={id}>
                            <label htmlFor="input" className="label__block">
                              {res.fieldDisplayName}
                              <select onChange={repaid}>
                                {res.options &&
                                  res.options.map((option, id) => {
                                    return (
                                      <option value={option.value} key={id}>
                                        {option.display}
                                      </option>
                                    );
                                  })}
                              </select>
                            </label>
                          </div>
                        );
                      }
                    })}
                </div>
                {hideRepaidData ? (
                  <>
                    {previousLoandDetails &&
                      previousLoandDetails.map((res, id) => {
                        if (res.fieldName === "reason_for_default") {
                          return (
                            <div key={id}>
                              <label
                                htmlFor="input"
                                className="label__block__default"
                              >
                                {res.fieldDisplayName}
                                <input id="input" type="text" />
                              </label>
                            </div>
                          );
                        }
                      })}
                  </>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="buttons">
            <div className="previousLoan__button__wrapper">
              <button className="previousLoan__button__left" type="submit">
                Update
              </button>
            </div>
            <div className="previousLoan__button__wrapper">
              <button className="previousLoan__button__right" type="submit">
                Discard
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PreviousLoan;
