import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import AppCard from '../../@components/AppCard';
import { coinsSelector } from '../../@store/coins/selectors';
import { getCoinsTC } from '../../@store/coins/slice';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { ICurrency } from '../../@types';

const MainView: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: { coins = [] },
  } = useAppSelector(coinsSelector);

  useEffect(() => {
    dispatch(getCoinsTC());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {coins.length > 0 &&
            coins.map((coin: ICurrency) => (
              <Grid item xs={12} md={6} lg={4} key={nanoid()}>
                <AppCard currency={coin} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default MainView;
