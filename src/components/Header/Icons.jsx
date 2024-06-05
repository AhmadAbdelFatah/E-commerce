import styles from "./Icons.module.css";

function Icons() {
  return (
    <div className={styles.icons}>
      <img
        src="https://i.ibb.co/h92hyTG/heart-1.png"
        alt="heart-1"
        border="0"
        loading="lazy"
      />
      <img
        src="https://i.ibb.co/Sy6hjcM/cart.png"
        loading="lazy"
        alt="cart"
        border="0"
      />
    </div>
  );
}
export default Icons;
