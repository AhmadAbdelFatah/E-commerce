import styles from './HeaderTop.module.css';
function HeaderTop() {
  return (
    <div className= {styles.offer}>
      <div className={styles.offer__left}>
      <p>Summer Sale For All Swim Suits And Free Express Delivery --OFF 50%</p>
      <a href="#">ShopNow</a>
      </div>
      <select name="lang" id="lang">
        <option value="english">English</option>
        <option value="arabic">العربية</option>
      </select>
    </div>
  );
}
export default HeaderTop;
