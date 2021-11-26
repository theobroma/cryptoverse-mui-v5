import GitHubIcon from '@mui/icons-material/GitHub';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { ICurrency } from '../../@types';

interface Props {
  currency: ICurrency;
}

const AppCard: React.FC<Props> = ({ currency }) => {
  return (
    <div>
      <span>card</span>
      <span>{currency.name}</span>
    </div>
  );
};

export default AppCard;
