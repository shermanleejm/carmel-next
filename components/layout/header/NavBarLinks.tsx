import LogoWhite from 'public/logoWhite.svg';
import Logo from 'public/logo.svg';
import SVGContainer from '../../SVGContainer';
import NextLink from 'next/link';
import { Grid } from '@mui/material';
import HamburgerIcon from 'public/icons/hamburger.svg';
import { Pages } from 'pages';
import OutlinedButton from '../../buttons/OutlinedButton';
import MenuButton from '../../buttons/MenuButton';
import { useIsMobile } from '../../Helpers';

type NavBarLinksProps = {
  inverted?: boolean;
};

const NavBarLinks = ({ inverted }: NavBarLinksProps) => {
  const isMobile = useIsMobile();

  return (
    <div style={{ padding: `${isMobile ? '5vw' : '2vw 8vw'}`, top: 0 }}>
      <Grid
        container
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Grid item xs={3}>
          <NextLink href={'/'}>
            <a>
              <SVGContainer
                svg={inverted ? <Logo /> : <LogoWhite />}
                height={'auto'}
                width={isMobile ? '60vw' : '20vw'}
              />
            </a>
          </NextLink>
        </Grid>

        {isMobile ? (
          <Grid item>
            <HamburgerIcon />
          </Grid>
        ) : (
          <>
            <Grid item xs={6}>
              <Grid container direction={'row'} justifyContent={'center'} spacing={2}>
                {Pages.filter((page) => page.link !== '/').map((page, i) => (
                  <Grid item key={i}>
                    <MenuButton inverted={inverted} link={page.link}>
                      {page.title}
                    </MenuButton>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={3} style={{ textAlign: 'right' }}>
              <OutlinedButton inverted={inverted} href={'/services'}>
                Join us in person
              </OutlinedButton>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default NavBarLinks;
