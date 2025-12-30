"use client";

import TokenRow from "./TokenRow";
import { TokenInfo, initialTokens } from "@/data/tokenInfo";

export default function TokenTable() {
  const tokens: TokenInfo[] = initialTokens;

  return (
    <div className="relative overflow-auto rounded-xl border border-neutral-800">
      <table className="w-full border-collapse text-sm">
        {/* TABLE HEADER */}
        <thead className="sticky top-[64px] z-40 bg-neutral-950">
          <tr className="border-b border-neutral-800 text-neutral-400">
            <th className="px-4 py-3 text-left font-medium">Pair Info</th>
            <th className="px-2 py-3 text-left font-medium"></th>
            <th className="px-4 py-3 text-left font-medium">Market Cap</th>
            <th className="px-4 py-3 text-left font-medium">Liquidity</th>
            <th className="px-4 py-3 text-left font-medium">Volume</th>
            <th className="px-4 py-3 text-left font-medium">TXNS</th>
            <th className="px-4 py-3 text-right font-medium">Action</th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>
          {tokens.map((token) => (
            <TokenRow key={token.id} token={token} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
