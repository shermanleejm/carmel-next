import { Editor } from '@tiptap/react';
import {
  FormatBold,
  FormatItalic,
  StrikethroughS,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  Undo,
  Redo,
  AddLink,
  LinkOff,
} from '@mui/icons-material';
import { Button } from '@mui/material';
import { useCallback } from 'react';

type MenuBarProps = {
  editor: Editor;
};

export default function MenuBar({ editor }: MenuBarProps) {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        variant={editor.isActive('bold') ? 'contained' : 'text'}
        size="small"
      >
        <FormatBold />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        variant={editor.isActive('italic') ? 'contained' : 'text'}
        size="small"
      >
        <FormatItalic />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        variant={editor.isActive('strike') ? 'contained' : 'text'}
        size="small"
      >
        <StrikethroughS />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        variant={editor.isActive('paragraph') ? 'contained' : 'text'}
        size="small"
      >
        body
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        variant={editor.isActive('heading', { level: 2 }) ? 'contained' : 'text'}
        size="small"
      >
        subtitle
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        variant={editor.isActive('heading', { level: 1 }) ? 'contained' : 'text'}
        size="small"
      >
        title
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        variant={editor.isActive('bulletList') ? 'contained' : 'text'}
        size="small"
      >
        <FormatListBulleted />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        variant={editor.isActive('orderedList') ? 'contained' : 'text'}
        size="small"
      >
        <FormatListNumbered />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        variant={editor.isActive('blockquote') ? 'contained' : 'text'}
        size="small"
      >
        <FormatQuote />
      </Button>
      <Button onClick={setLink} variant={editor.isActive('link') ? 'contained' : 'text'}>
        <AddLink />
      </Button>
      <Button
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive('link')}
      >
        <LinkOff />
      </Button>
      <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </Button>
      <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </Button>
      <Button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear formatting
      </Button>
      <Button onClick={() => editor.chain().focus().undo().run()}>
        <Undo />
      </Button>
      <Button onClick={() => editor.chain().focus().redo().run()}>
        <Redo />
      </Button>
    </>
  );
}
