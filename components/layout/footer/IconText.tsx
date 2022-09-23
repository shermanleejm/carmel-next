import { Grid } from '@mui/material';
import { useIsMobile } from '../../Helpers';

type ReactiveIconTextProps = {
  icon?: JSX.Element;
  text?: string;
  link?: string;
};

// TODO: please help me think of a better name
const IconText = ({ icon, text, link }: ReactiveIconTextProps) => {
  const isMobile = useIsMobile();

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Grid
        container
        direction={isMobile ? 'column' : 'row'}
        justifyContent="flex-start"
        alignItems="center"
        spacing={isMobile ? 0 : 1}
      >
        <Grid item>{icon}</Grid>
        <Grid item>{text}</Grid>
      </Grid>
    </a>
  );
};

export default IconText;
