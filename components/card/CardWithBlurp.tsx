import styles from 'styles/components/CardWithBlurp.module.css';
import NextImage, { StaticImageData } from 'next/image';
import { Typography } from '@mui/material';

type CardWithBlurpProps = {
  image: StaticImageData;
  title: string;
  datetime?: string;
  blurp: string;
};

const CardWithBlurp = ({ image, title, datetime, blurp }: CardWithBlurpProps) => {
  const PrimaryText = () => {
    return (
      <div className={styles.card_blurp_primary}>
        <Typography variant="subtitle2">{datetime}</Typography>
        <Typography variant="h6">{title}</Typography>
      </div>
    );
  };

  const SecondaryText = () => {
    return (
      <div className={styles.card_blurp_secondary}>
        <Typography variant="body2">
          {blurp.length > 170 ? `${blurp.substring(0, 170 - 4)}...` : blurp}
        </Typography>
      </div>
    );
  };

  return (
    <div className={styles.card_blurp_container}>
      <NextImage
        src={image}
        alt={title}
        layout="responsive"
        objectFit="cover"
        placeholder="blur"
      />
      <div className={styles.overlay}>
        <PrimaryText />
        <SecondaryText />
      </div>
    </div>
  );
};

export default CardWithBlurp;
