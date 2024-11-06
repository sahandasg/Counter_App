import React from "react";
import "./CustomCounter.css"

export default function CustomCounter() {
  return (
    <div className="container">
      <h1 id="num">0</h1>
      <div className="btns">
        <button className="dec">
          <i className="fas fa-minus"></i>
        </button>
        <button className="reset">
          <i className="fas fa-redo"></i>
        </button>
        <button className="inc">
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
}
