import millify from 'millify';

import { Box, Container, Grid, Typography } from '@mui/material';

import LoadingPage from '../../@components/UI/LoadingPage';
import StatsBlock from '../../@components/UI/StatsBlock';
import { useGetCryptosQuery } from '../../@store/coins/crypto/cryptoApi';

const HomeView = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <LoadingPage />;
  return (
    <Container maxWidth="lg">
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
              value={`$${millify(globalStats.totalMarketCap)}`}
            />
          </Grid>
          {/* 4 */}
          <Grid item xs={12} md={6}>
            <StatsBlock
              title="Total 24h Volume"
              value={`$${millify(globalStats.total24hVolume)}`}
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
    </Container>
  );
};

export default HomeView;
