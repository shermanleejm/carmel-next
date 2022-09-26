import axios from 'axios';
import { useEffect, useState } from 'react';
import { Articles } from '@prisma/client';
import CardWithBlurp from '../card/CardWithBlurp';
import { removeTags } from '../Helpers';
import { Button, CircularProgress, Grid, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

type AllArticlesProps = {
  isBin?: boolean;
  handleChangeComponent?: (index: number, article?: Articles) => void;
};

export default function AllArticles({
  isBin = false,
  handleChangeComponent,
}: AllArticlesProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    async function getStuff() {
      const url = `/api/articles${isBin ? '/bin' : ''}`;
      const req = await fetch(url);
      const articles = (await req.json()).data;
      setArticles(articles);
    }

    getStuff().catch((err) => console.error(err));
  }, [isBin, isLoading]);

  async function handleDelete(id: number) {
    setIsLoading(true);
    await fetch(`/api/articles${isBin ? '/bin' : ''}/${id}`, {
      method: 'DELETE',
    });
    setIsLoading(false);
  }

  async function handleRestore(id: number) {
    setIsLoading(true);
    await fetch(`/api/articles/bin`, {
      method: 'POST',
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' },
    });
    setIsLoading(false);
  }

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div>
      <Grid container spacing={1}>
        {articles.map((art, index) => {
          return (
            <Grid item key={index} xs={3}>
              <Grid container direction={'row'}>
                <Grid item xs={12}>
                  <CardWithBlurp title={art.title} blurp={removeTags(art.content)} />
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => handleDelete(art.id)}
                    variant="contained"
                    startIcon={<Delete />}
                  >
                    delete {isBin && 'forever'}
                  </Button>
                  {isBin ? (
                    <Button variant="contained" onClick={() => handleRestore(art.id)}>
                      restore
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => handleChangeComponent(0, art)}
                    >
                      edit
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
