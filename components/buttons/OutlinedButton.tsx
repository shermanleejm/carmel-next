import Link from 'next/link';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

type OutlinedButtonProps = {
  children: string; // button text
  href?: string;
  size?: 'large' | 'small' | 'medium';
  inverted?: boolean;
  onClick?: () => void;
  // color?: string; // defaults to white and #f19e04 when hover
};

const OutlinedButton = ({
  children,
  href,
  size,
  inverted = false,
  onClick,
}: OutlinedButtonProps) => {
  const CustomButton = styled(Button)({
    color: inverted ? '#8d0101' : 'white',
    backgroundColor: inverted ? 'white' : '',
    borderColor: inverted ? '#8d0101' : 'white',
    textTransform: 'uppercase',
    '&:hover': {
      color: inverted ? 'white' : '#8d0101',
      backgroundColor: inverted ? '#8d0101' : '#fff',
      borderColor: 'white',
    },
  });

  return (
    <Link href={href ?? ''}>
      <CustomButton variant="outlined" size={size ?? 'medium'} onClick={() => onClick()}>
        {children}
      </CustomButton>
    </Link>
  );
};

export default OutlinedButton;
