import { Articles } from '@prisma/client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';

export default function Test() {
  const [articles, setArticles] = useState([] as Articles[]);

  useEffect(() => {
    axios.get('/api/articles').then((res) => setArticles(res.data.data));
  }, []);

  return <Carousel articles={articles} />;
}
