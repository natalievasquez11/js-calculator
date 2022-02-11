import { useState } from 'react';
import './calculatorContainer.css';
import ButtonsComponent from '../ButtonsComponent/ButtonsComponent';

function CalculatorContainer() {
  const [displayValue, setDisplayValue] = useState("0");

  const calculatorBtns = [
    { cName: "AC", value: "AC", id: "clear" },
    { cName: "divide", value: "/", id: "divide" },
    { cName: "multiply", value: "x", id: "multiply" },
    { cName: "seven", value: "7", id: "seven" },
    { cName: "eight", value: "8", id: "eight" },
    { cName: "nine", value: "9", id: "nine" },
    { cName: "subtract", value: "-", id: "subtract" },
    { cName: "four", value: "4", id: "four" },
    { cName: "five", value: "5", id: "five" },
    { cName: "six", value: "6", id: "six" },
    { cName: "add", value: "+", id: "add" },
    { cName: "one", value: "1", id: "one" },
    { cName: "two", value: "2", id: "two" },
    { cName: "three", value: "3", id: "three" },
    { cName: "equal", value: "=" , id: "equals"},
    { cName: "zero", value: "0", id: "zero" },
    { cName: "decimal", value: ".", id: "decimal" }
  ]

  let operations = {
    "+": function(a, b) { return a + b },
    "-": function(a, b) { return a - b },
    "*": function(a, b) { return a * b },
    "/": function(a, b) { return a / b },
  }

  function isOperator(operator) {
    if(operations[operator]) {
      return true;
    } 
    return false;
  }

  function stringToArray(equationString) {
    let tempArrItem = equationString[0];
    let eqArr = []

    for(let item = 1; item < equationString.length; item++) {
      if(equationString[item] === "+" || equationString[item] === "-" || equationString[item] === "*" || equationString[item] === "/") {
        eqArr.push(parseInt(tempArrItem), equationString[item]);
        tempArrItem = "";
      } else {
        tempArrItem += equationString[item];
      }
    }
    eqArr.push(parseInt(tempArrItem))
    return eqArr;
  }

  const solveEquation = (equationString) => {
    let eqArr = stringToArray(equationString);
    console.log(eqArr);

    for(let x = 1; x < eqArr.length; x++) {
      
      // previous = eqArr[x - 1];
      // next = eqArr[x + 1];
      // if(isOperator(eqArr[x])) {
      //   total = operations
      // }
    }

    setDisplayValue('answer');
  }

  const handleDisplayChange = (e) => {
    let value = e.target.value;

    if(value === "AC") {
      setDisplayValue("0");
    } else if(value === "=") {
      solveEquation(displayValue);
    } else if(displayValue === "0" && value === 0) {
      setDisplayValue(displayValue)
    } else if(displayValue === "0") {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  }



  const calcBtnInfo = calculatorBtns.map((btn, index) =>
    <ButtonsComponent 
      key={index} 
      btnClass={btn.cName}
      btnValue={btn.value}
      btnId={btn.id}
      onButtonClick={handleDisplayChange}
    />
  )

  return (
    <div className='calc-container'>
      {/* display is state that will be displayed here in curly braces */}
      <div className="display grid-item" id="display">{displayValue}</div>
      {calcBtnInfo}
    </div>
  )
}

export default CalculatorContainer;