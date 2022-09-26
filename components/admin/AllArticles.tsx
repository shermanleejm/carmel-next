import axios from 'axios';
import { useEffect, useState } from 'react';
import { Articles } from '@prisma/client';
import CardWithBlurp from '../card/CardWithBlurp';
import { removeTags } from '../Helpers';
import { Button, CircularProgress, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
    axios
      .get(`/api/articles${isBin ? '/bin' : ''}`, { params: { bin: true } })
      .then((res) => {
        setArticles(res.data.data);
      });
  }, [isLoading, isBin]);

  const handleDelete = (id: number) => {
    setIsLoading(true);
    axios
      .delete(`/api/articles${isBin ? '/bin' : ''}`, { data: { id } })
      .then((res) => setIsLoading(false));
  };

  const handleRestore = (id: number) => {
    setIsLoading(true);
    axios.post(`/api/articles/bin`, { id }).then((res) => setIsLoading(false));
  };

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div>
      <Grid container spacing={1}>
        {articles.map((art, index) => {
          return (
            <Grid item key={index}>
              <Grid container direction={'column'}>
                <Grid item xs={12}>
                  <CardWithBlurp title={art.title} blurp={removeTags(art.content)} />
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => handleDelete(art.id)}
                    variant="contained"
                    startIcon={<DeleteIcon />}
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
