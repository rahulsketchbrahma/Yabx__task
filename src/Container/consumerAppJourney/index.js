import React from "react";
import "./CAJ.css";

function ConsumerAPPJourney() {
  return (
    <>
      <div className="CAJ__wrapper">
        <div className="CAJ__container">
          <div className="CAJ__background">
            <div className="CAJ__card">
              <form>
                <div className="CAJ__card__details">
                  <h3>Welcome to YABX</h3>
                  <p>
                    customer app options<span>*</span>
                  </p>
                  <div className="CAJ__options">
                    <div className="CAJ__options__first">
                      <label>
                        <input type="checkbox" value="1" />
                        <span>Comedy</span>
                      </label>
                      <input type="checkbox" />
                    </div>
                    <div className="CAJ__options__secound">
                      <input type="checkbox" />
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="CAJ__button">
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConsumerAPPJourney;
