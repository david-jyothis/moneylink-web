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
