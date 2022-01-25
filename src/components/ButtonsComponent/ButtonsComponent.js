import './buttonComponents.css';

function ButtonsComponent({ btnClass, btnTitle }) {
  return (
    <div className={`grid-item ${btnClass}`}>
      <a href="#">{btnTitle}</a>
    </div>
  )
}

export default ButtonsComponent;