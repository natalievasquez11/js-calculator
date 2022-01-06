import './calculatorContainer.css';

function CalculatorContainer() {
  return (
    <div className='calc-container'>
      <div className="display grid-item"><a href="#">display</a></div>
      <div className="AC grid-item"><a href="#">AC</a></div>
      <div className="divide grid-item"><a href="#">/</a></div>
      <div className="multiply grid-item"><a href="#">x</a></div>
      <div className="seven grid-item"><a href="#">7</a></div>
      <div className="eight grid-item"><a href="#">8</a></div>
      <div className="nine grid-item"><a href="#">9</a></div>
      <div className="subtract grid-item"><a href="#">-</a></div>
      <div className="four grid-item"><a href="#">4</a></div>
      <div className="five grid-item"><a href="#">5</a></div>
      <div className="six grid-item"><a href="#">6</a></div>
      <div className="add grid-item"><a href="#">+</a></div>
      <div className="one grid-item"><a href="#">1</a></div>
      <div className="two grid-item"><a href="#">2</a></div>
      <div className="three grid-item"><a href="#">3</a></div>
      <div className="equal grid-item"><a href="#">=</a></div>
      <div className="zero grid-item"><a href="#">0</a></div>
      <div className="decimal grid-item"><a href="#">.</a></div>
    </div>
  )
}

export default CalculatorContainer;