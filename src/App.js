import React, { Component } from "react";
import "./App.css";
import Result from "./components/Result";
import Keypad from "./components/Keypad";

const CalculatorOperations = {
  "/": (prevValue, nextValue) => prevValue / nextValue,
  "*": (prevValue, nextValue) => prevValue * nextValue,
  "+": (prevValue, nextValue) => prevValue + nextValue,
  "-": (prevValue, nextValue) => prevValue - nextValue,
  "=": (prevValue, nextValue) => nextValue
};

class App extends Component {
  state = {
    value: null,
    displayValue: "0",
    operator: null,
    waitingForOperand: false,
    memory: null
  };

  clearAll = () => {
    this.setState({
      value: null,
      displayValue: "0",
      operator: null,
      waitingForOperand: false,
      memory: null
    });
  };

  clearDisplay = () => {
    this.setState({
      displayValue: "0"
    });
  };

  clearLastChar = () => {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue.substring(0, displayValue.length - 1) || "0"
    });
  };

  toggleSign = () => {
    const { displayValue } = this.state;
    const newValue = parseFloat(displayValue) * -1;

    this.setState({
      displayValue: String(newValue)
    });
  };

  inputPercent = () => {
    const { displayValue } = this.state;
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) return;

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, "");
    const newValue = parseFloat(displayValue) / 100;

    this.setState({
      displayValue: String(newValue.toFixed(fixedDigits.length + 2))
    });
  };

  inputDot = () => {
    const { displayValue } = this.state;

    if (!/\./.test(displayValue)) {
      this.setState({
        displayValue: displayValue + ".",
        waitingForOperand: false
      });
    }
  };

  inputSqrt = () => {
    const { displayValue } = this.state;
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) return;
    const newValue = Math.sqrt(currentValue);

    this.setState({
      displayValue: String(newValue)
    });
  };

  inputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      });
    } else {
      this.setState({
        displayValue:
          displayValue === "0" ? String(digit) : displayValue + digit
      });
    }
  }

  performOperation(nextOperator) {
    const { value, displayValue, operator } = this.state;
    const inputValue = parseFloat(displayValue);

    if (value == null) {
      this.setState({
        value: inputValue
      });
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = CalculatorOperations[operator](currentValue, inputValue);

      this.setState({
        value: newValue,
        displayValue: String(newValue)
      });
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    });
  }

  memorySave = () => {
    const { displayValue } = this.state;
    this.setState({
      memory: parseFloat(displayValue)
    });
  };

  memoryRead = () => {
    const { memory } = this.state;
    this.setState({
      displayValue: String(memory)
    });
  };

  memoryPlus = () => {
    const { displayValue, memory } = this.state;
    const memoryPlusCurrentValue =
      parseFloat(memory) + parseFloat(displayValue);
    this.setState({
      memory: memoryPlusCurrentValue
    });
  };

  memoryMinus = () => {
    const { displayValue, memory } = this.state;

    const memoryPlusCurrentValue =
      parseFloat(memory) - parseFloat(displayValue);
    
    if(memoryPlusCurrentValue === 0) {
      this.setState({
        memory: null
      });
    }

    this.setState({
      memory: memoryPlusCurrentValue
    });
  };

  memoryClear = () => {
    this.setState({
      memory: null
    });
  };

  onInput = key => {
    if (key === "Enter") key = "=";

    if (/\d/.test(key)) {
      this.inputDigit(parseInt(key, 10));
    } else if (key in CalculatorOperations) {
      this.performOperation(key);
    } else if (key === ".") {
      this.inputDot();
    } else if (key === "%") {
      this.inputPercent();
    } else if (key === "<-") {
      this.clearLastChar();
    } else if (key === "C") {
      this.clearDisplay();
    } else if (key === "AC") {
      this.clearAll();
    } else if (key === "+/-") {
      this.toggleSign();
    } else if (key === "sqrt") {
      this.inputSqrt();
    } else if (key === "MS") {
      this.memorySave();
    } else if (key === "MR") {
      this.memoryRead();
    } else if (key === "M+") {
      this.memoryPlus();
    } else if (key === "M-") {
      this.memoryMinus();
    } else {
      this.memoryClear();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { displayValue, memory } = this.state;
    return (
      <div className="app">
        <div className="calculator">
          <Result value={displayValue} />
          <Keypad onInput={this.onInput} memory={memory} />
        </div>
      </div>
    );
  }
}

export default App;
