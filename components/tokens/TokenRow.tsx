"use client";

import MiniSparkline from "./MiniSparkline";
import LetterAvatar from "./LetterAvatar";
import { TokenInfo } from "@/data/tokenInfo";

export default function TokenRow({ token }: { token: TokenInfo }) {
  const positive = token.marketChange >= 0;

  return (
    <tr className="border-b border-neutral-800 hover:bg-neutral-900">
      {/* Pair Info */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <LetterAvatar name={token.name} />
          <div>
            <div className="font-medium">{token.name}</div>
            <div className="text-xs text-neutral-400">
              {token.time} · {token.chain}
            </div>
          </div>
        </div>
      </td>

      {/* Graph (NO HEADING) */}
      <td className="px-4">
        <MiniSparkline data={token.trend} positive={positive} />
      </td>

      {/* Market Cap */}
      <td className="px-4">
        <div>${token.marketCapValue.toLocaleString()}</div>
        <div
          className={`text-xs ${
            positive ? "text-green-400" : "text-red-400"
          }`}
        >
          {positive ? "+" : ""}
          {token.marketChange.toFixed(2)}%
        </div>
      </td>

      {/* Liquidity */}
      <td className="px-4">${token.liquidity}</td>

      {/* Volume */}
      <td className="px-4">${token.volume}</td>

      {/* TXNS */}
      <td className="px-4">
        <div>{token.txns}</div>
        <div className="text-xs">
          <span className="text-green-400">{token.buys}</span> /{" "}
          <span className="text-red-400">{token.sells}</span>
        </div>
      </td>

      {/* Action */}
      <td className="px-4 text-right">
        <button className="px-4 py-1 rounded-full bg-neutral-100 text-black">
          Buy
        </button>
      </td>
    </tr>
  );
}
