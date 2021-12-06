import { Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import Box from '@mui/material/Box';
// import HTMLReactParser from 'html-react-parser';
import parse from 'html-react-parser';
import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingPage from '../../@components/UI/LoadingPage';
import { useGetCryptoDetailsQuery } from '../../@store/coins/crypto/cryptoApi';

const CryptoDetailsView: React.FC = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(id);
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <LoadingPage />;

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h2" variant="h5">
              {cryptoDetails.name} ({cryptoDetails.slug}) Price
            </Typography>
            <img
              style={{ width: '35px', height: '35px' }}
              src={cryptoDetails.iconUrl}
              alt={cryptoDetails.name}
            />
            <Typography component="h2" variant="h5">
              What is {cryptoDetails.name}?
            </Typography>
            {parse(cryptoDetails.description)}
          </Grid>

          <Grid item xs={12}>
            <Typography component="h3" variant="h6">
              {cryptoDetails.name} Links
            </Typography>
            <Box sx={{ typography: 'body1', ml: 2 }}>
              {cryptoDetails.links?.map((link: any) => (
                <>
                  <span style={{ marginRight: '5px' }}>{link.type}</span>
                  <MuiLink
                    href={link.url}
                    underline="hover"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.name}
                  </MuiLink>
                  <br />
                </>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CryptoDetailsView;
