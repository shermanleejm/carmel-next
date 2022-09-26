import styles from '../../../styles/components/NavBar.module.css';
import { StaticImageData } from 'next/image';
import NextImage from 'next/image';
import NavBarLinks from './NavBarLinks';
import { Grid, Typography } from '@mui/material';
import OutlinedButton from '../../buttons/OutlinedButton';

type NavBarProps = {
  backgroundImage?: StaticImageData;
  title?: string | JSX.Element;
};

const NavBar = ({ backgroundImage, title }: NavBarProps) => {
  const inverted = backgroundImage === undefined;

  return (
    <div
      className={styles.navbar}
      style={{
        height: inverted ? '15vh' : '95vh',
        backgroundColor: inverted ? 'white' : '',
      }}
    >
      {!inverted && (
        <NextImage
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      )}
      <div
        className={styles.overlay}
        style={{ background: inverted ? 'rgba(0,0,0,0)' : 'rgba(30, 15, 0, 0.6)' }}
      >
        <NavBarLinks inverted={inverted} />

        <div className={styles.title}>
          <Grid
            container
            direction={'column'}
            alignItems={'strech'}
            spacing={3}
            justifyContent={'center'}
          >
            <Grid item>
              <Typography variant="h4">{title}</Typography>
            </Grid>

            {!inverted && (
              <Grid item>
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <OutlinedButton>join us in person</OutlinedButton>
                  </Grid>

                  <Grid item>
                    <OutlinedButton>join us online</OutlinedButton>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </div>

        <span></span>
      </div>
    </div>
  );
};

export default NavBar;
