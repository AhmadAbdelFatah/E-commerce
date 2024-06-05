import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
function LoginPage() {
  return (
    <section className={styles.loginWrapper}>
      <div>
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
      </div>
      <form action="">
        <input
          id="loginEmail"
          type="email"
          placeholder="Email or Phone Number"
        />
        <label htmlFor="loginEmail"></label>
        <input id="loginPassword" type="password" placeholder="Password" />
        <label htmlFor="loginPassword"></label>
      </form>
      <div className={styles.loginFooter}>
        <button className={styles.loginButton}>Login</button>
        <a href="#">Forgot Password?</a>
      </div>
      <div className={styles.createAccount}>
        <p>Don't have an Account?</p>
        <Link to="/signup">Create One</Link>
      </div>
    </section>
  );
}

export default LoginPage;
