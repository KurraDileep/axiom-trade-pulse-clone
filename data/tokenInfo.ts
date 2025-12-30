export type TokenInfo = {
  id: string;
  name: string;
  time: string;
  chain: string;
  marketCap: string;
  marketChange: number;
  liquidity: string;
  volume: string;
  txns: number;
  buys: number;
  sells: number;
  trend: number[];
};

export const initialTokens: TokenInfo[] = [
  {
    id: "isadora",
    name: "ISADORA",
    time: "4m",
    chain: "SOL",
    marketCap: "$32,013.64",
    marketChange: -0.12,
    liquidity: "$16.3K",
    volume: "$40.3K",
    txns: 610,
    buys: 364,
    sells: 246,
    trend: [5, 8, 6, 10, 7],
  },
  {
    id: "ftw-3m",
    name: "FTW",
    time: "3m",
    chain: "SOL",
    marketCap: "$13,113.82",
    marketChange: 0.39,
    liquidity: "$7.0K",
    volume: "$13.2K",
    txns: 226,
    buys: 145,
    sells: 81,
    trend: [3, 6, 4, 5, 4],
  },
];
