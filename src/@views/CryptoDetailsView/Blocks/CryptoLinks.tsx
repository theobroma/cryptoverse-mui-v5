import { Box, Grid, Link as MuiLink, Typography } from '@mui/material';
import React from 'react';
import AppAccordion from '../../../@components/AppAccordion';
import { CryptoLinksType } from '../../../@types';

interface Props {
  cryptoDetails: any;
}

const CryptoLinks: React.FC<Props> = ({ cryptoDetails }) => {
  return (
    <Grid item xs={12}>
      <AppAccordion
        title={
          <Typography component="h3" variant="h6">
            {cryptoDetails.name} Links
          </Typography>
        }
      >
        <Box sx={{ typography: 'body1', ml: 2 }}>
          {cryptoDetails.links?.map((link: CryptoLinksType) => (
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
      </AppAccordion>
    </Grid>
  );
};

export default CryptoLinks;
