import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({onButtobClick}) =>{
  const buttonNames = [
    '7', '8', '9', '+', 
    '4', '5', '6', '-', 
    '1', '2', '3', '*', 
    '0', '.', 'Back', '/', 
      
    'sin', 'cos', 'tan', 'n!',
    'sin⁻¹', 'cos⁻¹', 'tan⁻¹',
    'x²', 'x³', '√x', 'log',
    'ln','C', 'Ans'
];
      

    return (
        <div className={styles.buttonsContainer}>
            {buttonNames.map((buttonname,index) => <button className={styles.button} key={index} onClick={()=>onButtobClick(buttonname)} >{buttonname}  </button> )}

      </div>

    );
};
export default ButtonsContainer;