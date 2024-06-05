import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Pages/Footer/Footer';
import styles from './LandingPage.module.css';

function LandingPage() {
  return (
      <div className={styles.pageWrapper}>
        <Header />
        <div className={styles.content}><Outlet/></div>
        <Footer />
      </div>
  );
}
export default LandingPage;
