import Review from "../common/Review";
import styles from "./ProductList.module.css";
import { Link } from "react-router-dom";

const ProductList = ({ products, type }) => {
  let scrollableListClassName = styles.scrollableList;
  if (type === "vertical") {
    scrollableListClassName = styles.scrollableListWithoutScrollbar;
  }

  return (
    <div className={scrollableListClassName}>
      {products.map((product) => (
        <Link
          key={product.id}
          to={{
            pathname: `/product/${product.id}`,
            state: { product },
          }}
          className={styles.productLink}
        >
          <div className={styles.productContainer}>
            <div className={styles.productBox}>
              <span
                className={
                  product.discount === "NEW"
                    ? styles.newDiscount
                    : styles.discount
                }
              >
                {product.discount}
              </span>
              <img
                className={styles.productImg}
                src={product.src}
                alt={product.name}
                loading="lazy"
              />
              {/* Other product details */}
              <div className={styles.productIcons}>
                <button className={styles.lovedProductsButton}>
                  <img
                    className={styles.lovedProducts}
                    src="https://i.ibb.co/h92hyTG/heart-1.png"
                    alt="loved products"
                    border="0"
                    loading="lazy"
                  />
                </button>
                <div className={styles.visibleWrapper}>
                  <img
                    className={styles.visible}
                    src="https://i.ibb.co/MRSF9Tb/visible.png"
                    alt="visible"
                    border="0"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            {/* Other product details */}
            <div className={styles.productDetails}>
              <p className={styles.productName}>{product.name}</p>
              <div className={styles.price}>
                <p className={styles.productPrice}>{product.price}</p>
                <p className={styles.secondaryPrice}>
                  {product.secondaryPrice}
                </p>
              </div>

              <Review rating={product.rating} viewers={product.viewers} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
