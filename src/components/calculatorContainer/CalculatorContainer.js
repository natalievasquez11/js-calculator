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
    "x": function(a, b) { return a * b },
    "/": function(a, b) { return a / b },
  }

  function isOperator(operator) {
    if(operations[operator]) {
      return true;
    } 
    return false;
  }

  function stringToArray(equationString) {
    //if first item is an operator return null
    if(isOperator(equationString[0])) {
      return null;
    //else if item is one number return single item, no need to loop through string
    } else if(equationString.length === 1) {
      return equationString;
    } 
    let tempArrItem = equationString[0];
    let eqArr = []

    for(let item = 1; item < equationString.length; item++) {
      // if operator push running number to array and operator
      if(isOperator(equationString[item])) {
        //testing for multiple operators or negative sign
        if(isOperator(equationString[item - 1]) && equationString[item] === "-") {
          tempArrItem = "-";
        } else if(isOperator(equationString[item - 1])) {
          eqArr.pop();
          eqArr.push(equationString[item]);
          tempArrItem = "";
        } else {
          eqArr.push(parseFloat(tempArrItem), equationString[item]);
          tempArrItem = "";
        }
      //else keep adding numbers to string as long as it doesn't hit operator
      } else {
        tempArrItem += equationString[item];
      }
    }
    //push final number to array
    eqArr.push(parseFloat(tempArrItem))
    return eqArr;
  }

  function calculate(eqArr) {
    //if array is null return null
    if(!eqArr) {
      return eqArr;
    //if array has only one number return single item, no need to loop through array
    } else if(eqArr.length === 1) {
      return eqArr;
    }
    let total = 0;
    for(let x = 0; x < eqArr.length; x++) {
      let current = eqArr[x];
      let next = eqArr[x + 1];
      let nextNext = eqArr[x + 2];

      //if first loop, call operations[objects key operator](with operand 1, operand 2) 
      //& add 3 to x to get to next operator 
      if(x === 0) {
        total = operations[next](current, nextNext);
        x += 2;
      } 
      //else call operations[objects key operator](with running total, 2nd operand)
      //& add 1 to x to get to all following operators
      else {
        total = operations[current](total, next);
        x++;
      }
    }
    return total;
  }

  const solveEquation = (equationString) => {
    let eqArr = stringToArray(equationString);
    let solution = calculate(eqArr);
    //if NaN display "ERROR"
    if(isNaN(solution) || !solution) {
      solution = 'ERROR';
    }
    setDisplayValue(solution);
  }

  const handleDisplayChange = (e) => {
    let value = e.target.value;
    if(value === "AC") {
      setDisplayValue("0");
    } else if(value === "=") {
      solveEquation(displayValue);
    } else if(value === ".") {
      let currentChar = displayValue.length - 1; 
      //while it's not an operator or not equal to 0
      while(!isOperator(displayValue[currentChar]) && currentChar !== 0) {
        currentChar--;
      }
      if(displayValue.substring(++currentChar).includes(".")) {
        return;
      } else {
        setDisplayValue(displayValue + value);
     }
    } else if(displayValue === "0" && value === 0) {
      return;
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