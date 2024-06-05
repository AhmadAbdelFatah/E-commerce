import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../../ProductsContext";
import styles from "./ProductDetails.module.css";
import ProductTopDetails from "./ProductTopDetails";
import ProductBottomDetails from "./ProductBottomDetails";

function ProductDetails() {
  const { products } = useContext(ProductsContext);
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  return (
    <section className={styles.details}>
      {product ? (
        <>
          <div className={styles.imageWrapper}>
            <img
              className={styles.largImage}
              src={product.src}
              alt={product.name}
            />
            <div className={styles.smallImages}>
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  className={styles.smallImage}
                  src={product.src}
                  alt={product.name}
                />
              ))}
            </div>
          </div>
          <ProductTopDetails
            name={product.name}
            rating={product.rating}
            viewers={product.viewers}
            details={product.details}
          />
          <ProductBottomDetails />
        </>
      ) : (
        <p>Product not found</p>
      )}
    </section>
  );
}

export default ProductDetails;
