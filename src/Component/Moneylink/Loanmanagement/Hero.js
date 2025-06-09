import React from "react";
import loansack from "../../../assets/images/loansack.svg";
import loan1 from "../../../assets/images/loanms1.svg";
import LoanProcessContainer from "./LoanProcessContainer";

const Hero = () => {
  return (
    <div className="lms-hero">
      <div className="row personalb">
        <div className="col-md-7">
          {/* <div className="platform-sm-btn">
            <img
              src={loan1}
              alt="dlm-sm-btn-image"
              className="lms-img-res"
            />
            <p>Loan Management System</p>
          </div> */}
          <h1>
            <span>Most complete cloud-based lending ecosystem</span> enabling
            Lenders create profitable Loan Portfolios
          </h1>
          <p>
            MoneyLink cloud-based loan management system helps lenders Originate & Disburse loans instantly,
            manage them over the life cycle, collect due & delinquent amounts from settlement as well as other
            bank accounts the customers have across multiple banks.
          </p>

          {/* <img src={lms1} alt='' /> */}
          <LoanProcessContainer />
          <div>
            <button>Contact Sales</button>
          </div>
        </div>
        <div className="col-md-5 lms-hero-2">
          <img src={loansack} alt="Loan Management" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
