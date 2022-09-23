import { Button, Grid } from '@mui/material';
import styles from 'styles/layout/footer.module.css';
import OutlinedButton from '../../buttons/OutlinedButton';
import { useIsMobile } from '../../Helpers';

const Banner = () => {
  const isMobile = useIsMobile();

  // TODO: persist this for easy changing
  const links = [
    {
      title: 'Home',
      link: '/home',
    },
    {
      title: 'Our Beliefs',
      link: '/our-beliefs',
    },
    {
      title: 'Livestream',
      link: '/livestream', // TODO: update this to linktree
    },
    {
      title: "I'm New",
      link: '/newcomer',
    },
    {
      title: 'Courses',
      link: '/events',
    },
  ];

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
            {links.map((link, i) => {
              return (
                <Grid item key={i}>
                  <a className={styles['hover-underline-animation']} href={link.link}>
                    {link.title}
                  </a>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item>
          <OutlinedButton>Join us in person</OutlinedButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
