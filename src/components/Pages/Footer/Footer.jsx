import styles from './Footer.module.css';
function Footer() {
  return (
    <section className={styles.footer}>
      <div>
        <h4>Exclusive</h4>
        <p>Subscribe</p>
        <p>
          Get 10% off
          <br />
          on your first order
        </p>
        <div className={styles.inputEmail}>
          <input placeholder="Enter your email" />
          <img />
        </div>
      </div>
      <div>
        <h4>Support</h4>
        <p>
          111 Bijoy,Dhaka,
          <br />
          DH 1515 Bangladesh
        </p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div>
        <h4>Account</h4>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wish list</p>
        <p>Shop</p>
      </div>
      <div>
        <h4>Quick Link</h4>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div>
        <h4>Download App</h4>
        <p className={styles.lightP}>Save $3 With App New User Only</p>
        <div className={styles.wrapperLinks}>
          <img
            className={styles.qr}
            src="https://i.ibb.co/47sF8sf/qr-code.png"
            alt="qr-code"
            border="0"
          />
          <div className={styles.downloadLinks}>
            <div className={styles.links}>
              <img
                src="https://i.ibb.co/qY79MWg/google-play.png"
                alt="google-play"
                border="0"
              />
              <div className={styles.linksContent}>
                <p>GET IT ON</p>
                <h5>Google Play</h5>
              </div>
            </div>

            <div className={styles.links}>
              <img
                src="https://i.ibb.co/xXThyCH/apple-128.png"
                alt="apple-128"
                border="0"
              />
              <div className={styles.linksContent}>
                <p>Download on the</p>
                <h5>App Store</h5>
              </div>
            </div>
          </div>
        </div>
        <ul className={styles.socialLinks}>
          <li>
          <img src="https://i.ibb.co/BVSygtL/images.png" alt="facebook" border="0"/>
          </li>
          <li>
          <img src="https://i.ibb.co/BVSygtL/images.png" alt="facebook" border="0"/>
          </li>
          <li>
          <img src="https://i.ibb.co/BVSygtL/images.png" alt="facebook" border="0"/>
          </li>
          <li>
          <img src="https://i.ibb.co/BVSygtL/images.png" alt="facebook" border="0"/>

            </li>
        </ul>
      </div>
    </section>
  );
}
export default Footer;
