export type TokenInfo = {
  name: string;
  description: string;
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

export const tokenInfo: TokenInfo[] = [
  {
    name: "ISADORA",
    description: "isadora bui...",
    time: "4m",
    chain: "SOL",
    marketCap: "$29.7K",
    marketChange: -30.3,
    liquidity: "$16.3K",
    volume: "$40.3K",
    txns: 610,
    buys: 364,
    sells: 246,
    trend: [8, 6, 7, 5, 6, 4, 5],
  },
  {
    name: "FTW",
    description: "Free The Whales",
    time: "3m",
    chain: "SOL",
    marketCap: "$12.7K",
    marketChange: 145.4,
    liquidity: "$7.0K",
    volume: "$13.2K",
    txns: 226,
    buys: 145,
    sells: 81,
    trend: [2, 4, 3, 5, 4, 6, 7],
  },
  {
    name: "FTW",
    description: "Fuck The Whales",
    time: "1m",
    chain: "SOL",
    marketCap: "$13.7K",
    marketChange: 250.7,
    liquidity: "$7.5K",
    volume: "$9.2K",
    txns: 149,
    buys: 104,
    sells: 45,
    trend: [1, 2, 3, 4, 3, 5, 6],
  },
];
