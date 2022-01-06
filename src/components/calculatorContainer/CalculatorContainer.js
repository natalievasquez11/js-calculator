import './calculatorContainer.css';

function CalculatorContainer() {
  return (
    <div className='calc-container'>
      <div className="display grid-item-1">display</div>
      <div className="AC grid-item-2"><a href="#">AC</a></div>
      <div className="divide grid-item-3">/</div>
      <div className="multiply grid-item-4">x</div>
      <div className="seven grid-item-5">7</div>
      <div className="eight grid-item-6">8</div>
      <div className="nine grid-item-7">9</div>
      <div className="subtract grid-item-8">-</div>
      <div className="four grid-item-9">4</div>
      <div className="five grid-item-10">5</div>
      <div className="six grid-item-11">6</div>
      <div className="add grid-item-12">+</div>
      <div className="one grid-item-13">1</div>
      <div className="two grid-item-14">2</div>
      <div className="three grid-item-15">3</div>
      <div className="equal grid-item-16">=</div>
      <div className="zero grid-item-17">0</div>
      <div className="decimal grid-item-18">.</div>
    </div>
  )
}

export default CalculatorContainer;