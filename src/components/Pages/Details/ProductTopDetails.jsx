import Review from "../../common/Review";
import styles from "./ProductTopDetails.module.css";
function ProductTopDetails({ name, rating, viewers, price, details }) {
  return (
    <article className={styles.productTop}>
      <header>
        <h3>{name}</h3>
      </header>
      <div className={styles.stock}>
        <Review rating={rating} viewers={viewers + " Review"} />
        <span> | </span>
        <p className={styles.stockLabel}>In Stock</p>
      </div>
      <footer>
        <span className={styles.price}>{price}</span>
        <p className={styles.productDetails}>{details}</p>
      </footer>
    </article>
  );
}

export default ProductTopDetails;
