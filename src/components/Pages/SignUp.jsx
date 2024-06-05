import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';
import * as commonStyles from '../common/Common.module.css';


function SignUp() {
  return (
    <section className={styles.signup}>
      <div>
        <h2>Create an account</h2>
        <p>Enter your details below</p>
      </div>
      <form action="">
        <input id="name" type="text" placeholder="Name"/>
          <label htmlFor="name"></label>
        <input id="email" type="email" placeholder="Email or Phone Number"/>
        <label htmlFor="email"></label>
        <input id="password" type="password" placeholder="Password"/>
        <label htmlFor="password"></label>
        <button className={`${commonStyles.viewAll} ${styles.createButton}`}>Create Account</button>
        <button className={`${commonStyles.viewAll} ${styles.googleSignup}`}>
        <img src="https://i.ibb.co/X7LHKcs/google-symbol.png" alt="google-symbol" border="0"/>
          Sign up with Google
        </button>

      </form>
      <p className={styles.haveAccount}>Already have  Account? <Link to="/login">Log in</Link> </p>
    </section>
  );
}
export default SignUp;
