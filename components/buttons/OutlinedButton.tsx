import Link from 'next/link';
import { Button } from '@mui/material';
import styles from 'styles/components/buttons.module.css';
import styled from '@emotion/styled';

type OutlinedButtonProps = {
  children: string; // button text
  href?: string;
  size?: 'large' | 'small' | 'medium';
  inverted?: boolean;
  // color?: string; // defaults to white and #f19e04 when hover
};

const OutlinedButton = ({
  children,
  href,
  size,
  inverted = false,
}: OutlinedButtonProps) => {
  const CustomButton = styled(Button)({
    color: inverted ? '#8d0101' : 'white',
    backgroundColor: inverted ? 'white' : '',
    borderColor: 'white',
    textTransform: 'uppercase',
    '&:hover': {
      color: inverted ? 'white' : '#8d0101',
      backgroundColor: inverted ? '' : '#fff',
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
