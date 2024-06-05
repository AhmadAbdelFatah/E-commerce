import styles from './HeaderBottom.module.css'
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Icons from './Icons';

function HeaderBottom(){
return(
  <div className={styles.header__bottom}>
    <Navigation/>
    <SearchBar/>
    <Icons/>
  </div>

);
}

export default HeaderBottom;