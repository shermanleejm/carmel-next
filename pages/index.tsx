import Layout from '../components/layout';
import CardWithBlurp from '../components/card/CardWithBlurp';
import worship from 'public/images/worship.jpg';
import axios from 'axios';
import { Articles } from '@prisma/client';
import { removeTags } from '../components/Helpers';
import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import CardWithShadow from '../components/card/CardWithShadow';

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
  const [articles, setArticles] = useState([] as Articles[]);

  useEffect(() => {
    axios.get('/api/articles').then((res) => setArticles(res.data.data));
  }, []);

  return (
    <Layout
      title="We Bring Generations Together to Love GOD and to Love People"
      backgroundImage={worship}
    >
      <div style={{ margin: '10% 10%' }}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h3">Upcoming Events</Typography>
        </div>
        <br />
        <Grid
          container
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          spacing={3}
        >
          {articles.map((article, index) => (
            <Grid item key={index} xs={12} md={4}>
              <CardWithBlurp title={article.title} blurp={removeTags(article.content)} />
            </Grid>
          ))}
        </Grid>

        <div style={{ textAlign: 'center' }}>
          <Typography variant="h3">Stories of Life</Typography>
        </div>
        <Grid
          container
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          spacing={3}
        >
          {articles.map((article, index) => (
            <Grid item key={index} xs={12} md={4}>
              <CardWithShadow title={article.title} blurp={removeTags(article.content)} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
