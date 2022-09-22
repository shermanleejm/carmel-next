import { Grid, Typography } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';

type ReactiveIconTextType = {
  icon?: any;
  text?: string;
  link?: string;
};

// TODO: please help me think of a better name
const IconText = ({ icon, text, link }: ReactiveIconTextType) => {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setIsTouch(true);
    }
  }, []);

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
