import { Container, Grid, Link as MuiLink, Typography } from '@mui/material';
import Box from '@mui/material/Box';
// import HTMLReactParser from 'html-react-parser';
import parse from 'html-react-parser';
import React from 'react';
import { useParams } from 'react-router-dom';
import AppAccordion from '../../@components/AppAccordion';
import LoadingPage from '../../@components/UI/LoadingPage';
import { useGetCryptoDetailsQuery } from '../../@store/coins/crypto/cryptoApi';
import CryptoLinks from './Blocks/CryptoLinks';
import OtherStatsInfo from './Blocks/OtherStatsInfo';
import ValueStatistics from './Blocks/ValueStatistics';

const CryptoDetailsView: React.FC = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(id);
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <LoadingPage />;

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* Title */}
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Typography component="h2" variant="h5">
                {cryptoDetails.name}
              </Typography>
              <img
                style={{ width: '35px', height: '35px', marginLeft: '15px' }}
                src={cryptoDetails.iconUrl}
                alt={cryptoDetails.name}
              />
            </Box>
          </Grid>
          {/* ValueStatistics */}
          <ValueStatistics cryptoDetails={cryptoDetails} />
          <OtherStatsInfo cryptoDetails={cryptoDetails} />
          {/* Info */}
          <Grid item xs={12}>
            <AppAccordion
              title={
                <Typography component="h3" variant="h6">
                  What is {cryptoDetails.name}?
                </Typography>
              }
            >
              {parse(cryptoDetails.description)}
            </AppAccordion>
          </Grid>
          {/* Links */}
          <CryptoLinks cryptoDetails={cryptoDetails} />
        </Grid>
      </Box>
    </Container>
  );
};

export default CryptoDetailsView;
