import { Articles } from '@prisma/client';
import { useState } from 'react';
import { useIsMobile } from './Helpers';
import { Circle, ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';

type CarouselProps = {
  articles: Articles[];
};

export default function Carousel({ articles }: CarouselProps) {
  const isMobile = useIsMobile();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  type CircleButtonProps = {
    selected?: boolean;
  };
  const CircleButton = ({ selected = false }: CircleButtonProps) => {
    return (
      <IconButton>
        <Circle style={{ color: selected ? '#8D0101' : '#F0F0F0', fontSize: 20 }} />
      </IconButton>
    );
  };

  const PaginationDots = () => {
    const circles = [];
    for (let i = 0; i < Math.ceil(articles.length / 3); i++) {
      circles.push(<CircleButton selected={i === 0 ? true : false} />);
    }
    return <div>{circles}</div>;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Grid
        container
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid item>
          <Grid
            container
            justifyContent={'center'}
            alignItems={'center'}
            direction={'row'}
          >
            <Grid item xs={2}>
              <IconButton>
                <ArrowBackIosNew />
              </IconButton>
            </Grid>
            <Grid item xs={8}>
              stuff
            </Grid>
            <Grid item xs={2}>
              <IconButton>
                <ArrowForwardIos />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <PaginationDots />
        </Grid>
      </Grid>
    </div>
  );
}
