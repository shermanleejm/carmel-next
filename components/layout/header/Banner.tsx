import styles from 'styles/layout/header.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      Join us every sunday for english live stream at&nbsp;
      <span style={{ fontWeight: 400 }}>9am</span>
    </div>
  );
};

export default Banner;
