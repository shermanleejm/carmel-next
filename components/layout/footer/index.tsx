import styles from 'styles/layout/footer.module.css';
import Banner from './Banner';
import Copyright from './Copyright';
import Links from './Links';

export default function Footer() {
  return (
    <div>
      <Banner />

      <Links />

      <Copyright />
    </div>
  );
}
