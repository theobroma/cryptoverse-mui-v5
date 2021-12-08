import { Grid } from '@mui/material';
import React from 'react';

interface Props {
  coinHistory: any;
  currentPrice: any;
  coinName: any;
}

const LineChart: React.FC<Props> = ({
  coinHistory,
  currentPrice,
  coinName,
}) => {
  return (
    <Grid item xs={12}>
      <span>chart</span>
    </Grid>
  );
};

export default LineChart;
