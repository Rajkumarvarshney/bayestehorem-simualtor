import React, { useState } from 'react';
import './BayesTheoremSimulator.css';

export default function BayesTheoremSimulator() {
  const [pA, setPA] = useState(0.5);
  const [pBgivenA, setPBgivenA] = useState(0.7);
  const [pBgivenNotA, setPBgivenNotA] = useState(0.2);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const numerator = pBgivenA * pA;
    const denominator = numerator + pBgivenNotA * (1 - pA);
    const posterior = denominator === 0 ? 0 : numerator / denominator;
    setResult(posterior);
  };

  return (
    <div className="simulator-container">
      <div className="glass-card">
        <h1 className="title">🧠 Bayes' Theorem Simulator</h1>

        <label>P(A):</label>
        <input
          type="number"
          step="0.01"
          min="0"
          max="1"
          value={pA}
          onChange={(e) => setPA(parseFloat(e.target.value))}
        />

        <label>P(B | A):</label>
        <input
          type="number"
          step="0.01"
          min="0"
          max="1"
          value={pBgivenA}
          onChange={(e) => setPBgivenA(parseFloat(e.target.value))}
        />

        <label>P(B | ¬A):</label>
        <input
          type="number"
          step="0.01"
          min="0"
          max="1"
          value={pBgivenNotA}
          onChange={(e) => setPBgivenNotA(parseFloat(e.target.value))}
        />

        <button onClick={calculate}>🎯 Calculate P(A | B)</button>

        {result !== null && (
          <div className="result">
            P(A | B) = <span>{result.toFixed(4)}</span>
          </div>
        )}
      </div>
    </div>
  );
}
