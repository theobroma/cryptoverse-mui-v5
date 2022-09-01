import millify from 'millify';

import { Box, Grid, Typography } from '@mui/material';

import StatsBlock from '../../@components/UI/StatsBlock';
import type { StatsType } from '../../@types';

type Props = {
  globalStats: StatsType;
};

const StatsSection = ({ globalStats }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* Title */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Typography component="h2" variant="h5">
              Global Crypto Stats
            </Typography>
          </Box>
        </Grid>
        {/* 1 */}
        <Grid item xs={12} md={12}>
          <StatsBlock
            title="Total Cryptocurrencies"
            value={millify(globalStats.total)}
          />
        </Grid>
        {/* 2 */}
        <Grid item xs={12} md={6}>
          <StatsBlock
            title=" Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Grid>
        {/* 3 */}
        <Grid item xs={12} md={6}>
          <StatsBlock
            title="Total Market Cap:"
            value={`$${millify(Number(globalStats.totalMarketCap))}`}
          />
        </Grid>
        {/* 4 */}
        <Grid item xs={12} md={6}>
          <StatsBlock
            title="Total 24h Volume"
            value={`$${millify(Number(globalStats.total24hVolume))}`}
          />
        </Grid>
        {/* 5  */}
        <Grid item xs={12} md={6}>
          <StatsBlock
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatsSection;
