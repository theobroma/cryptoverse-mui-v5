import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCryptoDetailsQuery } from '../../@store/coins/crypto/cryptoApi';

const CryptoDetailsView: React.FC = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(id);
  const cryptoDetails = data?.data?.coin || '';

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Typography component="h2" variant="h5">
              {cryptoDetails.name} ({cryptoDetails.slug}) Price
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CryptoDetailsView;
