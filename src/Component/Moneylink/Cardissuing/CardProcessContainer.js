import React, { useEffect, useState } from "react";
import ProcessSteps from "../../../utilities/ProcessSteps";
import CardIssuing from "../../../assets/images/uday/moneylink/cardissuing.svg";
import CashWithdrawal from "../../../assets/images/uday/moneylink/processingsettlement.svg";
import BillPayments from "../../../assets/images/uday/moneylink/Cardapplication.svg";

import moneylinkhero1 from "../../../assets/images/moneylinkhero1.svg";

const steps = [
  {
    title: "Card Issuing & Processing",
    image: moneylinkhero1,
  },
  { image: CardIssuing, description: "Card Issuing" },
  { image: CashWithdrawal, description: "Processing & Settlement" },
  { image: BillPayments, description: "Card Applications" },
];

const CardProcessContainer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 1025;

  const title = steps[0].title;
  const mobileImage = steps[0].image;
  const className = steps[0].className;
  const processSteps = steps.slice(1);

  let arrowColor = "#4D148C";
  let circleBorderColor = "#4D148C";
  let textColor = "#4D148C";

  return (
    <div>
      <ProcessSteps
        steps={steps}
        arrowColor="#4D148C"
        circleBorderColor="#4D148C"
        textColor="#4D148C"
        topDescriptionClass="cardIssuing-topdescription"
        downArrowClass="cardIssuing-util-down-arrow"
        arrowClass="cardIssuing-arrow"
      />
    </div>
  );
};

export default CardProcessContainer;
{
  /* {!isMobile ? (
        <div className="process-flow">
          <p className="top-description">{title}</p>
          <div className="top-step">
            <div className="util-down-arrow cardIssuing-util-down-arrow">
              <svg width="50" height="50">
                <line
                  x1="25"
                  y1="0"
                  x2="25"
                  y2="50"
                  style={{ stroke: arrowColor, strokeWidth: 1 }}
                />
                <polygon
                  points="20,40 25,50 30,40"
                  style={{ fill: arrowColor }}
                />
              </svg>
            </div>
          </div>
          <div className="util-process-steps">
            {processSteps.map((step, index) => (
              <div className="step-container" key={index}>
                <div
                  className="util-step"
                  style={
                    step.description === "Processing & Settlement"
                      ? { marginLeft: "10px", marginRight: "15px" }
                      : step.description === "Card Applications"
                      ? { marginLeft: "10px" }
                      : {}
                  }
                >
                  <div
                    className="circleimg"
                    style={{ border: `2px solid ${circleBorderColor} ` }}
                  >
                    <img src={step.image} alt={step.description} />
                  </div>
                  <p className="down-description" style={{ color: textColor }}>
                    {step.description}
                  </p>
                </div>
                {index > 0 && (
                  <div className="arrow cardIssuing-arrow">
                    <svg width="50" height="50">
                      <line
                        x1="0"
                        y1="25"
                        x2="50"
                        y2="25"
                        style={{ stroke: arrowColor, strokeWidth: 1 }}
                      />
                      <polygon
                        points="40,20 50,25 40,30"
                        style={{ fill: arrowColor }}
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <img
          src={mobileImage}
          alt="hero2"
          className={className ? className : ""}
        />
      )} */
}
