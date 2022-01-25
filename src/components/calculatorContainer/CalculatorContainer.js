import './calculatorContainer.css';
import ButtonsComponent from '../ButtonsComponent/ButtonsComponent';

function CalculatorContainer() {
  const calculatorBtns = [
    { cName: "AC", title: "AC" },
    { cName: "divide", title: "/" },
    { cName: "multiply", title: "x" },
    { cName: "seven", title: "7" },
    { cName: "eight", title: "8" },
    { cName: "nine", title: "9" },
    { cName: "subtract", title: "-" },
    { cName: "four", title: "4" },
    { cName: "five", title: "5" },
    { cName: "six", title: "6" },
    { cName: "add", title: "+" },
    { cName: "one", title: "1" },
    { cName: "two", title: "2" },
    { cName: "three", title: "3" },
    { cName: "equal", title: "=" },
    { cName: "zero", title: "0" },
    { cName: "decimal", title: "." }
  ]

  const calcBtnInfo = calculatorBtns.map(btn =>
    <ButtonsComponent btnClass={btn.cName} btnTitle={btn.title} />)

  return (
    <div className='calc-container'>
      <div className="display grid-item">0123456789</div>
      {calcBtnInfo}
    </div>
  )
}

export default CalculatorContainer;