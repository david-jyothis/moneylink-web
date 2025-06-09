import { Route, Routes } from "react-router-dom";
import './App.css';
import "./assets/css/style.css";
import MoneylinkcipRoute from "./Component/Moneylink/Cardissuing/Main";
import MoneylinkmerchantRoute from "./Component/Moneylink/Merchant/Main";
import MoneylinkLoanmanagementRoute from "./Component/Moneylink/Loanmanagement/Main";
import MoneylinkDebtCollectionsRoute from "./Component/Moneylink/DebtCollections/Main";
import MoneylinkAccountManagementRoute from "./Component/Moneylink/AccountManagement/Main";



function App() {


  return (
    <Routes>
      <Route path="/" element={<MoneylinkcipRoute />} />
      {/* <Route path="/Platform/Moneylink/cip" element={<MoneylinkcipRoute />} /> */}
      <Route
        path="/merchant"
        element={<MoneylinkmerchantRoute />}
      />
      <Route
        path="/Loanmanagement"
        element={<MoneylinkLoanmanagementRoute />}
      />
      <Route
        path="/Debtcollections"
        element={<MoneylinkDebtCollectionsRoute />}
      />
      <Route
        path="/Accountmanagement"
        element={<MoneylinkAccountManagementRoute />}
      />
    </Routes>
  );
}

export default App;
