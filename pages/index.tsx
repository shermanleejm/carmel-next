import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import CardWithBlurp from '../components/card/CardWithBlurp';
import worship from 'public/images/worship.jpg';

export default function Home() {
  return (
    <Layout>
      <div>
        <CardWithBlurp
          title="Prayer and Praise"
          datetime="29 Dec 2021, 9pm"
          image={worship}
          blurp="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </Layout>
  );
}
