import './Calculator.css';

const Calculator = () => (
  <div className="container">
    <div className="display">0</div>
    <div className="keys">
      <button type="button" className="nosign">AC</button>
      <button type="button" className="nosign">+/-</button>
      <button type="button" className="nosign">%</button>
      <button type="button" className="sign">+</button>
      <button type="button" className="nosign">7</button>
      <button type="button" className="nosign">8</button>
      <button type="button" className="nosign">9</button>
      <button type="button" className="sign">X</button>
      <button type="button" className="nosign">4</button>
      <button type="button" className="nosign">5</button>
      <button type="button" className="nosign">6</button>
      <button type="button" className="sign">-</button>
      <button type="button" className="nosign">1</button>
      <button type="button" className="nosign">2</button>
      <button type="button" className="nosign">3</button>
      <button type="button" className="sign">+</button>
      <button type="button" className="span-2">0</button>
      <button type="button" className="nosign">.</button>
      <button type="button" className="sign">=</button>
    </div>
  </div>
);

export default Calculator;
