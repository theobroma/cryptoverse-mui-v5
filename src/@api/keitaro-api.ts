import { instance } from './api';

export const KeitaroAPI = {
  getAffiliateNetworks() {
    return instance.get<any>(`/affiliate_networks`);
  },
};
