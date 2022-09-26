import { Articles } from '@prisma/client';
import { useState } from 'react';
import { removeTags, useIsMobile } from './Helpers';
import { Circle, ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import CardWithShadow from './card/CardWithShadow';

type CarouselProps = {
  articles: Articles[];
};

export default function Carousel({ articles }: CarouselProps) {
  const isMobile = useIsMobile();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(Math.min(articles.length, 3));

  console.log(articles.slice(start, end));

  type CircleButtonProps = {
    selected?: boolean;
    onClick: () => void;
  };
  const CircleButton = ({ selected = false, onClick }: CircleButtonProps) => {
    return (
      <IconButton onClick={onClick}>
        <Circle style={{ color: selected ? '#8D0101' : '#F0F0F0', fontSize: 20 }} />
      </IconButton>
    );
  };

  const PaginationDots = () => {
    const circles = [];
    for (let i = 0; i < Math.ceil(articles.length / 3); i++) {
      circles.push(
        <CircleButton
          onClick={() => {
            setStart(i * 3);
            setEnd(i * 3 + 3);
          }}
          selected={i * 3 >= start && i * 3 < end ? true : false}
        />
      );
    }
    return <div>{circles}</div>;
  };

  const handleNext = () => {
    setStart(Math.min(start + 3, articles.length - 1));
    setEnd(Math.min(end + 3, articles.length + 2));
  };
  const handlePrev = () => {
    setStart(Math.max(start - 3, 0));
    setEnd(Math.max(end - 3, 3));
  };

  return (
    <div
      style={{
        textAlign: 'center',
        width: '80vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <IconButton onClick={handlePrev}>
          <ArrowBackIosNew />
        </IconButton>

        {articles.slice(start, end).map((article, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardWithShadow title={article.title} blurp={removeTags(article.content)} />
          </div>
        ))}

        <IconButton onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
      </div>

      <PaginationDots />
    </div>
  );
}
