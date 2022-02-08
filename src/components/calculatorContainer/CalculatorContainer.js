import './calculatorContainer.css';
import ButtonsComponent from '../ButtonsComponent/ButtonsComponent';

function CalculatorContainer() {
  const calculatorBtns = [
    { cName: "AC", title: "AC", id: "clear" },
    { cName: "divide", title: "/", id: "divide" },
    { cName: "multiply", title: "x", id: "multiply" },
    { cName: "seven", title: "7", id: "seven" },
    { cName: "eight", title: "8", id: "eight" },
    { cName: "nine", title: "9", id: "nine" },
    { cName: "subtract", title: "-", id: "subtract" },
    { cName: "four", title: "4", id: "four" },
    { cName: "five", title: "5", id: "five" },
    { cName: "six", title: "6", id: "six" },
    { cName: "add", title: "+", id: "add" },
    { cName: "one", title: "1", id: "one" },
    { cName: "two", title: "2", id: "two" },
    { cName: "three", title: "3", id: "three" },
    { cName: "equal", title: "=" , id: "equals"},
    { cName: "zero", title: "0", id: "zero" },
    { cName: "decimal", title: ".", id: "decimal" }
  ]

  const calcBtnInfo = calculatorBtns.map(btn =>
    <ButtonsComponent btnClass={btn.cName} btnTitle={btn.title} btnId={btn.id} />)

  return (
    <div className='calc-container'>
      <div className="display grid-item" id="display">0123456789</div>
      {calcBtnInfo}
    </div>
  )
}

export default CalculatorContainer;