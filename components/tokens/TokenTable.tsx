"use client";

import TokenRow from "./TokenRow";
import { useMockLivePrices } from "@/lib/hooks/useMockLivePrices";
import { initialTokens } from "@/data/tokenInfo";

export default function TokenTable() {
  const tokens = useMockLivePrices(initialTokens);

  return (
    <div className="border border-neutral-700 rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-neutral-900 text-neutral-300">
          <tr>
            <th className="px-4 py-3 text-left">Pair Info</th>
            <th className="px-4 py-3 text-left"></th>
            <th className="px-4 py-3 text-left">Market Cap</th>
            <th className="px-4 py-3 text-left">Liquidity</th>
            <th className="px-4 py-3 text-left">Volume</th>
            <th className="px-4 py-3 text-left">TXNS</th>
            <th className="px-4 py-3 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {tokens.map((token) => (
            <TokenRow key={token.id} token={token} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
