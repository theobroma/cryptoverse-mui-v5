import { Grid, Typography } from '@mui/material';
import React from 'react';
import AppAccordion from '../../../@components/AppAccordion';

interface Props {
  cryptoDetails: any;
}

const ValueStatistics: React.FC<Props> = ({ cryptoDetails }) => {
  return (
    <Grid item xs={12}>
      <AppAccordion
        title={
          <Typography component="h3" variant="h6">
            {cryptoDetails.name} Value Statistics
          </Typography>
        }
      >
        <p>
          An overview showing the statistics of {cryptoDetails.name}, such as
          the base and quote currency, the rank, and trading volume.
        </p>
      </AppAccordion>
    </Grid>
  );
};

export default ValueStatistics;
