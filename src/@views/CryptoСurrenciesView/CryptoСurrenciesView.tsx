import { useEffect } from 'react';

import { Container } from '@mui/material';

import CryptoList from '../../@components/CryptoList';
import { coinsSelector } from '../../@store/coins/selectors';
import { getCoinsTC } from '../../@store/coins/slice';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';

const CryptoСurrenciesView = () => {
  const dispatch = useAppDispatch();
  const {
    data: { coins },
    isFetching,
  } = useAppSelector(coinsSelector);

  useEffect(() => {
    dispatch(getCoinsTC());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <CryptoList coins={coins} isFetching={isFetching} />
    </Container>
  );
};

export default CryptoСurrenciesView;
