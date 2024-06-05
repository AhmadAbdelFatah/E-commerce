import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';
import * as commonStyles from "../common/Common.module.css";

function ErrorPage(){
return(
  <section className={styles.error}>
    <h2>Error 404 Not Found</h2>
    <p>You viewed page not found.<br/>you may go home page.</p>
   <button className={commonStyles.viewAll}> <Link to="/">Back to home page</Link></button>
    </section>
);
}

export default ErrorPage;