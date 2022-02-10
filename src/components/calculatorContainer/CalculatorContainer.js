import { useState } from 'react';
import './calculatorContainer.css';
import ButtonsComponent from '../ButtonsComponent/ButtonsComponent';

function CalculatorContainer() {
  const [displayValue, setDisplayValue] = useState(0);

  const calculatorBtns = [
    { cName: "AC", value: "AC", id: "clear" },
    { cName: "divide", value: "/", id: "divide" },
    { cName: "multiply", value: "x", id: "multiply" },
    { cName: "seven", value: 7, id: "seven" },
    { cName: "eight", value: 8, id: "eight" },
    { cName: "nine", value: 9, id: "nine" },
    { cName: "subtract", value: "-", id: "subtract" },
    { cName: "four", value: 4, id: "four" },
    { cName: "five", value: 5, id: "five" },
    { cName: "six", value: 6, id: "six" },
    { cName: "add", value: "+", id: "add" },
    { cName: "one", value: 1, id: "one" },
    { cName: "two", value: 2, id: "two" },
    { cName: "three", value: 3, id: "three" },
    { cName: "equal", value: "=" , id: "equals"},
    { cName: "zero", value: 0, id: "zero" },
    { cName: "decimal", value: ".", id: "decimal" }
  ]

  const handleDisplayChange = (e) => {
    let value = e.target.value;
    console.log(e.target)
    if(displayValue === 0) {
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