import { Typography } from '@mui/material';
import NextLink from 'next/link';
import styles from 'styles/components/UnderlineButton.module.css';
import { PagesType } from '../../pages';

const UnderlineButton = ({ link, title }: PagesType) => {
  return (
    <NextLink href={link} target={link[0] === '/' ? '_self' : '_blank'}>
      <Typography className={styles.underline_button}>{title}</Typography>
    </NextLink>
  );
};

export default UnderlineButton;
