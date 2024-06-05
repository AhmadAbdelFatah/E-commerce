import styles from "./Features.module.css";

function Features() {
  const Features = [
    {
      src: "https://i.ibb.co/d231QvC/truck.png",
      header: "FREE AND FAST DELIVERY",
      details: "Free delivery for all orders over $140",
    },
    {
      src: "https://i.ibb.co/BcnDnb6/headphones.png",
      header: "24/7 CUSTOMER SERVICE",
      details: "Friendly 24/7 customer support",
    },
    {
      src: "https://i.ibb.co/5GcM5Bx/security.png",
      header: "MONEY BACK GUARANTEE",
      details: "We return money within 30 days",
    },
  ];
  return (
    <section>
      {Features.map((feature, index) => (
        <div key={index} className={styles.featuresBox}>
          <img src={feature.src} alt={feature.header} loading="lazy" />
          <h4>{feature.header}</h4>
          <p>{feature.details}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
