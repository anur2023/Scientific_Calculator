import styles from "./Display.module.css";

const Display = ({Displaycalval}) =>{
    return (
        <input type="text" className={styles.display} value={Displaycalval} readOnly />
    );
};
export default Display;