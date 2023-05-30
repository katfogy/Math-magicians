import ButtonCon from './Buttoncomponents';
import './Calculator.css';

const Calculator = () => (
  <div className="container">
    <div className="display">0</div>
    <div className="keys">
      <ButtonCon name="AC" className="nosign" />
      <ButtonCon name="+/-" className="nosign" />
      <ButtonCon name="%" className="nosign" />
      <ButtonCon name="+" className="sign" />
      <ButtonCon name="7" className="nosign" />
      <ButtonCon name="8" className="nosign" />
      <ButtonCon name="9" className="nosign" />
      <ButtonCon name="x" className="sign" />
      <ButtonCon name="4" className="nosign" />
      <ButtonCon name="5" className="nosign" />
      <ButtonCon name="6" className="nosign" />
      <ButtonCon name="-" className="sign" />
      <ButtonCon name="1" className="nosign" />
      <ButtonCon name="2" className="nosign" />
      <ButtonCon name="3" className="nosign" />
      <ButtonCon name="+" className="sign" />
      <ButtonCon name="0" className="span-2" />
      <ButtonCon name="." />
      <ButtonCon name="=" className="sign" />
    </div>
  </div>
);

export default Calculator;
