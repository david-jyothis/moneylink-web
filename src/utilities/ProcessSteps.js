import React, { useEffect, useState } from "react";
import "./process.css";

const ProcessSteps = ({
  steps,
  arrowColor,
  circleBorderColor,
  textColor,
  downArrowClass,
  topDescriptionClass,
  stepClass,
  arrowClass,
  stepContainer,
  downDescriptionClass,
  circelBg,
}) => {
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

  const isMobile = windowWidth < 1439;

  const title = steps[0].title;
  const mobileImage = steps[0].image;
  const className = steps[0].className;
  const processSteps = steps.slice(1);
  return (
    <>
      {!isMobile ? (
        <div className="process-flow">
          <p
            className={
              topDescriptionClass
                ? `${topDescriptionClass} top-description`
                : "top-description"
            }
            style={{ color: textColor }}
          >
            {title}
          </p>
          <div className="top-step">
            <div
              className={
                downArrowClass
                  ? `${downArrowClass} util-down-arrow`
                  : "util-down-arrow"
              }
            >
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
              <div
                className={
                  stepContainer
                    ? `${stepContainer} step-container`
                    : "step-container"
                }
                key={index}
              >
                <div
                  className={stepClass ? `${stepClass} util-step` : "util-step"}
                  style={
                    step.description === "Processing & Settlement"
                      ? { marginLeft: "10px", marginRight: "10px" }
                      : step.description === "Card Applications"
                      ? { marginLeft: "10px" }
                      : {}
                  }
                >
                  <div
                    className="circleimg"
                    style={{
                      border: `2px solid ${circleBorderColor} `,
                      backgroundColor: `${circelBg}`,
                    }}
                  >
                    <img src={step.image} alt={step.description} />
                  </div>
                  <p
                    className={
                      downDescriptionClass
                        ? `${downDescriptionClass} down-description ${textColor}`
                        : "down-description"
                    }
                    style={{ color: textColor }}
                  >
                    {step.description}
                  </p>
                </div>
                {index > 0 && (
                  <div className={arrowClass ? `${arrowClass} arrow` : "arrow"}>
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
      )}
    </>
  );
};

export default React.memo(ProcessSteps);
