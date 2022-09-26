import { CircularProgress, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import RichText from './RichText';
import parser from 'html-react-parser';
import { Articles } from '@prisma/client';

type NewPostProps = {
  article: Articles;
  handleChangeComponent: (index: number, article: Articles) => void;
};

export default function NewPost({ article, handleChangeComponent }: NewPostProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(article.content);
  const [localArticle, setLocalArticle] = useState(article);

  const submit = () => {
    handleChangeComponent(0, { content: '' } as Articles);
    setIsLoading(true);
  };

  useEffect(() => {
    setPreview(article.content);
    setLocalArticle(article);
    setIsLoading(false);
  }, [article]);

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid container direction={'row'}>
      <Grid item>
        <RichText
          setPreview={setPreview}
          preview={preview}
          article={localArticle}
          width="45vw"
          submit={submit}
        />
      </Grid>
      <Grid item>
        <div className="ProseMirror">{parser(preview)}</div>
      </Grid>
    </Grid>
  );
}
