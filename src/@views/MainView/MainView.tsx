import { Container, Grid, Paper, styled } from '@mui/material';
import Box from '@mui/material/Box';
import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import AppCard from '../../@components/AppCard';
import { coinsSelector } from '../../@store/coins/selectors';
import { getCoinsTC } from '../../@store/coins/slice';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          {coins.length > 0 &&
            coins.map((coin: any) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                <AppCard currency={coin} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default MainView;
