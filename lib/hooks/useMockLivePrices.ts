"use client";

import { useEffect, useState } from "react";
import { TokenInfo } from "../../data/tokenInfo";

export function useMockLivePrices(initial: TokenInfo[]) {
  const [tokens, setTokens] = useState<TokenInfo[]>(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setTokens((prev) =>
        prev.map((token) => {
          const delta = (Math.random() - 0.5) * 1.5;

          return {
            ...token,
            marketChange: +(token.marketChange + delta).toFixed(2),
            trend: [...token.trend.slice(1), token.trend.at(-1)! + delta],
          };
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return tokens;
}
