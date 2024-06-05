import * as commonStyles from "../../common/Common.module.css";
import AllProducts from "../../common/AllProducts";
import { Link } from "react-router-dom";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function OurProducts() {
  return (
    <section>
      <div>
        <p className={commonStyles.mainName}>Our Products</p>
        <p className={commonStyles.secondName}>Explore Our Products</p>
      </div>
      <AllProducts display="vertical" type="ourProducts" />
      <button className={commonStyles.viewAll}>
        <Link to="/products" onClick={scrollToTop}>
          View All Products
        </Link>
      </button>
    </section>
  );
}

export default OurProducts;
