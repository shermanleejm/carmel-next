import Layout from '../components/layout';
import CardWithBlurp from '../components/card/CardWithBlurp';
import worship from 'public/images/worship.jpg';
import { removeTags } from '../components/Helpers';
import { useState } from 'react';
import { Typography } from '@mui/material';
import Carousel from '../components/Carousel';

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

export default function Home({ articles }) {
  return (
    <Layout
      title="We Bring Generations Together to Love GOD and to Love People"
      backgroundImage={worship}
    >
      <div style={{ margin: '50px 10%' }}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h3">Upcoming Events</Typography>
        </div>
        <br />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
          }}
        >
          {articles.slice(4, 7).map((article, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CardWithBlurp title={article.title} blurp={removeTags(article.content)} />
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', margin: '50px 0px 20px' }}>
          <Typography variant="h3">Stories of Life</Typography>
        </div>
        <Carousel articles={articles} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const req = await fetch(`${process.env.NEXTAUTH_URL}/api/articles`);
  const articles = (await req.json()).data;
  return {
    props: {
      articles: articles,
    },
  };
}
