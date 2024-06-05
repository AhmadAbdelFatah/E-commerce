import styles from "./Review.module.css";
function Review({ rating, viewers }) {
  return (
    <div className={styles.review}>
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`${styles.star} ${
              i < rating ? styles.gold : styles.gray
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <p className={styles.reviewNumber}>{viewers}</p>
    </div>
  );
}
export default Review;
