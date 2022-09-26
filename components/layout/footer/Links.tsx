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

// TODO: convert sections into a component
const Links = () => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.links}>
      <Grid
        container
        alignItems={'center'}
        justifyContent={'space-around'}
        direction={isMobile ? 'column' : 'row'}
        spacing={isMobile ? 2 : 0}
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
              <SVGContainer svg={<Logo />} height={'auto'} width={250} />
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
        {!isMobile && (
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
        {!isMobile && (
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
        {!isMobile && (
          <Grid item>
            <Grid container direction={'column'} spacing={2}>
              <Grid item>
                <Typography variant="h6">Support</Typography>
              </Grid>
              <Grid item>Contact</Grid>
              <Grid item>Privacy</Grid>
              <Grid item>Terms of Use</Grid>
              <Grid item>Copyright</Grid>
            </Grid>
          </Grid>
        )}

        {/* Social Section */}
        <Grid item>
          <Grid container direction={isMobile ? 'row' : 'column'} spacing={2}>
            {!isMobile && (
              <Grid item>
                <Typography variant="h6">Social Media</Typography>
              </Grid>
            )}
            <Grid item>
              <IconText
                icon={<FacebookIcon />}
                text={isMobile ? '' : 'Facebook'}
                link={'https://www.facebook.com/mtcarmel.sg/'}
              />
            </Grid>
            <Grid item>
              <IconText
                icon={<InstagramIcon />}
                text={isMobile ? '' : 'Instagram'}
                link={'https://www.instagram.com/mtcarmel.sg/'}
              />
            </Grid>
            <Grid item>
              <IconText
                icon={<YoutubeIcon />}
                text={isMobile ? '' : 'Youtube'}
                link={'https://www.youtube.com/c/MountCarmelBiblePresbyterianChurch'}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Links;
