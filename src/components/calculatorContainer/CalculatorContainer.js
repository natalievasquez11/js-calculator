import './calculatorContainer.css';

function CalculatorContainer() {
  return (
    <div className='calc-container'>
      <div className="display grid-item">display</div>
      <div className="AC grid-item"><a href="#">AC</a></div>
      <div className="divide grid-item">/</div>
      <div className="multiply grid-item">x</div>
      <div className="seven grid-item">7</div>
      <div className="eight grid-item">8</div>
      <div className="nine grid-item">9</div>
      <div className="subtract grid-item">-</div>
      <div className="four grid-item">4</div>
      <div className="five grid-item">5</div>
      <div className="six grid-item">6</div>
      <div className="add grid-item">+</div>
      <div className="one grid-item">1</div>
      <div className="two grid-item">2</div>
      <div className="three grid-item">3</div>
      <div className="equal grid-item">=</div>
      <div className="zero grid-item">0</div>
      <div className="decimal grid-item">.</div>
    </div>
  )
}

export default CalculatorContainer;