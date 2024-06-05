import styles from './Categories.module.css';
import * as commonStyles from '../common/Common.module.css';

function Categories() {
  const CATEGORIES = [
    {
      src: 'https://i.ibb.co/0MR5RFL/smartphone.png"',
      name: 'Phone',
    },
    {
      src: 'https://i.ibb.co/wyzfChX/monitor-1.png',
      name: 'Computers',
    },
    {
      src: 'https://i.ibb.co/pPjBpNY/smart-watch.png',
      name: 'Smart watch',
    },
    {
      src: 'https://i.ibb.co/zRyG69D/camera.png',
      name: 'Camera',
    },
    {
      src: 'https://i.ibb.co/Q9bHNFt/headphone.png',
      name: 'HeadPhones',
    },
    {
      src: 'https://i.ibb.co/vvM6XN0/controller.png',
      name: 'Gaming',
    },
  ];
  return (
    <section>
      <div>
        <p className={commonStyles.mainName}>Categories</p>
        <p className={commonStyles.secondName}>Browse By Category</p>
      </div>
      <div className={styles.categoryWrapper}>
        {CATEGORIES.map((category, index) => (
          <div className={styles.categoryBox}>
            <img src={category.src} loading="lazy" alt={category.name} />
            <p key={index}>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Categories;
