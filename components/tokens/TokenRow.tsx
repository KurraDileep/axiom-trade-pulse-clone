"use client";

import MiniSparkline from "./MiniSparkline";
import LetterAvatar from "./LetterAvatar";
import { TokenInfo } from "@/data/tokenInfo";

export default function TokenRow({ token }: { token: TokenInfo }) {
  const positive = token.marketChange >= 0;
  const pct = (token.marketChange * 100).toFixed(2);

  return (
    <tr
      className="
        group
        border-b border-neutral-800
        transition-all
        hover:bg-neutral-900/60
        hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.25)]
      "
    >
      {/* PAIR INFO */}
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <LetterAvatar name={token.name} />
          <div>
            <div className="font-medium text-white">{token.name}</div>
            <div className="text-xs text-neutral-400">
              {token.time} · {token.chain}
            </div>
          </div>
        </div>
      </td>

      {/* GRAPH */}
      <td className="px-2 py-4">
        <MiniSparkline data={token.trend} positive={positive} />
      </td>

      {/* MARKET CAP */}
      <td className="px-4 py-4">
        <div className="font-medium text-white">{token.marketCap}</div>
        <div
          className={`text-xs ${
            positive ? "text-green-400" : "text-red-400"
          }`}
        >
          {positive ? "+" : ""}
          {pct}%
        </div>
      </td>

      {/* LIQUIDITY */}
      <td className="px-4 py-4 text-white">{token.liquidity}</td>

      {/* VOLUME */}
      <td className="px-4 py-4 text-white">{token.volume}</td>

      {/* TXNS */}
      <td className="px-4 py-4">
        <div className="font-medium text-white">{token.txns}</div>
        <div className="text-xs">
          <span className="text-green-400 transition-colors group-hover:text-green-300">
            {token.buys}
          </span>{" "}
          /{" "}
          <span className="text-red-400 transition-colors group-hover:text-red-300">
            {token.sells}
          </span>
        </div>
      </td>

      {/* ACTION */}
      <td className="px-4 py-4 text-right">
        <button
          className="
            rounded-full px-4 py-1 text-sm font-medium
            bg-white text-black
            transition
            hover:bg-blue-500 hover:text-white
          "
        >
          Buy
        </button>
      </td>
    </tr>
  );
}
