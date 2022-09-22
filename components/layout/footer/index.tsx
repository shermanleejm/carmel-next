import { Grid, Typography } from '@mui/material';
import styles from 'styles/layout/footer.module.css';
import IconText from './IconText';
import Logo from 'public/logo.svg';
import LocationIcon from 'public/icons/location.svg';
import PhoneIcon from 'public/icons/phone.svg';
import EmailIcon from 'public/icons/email.svg';
import FacebookIcon from 'public/icons/facebook.svg';
import InstagramIcon from 'public/icons/instagram.svg';
import YoutubeIcon from 'public/icons/youtube.svg';
import SVGContainer from '../../SVGContainer';
import { useIsMobile } from '../../Helpers';

export default function Footer() {
  const isTouch = useIsMobile();

  const COPYRIGHT =
    'Copyright © 2022 Mount Carmel Bible-Presbytherian Church. All rights reserved.';

  return (
    <div className={styles.footerMain}>
      <Grid
        container
        alignItems={'center'}
        justifyContent={'space-around'}
        direction={isTouch ? 'column' : 'row'}
        spacing={isTouch ? 2 : 0}
      >
        {/* General Information Section */}
        <Grid item>
          <Grid
            container
            direction={'column'}
            justifyContent={'center'}
            alignItems={'flext-start'}
            spacing={2}
          >
            <Grid item>
              <SVGContainer svg={<Logo />} height={'auto'} width={300} />
            </Grid>
            <Grid item>
              <IconText
                icon={<LocationIcon />}
                text={'152 West Coast Road Singapore 127370'}
              />
            </Grid>
            <Grid item>
              <IconText icon={<PhoneIcon />} text={'+65 6123456'} />
            </Grid>
            <Grid item>
              <IconText icon={<EmailIcon />} text={'hello@carmel.sg'} />
            </Grid>
          </Grid>
        </Grid>

        {/* Services Section */}
        {!isTouch && (
          <Grid item>
            <Grid container direction={'column'} spacing={2}>
              <Grid item>
                <Typography variant="h6">Services</Typography>
              </Grid>
              <Grid item>English Worship Service</Grid>
              <Grid item>Carmel Kids</Grid>
              <Grid item>Youth Service</Grid>
              <Grid item>Mandarin Worship Service</Grid>
            </Grid>
          </Grid>
        )}

        {/* Services Section */}
        {!isTouch && (
          <Grid item>
            <Grid container direction={'column'} spacing={2}>
              <Grid item>
                <Typography variant="h6">Services</Typography>
              </Grid>
              <Grid item>English Worship Service</Grid>
              <Grid item>Carmel Kids</Grid>
              <Grid item>Youth Service</Grid>
              <Grid item>Mandarin Worship Service</Grid>
            </Grid>
          </Grid>
        )}

        {/* Services Section */}
        {!isTouch && (
          <Grid item>
            <Grid container direction={'column'} spacing={2}>
              <Grid item>
                <Typography variant="h6">Services</Typography>
              </Grid>
              <Grid item>English Worship Service</Grid>
              <Grid item>Carmel Kids</Grid>
              <Grid item>Youth Service</Grid>
              <Grid item>Mandarin Worship Service</Grid>
            </Grid>
          </Grid>
        )}

        {/* Social Section */}
        <Grid item>
          <Grid container direction={isTouch ? 'row' : 'column'} spacing={2}>
            {!isTouch && (
              <Grid item>
                <Typography variant="h6">Social Media</Typography>
              </Grid>
            )}
            <Grid item>
              <IconText
                icon={<FacebookIcon />}
                text={isTouch ? '' : 'Facebook'}
                link={'https://www.facebook.com/mtcarmel.sg/'}
              />
            </Grid>
            <Grid item>
              <IconText
                icon={<InstagramIcon />}
                text={isTouch ? '' : 'Instagram'}
                link={'https://www.instagram.com/mtcarmel.sg/'}
              />
            </Grid>
            <Grid item>
              <IconText
                icon={<YoutubeIcon />}
                text={isTouch ? '' : 'Youtube'}
                link={'https://www.youtube.com/c/MountCarmelBiblePresbyterianChurch'}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Copyright Section */}
      <div className={styles.copyright}>{COPYRIGHT}</div>
    </div>
  );
}
