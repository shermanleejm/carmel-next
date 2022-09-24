import Link from 'next/link';
import { Button } from '@mui/material';
import styles from 'styles/components/buttons.module.css';
import styled from '@emotion/styled';

type OutlinedButtonProps = {
  children: string; // button text
  href?: string;
  size?: 'large' | 'small' | 'medium';
  // color?: string; // defaults to white and #f19e04 when hover
};

const OutlinedButton = ({ children, href, size }: OutlinedButtonProps) => {
  const CustomButton = styled(Button)({
    color: 'white',
    borderColor: 'white',
    textTransform: 'uppercase',
    '&:hover': {
      color: '#8d0101',
      backgroundColor: '#fff',
      borderColor: 'white',
    },
  });

  return (
    <Link href={href ?? ''}>
      <CustomButton variant="outlined" size={size ?? 'medium'}>
        {children}
      </CustomButton>
    </Link>
  );
};

export default OutlinedButton;
