import styles from "./App.module.css";
import Display from "./componants/Display";
import ButtonsContainer from "./componants/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calval, setcalval] = useState("");

  const onButtobClick = (buttonText) => {
    if (buttonText === 'C') {
      setcalval("");
    } else if (buttonText === 'Ans') {
      try {
        const result = eval(calval);
        if (!isNaN(result)) {
          setcalval("Ans:- " + result);
        } else {
          setcalval("Error");
        }
      } catch (error) {
        setcalval("Error");
      }
    } else if (buttonText === 'Back') {
      const newDisplayValue = calval.slice(0, -1);
      setcalval(newDisplayValue);
    } else if (buttonText === 'log') {
      const logValue = Math.log10(parseFloat(calval));
      setcalval(`log(${calval}) = ${logValue}`);
    } else if (buttonText === 'ln') {
      const lnValue = Math.log(parseFloat(calval));
      setcalval(`ln(${calval}) = ${lnValue}`);
    } else if (buttonText === 'sin') {
      const trigsin = Math.sin(calval * (Math.PI / 180));
      setcalval(`sin(${calval}) = ${trigsin}`);
    } else if (buttonText === 'cos') {
      const trigsin = Math.cos(calval * (Math.PI / 180));
      setcalval(`cos(${calval}) = ${trigsin}`);
    } else if (buttonText === 'tan') {
      const trigsin = Math.tan(calval * (Math.PI / 180));
      setcalval(`tan(${calval}) = ${trigsin}`);
    } else if (buttonText === 'sin⁻¹') {
      const angleInDegrees = parseFloat(calval);
      const angles = Math.asin(angleInDegrees);
      if (!isNaN(angles)) {
        const resultInDegrees = (angles * 180) / Math.PI;
        setcalval(`sin⁻¹(${calval}) = ${resultInDegrees}`);
      } else {
        setcalval('Error');
      }
    } else if (buttonText === 'cos⁻¹') {
      const angleInDegrees = parseFloat(calval);
      const angles = Math.acos(angleInDegrees);
      if (!isNaN(angles)) {
        const resultInDegrees = (angles * 180) / Math.PI;
        setcalval(`'cos⁻¹'(${calval}) = ${resultInDegrees}`);
      } else {
        setcalval('Error');
      }
    } else if (buttonText === 'tan⁻¹') {
      const angleInDegrees = parseFloat(calval);
      const angles = Math.atan(angleInDegrees);
      if (!isNaN(angles)) {
        const resultInDegrees = (angles * 180) / Math.PI;
        setcalval(`tan⁻¹(${calval}) = ${resultInDegrees}`);
      } else {
        setcalval('Error');
      }
    } else if (buttonText === 'x²') {
      const squarev = parseFloat(calval * calval);
      setcalval("Ans : " + squarev);
    } else if (buttonText === 'x³') {
      const cubev = parseFloat(calval * calval * calval);
      setcalval("Ans : " + cubev);
    } else if (buttonText === '√x') {
      const sqroot = Math.sqrt(parseFloat(calval));
      setcalval("Ans : " + sqroot);
    } else if (buttonText === 'n!') {
      let val = 1;
      for (let index = 1; index <= parseFloat(calval); index++) {
        val = val * index;
      }
      setcalval("Ans:- " + val);
    } else {
      const newDisplayValue = calval + buttonText;
      setcalval(newDisplayValue);
    }
  };


  return (
    <div className={styles.calculator}>
      <Display Displaycalval={calval}></Display>
      <ButtonsContainer onButtobClick={onButtobClick}></ButtonsContainer>
    </div>
  );
}

export default App;
