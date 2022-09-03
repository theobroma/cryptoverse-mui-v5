import type { CoinsResponseType } from '../@types';

import { instance } from './api';

export const CoinrankingAPI = {
  getCoins() {
    return instance.get<CoinsResponseType>(`/coins`);
  },
  // getCryptoDetails(coinId: number) {
  //   return instance.get<any>(`/coin/${coinId}`);
  // },
};
