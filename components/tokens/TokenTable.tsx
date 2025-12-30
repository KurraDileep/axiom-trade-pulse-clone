import TableHeader from "./TableHeader";
import TokenRow from "./TokenRow";
import { tokenInfo } from "../../data/tokenInfo";

export default function TokenTable() {
  return (
    <div
      className="
        rounded-xl
        bg-[var(--bg-panel)]
        border border-[var(--border-subtle)]
        overflow-hidden
      "
    >
      <table className="w-full text-sm">
        <TableHeader />
        <tbody>
          {tokenInfo.map((token) => (
            <TokenRow key={`${token.name}-${token.time}`} token={token} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
