import React from 'react';
import * as commonStyles from '../common/Common.module.css';
import CountDownTimer from './CountDownTimer';
import AllProducts from '../common/AllProducts';
import { Link } from 'react-router-dom';

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
}

function TodayProducts() {
  return (
    <section>
      <div>
        <p className={commonStyles.mainName}>Today's</p>
        <p className={commonStyles.secondName}>Flash Sales</p>
        <CountDownTimer type="Today"/>
      </div>
      <AllProducts type="Today" />
      
      <button className={commonStyles.viewAll}>
        <Link to="/products" onClick={scrollToTop}>
          View All Products
        </Link>
      </button>
    </section>
  );
}

export default TodayProducts;