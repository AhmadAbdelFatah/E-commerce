import Categories from '../Pages/Categories';
import LimitedTimeProduct from '../Pages/Home/LimitedTimeProduct';
import OurProducts from '../Pages/Home/OurProducts';
import ThisMonth from '../Pages/ThisMonth';
import TodayProducts from '../Pages/TodayProducts';

function Products() {
  return (
    <>
      <TodayProducts />
      <Categories/>
      <ThisMonth/>
      <LimitedTimeProduct/>
      <OurProducts/>
    </>
  );
}
export default Products;
