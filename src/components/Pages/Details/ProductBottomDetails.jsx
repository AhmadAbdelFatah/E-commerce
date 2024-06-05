import styles from "./ProductBottomDetails.module.css";
import ProductCounter from "./ProductCounter";

function ProductBottomDetails() {
  const features = [
    {
      icon: "https://i.ibb.co/d231QvC/truck.png",
      header: "Free Delivery",
      detail: "Enter your postal code for Delivery Availability",
    },
    {
      icon: "https://i.ibb.co/5GcM5Bx/security.png",
      header: "Return Delivery",
      detail: "Free 30 Days Delivery Returns. Details",
    },
  ];
  return (
    <article className={styles.productBottom}>
      <div className={styles.size}>
        <p>Size:</p>
        <div>
          <span className={styles.sizeNumber}>XS</span>
          <span className={styles.sizeNumber}>S</span>
          <span className={`${styles.sizeNumber} ${styles.sizeActive}`}>M</span>
          <span className={styles.sizeNumber}>L</span>
          <span className={styles.sizeNumber}>XL</span>
        </div>
      </div>
      <ProductCounter />
      <footer className={styles.productDetailsFooter}>
        {features.map((feature, index) => (
          <>
            <div key={index} className={styles.featureBox}>
              <img src={feature.icon} alt={feature.header} loading="lazy" />
              <div>
                <h4>{feature.header}</h4>
                <p>{feature.detail}</p>
              </div>
            </div>
          </>
        ))}
      </footer>
    </article>
  );
}

export default ProductBottomDetails;
