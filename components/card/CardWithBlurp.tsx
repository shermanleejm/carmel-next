import styles from '../../styles/components/CardWithBlurp.module.css';
import NextImage, { StaticImageData } from 'next/image';
import { Typography } from '@mui/material';
import placeholder from 'public/images/worship.jpg';
import { truncateText } from '../Helpers';

type CardWithBlurpProps = {
  title: string;
  image?: StaticImageData;
  subtitle?: string;
  blurp: string;
};

const CardWithBlurp = ({ image, title, subtitle, blurp }: CardWithBlurpProps) => {
  const PrimaryText = () => {
    return (
      <div className={styles.card_blurp_primary}>
        <Typography variant="subtitle2">{subtitle}</Typography>
        <Typography variant="h6">{title}</Typography>
      </div>
    );
  };

  const SecondaryText = () => {
    return (
      <div className={styles.card_blurp_secondary}>
        <Typography variant="body2">{truncateText(blurp)}</Typography>
      </div>
    );
  };

  return (
    <div className={styles.card_blurp_container}>
      <NextImage
        src={image ?? placeholder}
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
