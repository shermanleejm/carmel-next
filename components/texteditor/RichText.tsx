import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import MenuBar from './MenuBar';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, FormControl, FormHelperText, Grid, TextField } from '@mui/material';
import axios from 'axios';

type RichTextProps = {
  id?: number;
  width?: string | number;
  setPreview: Dispatch<SetStateAction<string>>;
};

export default function RichText({ width = 500, setPreview, id }: RichTextProps) {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: '<p>Create your new post here!</p>',
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
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
      .post('/api/article', { content: content, title: title, id: id })
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
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
