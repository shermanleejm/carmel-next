import { Grid } from '@mui/material';

type FooterColumnContentProps = {
  icon?: any;
  text: string;
  link: string;
};

const FooterColumn = (title: string, content: FooterColumnContentProps[]) => {
  return (
    <div>
      <Grid></Grid>
    </div>
  );
};

export default FooterColumn;
