import React from "react";
import hero from "../../../assets/images/debt-hero.svg";

const Hero = () => {
  return (
    <div className="debt-hero">
      <div className="row">
        <div className="col">
          {/* <div className="platform-sm-btn">
            <img
              src={loan1}
              alt="dlm-sm-btn-image"
              className="dlm-sm-btn-image debtcollectimg"
            />
            <p>Debt Collection</p>
          </div> */}
          <h1 className="debt-hero-heading">
            <span className="debt-hero-heading-span">
              Full Suite Debt Collections Management Platform
            </span>{" "}
            for lenders to collect from linked Bank Accounts
          </h1>
          <p className="debt-hero-text">
            Simply integrate MoneyLink Debt Collection Platform to share data of
            defaulted loans for collection from all bank accounts customer has
            in the country.
          </p>
          <button>Contact Sales</button>
        </div>
        <div className="col debt-hero-2">
          <img src={hero} alt="Full Suite Debt Collections Management Platform" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
