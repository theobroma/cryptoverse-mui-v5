import millify from 'millify';

import { Box, Container, Grid, Typography } from '@mui/material';

import LoadingPage from '../../@components/UI/LoadingPage';
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
          {/*  */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Typography component="h5" variant="h5">
                Total Cryptocurrencies
              </Typography>
              <Typography component="h5" variant="h6">
                {globalStats.total}
              </Typography>
            </Box>
          </Grid>
          {/*  */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Typography component="h5" variant="h5">
                Total Exchanges
              </Typography>
              <Typography component="h5" variant="h6">
                {millify(globalStats.totalExchanges)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomeView;
