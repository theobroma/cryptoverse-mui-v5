import { Link as RouterLink } from 'react-router-dom';

import LinkIcon from '@mui/icons-material/Link';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

import CryptoList from '../../@components/CryptoList';
import LoadingPage from '../../@components/UI/LoadingPage';
import { useGetCryptosQuery } from '../../@store/coins/crypto/cryptoApi';
import { ROUTES } from '../../@types';

import StatsSection from './StatsSection';

const HomeView = () => {
  const { data, error, isError, isFetching, isLoading, isSuccess } =
    useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  const coins = data?.data?.coins;

  if (isLoading) return <LoadingPage />;
  // if (isError) return <div>An error has occurred!</div>;
  return (
    <Container maxWidth="lg">
      <StatsSection
        globalStats={globalStats}
        isFetching={isFetching}
        error={error}
        isError={isError}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
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
