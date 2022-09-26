import { Grid } from '@mui/material';
import { useState } from 'react';
import RichText from './RichText';
import parser from 'html-react-parser';

export default function NewPost() {
  const [preview, setPreview] = useState('');

  return (
    <Grid container direction={'row'}>
      <Grid item>
        <RichText setPreview={setPreview} width="45vw" />
      </Grid>

      <Grid item>
        <div className="ProseMirror">{parser(preview)}</div>
      </Grid>
    </Grid>
  );
}
