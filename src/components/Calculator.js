import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const initialState = {
    total: 0,
    next: '',
    operation: '',
  };

  // Declaring the useState

  const [state, setState] = useState(initialState);

  // Array destructuring

  const { total, operation, next } = state;

  // This is the click function
  const onClickHandler = (event) => {
    const TargetValue = event.target.value;
    const updateState = calculate(state, TargetValue);
    setState(updateState);
  };

  return (
    <div className="container">
      <div className="display">
        {total}
        {' '}
        {operation}
        {' '}
        {next}
        {' '}
      </div>
      <div className="keys">
        <button onClick={onClickHandler} type="button" value="AC" className="nosign">AC</button>
        <button onClick={onClickHandler} type="button" value="+/-" className="nosign">+/-</button>
        <button onClick={onClickHandler} type="button" value="%" className="nosign">%</button>
        <button onClick={onClickHandler} type="button" value="+" className="sign">+</button>
        <button onClick={onClickHandler} type="button" value="7" className="nosign">7</button>
        <button onClick={onClickHandler} type="button" value="8" className="nosign">8</button>
        <button onClick={onClickHandler} type="button" value="9" className="nosign">9</button>
        <button onClick={onClickHandler} type="button" value="x" className="sign">X</button>
        <button onClick={onClickHandler} type="button" value="4" className="nosign">4</button>
        <button onClick={onClickHandler} type="button" value="5" className="nosign">5</button>
        <button onClick={onClickHandler} type="button" value="6" className="nosign">6</button>
        <button onClick={onClickHandler} type="button" value="-" className="sign">-</button>
        <button onClick={onClickHandler} type="button" value="1" className="nosign">1</button>
        <button onClick={onClickHandler} type="button" value="2" className="nosign">2</button>
        <button onClick={onClickHandler} type="button" value="3" className="nosign">3</button>
        <button onClick={onClickHandler} type="button" value="+" className="sign">+</button>
        <button onClick={onClickHandler} type="button" value="0" className="span-2">0</button>
        <button onClick={onClickHandler} type="button" value="." className="nosign">.</button>
        <button onClick={onClickHandler} type="button" value="=" className="sign">=</button>
      </div>
    </div>
  );
};

export default Calculator;
