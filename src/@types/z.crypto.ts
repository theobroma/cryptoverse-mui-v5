import * as z from 'zod';

const StatsSchema = z.object({
  total: z.number(),
  totalCoins: z.number(),
  totalMarkets: z.number(),
  totalExchanges: z.number(),
  totalMarketCap: z.string(),
  total24hVolume: z.string(),
});

export type StatsType = z.infer<typeof StatsSchema>;

const CoinSchema = z.object({
  uuid: z.string(),
  symbol: z.string().min(2).max(10),
  name: z.string(),
  color: z.string().min(4).max(9).regex(/^#/).nullable(),
  iconUrl: z.string().url(),
  marketCap: z.string(),
  price: z.string(),
  listedAt: z.number(),
  tier: z.number(),
  change: z.string(),
  rank: z.number(),
  sparkline: z.array(z.string()),
  lowVolume: z.boolean(),
  coinrankingUrl: z.string().url(),
  '24hVolume': z.string(),
  btcPrice: z.string(),
});

export type CoinType = z.infer<typeof CoinSchema>;

export const CoinsResponseSchema = z.object({
  data: z.object({
    coins: z.array(CoinSchema),
    stats: StatsSchema,
  }),
  status: z.string(),
});

export type CoinsResponseType = z.infer<typeof CoinsResponseSchema>;
