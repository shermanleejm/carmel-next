import { Grid } from '@mui/material';
import styles from '../../../styles/layout/footer.module.css';
import OutlinedButton from '../../buttons/OutlinedButton';
import { useIsMobile } from '../../Helpers';
import { Pages } from 'pages/index';
import MenuButton from '../../buttons/MenuButton';

const Banner = () => {
  const isMobile = useIsMobile();

  return (
    <div className={styles['footer-banner']}>
      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid item>
          <Grid
            container
            justifyContent={'center'}
            alignItems={'center'}
            spacing={3}
            direction={isMobile ? 'column' : 'row'}
          >
            {Pages.map((page, i) => {
              return (
                <Grid item key={i}>
                  <MenuButton link={page.link}>{page.title}</MenuButton>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item>
          <OutlinedButton href={'/services'}>Join us in person</OutlinedButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
