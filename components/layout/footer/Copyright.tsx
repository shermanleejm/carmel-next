import styles from '../../../styles/layout/footer.module.css';

const Copyright = () => {
  const COPYRIGHT =
    'Copyright © 2022 Mount Carmel Bible-Presbytherian Church. All rights reserved.';

  return <div className={styles.copyright}>{COPYRIGHT}</div>;
};

export default Copyright;
