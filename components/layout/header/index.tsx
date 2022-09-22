import styles from 'styles/layout/header.module.css';

const Header = () => {
  return (
    <div>
      <div className={styles.banner}>
        Join us every sunday for english live stream at&nbsp;
        <span style={{ fontWeight: 400 }}>9am</span>
      </div>
    </div>
  );
};

export default Header;
