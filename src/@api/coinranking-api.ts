import { instance } from './api';

export const CoinrankingAPI = {
  getCoins() {
    return instance.get<any>(`/coins`);
  },
};
