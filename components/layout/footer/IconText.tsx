import { Grid } from '@mui/material';
import { useIsMobile } from '../../Helpers';

type ReactiveIconTextType = {
  icon?: JSX.Element;
  text?: string;
  link?: string;
};

// TODO: please help me think of a better name
const IconText = ({ icon, text, link }: ReactiveIconTextType) => {
  const isTouch = useIsMobile();

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Grid
        container
        direction={isTouch ? 'column' : 'row'}
        justifyContent="flex-start"
        alignItems="center"
        spacing={isTouch ? 0 : 1}
      >
        <Grid item>{icon}</Grid>
        <Grid item>{text}</Grid>
      </Grid>
    </a>
  );
};

export default IconText;
