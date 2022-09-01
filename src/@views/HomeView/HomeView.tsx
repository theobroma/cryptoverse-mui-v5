import millify from 'millify';
import { Link as RouterLink } from 'react-router-dom';

import LinkIcon from '@mui/icons-material/Link';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

import CryptoList from '../../@components/CryptoList';
import LoadingPage from '../../@components/UI/LoadingPage';
import StatsBlock from '../../@components/UI/StatsBlock';
import { useGetCryptosQuery } from '../../@store/coins/crypto/cryptoApi';
import { ROUTES } from '../../@types';

const HomeView = () => {
  const { data, error, isError, isFetching, isLoading, isSuccess } =
    useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  const coins = data?.data?.coins;

  if (isLoading) return <LoadingPage />;
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
      {/* / Stats */}
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 14,
            mb: 6,
          }}
        >
          <Typography component="h2" variant="h5">
            Top 10 Cryptos In The World
          </Typography>
          <RouterLink
            to={ROUTES.CRYPTOCURRENCIES}
            style={{
              // color: 'white',
              textDecoration: 'none',
            }}
          >
            <Button variant="outlined" color="primary" endIcon={<LinkIcon />}>
              More
            </Button>
          </RouterLink>
        </Box>
      </Grid>
      <CryptoList
        coins={coins}
        isFetching={isFetching}
        error={error}
        isError={isError}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </Container>
  );
};

export default HomeView;
