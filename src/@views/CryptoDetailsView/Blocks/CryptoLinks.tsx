import * as React from 'react';

import { Box, Grid, Link as MuiLink } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';

import AppAccordion from '../../../@components/AppAccordion';
import type { LinksType } from '../../../@types';

interface Props {
  cryptoDetails: any;
}

const CryptoLinks: React.FC<Props> = ({ cryptoDetails }) => {
  return (
    <Grid item xs={12}>
      <AppAccordion title={`${cryptoDetails.name} Links`}>
        <Box sx={{ typography: 'body1', ml: 2 }}>
          {cryptoDetails.links?.map((link: LinksType) => (
            <Box key={nanoid()}>
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
            </Box>
          ))}
        </Box>
      </AppAccordion>
    </Grid>
  );
};

export default CryptoLinks;
