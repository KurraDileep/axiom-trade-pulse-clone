import MiniSparkline from "./MiniSparkline";
import type { TokenInfo } from "../../data/tokenInfo";

type Props = {
  token: TokenInfo;
};

export default function TokenRow({ token }: Props) {
  const isPositive = token.marketChange >= 0;

  return (
    <tr
      className="
        h-[68px]
        border-b border-[var(--border-subtle)]
        hover:bg-white/5
        transition-colors
      "
    >
      {/* Pair Info */}
      <td className="px-4 py-2 align-middle">
        <div className="flex flex-col gap-0.5">
          <div className="font-medium truncate max-w-[220px]">
            {token.name}{" "}
            <span className="text-[var(--text-secondary)] font-normal">
              {token.description}
            </span>
          </div>
          <div className="text-xs text-[var(--text-secondary)]">
            {token.time} · {token.chain}
          </div>
        </div>
      </td>

      {/* Market Cap */}
      <td className="px-4 py-2 align-middle">
        <div className="flex items-center gap-3">
          <MiniSparkline data={token.trend} positive={isPositive} />
          <div>
            <div className="font-medium">{token.marketCap}</div>
            <div
              className={`text-xs ${
                isPositive ? "text-[var(--green)]" : "text-[var(--red)]"
              }`}
            >
              {isPositive ? "+" : ""}
              {token.marketChange.toFixed(2)}%
            </div>
          </div>
        </div>
      </td>

      {/* Liquidity */}
      <td className="px-4 py-2 align-middle font-medium">
        {token.liquidity}
      </td>

      {/* Volume */}
      <td className="px-4 py-2 align-middle font-medium">
        {token.volume}
      </td>

      {/* TXNS */}
      <td className="px-4 py-2 align-middle">
        <div className="font-medium">{token.txns}</div>
        <div className="text-xs">
          <span className="text-[var(--green)]">{token.buys}</span>
          {" / "}
          <span className="text-[var(--red)]">{token.sells}</span>
        </div>
      </td>

      {/* Action */}
      <td className="px-4 py-2 align-middle text-right">
        <button
          className="
            px-4 py-1.5
            rounded-full
            bg-white/90
            text-black
            text-sm
            font-medium
            hover:bg-white
            transition
          "
        >
          Buy
        </button>
      </td>
    </tr>
  );
}
