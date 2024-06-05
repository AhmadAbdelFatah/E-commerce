import { useContext } from "react";
import ProductList from "../Pages/ProductList";
import { ProductsContext } from "../../ProductsContext";

function AllProducts({ type, display }) {
  const { products } = useContext(ProductsContext);

  let productsToShow = [];

  if (type === "Today") {
    productsToShow = products.slice(0, 10);
  } else if (type === "ourProducts") {
    productsToShow = products.slice(10);
    if (display === "vertical") {
      return (
        <>
          <ProductList products={productsToShow} type="vertical" />
        </>
      );
    }
  } else if (type === "all") {
    productsToShow = products;
    if (display === "vertical") {
      return <ProductList products={productsToShow} type="vertical" />;
    }
  }

  return <ProductList products={productsToShow} />;
}

export default AllProducts;
