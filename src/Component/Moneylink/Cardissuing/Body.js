import React from "react";
import debitcard from "../../../assets/images/debitcard.svg";
import creditcard from "../../../assets/images/creditcard.svg";
import virtualcard from "../../../assets/images/virtualcard.svg";
import ci1 from "../../../assets/images/ci1.svg";
import ci2 from "../../../assets/images/ci2.svg";
import ci3 from "../../../assets/images/ci3.svg";
import ci4 from "../../../assets/images/ci4.svg";
import ci5 from "../../../assets/images/ci5.svg";
import ci6 from "../../../assets/images/Gift-Card.svg";
import ci7 from "../../../assets/images/Meal-Pass.svg";
import ci8 from "../../../assets/images/Fuel-Card.svg";
import ci9 from "../../../assets/images/Purchase-Card.svg";
import ci10 from "../../../assets/images/Travel-Card.svg";

const Body = () => {
  return (
    <>
      <div className="cip-body">
        <div className="cip-body-1">
          <h1>Card for every Payment Need</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="card-type cardissu">
                <div className="cardissuing">
                  <img src={debitcard} alt="debitcard" />
                </div>
                <div className="lineparagrap">
                  <h6>Debit Cards</h6>
                </div>
                <p>
                  Customizable top-of-the-line debit cards with digital
                  onboarding, limit configuration, fund transfer customization and
                  more.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-type cardissu">
                <div className="cardissuing">
                  <img src={creditcard} alt="creditcard" />
                </div>
                <div className="lineparagrap">
                  <h6>Credit Cards</h6>
                </div>
                <p>
                  Complete API stack for credit card issuance, mobile-app support
                  and inbuilt security & compliance.
                </p>
                <div className="credit-feature">
                  <div>
                    <img src={ci1} alt="Secure" />
                  </div>
                  <div>
                    <span>100% Secure</span>
                  </div>
                </div>
                <div className="credit-feature">
                  <div>
                    <img src={ci2} alt="End-to-End Support" />
                  </div>
                  <div>
                    <span>End-to-End Support</span>
                  </div>
                </div>
                <div className="credit-feature">
                  <div>
                    <img src={ci3} alt="Fully Customizable" />
                  </div>
                  <div>
                    <span>Fully Customizable</span>
                  </div>
                </div>
                <div className="credit-feature">
                  <div>
                    <img src={ci4} alt="Improved Customer Loyalty" />
                  </div>
                  <div>
                    <span>Improved Customer Loyalty</span>
                  </div>
                </div>
                <div className="credit-feature">
                  <div>
                    <img src={ci5} alt="Custom Deployment Stack" />
                  </div>
                  <div>
                    <span>Custom Deployment Stack</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-type cardissu">
                <div className="cardissuing">
                  <img src={virtualcard} alt="Virtual Cards" />
                </div>
                <div className="lineparagrap">
                  <h6>Virtual Cards</h6>
                </div>
                <p>
                  A virtual card is a digital card that only exists on your phone.
                  Get all the benefits of any card form i.e. Debit, Credit or
                  Pre-paid & spend online, in-store and abroad while saving on
                  currency conversion fees, with the extra layer of security of
                  our virtual cards.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="prepaid-card issuingbody">
          <div className="prepaid-card-header">
            <div className="">
              <img src={creditcard} alt="Prepaid Cards" />
            </div>
            <h6 className="precardnew">Prepaid Cards</h6>
            <p>
              We build single/multiuse reloadable cards, multicurrency forex
              cards, Prepaid cards for JIT-based lending, fleet, travel,
              corporate cards.
            </p>
          </div>

          <div className="">

            <div className="cip-card-1">
              <div className="row">
                <div className="col-md-4">
                  <div className="cip-card cardissu">
                    <div className="cardgift">
                      <img src={ci6} alt="Gift Card" />
                    </div>
                    <div className="lineparagrap">
                      <h6>Gift Card</h6>
                    </div>
                    <p className="issuingpara">
                      Launch ready-to-use gift cards with predefined limits and rewards.
                      Enjoy improved patronage and brand visibility.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cip-card cardissu">
                    <div className="cardgift">
                      <img src={ci7} alt="Meal Pass" />
                    </div>
                    <div className="lineparagrap">
                      <h6>Meal Pass</h6>
                    </div>
                    <p className="issuingpara">
                      Meal cards are restricted use cards that can be issued to
                      employees to use towards food purchases. Meal cards give the
                      employee freedom of choice and even let them order delivery
                      from sites that deliver food.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cip-card cardissu">
                    <div className="cardgift">
                      <img src={ci8} alt="Fuel Card" />
                    </div>
                    <div className="lineparagrap">
                      <h6>Fuel Card</h6>
                    </div>
                    <p className="issuingpara">
                      Track and monitor a wide range of fleet expenses including
                      toll payments, fuel expenses, travel, lodging expenses of your
                      fleet staff. Manage withdrawals, disbursement and
                      block/unblock cards seamlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="cip-card-2">
              <div className="row">
                <div className="col-md-4">
                  <div className="cip-card cardissu">
                    <div className="cardgift">
                      <img src={ci9} alt="Purchase Card" />
                    </div>
                    <div className="lineparagrap">
                      <h6>Purchase Card</h6>
                    </div>
                    <p className="issuingpara">
                      Launch prepaid cards for expense and petty cash management,
                      travel, entertainment, music purchases. Configure limits and
                      integrate online payments.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cip-card cardissu">
                    <div className="cardgift">
                      <img src={ci10} alt="Travel Card" />
                    </div>
                    <div className="lineparagrap">
                      <h6>Travel Card</h6>
                    </div>
                    <p className="issuingpara">
                      Equip your employees with travel cards that are secure,
                      compliant, and reliable. Roll out features such as spend
                      analysis, multiple currency upload and companion mobile app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-moneylink whyissuing">
        <h1>Why MoneyLink?</h1>
        <div className="prepaid-card why-moneylink-body">
          <div className="cip-cards">
            <div className="cip-card-1">
              <div className="cip-card cardissu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="42"
                  viewBox="0 0 36 42"
                  fill="none"
                >
                  <path
                    d="M28.8597 4.58008H28.7602H28.6607H28.5612H28.4617H28.3622L23.4865 6.66968C23.1879 6.76918 22.9889 6.96819 22.8894 7.2667C22.7899 7.56522 22.7899 7.76423 22.9889 8.06274C23.2874 8.56026 23.984 8.75927 24.581 8.56026L26.6706 7.66472C24.6805 11.1474 20.9988 14.8291 16.3221 17.7147C12.7399 20.0033 8.75976 21.6949 4.97858 22.5904C4.68007 22.6899 4.38156 22.7894 4.28205 23.0879C4.08304 23.2869 4.08304 23.5855 4.18255 23.884C4.38156 24.3815 4.97858 24.7795 5.67512 24.5805C9.75481 23.5855 13.934 21.7944 17.8147 19.4063C22.6904 16.3216 26.5711 12.5404 28.8597 8.75927L29.3572 10.3513C29.4567 10.6499 29.6557 10.8489 29.9543 10.9484C30.2528 11.0479 30.5513 11.1474 30.8498 11.0479C31.4468 10.8489 31.8448 10.3513 31.6458 9.75432L30.1533 5.37612C30.0538 5.0776 29.8547 4.77909 29.4567 4.58008H29.3572C29.0587 4.58008 29.0587 4.58008 28.8597 4.58008Z"
                    fill="#2C007D"
                  />
                  <path
                    d="M35.2339 17.6172H31.0547V41.0008H35.2339V17.6172Z"
                    stroke="#2C007D"
                    stroke-miterlimit="107.69"
                  />
                  <path
                    d="M26.8745 20.6035H22.6953V40.9025H26.8745V20.6035Z"
                    stroke="#2C007D"
                    stroke-miterlimit="107.69"
                  />
                  <path
                    d="M18.6167 24.2832H14.4375V41H18.6167V24.2832Z"
                    stroke="#2C007D"
                    stroke-miterlimit="107.69"
                  />
                  <path
                    d="M10.2495 28.2656H6.07031V40.9027H10.2495V28.2656Z"
                    stroke="#2C007D"
                    stroke-miterlimit="107.69"
                  />
                  <path
                    d="M8.66186 16.3237C12.8934 16.3237 16.3237 12.8934 16.3237 8.66186C16.3237 4.43033 12.8934 1 8.66186 1C4.43033 1 1 4.43033 1 8.66186C1 12.8934 4.43033 16.3237 8.66186 16.3237Z"
                    stroke="#FF5900"
                    stroke-miterlimit="107.69"
                  />
                  <path
                    d="M8.17188 4.58008V9.85382C8.17188 10.0528 8.37088 10.2518 8.56989 10.2518H12.6496"
                    stroke="#2C007D"
                    stroke-miterlimit="107.69"
                  />
                </svg>
                <div className="lineparagrap">
                  <h6>Faster Time to Market</h6>
                </div>
                <p>
                  Launch your card program in days. MoneyLink is your partner
                  with end-to-end card program management.
                </p>
              </div>
              <div className="cip-card cardissu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="44"
                  viewBox="0 0 60 44"
                  fill="none"
                >
                  <path
                    d="M57.6595 34.3555H17.0639C16.7819 34.3555 16.5 35.0966 16.5 35.8377V36.5789C16.5 37.32 16.7819 38.0612 17.0639 38.0612H57.6595C57.9414 38.0612 58.2233 37.32 58.2233 36.5789V35.0966C57.9414 35.0966 57.6595 34.3555 57.6595 34.3555Z"
                    stroke="#2C007D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.65538 26.666C4.4024 26.666 1 30.2961 1 34.8337C1 39.3713 4.4024 43.0014 8.65538 43.0014C12.9084 43.0014 16.3108 39.3713 16.3108 34.8337C16.3108 30.2961 12.9084 26.666 8.65538 26.666Z"
                    stroke="#FF5900"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.57994 12.1159H43.3355C43.6255 12.1159 43.9154 11.3747 43.9154 10.6336V9.89244C43.9154 9.15129 43.6255 8.41016 43.3355 8.41016H1.57994C1.28997 8.41016 1 9.15129 1 9.89244V11.3747C1 12.1159 1 12.1159 1.57994 12.1159Z"
                    stroke="#2C007D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M51.3428 17.3354C55.5959 17.3354 58.9983 13.7053 58.9983 9.1677C58.9983 4.6301 55.5959 1 51.3428 1C47.0899 1 43.6875 4.6301 43.6875 9.1677C43.6875 13.7053 47.0899 17.3354 51.3428 17.3354Z"
                    stroke="#FF5900"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="lineparagrap">
                  <h6>Complete configuration & spend control</h6>
                </div>
                <p>
                  Provide single-use, multi-use configurable cards for the
                  transaction category and control spend in the merchant
                  category.
                </p>
              </div>
              <div className="cip-card cardissu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path
                    d="M18.9174 31.3853C17.0182 31.3853 15.2843 30.9725 13.633 30.2293C9.33939 28.2477 6.44948 23.9541 6.44948 19C6.44948 16.2752 7.35774 13.7981 8.76141 11.7339M23.5412 30.5596C22.1376 31.1376 20.5687 31.4678 18.9174 31.4678C17.0183 31.4678 15.2018 31.055 13.633 30.3119C9.42196 28.3304 6.44948 24.0366 6.44948 19.0825C6.44948 16.3578 7.27517 13.8807 8.76141 11.8165C10.9908 8.67888 14.7064 6.61466 18.9174 6.61466C22.7981 6.61466 26.266 8.43117 28.5779 11.2385C30.3118 13.3853 31.3852 16.11 31.3852 19.0825C31.3852 24.2844 28.0825 28.7431 23.5412 30.5596ZM23.5412 30.5596C28.1651 28.7431 31.3853 24.2844 31.3853 19C31.3853 16.0275 30.3119 13.3028 28.5779 11.1559C26.2661 8.34864 22.7982 6.53212 18.9174 6.53212M32.0458 6.69724C28.7431 3.22936 24.1192 1 18.9174 1C13.4679 1 8.59633 3.39449 5.29358 7.27523C2.5688 10.4128 1 14.5413 1 19C1 25.7706 4.71559 31.633 10.2477 34.688C12.8073 36.1743 15.8623 37 19 37C21.8899 37 24.6147 36.3394 27.0917 35.1009C32.9541 32.1284 37 26.1009 37 19.0825C36.8348 14.211 35.0183 9.91742 32.0458 6.69724Z"
                    stroke="#FF5900"
                    stroke-width="1.5"
                  />
                  <path
                    d="M8.84317 11.735C11.0725 8.59742 14.7881 6.5332 18.9991 6.5332C22.8798 6.5332 26.3477 8.34972 28.6597 11.157C30.3936 13.3038 31.467 16.0286 31.467 19.0011C31.467 24.2855 28.2469 28.7442 23.623 30.5607C22.2193 31.1387 20.6505 31.4689 18.9991 31.4689C17.1001 31.4689 15.2836 31.0561 13.7147 30.313C9.50373 28.3313 6.53125 24.0378 6.53125 19.0836"
                    stroke="#FF5900"
                    stroke-width="1.5"
                  />
                  <path
                    d="M18.9219 6.53157V1.08203"
                    stroke="#4D148C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M18.9219 36.9163V31.4668"
                    stroke="#4D148C"
                    stroke-width="1.5"
                  />
                  <path d="M6.44954 19H1" stroke="#4D148C" stroke-width="1.5" />
                  <path
                    d="M36.8402 19H31.3906"
                    stroke="#4D148C"
                    stroke-width="1.5"
                  />
                </svg>
                <div className="lineparagrap">
                  <h6>Tokenization</h6>
                </div>
                <p>
                  MoneyLink’s platform supports network branded tokenization
                  solutions with an in-house token generation platform to manage
                  the token life cycle.
                </p>
              </div>
              <div className="cip-card cardissu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="38"
                  viewBox="0 0 43 38"
                  fill="none"
                >
                  <path
                    d="M5.50461 20.4754C5.50461 19.9836 5.40625 19.4918 5.40625 19C5.40625 9.06557 13.4718 1 23.4062 1C33.3407 1 41.5046 9.06557 41.5046 19C41.5046 28.9344 33.439 37 23.5046 37"
                    stroke="#FF5900"
                    stroke-width="1.5"
                    stroke-miterlimit="107.69"
                  />
                  <path
                    d="M22.5234 8.37695V21.1638C22.5234 21.6556 22.9169 22.1474 23.507 22.1474H33.4415"
                    stroke="#FF5900"
                    stroke-width="1.5"
                    stroke-miterlimit="107.69"
                  />
                  <path
                    d="M20.7541 32.082H0.491803C0.196721 32.082 0 31.8852 0 31.5902V31.4918C0 31.1967 0.196721 31 0.491803 31H20.6557C20.9508 31 21.1475 31.1967 21.1475 31.4918V31.5902C21.1475 31.8852 20.9508 32.082 20.7541 32.082Z"
                    fill="#2C007D"
                  />
                  <path
                    d="M20.7503 26.5742H7.56993C7.27485 26.5742 7.07812 26.3774 7.07812 26.0824V25.984C7.07812 25.6889 7.27485 25.4922 7.56993 25.4922H20.6519C20.947 25.4922 21.1437 25.6889 21.1437 25.984V26.0824C21.1437 26.3774 20.947 26.5742 20.7503 26.5742Z"
                    fill="#2C007D"
                  />
                </svg>
                <div className="lineparagrap">
                  <h6>Just in time funding</h6>
                </div>
                <p>Control and customize transactions in real time.</p>
              </div>
            </div>
            <div className="cip-card-2">
              <div className="cip-card cardissu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="38"
                  viewBox="0 0 29 38"
                  fill="none"
                >
                  <path
                    d="M20.1484 1V6.50685C20.1484 7.41097 20.8881 8.0685 21.71 8.0685H27.2169"
                    stroke="#FF5900"
                    stroke-width="1.5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.9041 1H2.56165C1.65753 1 1 1.73973 1 2.56165V35.4384C1 36.3425 1.73973 37 2.56165 37H26.0685C26.9727 37 27.6302 36.2603 27.6302 35.4384V8.72603C27.6302 8.31508 27.4658 7.90412 27.137 7.65754L20.9726 1.49315C20.726 1.16438 20.3151 1 19.9041 1Z"
                    stroke="#FF5900"
                    stroke-width="1.5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.2929 21.6309L17.7587 25.0829L18.6628 29.8501L14.3066 27.5487L10.0327 29.8501L10.8546 25.0829L7.32031 21.6309L12.1697 20.9734L14.3066 16.6172L16.4436 20.9734L21.2929 21.6309Z"
                    stroke="#2C007D"
                    stroke-width="1.5"
                  />
                </svg>
                <div className="lineparagrap">
                  <h6>Compliant with Industry Standards</h6>
                </div>
                <p>
                  We conform to the highest security standards of the payment
                  industry. Our cards are PCI DSS compliant with centralized
                  security updates, monitoring, patching and remediation.
                </p>
              </div>
              <div className="cip-card cardissu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path
                    d="M19 37C28.9411 37 37 28.9411 37 19C37 9.05888 28.9411 1 19 1C9.05888 1 1 9.05888 1 19C1 28.9411 9.05888 37 19 37Z"
                    stroke="#FF5900"
                    stroke-width="1.5"
                    stroke-miterlimit="107.69"
                  />
                  <path
                    d="M19.0019 31.5253C25.9195 31.5253 31.5273 25.9175 31.5273 19C31.5273 12.0824 25.9195 6.47461 19.0019 6.47461C12.0844 6.47461 6.47656 12.0824 6.47656 19C6.47656 25.9175 12.0844 31.5253 19.0019 31.5253Z"
                    stroke="#FF5900"
                    stroke-width="1.5"
                    stroke-miterlimit="107.69"
                  />
                  <path
                    d="M19.0001 25.719C22.7109 25.719 25.719 22.7109 25.719 19.0001C25.719 15.2894 22.7109 12.2812 19.0001 12.2812C15.2894 12.2812 12.2812 15.2894 12.2812 19.0001C12.2812 22.7109 15.2894 25.719 19.0001 25.719Z"
                    stroke="#4D148C"
                    stroke-width="1.5"
                    stroke-miterlimit="107.69"
                  />
                </svg>
                <div className="lineparagrap">
                  <h6>Better Brand Visibility</h6>
                </div>
                <p>
                  We give you white-label cards with your branding and chosen
                  customization. Get more brand visibility and offer better
                  payment experiences.
                </p>
              </div>
              <div className="cip-card cardissu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="39"
                  viewBox="0 0 40 39"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.46912 23.2344H7.13955C7.17036 23.2344 7.20086 23.2374 7.23107 23.2434C7.26128 23.2494 7.29062 23.2583 7.31908 23.2701C7.34754 23.2819 7.37457 23.2963 7.40018 23.3134C7.4258 23.3305 7.4495 23.35 7.47128 23.3718C7.49305 23.3936 7.5125 23.4173 7.52961 23.4429C7.54673 23.4685 7.56118 23.4955 7.57297 23.524C7.58476 23.5524 7.59365 23.5818 7.59966 23.612C7.60567 23.6422 7.60867 23.6727 7.60867 23.7035V35.9826C7.60867 36.0134 7.60567 36.0439 7.59966 36.0742C7.59365 36.1044 7.58476 36.1337 7.57297 36.1621C7.56118 36.1906 7.54673 36.2176 7.52961 36.2433C7.5125 36.2689 7.49305 36.2925 7.47128 36.3144C7.4495 36.3361 7.4258 36.3555 7.40018 36.3726C7.37457 36.3898 7.34754 36.4042 7.31908 36.416C7.29062 36.4278 7.26128 36.4367 7.23107 36.4427C7.20086 36.4487 7.17036 36.4517 7.13955 36.4517H1.46912C1.43832 36.4517 1.40781 36.4487 1.3776 36.4427C1.34739 36.4367 1.31806 36.4278 1.2896 36.416C1.26114 36.4042 1.2341 36.3898 1.20849 36.3726C1.18288 36.3555 1.15918 36.3361 1.1374 36.3144C1.11562 36.2925 1.09617 36.2689 1.07906 36.2433C1.06195 36.2176 1.0475 36.1906 1.03571 36.1621C1.02392 36.1337 1.01502 36.1044 1.00901 36.0742C1.003 36.0439 1 36.0134 1 35.9826V23.7035C1 23.6727 1.003 23.6422 1.00901 23.612C1.01502 23.5818 1.02392 23.5524 1.03571 23.524C1.0475 23.4955 1.06195 23.4685 1.07906 23.4429C1.09617 23.4173 1.11562 23.3936 1.1374 23.3718C1.15918 23.35 1.18288 23.3305 1.20849 23.3134C1.2341 23.2963 1.26114 23.2819 1.2896 23.2701C1.31806 23.2583 1.34739 23.2494 1.3776 23.2434C1.40781 23.2374 1.43832 23.2344 1.46912 23.2344Z"
                    stroke="#2C007D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.60938 34.077C24.9572 39.8595 19.1746 39.8595 39.0006 29.9466C37.8596 28.4093 35.8793 27.7492 34.0441 28.2944L26.9117 30.5529"
                    stroke="#2C007D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.60938 24.8867H12.5658C16.4535 24.8867 19.1746 28.191 20.0006 28.191H25.7833C27.4354 28.191 27.4354 31.4954 25.7833 31.4954H16.6963"
                    stroke="#2C007D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.8307 18.3652L29.6077 15.9278C29.2596 15.9278 28.9114 15.9278 28.9114 15.9278L24.0366 18.3652L24.733 12.7941C24.733 12.4458 24.733 12.0976 24.3849 12.0976L20.5547 8.2675L26.1258 7.22293C26.474 7.22293 26.474 6.87472 26.8222 6.87472L29.2596 2L32.0451 6.87472C32.0451 7.22293 32.3933 7.22293 32.7415 7.22293L37.9644 8.2675L34.1343 12.4458C33.7861 12.7941 33.7861 12.7941 33.7861 13.1423L34.8307 18.3652Z"
                    fill="white"
                    stroke="#F15C24"
                    stroke-width="1.5"
                  />
                </svg>
                <div className="lineparagrap">
                  <h6>Rewards Program</h6>
                </div>
                <p>
                  Go the extra mile! Give your customers access to rewards and
                  loyalty programs, personalized to their interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
