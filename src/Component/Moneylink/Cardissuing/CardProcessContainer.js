import React from "react";
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
