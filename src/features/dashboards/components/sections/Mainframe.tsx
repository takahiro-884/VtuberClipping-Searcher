import { Grid } from '@mui/material';
import { Result } from './Result';
import { Search } from './Search';

export const Mainframe = () => {
  return (
    <>
      <Grid container spacing={0} direction="row" style={{ width: '100%' }}>
        <Grid size={{ xs: 'grow' }} />
        <Grid size={{ xs: 5 }}>
          <Search />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Result />
        </Grid>
        <Grid size={{ xs: 'grow' }} />
      </Grid>
    </>
  );
};
