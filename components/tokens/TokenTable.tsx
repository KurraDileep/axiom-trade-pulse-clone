"use client";
import TableHeader from "./TableHeader";
import TokenRow from "./TokenRow";
import { tokenInfo } from "../../data/tokenInfo";
import { useMockLivePrices } from "../../lib/hooks/useMockLivePrices";

export default function TokenTable() {
  const liveTokens = useMockLivePrices(tokenInfo);

  return (
    <div
      className="
        bg-black
        border border-neutral-800
        rounded-xl
        overflow-hidden
      "
    >
      {/* sticky header */}
      <table className="w-full text-sm">
        <TableHeader />
      </table>

      {/* scrollable body */}
      <div className="max-h-[420px] overflow-y-auto">
        <table className="w-full text-sm">
          <tbody>
            {liveTokens.map((token, i) => (
              <TokenRow key={i} token={token} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
