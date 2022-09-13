// just for testing react-if
//  TypeError in "Then"

import { Else, If, Then } from 'react-if';
import { Link as RouterLink } from 'react-router-dom';

import { Alert, Box, Grid, Stack } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';

import type { CoinType } from '../../@types';
import AppCard from '../AppCard';
import AppCardSkeleton from '../AppCard/AppCardSkeleton';
import AppError from '../UI/AppError/AppError';

interface Props {
  coins: CoinType[];
  //   isFetching?: boolean;
  error: any;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

const CryptoListReactIfCondition = ({
  coins,
  //   isFetching,
  error,
  isError,
  isLoading,
  isSuccess,
}: Props) => {
  // console.log('coins.length :>> ', coins.length);
  // if (isError) return <div>An error has occurred!</div>;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <If condition={!isError && !!isSuccess && coins.length > 0}>
          {/* results */}
          <Then>
            {coins.map((coin, idx: number) => (
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
          </Then>
          {/* no results */}
          <Else>
            <If condition={!!isSuccess && coins.length === 0}>
              <Then>
                <Grid item xs={12}>
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="warning">There is no data</Alert>
                  </Stack>
                </Grid>
              </Then>
            </If>
            {/* error */}
            <If condition={isError}>
              <Then>
                <Grid item xs={12}>
                  <AppError error={error} />
                </Grid>
              </Then>
            </If>
          </Else>
        </If>
      </Grid>
    </Box>
  );
};

export default CryptoListReactIfCondition;
