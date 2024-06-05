import styles from './Contact.module.css';
import * as commonStyles from '../common/Common.module.css'
function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContent}>
        <div className={styles.contactBox}>
          <div className={styles.contactHeader}>
            <img src="https://i.ibb.co/g6xv8Xm/phone.png" alt="phone" loading="lazy"/>
            <h3>Call To Us</h3>
          </div>
          <p>We are available 24/7, 7 days a week. Phone: +8801611112222</p>
        </div>
        <div className={styles.contactBox}>
          <div className={styles.contactHeader}>
          <img src="https://i.ibb.co/mTFpcXY/circle.png" alt="contact-message" loading="lazy" />
            <h3>Write To Us</h3>
          </div>
          <p>
            Fill out our form and we will contact you within 24 hours. Emails:
            customer@exclusive.com Emails: support@exclusive.com
          </p>
        </div>
      </div>
      <form action="">
        <input id="name" type="text" placeholder="Your Name"/>
        <label htmlFor="name"></label>
        <input id="email" type="email" placeholder="Your Email"/>
        <label htmlFor="email"></label>
        <input id="phone" type="tel" placeholder="Your Phone"/>
        <label htmlFor="phone"></label>
<textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" ></textarea>
<button className={commonStyles.viewAll}>Send Message</button>
      </form>
    </section>
  );
}
export default Contact;
