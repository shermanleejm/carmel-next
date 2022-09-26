import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import MenuBar from './MenuBar';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, FormControl, FormHelperText, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { Articles } from '@prisma/client';

type RichTextProps = {
  setPreview: Dispatch<SetStateAction<string>>;
  preview: string;
  article: Articles;
  width?: string | number;
  submit: () => void;
};

export default function RichText({
  width = 500,
  setPreview,
  preview,
  article,
  submit,
}: RichTextProps) {
  const [title, setTitle] = useState(article.title ?? '');
  const [errorTitle, setErrorTitle] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: preview,
    onUpdate: ({ editor }) => {
      setPreview(editor.getHTML());
    },
  });

  const handleSubmit = () => {
    if (title === '') {
      setErrorTitle(true);
      return;
    }

    // Save to DB
    axios
      .post('/api/articles', { content: preview, title: title, id: article.id })
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => submit());
  };

  return (
    <div
      style={{
        width: width,
        margin: '20px',
      }}
    >
      <FormControl>
        <TextField
          sx={{ width: width }}
          variant="outlined"
          placeholder="Title"
          value={title}
          error={errorTitle}
          onFocus={() => setErrorTitle(false)}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setErrorTitle(false);
            setTitle(event.target.value);
          }}
        />
        {errorTitle && (
          <FormHelperText style={{ color: 'red' }}>Please provide a title</FormHelperText>
        )}
      </FormControl>
      <Grid container direction={'column'}>
        <Grid item></Grid>

        <Grid item>
          <div style={{ border: '1px solid grey', borderRadius: '5px' }}>
            <MenuBar editor={editor} />
          </div>
          <div style={{ border: '1px solid grey', borderRadius: '5px' }}>
            <EditorContent editor={editor} />
          </div>
        </Grid>

        <Grid item>
          <Button onClick={handleSubmit}>submit</Button>
        </Grid>
      </Grid>
    </div>
  );
}
