import { Grid } from '@mui/material';

type FooterColumnContentType = {
  icon?: any;
  text: string;
  link: string;
};

const FooterColumn = (title: string, content: FooterColumnContentType[]) => {
  return (
    <div>
      <Grid></Grid>
    </div>
  );
};

export default FooterColumn;
