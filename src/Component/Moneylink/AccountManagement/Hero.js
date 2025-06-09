import React from "react";
import hero from "../../../assets/images/acct-hero.svg";
import bank from "../../../assets/images/orange-bank.svg";

const Hero = () => {
  return (
    <div className="accountmanagement-hero">
      <div className="row accountmanagement-hero-row">
        <div className="col-md-6">
          <h1>
            <span>Fintech platform for mobile wallets, </span> digital banking,
            telecom, and payment firms
          </h1>
          <p>
            Simple Account Management integration on MoneyLink for seamless
            banking operations and balance tracking.
          </p>
          <button>Contact Sales</button>

          <div className="cip-hero-iamge">
            <div className="cip-hero-cards">
              <div className="cip-hero-card accountmanagement-card">
                <div className="orange-circle">
                  <img src={bank} alt="bank" />
                </div>
                <div className="lineparagrap">
                  <h6>Benefits to Banks & Mobile Money Operators</h6>
                </div>
                <div className="cip-card-text">
                  <div className="cip-card-dot"></div>
                  <div>
                    <p>
                      Simple integration to start offering account management
                      capability.
                    </p>
                  </div>
                </div>
                <div className="cip-card-text">
                  <div className="cip-card-dot"></div>
                  <div>
                    <p>
                      Futuristic cloud-based platform designed to deliver wide
                      range of banking services.
                    </p>
                  </div>
                </div>
                <div className="cip-card-text">
                  <div className="cip-card-dot"></div>
                  <div>
                    <p>
                      MoneyLink card issuing solution to offer card issuance and
                      processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 accountmanagement-hero-2">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
