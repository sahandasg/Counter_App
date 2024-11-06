import React from "react";
import "./CustomCounter.css"

export default function CustomCounter({counter, onIncrement, onDecrement, onReset}) {
  return (
    <div className="container">
      <h1 id="num">{counter}</h1>
      <div className="btns">
        <button className="dec" onClick={onDecrement}>
          <i className="fas fa-minus"></i>
        </button>
        <button className="reset" onClick={onReset}>
          <i className="fas fa-redo"></i>
        </button>
        <button className="inc" onClick={onIncrement}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
}
