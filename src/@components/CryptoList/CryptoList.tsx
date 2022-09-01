import { Link as RouterLink } from 'react-router-dom';

import { Alert, Box, Grid, Stack } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';

import type { CoinType } from '../../@types';
import AppCard from '../AppCard';
import AppCardSkeleton from '../AppCard/AppCardSkeleton';

interface Props {
  coins: CoinType[];
  isFetching?: boolean;
  error: any;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

const CryptoList = ({
  coins,
  isFetching,
  error,
  isError,
  isLoading,
  isSuccess,
}: Props) => {
  // console.log('coins.length :>> ', coins.length);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* results */}
        {!isError &&
          coins.length > 0 &&
          coins.map((coin, idx: number) => (
            <Grid item xs={12} md={6} lg={4} key={nanoid()}>
              {isLoading ? (
                <AppCardSkeleton />
              ) : (
                <RouterLink
                  key={coin.uuid}
                  to={`/cryptocurrencies/${coin.uuid}`}
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <AppCard currency={coin} />
                </RouterLink>
              )}
              {/* {idx % 2 === 0 ? (
              <AppCard currency={coin} />
            ) : (
              <AppCardSkeleton />
            )} */}
            </Grid>
          ))}
      </Grid>
      {/* no results */}
      {!!isSuccess && coins.length === 0 && (
        <Grid item xs={12}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="warning">There is no data</Alert>
          </Stack>
        </Grid>
      )}
      {/* error */}
      {!!isError && (
        <Grid item xs={12}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">{error}</Alert>
          </Stack>
        </Grid>
      )}
    </Box>
  );
};

export default CryptoList;
