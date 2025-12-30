// data/tokenInfo.ts

export type TokenInfo = {
  id: string;
  name: string;
  time: string;
  chain: string;

  marketCapValue: number;
  marketCapLabel: string;
  marketChange: number;

  liquidity: string;
  volume: string;

  txns: number;
  buys: number;
  sells: number;

  trend: number[];
};

/**
 * ✅ This MUST be exported
 */
export const initialTokens: TokenInfo[] = [
  {
    id: "isadora",
    name: "ISADORA",
    time: "4m",
    chain: "SOL",
    marketCapValue: 31999.57,
    marketCapLabel: "$31.9K",
    marketChange: -20.1,
    liquidity: "$16.3K",
    volume: "$40.3K",
    txns: 610,
    buys: 364,
    sells: 246,
    trend: [10, 14, 9, 18, 22, 19],
  },
  {
    id: "ftw-3m",
    name: "FTW",
    time: "3m",
    chain: "SOL",
    marketCapValue: 12739.15,
    marketCapLabel: "$12.7K",
    marketChange: 144.76,
    liquidity: "$7.0K",
    volume: "$13.2K",
    txns: 226,
    buys: 145,
    sells: 81,
    trend: [4, 9, 6, 12, 8, 11],
  },
  {
    id: "ftw-1m",
    name: "FTW",
    time: "1m",
    chain: "SOL",
    marketCapValue: 13739.0,
    marketCapLabel: "$13.7K",
    marketChange: 250.77,
    liquidity: "$7.5K",
    volume: "$9.2K",
    txns: 149,
    buys: 104,
    sells: 45,
    trend: [3, 8, 5, 10, 7, 12],
  },
];
