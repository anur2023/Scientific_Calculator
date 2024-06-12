import React, { useState } from 'react';

const LogarithmCalculator = () => {
  const [number, setNumber] = useState('');
  const [logResult, setLogResult] = useState('');
  const [lnResult, setLnResult] = useState('');

  const calculateLog = () => {
    const logValue = Math.log10(parseFloat(number));
    setLogResult(`log(${number}) = ${logValue}`);
  };

  const calculateLn = () => {
    const lnValue = Math.log(parseFloat(number));
    setLnResult(`ln(${number}) = ${lnValue}`);
  };

  return (
    <div>
      <label>
        Enter a number:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>

      <button onClick={calculateLog}>Calculate log</button>
      <button onClick={calculateLn}>Calculate ln</button>

      {logResult && <p>{logResult}</p>}
      {lnResult && <p>{lnResult}</p>}
    </div>
  );
};

export default LogarithmCalculator;