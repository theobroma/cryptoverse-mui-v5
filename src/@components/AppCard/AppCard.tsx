import { Box, Divider, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import millify from 'millify';
import { ICurrency } from '../../@types';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  //   padding: theme.spacing(1),
  padding: 0,
  //   textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CardBox1 = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const CardBox2 = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

interface Props {
  currency: ICurrency;
}

const AppCard: React.FC<Props> = ({ currency }) => {
  return (
    <Item>
      <CardBox1>
        <Typography variant="h4" color="initial">
          {`${currency.rank}. ${currency.name}`}
        </Typography>
        <img
          style={{ width: '35px', height: '35px' }}
          src={currency.iconUrl}
          alt={currency.name}
        />
      </CardBox1>
      <Divider />
      <CardBox2>
        <p>Price: {millify(Number(currency.price))}</p>
        <p>Market Cap: {millify(currency.marketCap)}</p>
        <p>Daily Change: {currency.change}%</p>
      </CardBox2>
    </Item>
  );
};

export default AppCard;
