import styles from 'styles/components/NavBar.module.css';
import { StaticImageData } from 'next/image';
import NextImage from 'next/image';
import NavBarLinks from './NavBarLinks';
import { Grid, Typography } from '@mui/material';
import OutlinedButton from '../../buttons/OutlinedButton';

type NavBarProps = {
  backgroundImage?: StaticImageData;
};

const NavBar = ({ backgroundImage }: NavBarProps) => {
  return (
    <div className={styles.navbar}>
      <NextImage
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
      />
      <div className={styles.overlay}>
        <NavBarLinks />

        <div className={styles.title}>
          <Grid container direction={'column'} alignItems={'center'} spacing={4}>
            <Grid item>
              <Typography variant="h3">
                We Bring Generations Together to Love GOD and to Love People
              </Typography>
            </Grid>

            <Grid item>
              <Grid container spacing={4}>
                <Grid item>
                  <OutlinedButton>join us in person</OutlinedButton>
                </Grid>

                <Grid item>
                  <OutlinedButton>join us online</OutlinedButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <span></span>
      </div>
    </div>
  );
};

export default NavBar;
