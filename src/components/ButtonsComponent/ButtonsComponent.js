import './buttonComponents.css';

function ButtonsComponent({ btnClass, btnTitle, btnId }) {
  return (
    <div className={`grid-item ${btnClass}`} id={btnId}>
      <a href="#">{btnTitle}</a>
    </div>
  )
}

export default ButtonsComponent;