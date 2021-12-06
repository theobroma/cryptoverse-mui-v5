export interface ICurrency {
  // only used fields
  id: number;
  name: string;
  rank: number;
  iconUrl: string;
  price: string;
  marketCap: number;
  change: number;
}

export interface CryptoLinksType {
  name: string;
  type: string;
  url: string;
}
