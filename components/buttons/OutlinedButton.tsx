import Link from 'next/link';
import { Button } from '@mui/material';
import styles from 'styles/components/buttons.module.css';

type OutlinedButtonProps = {
  children: string; // button text
  href?: string;
  size?: 'large' | 'small' | 'medium';
  // color?: string; // defaults to white and #f19e04 when hover
};

const OutlinedButton = ({ children, href, size }: OutlinedButtonProps) => {
  const isLocalRedirect = href ? href.substring(0, 'http'.length) === 'http' : false;
  return (
    <Link href={href ?? ''}>
      <Button
        variant="outlined"
        size={size ?? 'medium'}
        className={styles['outlined-button']}
      >
        {children}
      </Button>
    </Link>
  );
};

export default OutlinedButton;
