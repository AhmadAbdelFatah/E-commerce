import React from 'react';
import * as commonStyles from '../../common/Common.module.css';
import styles from './Featured.module.css';
import Features from '../../Pages/Home/Features';

function Featured() {
  const products = [
    {
      name: 'PlayStation 5',
      content: 'Black and White version of the PS5. Coming out on sale',
      src: 'https://i.ibb.co/bBkZjtq/playstation.png',
    },
    {
      name: "Women's Collections",
      content: 'Featured woman collections. that give you another vibe',
      src: 'https://i.ibb.co/cvY0vyP/women-Collections.png',
    },
    {
      name: 'Speakers',
      content: 'Amazon wireless speakers.',
      src: 'https://i.ibb.co/WFSLHqj/speakers.png',
    },
    {
      name: 'Perfume',
      content: 'GUCCI INTENSE OUD EDP.',
      src: 'https://i.ibb.co/7gQVCQh/perfume.png',
    },
  ];

  return (
    <section>
      <div>
        <p className={commonStyles.mainName}>Featured</p>
        <p className={commonStyles.secondName}>New Arrival</p>
        <div className={styles.featuredList}>
          {products.map((product, index) => (
            <div key={index} className={styles.featureItem}>
              <img src={product.src} alt={product.name} loading="lazy"/>
              <div className={styles.productContent}>
                <h2>{product.name}</h2>
                {product.content.split('.').map((sentence, i) => (
                  <p key={i}>{sentence.trim()}</p>
                ))}
                <a className={styles.shop} href="#">Shop Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Features/>
    </section>
  );
}

export default Featured;