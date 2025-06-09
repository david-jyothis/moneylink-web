import React from "react";
import moneylinkhero from "../../../assets/images/moneylinkhero.webp";
import CardProcessContainer from "./CardProcessContainer";


const Hero = () => {
  return (
    <>
      <div className="cip-hero">
        <div className="row personalb">
          <div className="col-md-6">
            <h1>Modern card issuing with Cards for Every Payment Need</h1>
            <p>
              Instantly issue & process card payments for single or multi-use,
              in multi-currency with both physical & virtual payment solutions.
            </p>
            {/* <img src={moneylinkhero1} alt="" /> */}
            <CardProcessContainer />
            <div className="ml-hero-btn">
              <button>Contact Sales</button>
            </div>
          </div>
          <div className="col-md-6 cip-hero-img">
            <img src={moneylinkhero} alt="moneylink banner" />
          </div>
        </div>
        <div className="cip-hero-iamge">
          <div className="cip-hero-cards">
            <div className="row">
              <div className="col-md-4 cip-hero-card-body">
                <div className="cip-hero-card">
                  <div className="lineparagrap">
                    <h6>Card Issuing</h6>
                  </div>
                  <p className="text-orange">
                    Customize virtual or physical cards, use your own branding,
                    & control where and how cards can be used.
                  </p>

                  <div className="cip-card-text">
                    <div className="cip-card-dot"></div>
                    <div>
                      <p>Debit, Credit & Prepaid Cards</p>
                    </div>
                  </div>
                  <div className="cip-card-text">
                    <div className="cip-card-dot"></div>
                    <div>
                      <p>Physical & Virtual Cards</p>
                    </div>
                  </div>
                  <div className="cip-card-text">
                    <div className="cip-card-dot"></div>
                    <div>
                      <p>Tokenization Card</p>
                    </div>
                  </div>
                  <div className="cip-card-text">
                    <div className="cip-card-dot"></div>
                    <div>
                      <p>Management & Fulfillment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 cip-hero-card-body">
                <div className="cip-hero-card">
                  <div className="lineparagrap">
                    <h6>Processing & Settlement</h6>
                  </div>
                  <p className="text-orange">
                    Ensure a secure and frictionless consumer experience &
                    reduce fraud by limiting the amount and location of
                    transactions.
                  </p>
                  <div className="cip-card-text">
                    <div className="cip-card-dot"></div>
                    <div>
                      <p>Authentication & 3DS</p>
                    </div>
                  </div>
                  <div className="cip-card-text">
                    <div className="cip-card-dot"></div>
                    <div>
                      <p>Just in time Funding</p>
                    </div>
                  </div>
                  <div className="cip-card-text">
                    <div className="cip-card-dot"></div>
                    <div>
                      <p>Dynamic Spend Control</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 cip-hero-card-body">
                <div className="cip-hero-card">
                  <div className="lineparagrap">
                    <h6>Card Applications</h6>
                  </div>
                  <p className="text-orange">
                    Faster Time to Market & better Brand Visibility with easy
                    access to our Card applications.
                  </p>
                  <div className="cip-card-text">
                    <div className="cip-card-dot"></div>
                    <div>
                      <p>Smart Collection for Credit Cards</p>
                    </div>
                  </div>
                  <div className="cip-card-text">
                    <div className="cip-card-dot"></div>
                    <div>
                      <p>Card Life-Cycle Management</p>
                    </div>
                  </div>
                  <div className="cip-card-text">
                    <div className="cip-card-dot"></div>
                    <div>
                      <p>Data Insights & Reporting</p>
                    </div>
                  </div>
                  <div className="cip-card-text">
                    <div className="cip-card-dot"></div>
                    <div>
                      <p>Rewards and loyalty program</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
