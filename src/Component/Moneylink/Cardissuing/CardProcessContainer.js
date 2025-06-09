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
