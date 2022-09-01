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
    error,
    isError,
    // isFetching,
    isLoading,
    isSuccess,
  } = useAppSelector(coinsSelector);

  useEffect(() => {
    dispatch(getCoinsTC());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <CryptoList
        coins={coins}
        // isFetching={isFetching}
        error={error}
        isError={isError}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </Container>
  );
};

export default CryptoСurrenciesView;
