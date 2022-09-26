import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import NextLink from 'next/link';

type UnderlineButtonProps = {
  link: string;
  children: JSX.Element | string;
  isUnderlined?: boolean;
  inverted?: boolean;
};

const UnderlineButton = ({
  link,
  children,
  isUnderlined,
  inverted,
}: UnderlineButtonProps) => {
  const CustomTypography = styled(Typography)({
    display: 'inline-block',
    position: 'relative',
    color: inverted ? 'black' : 'white',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: '1em',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      transform: isUnderlined ? 'scaleX(1)' : 'scaleX(0)',
      height: '4px',
      bottom: '-10px',
      left: '0',
      backgroundColor: '#f19e04',
      transition: 'transform 0.25s ease-in-out',
    },
    '&:hover:after': {
      transform: isUnderlined ? '""' : 'scaleX(1)',
    },
  });

  return (
    <NextLink href={link} target={link[0] === '/' ? '_self' : '_blank'}>
      <CustomTypography>{children}</CustomTypography>
    </NextLink>
  );
};

export default UnderlineButton;
