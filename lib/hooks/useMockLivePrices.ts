"use client";

import { useEffect, useState } from "react";
import { TokenInfo } from "@/data/tokenInfo";

export function useMockLivePrices(initial: TokenInfo[]) {
  const [tokens, setTokens] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setTokens((prev) =>
        prev.map((t) => {
          const delta = (Math.random() - 0.5) * 200;
          const nextCap = Math.max(1000, t.marketCapValue + delta);

          return {
            ...t,
            marketCapValue: nextCap,
            marketChange:
              ((nextCap - t.marketCapValue) / t.marketCapValue) * 100,
            trend: [...t.trend.slice(1), Math.random() * 30],
          };
        })
      );
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return tokens;
}
