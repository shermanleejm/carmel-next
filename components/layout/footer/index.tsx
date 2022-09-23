import styles from 'styles/layout/footer.module.css';
import Banner from './Banner';
import Copyright from './Copyright';
import Links from './LInks';

export default function Footer() {
  return (
    <div>
      <Banner />

      <Links />

      <Copyright />
    </div>
  );
}
