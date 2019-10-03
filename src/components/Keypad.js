import React from "react";

const Keypad = ({ onInput }) => {
  const handleButton = event => {
    onInput(event.target.name);
  };

  return (
    <div className="row">
      <div className="col">
        <button name="(" onClick={handleButton}>
          (
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
        <button name=")" onClick={handleButton}>
          )
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
        <button name="." onClick={handleButton}>
          .
        </button>
      </div>

      <div className="col">
        <button name="C" onClick={handleButton}>
          C
        </button>
        <button name="MS" onClick={handleButton}>
          MS
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
        <button name="+/-" onClick={handleButton}>
          +/-
        </button>
      </div>

      <div className="col">
        <button name="AC" onClick={handleButton}>
          AC
        </button>
        <button name="MR" onClick={handleButton}>
          MR
        </button>
        <button name="/" onClick={handleButton}>
          /
        </button>
        <button name="*" onClick={handleButton}>
          *
        </button>
        <button name="-" onClick={handleButton}>
          -
        </button>
        <button name="+" onClick={handleButton}>
          +
        </button>
      </div>

      <div className="col">
        <button name="<-" onClick={handleButton}>
          {"<-"}
        </button>
        <button name="M+" onClick={handleButton}>
          M+
        </button>
        <button name="sqrt" onClick={handleButton}>
          sqrt
        </button>
        <button name="%" onClick={handleButton}>
          %
        </button>
        <button name="=" onClick={handleButton}>
          =
        </button>
      </div>
    </div>
  );
};

export default Keypad;
