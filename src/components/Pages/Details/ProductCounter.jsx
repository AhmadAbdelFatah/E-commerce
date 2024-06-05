import styles from "./ProductCounter.module.css";
import { useState } from "react";

function ProductCounter() {
  const [counter, setCounter] = useState(2);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <article className={styles.productCounter}>
      <div className={styles.counter}>
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
      </div>
      <button className={styles.buyButton}>Buy Now</button>
      <img
        src="https://i.ibb.co/h92hyTG/heart-1.png"
        alt="heart-1"
        loading="lazy"
      />
    </article>
  );
}

export default ProductCounter;
