import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import AppCard from '../../@components/AppCard';
import AppCardSkeleton from '../../@components/AppCard/AppCardSkeleton';
import { coinsSelector } from '../../@store/coins/selectors';
import { getCoinsTC } from '../../@store/coins/slice';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { ICurrency } from '../../@types';

const CryptoDetailsView: React.FC = () => {
  //   const dispatch = useAppDispatch();
  const { id } = useParams();
  console.log('🚀 ~ file: CryptoDetailsView.tsx ~ line 16 ~ params', id);
  //   const {
  //     data: { coins },
  //     isFetching,
  //   } = useAppSelector(coinsSelector);

  //   useEffect(() => {
  //     dispatch(getCoinsTC());
  //   }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            CryptoDetailsView
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CryptoDetailsView;
