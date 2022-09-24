import Layout from '../components/layout';
import CardWithBlurp from '../components/card/CardWithBlurp';
import worship from 'public/images/worship.jpg';

export type PagesType = {
  title: string;
  link: string;
};

// TODO: persist this for easy changing
export const Pages: PagesType[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Our Beliefs',
    link: '/about',
  },
  {
    title: 'Livestream',
    link: '/livestream',
  },
  {
    title: "I'm New",
    link: '/services',
  },
  {
    title: 'Courses',
    link: '/events',
  },
];

export default function Home() {
  return (
    <Layout title="">
      <div>
        <CardWithBlurp
          title="Prayer and Praise"
          datetime="29 Dec 2021, 9pm"
          image={worship}
          blurp="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
      </div>
    </Layout>
  );
}
