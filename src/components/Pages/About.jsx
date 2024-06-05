import Features from "../Pages/Home/Features";
import styles from "./About.module.css";
function About() {
  const cards = [
    {
      icon: "https://i.ibb.co/VLwrBkh/market.png",
      alt: "market image",
      number: "10.5k",
      content: "Sellers active on our site",
    },
    {
      icon: "https://i.ibb.co/26CF33q/usd-coin.png",
      alt: "usd icon",
      number: "33k",
      content: "Monthly Product Sales",
    },
    {
      icon: "https://i.ibb.co/wJGv0Q3/book.png",
      alt: "book-bag",
      number: "45.5k",
      content: "Customers active on our site",
    },
    {
      icon: "https://i.ibb.co/w4CLfzC/dollars-bag.png",
      alt: "dollars-bag",
      number: "25k",
      content: "Annual gross sale on our site",
    },
  ];
  const workers = [
    {
      src: "https://i.ibb.co/zPDHG93/Person2-CF1-Wirfj.png",
      name: "Tom Cruise",
      job: "Founder & Chairman",
    },
    {
      src: "https://i.ibb.co/Wc81jcM/Person1-CQy-WLm-MS.png",
      name: "Emma Watson",
      job: "Managing Director",
    },
    {
      src: "https://i.ibb.co/Wc81jcM/Person1-CQy-WLm-MS.png",
      name: "Will Smith",
      job: "Product Designer",
    },
  ];
  const icons = [
    {
      icon: "https://i.ibb.co/6bqXYwz/twitter.png",
      alt: "twitter-icon",
    },
    {
      icon: "https://i.ibb.co/5GmCQ5t/instagram.png",
      alt: "instgram-icon",
    },
    {
      icon: "https://i.ibb.co/MnvD9qj/linkedin-logo.png",
      alt: "linkedin-icon",
    },
  ];
  return (
    <section className={styles.about}>
      <div className={styles.ourStory}>
        <h2>Our Story</h2>
        <p>
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, <br />
          <br />
          Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
          customers across the region. Exclusive has more than 1 Million
          products to offer, growing at a very fast. Exclusive offers a diverse
          assotment in categories ranging from consumer.
        </p>
      </div>
      <div className={styles.aboutCards}>
        {cards.map((card, index) => (
          <div key={index} className={styles.cardBox}>
            <img src={card.icon} alt={card.alt} />
            <p className={styles.cardNumber}>{card.number}</p>
            <p className={styles.cardContent}>{card.content}</p>
          </div>
        ))}
      </div>

      <div className={styles.aboutImages}>
        {workers.map((worker, index) => (
          <div key={index} className={styles.workersBox}>
            <img src={worker.src} alt={worker.name} />
            <div className={styles.description}>
              <h4>{worker.name}</h4>
              <p>{worker.job}</p>
              <ul>
                {icons.map((icon, index) => (
                  <li key={index}>
                    <img src={icon.icon} alt={icon.alt} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <ul className={styles.bullet}>
        <li></li>
        <li></li>
        <li className={styles.activeBullet}></li>
        <li></li>
        <li></li>
      </ul>
      <Features />
    </section>
  );
}
export default About;
