import CountDownTimer from '../../Pages/CountDownTimer';
import styles from './LimitedTimeProduct.module.css';

function LimitedTimeProduct(){
return (
  <section className={styles.limitedTimeProduct}>
    <img src="https://i.ibb.co/zr8Sdxs/JBL-BOOMBOX.png" alt="JBL-BOOMBOX" border="0" loading="lazy"/>
    <div className={styles.limitedProductBox}>
      <p className={styles.label}>Categories</p>
      <p className={styles.content}>Enhance Your Listening Experience</p>
      <CountDownTimer type="limited" className={styles.customCountDown } customTime={styles.customTimeStyle} customLabel={styles.customLabelStyle}/>
      <button>Buy Now!</button>
    </div>
  </section>
);
}

export default LimitedTimeProduct;