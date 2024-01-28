// Calculator.tsx
import React, { useState } from "react";

import { evaluate } from "mathjs";
import "../components/Calculator.css";
import "bootstrap/dist/css/bootstrap.css";

function Calculator() {
  const [inputExpression, setInputExpression] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        const result = evaluate(inputExpression);
        setDisplayValue(result.toString());
        setInputExpression("");
      } catch (error) {
        setDisplayValue("Error");
        setInputExpression("");
      }
    } else if (value === "clear") {
      setInputExpression("");
      setDisplayValue("");
    } else if (value === "positive / negative") {
      setInputExpression((prevExpression) =>
        prevExpression.startsWith("-")
          ? prevExpression.slice(1)
          : "-" + prevExpression
      );
    } else {
      setInputExpression((prevExpression) => prevExpression + value);
      setDisplayValue((prevDisplay) => prevDisplay + value);
    }

    console.log(`Button clicked: ${value}`);
  };

  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="input-group " id="inputFieldContainer">
              <input
                type="text"
                className="form-control"
                id="inputField"
                value={displayValue}
                readOnly
              />
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="btn-group" role="group">
              <button
                className="btn btn-secondary"
                onClick={() => handleButtonClick("clear")}
              >
                AC
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleButtonClick("positive / negative")}
              >
                +/-
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleButtonClick("%")}
              >
                %
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleButtonClick("/")}
              >
                /
              </button>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="btn-group" role="group">
              <button
                className="btn btn-secondary"
                onClick={() => handleButtonClick("7")}
              >
                7
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleButtonClick("8")}
              >
                8
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleButtonClick("9")}
              >
                9
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleButtonClick("*")}
              >
                X
              </button>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="btn-group" role="group">
              <button
                className="btn btn-secondary"
                onClick={() => handleButtonClick("4")}
              >
                4
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleButtonClick("5")}
              >
                5
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleButtonClick("6")}
              >
                6
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleButtonClick("-")}
              >
                -
              </button>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="btn-group" role="group">
              <button
                className="btn btn-secondary"
                onClick={() => handleButtonClick("1")}
              >
                1
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleButtonClick("2")}
              >
                2
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleButtonClick("3")}
              >
                3
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleButtonClick("+")}
              >
                +
              </button>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="btn-group" role="group">
              <button
                className="btn btn-secondary"
                id="zeroBtn"
                onClick={() => handleButtonClick("0")}
              >
                0
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleButtonClick(".")}
              >
                .
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleButtonClick("=")}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
