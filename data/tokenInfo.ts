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
    marketCap: "$29,700",
    marketChange: -30.3,
    liquidity: "$16,335",
    volume: "$40,300",
    txns: 610,
    buys: 364,
    sells: 246,
    trend: [12, 10, 11, 9, 10, 8, 9],
  },
  {
    name: "FTW",
    description: "Free The Whales",
    time: "3m",
    chain: "SOL",
    marketCap: "$12,700",
    marketChange: 145.4,
    liquidity: "$6,985",
    volume: "$13,200",
    txns: 226,
    buys: 145,
    sells: 81,
    trend: [4, 6, 5, 7, 6, 8, 9],
  },
  {
    name: "FTW",
    description: "Fuck The Whales",
    time: "1m",
    chain: "SOL",
    marketCap: "$13,700",
    marketChange: 250.7,
    liquidity: "$7,535",
    volume: "$9,210",
    txns: 149,
    buys: 104,
    sells: 45,
    trend: [2, 3, 4, 6, 5, 7, 6],
  },
];
