import * as React from 'react';
import millify from 'millify';

import { Box, Divider, Paper, styled, Typography } from '@mui/material';

import type { CoinType } from '../../@types';

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  //   padding: theme.spacing(1),
  padding: 0,
  //   textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const CardBox1 = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '51px', // for skeleton sync
}));

export const CardBox2 = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  minHeight: '132px', // for skeleton sync
}));

interface Props {
  currency: CoinType;
}

const AppCard: React.FC<Props> = ({
  currency: {
    change = 0,
    iconUrl = '',
    marketCap = '',
    name = '',
    price = '',
    rank = 0,
  } = {},
}) => {
  return (
    <Item>
      <CardBox1>
        <Typography
          variant="h4"
          color="initial"
          sx={(theme) => ({
            fontSize: '18px',
            [theme.breakpoints.up('md')]: {
              fontSize: '24px',
            },
          })}
          // sx={{
          //   fontSize: '24px',
          //   overflow: 'hidden',
          //   whiteSpace: 'nowrap',
          //   textOverflow: 'ellipsis',
          // }}
        >
          {/* {`${rank}. ${name}`} */}
          {/* truncate text */}
          {`${rank}.`} {name.substring(0, 20)} {name.length >= 20 && '...'}
        </Typography>
        <img
          style={{ width: '35px', height: '35px' }}
          src={iconUrl}
          alt={name}
        />
      </CardBox1>
      <Divider />
      <CardBox2>
        <p>Price: {millify(Number(price))}</p>
        <p>Market Cap: {millify(Number(marketCap))}</p>
        <p>Daily Change: {change}%</p>
      </CardBox2>
    </Item>
  );
};

export default AppCard;
