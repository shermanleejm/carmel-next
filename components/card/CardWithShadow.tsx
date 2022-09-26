import styled from '@emotion/styled';
import styles from 'styles/components/CardWithShadow.module.css';
import NextImage, { StaticImageData } from 'next/image';
import placeholder from 'public/images/worship.jpg';
import { Typography } from '@mui/material';
import { truncateText } from '../Helpers';

type CardWithShadowProps = {
  title: string;
  image?: StaticImageData;
  subtitle?: string;
  blurp: string;
};

const CardWithShadow = ({ title, subtitle, blurp, image }: CardWithShadowProps) => {
  const shadowDiv = styled('div')({
    '&:hover': {},
  });

  return (
    <div className={styles.shadow}>
      <NextImage
        src={image ?? placeholder}
        alt={title}
        layout="responsive"
        objectFit="cover"
        placeholder="blur"
      />
      <div className={styles.text_box}>
        <Typography variant="subtitle1">{subtitle ?? 'subtitle'}</Typography>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{truncateText(blurp)}</Typography>
      </div>
    </div>
  );
};

export default CardWithShadow;
