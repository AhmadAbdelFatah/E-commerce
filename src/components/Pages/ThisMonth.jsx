import * as commonStyles from '../common/Common.module.css';
import ProductList from './ProductList';
const products = [
  { 
    name: 'PlayStation 5', 
    price: '$1200',
    secondaryPrice:'$200',
    rating: 5,
    viewers:'(88)',
    discount:'NEW',
    src:'https://i.ibb.co/bBkZjtq/playstation.png',

  },
  { 
    name: 'AK-900 Wired Keyboard', 
    price: '$960',
    secondaryPrice:'$1160',
    rating: 3,
    viewers:'(77)',
    discount:'40%',
    src:"https://i.ibb.co/ykcB5xF/keyboard.png" 
  },
  { 
    name: 'IPS LCD Gaming Monitor', 
    price: '$370',
    secondaryPrice:'$400',
    rating: 5, 
    viewers:'(55)',
    discount:'NEW',
    src:"https://i.ibb.co/XSHfSRp/tv.png",
  },
  { 
    name: 'S-Series Comfort Chair', 
    price: '$375', 
    secondaryPrice:'$400',
    rating: 3,
    viewers:'(48)',
    discount:'10%',
     src:"https://i.ibb.co/b7XBTzC/chair.png",
  },
  { 
    name: 'Small Bookshelf', 
    price: '$360', 
    secondaryPrice:'$500',
    rating: 3.7, 
    viewers:'(60)',
    discount:'-32%',
     src:"https://i.ibb.co/Q8skZbd/bookself.png",
  },
]


function ThisMonth(){
  return(
    <section>
      <div>
        <p className={commonStyles.mainName}>This Month</p>
        <p className={commonStyles.secondName}>
          Best Selling Products
        </p>
      </div>
      <ProductList products={products}/>
    </section>
  );
}
export default ThisMonth;