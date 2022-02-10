import './buttonComponents.css';

function ButtonsComponent({ btnClass, btnValue, btnId, onButtonClick }) {
  return (
      <button 
        className={`grid-item ${btnClass}`} 
        id={btnId} 
        value={btnValue}
        onClick={(e) => onButtonClick(e)}>{btnValue}</button>
  )
}

export default ButtonsComponent;