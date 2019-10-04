import React from "react";
import ReactTooltip from "react-tooltip";

const Keypad = ({ onInput, memory }) => {
  const handleButton = event => {
    onInput(event.target.name);
  };
  const memoryIsEmpty = !memory;
  const memoryRead = String(memory);
  return (
    <React.Fragment>
      <ReactTooltip delayShow={200} />
      <ReactTooltip
        id="memoryPlus"
        getContent={() => `Add current display value to ${memory}`}
      />
      <ReactTooltip
        id="memoryMinus"
        getContent={() =>
          memoryIsEmpty ? null : `Subtract current display value to ${memory}`
        }
      />
      <div className="row">
        <div className="col">
          <button name="MS" onClick={handleButton} data-tip="Save to memory">
            MS
          </button>
          <button name="7" onClick={handleButton}>
            7
          </button>
          <button name="4" onClick={handleButton}>
            4
          </button>
          <button name="1" onClick={handleButton}>
            1
          </button>
          <button name="0" onClick={handleButton}>
            0
          </button>
        </div>

        <div className="col">
          <button
            name="MC"
            onClick={handleButton}
            disabled={memoryIsEmpty}
            data-tip="Clear memory"
          >
            MC
          </button>
          <button name="8" onClick={handleButton}>
            8
          </button>
          <button name="5" onClick={handleButton}>
            5
          </button>
          <button name="2" onClick={handleButton}>
            2
          </button>
          <button name="." onClick={handleButton} data-tip="Decimal point">
            .
          </button>
        </div>

        <div className="col">
          <button name="C" onClick={handleButton} data-tip="Clear display">
            C
          </button>
          <button
            name="MR"
            onClick={handleButton}
            data-tip={memoryRead}
            disabled={memoryIsEmpty}
          >
            MR
          </button>
          <button name="9" onClick={handleButton}>
            9
          </button>
          <button name="6" onClick={handleButton}>
            6
          </button>
          <button name="3" onClick={handleButton}>
            3
          </button>
          <button name="+/-" onClick={handleButton} data-tip="Change sign">
            +/-
          </button>
        </div>

        <div className="col">
          <button name="AC" onClick={handleButton} data-tip="Clear all">
            AC
          </button>
          <button
            name="M-"
            onClick={handleButton}
            disabled={memoryIsEmpty}
            data-tip=""
            data-for="memoryMinus"
          >
            M-
          </button>
          <button name="/" onClick={handleButton} data-tip="Divide">
            /
          </button>
          <button name="*" onClick={handleButton} data-tip="Multiply">
            *
          </button>
          <button name="-" onClick={handleButton} data-tip="Subtract">
            -
          </button>
          <button name="+" onClick={handleButton} data-tip="Add">
            +
          </button>
        </div>

        <div className="col">
          <button name="<-" onClick={handleButton} data-tip="Backspace">
            {"<-"}
          </button>
          <button
            name="M+"
            onClick={handleButton}
            disabled={memoryIsEmpty}
            data-tip=""
            data-for="memoryPlus"
          >
            M+
          </button>
          <button name="sqrt" onClick={handleButton} data-tip="Square Root">
            sqrt
          </button>
          <button name="%" onClick={handleButton} data-tip="Percent">
            %
          </button>
          <button name="=" onClick={handleButton} data-tip="Equals">
            =
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Keypad;
