import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../itemContext";



function Navbar() {
  //custom hook
  const { item, total, clear, toggle } = useValue();
  // const value = useContext(itemContext);

  return (
    <div className={styles.container}>
      <h1>Shopping Cart</h1>   
      <h3>Total : &#x20B9; {total}</h3>
      <h3>Items: {item}</h3>
      <div className={styles.buttonWrapper}>
      <button className={styles.button} onClick={toggle}>Cart</button>
      <button className={styles.button} onClick={clear}>Reset</button>
      
      </div>
    </div>
  );
}

export default Navbar;
