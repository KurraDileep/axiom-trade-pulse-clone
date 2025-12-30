import MiniSparkline from "./MiniSparkline";
import LetterAvatar from "./LetterAvatar";
import { TokenInfo } from "../../data/tokenInfo";

export default function TokenRow({ token }: { token: TokenInfo }) {
  const positive = token.marketChange >= 0;

  return (
    <tr className="border-b border-neutral-800 hover:bg-neutral-900">
      {/* Pair Info */}
      <td className="px-4 py-3 w-[220px]">
        <div className="flex items-center gap-3">
          <LetterAvatar name={token.name} />
          <div className="min-w-0">
            <div className="font-medium truncate">{token.name}</div>
            <div className="text-xs text-neutral-400">
              {token.time} · {token.chain}
            </div>
          </div>
        </div>
      </td>

      {/* Market Cap */}
      <td className="px-4 py-3 w-[260px]">
        <div className="grid grid-cols-[90px_1fr] items-center gap-3">
          <MiniSparkline data={token.trend} positive={positive} />
          <div className="text-right">
            <div className="font-medium">{token.marketCap}</div>
            <div
              className={`text-xs ${
                positive ? "text-green-400" : "text-red-400"
              }`}
            >
              {positive ? "+" : ""}
              {token.marketChange}%
            </div>
          </div>
        </div>
      </td>

      {/* Liquidity */}
      <td className="px-4 py-3 text-center w-[120px]">
        {token.liquidity}
      </td>

      {/* Volume */}
      <td className="px-4 py-3 text-center w-[120px]">
        {token.volume}
      </td>

      {/* TXNS */}
      <td className="px-4 py-3 text-center w-[120px]">
        <div className="font-medium">{token.txns}</div>
        <div className="text-xs">
          <span className="text-green-400">{token.buys}</span> /{" "}
          <span className="text-red-400">{token.sells}</span>
        </div>
      </td>

      {/* Action */}
      <td className="px-4 py-3 text-right w-[100px]">
        <button className="px-4 py-1 rounded-full bg-neutral-100 text-black text-sm">
          Buy
        </button>
      </td>
    </tr>
  );
}
