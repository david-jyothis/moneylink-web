import React from "react";
import pos from "../../../assets/images/pos.webp";


const Hero = () => {
  return (
    <>
      <div className="merchant-hero">
        <div className="row personalb">
          <div className="col-md-7 merchantplatform">
            <h1>
              MoneyLink offers <span>all-in-one Point of sale (POS)</span> terminal for all
              your business needs
            </h1>
            <p>
              Swiftly and securely accepts various payment modes, including QR enabled &
              contactless payments, Credit & Debit card dipping/swiping.
            </p>
            <div className="duo-list-container duo-dwp merchantplat">
              <div className="duo-lists">
                <div className="duo-list">
                  <div className="merchant-list-box"></div>
                  <div>
                    <p>Battery backup as well as plug-in usage mode.</p>
                  </div>
                </div>
                <div className="duo-list">
                  <div className="duo-list-box"></div>
                  <div>
                    <p>PCI compliant with full encryption in place.</p>
                  </div>
                </div>
                <div className="duo-list">
                  <div className="duo-list-box"></div>
                  <div>
                    <p>Dashboard view for managing all your terminals.</p>
                  </div>
                </div>
                <div className="duo-list">
                  <div className="duo-list-box"></div>
                  <div>
                    <p>Merchants can accept EMV chips as well as QR payments.</p>
                  </div>
                </div>
                <div className="duo-list">
                  <div className="duo-list-box"></div>
                  <div>
                    <p>Contactless card payments can be processed.</p>
                  </div>
                </div>
                <div className="duo-list">
                  <div className="duo-list-box"></div>
                  <div>
                    <p>Quick software updates done remotely.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button>Contact Sales</button>
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="merchanther-img">
              <img src={pos} alt="POS" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
