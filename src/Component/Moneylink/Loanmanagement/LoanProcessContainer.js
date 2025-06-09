import React from "react";
import ProcessSteps from "../../../utilities/ProcessSteps";
import LoanOrganization from "../../../assets/images/uday/moneylink/LoanOrgnisation.svg";
import LoanManagement from "../../../assets/images/uday/moneylink/loanmanagement.svg";
import LoanCollection from "../../../assets/images/uday/moneylink/loanCollection.svg";
import MoneyLinkPortal from "../../../assets/images/uday/moneylink/moneylinkPortal.svg";

import lms1 from "../../../assets/images/lms1.svg";

const steps = [
  {
    title: "Loan Management System",
    image: lms1,
  },
  { image: LoanOrganization, description: "Loan Organization" },
  { image: LoanManagement, description: "Loan Management" },
  { image: LoanCollection, description: "Loan Collection" },
  { image: MoneyLinkPortal, description: "MoneyLink Portal" },
];

const LoanProcessContainer = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const isMobile = windowWidth < 1025;

  // const title = steps[0].title;
  // const mobileImage = steps[0].image;
  // const className = steps[0].className;
  // const processSteps = steps.slice(1);

  // let arrowColor = "#4D148C";
  // let circleBorderColor = "#4D148C";
  // let textColor = "#4D148C";

  return (
    <div>
      <ProcessSteps
        steps={steps}
        arrowColor="#4D148C"
        circleBorderColor="#4D148C"
        textColor="#4D148C"
        topDescriptionClass="loan-topdescription"
        downArrowClass="cardIssuing-util-down-arrow"
        arrowClass="loanProcessArrow"
      />
    </div>
  );
};

export default LoanProcessContainer;
{
  /* {!isMobile ? (
        <div className="process-flow">
          <p className="top-description">{title}</p>
          <div className="top-step">
            <div className="util-down-arrow loan-util-down-arrow">
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
                    step.description === "Loan Collection"
                      ? { marginRight: "30px" }
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
                  <div className="arrow loan-arrow">
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
