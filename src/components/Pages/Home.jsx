import Products from './Products';
import styles from './Home.module.css';
import Featured from '../Pages/Home/Featured';
function Home() {
  return (
    <>
      <img
        className={styles.offer}
        src="https://i.ibb.co/0mfhvqB/phone.png"
        loading="lazy"
        alt="phone"
        border="0"
      />
      <div className={styles.voucher}>
        <div className={styles.mobile}>
          <img
            className={styles['apple-icon']}
            src="https://i.ibb.co/xXThyCH/apple-128.png"
            alt="apple-128"
            border="0"
          />
          <p>iPhone 14 Series</p>
        </div>
        <div>
          <p>Up to 10% Off Voucher</p>
          <a href='#' target="_blank">Shop Now </a>
        </div>
      </div>
      <Products/>
      <Featured/>
    </>
  );
}

export default Home;