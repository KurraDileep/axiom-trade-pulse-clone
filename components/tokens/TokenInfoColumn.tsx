type Props = {
  risk: number;
  tax: number;
  liquidityLock: number;
  unpaid: boolean;
};

export default function TokenInfoColumn({
  risk,
  tax,
  liquidityLock,
  unpaid,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-1 text-xs">
      <span className="px-2 py-1 rounded bg-red-500/15 text-red-400">
        🔑 {risk}%
      </span>
      <span className="px-2 py-1 rounded bg-green-500/15 text-green-400">
        💧 {tax}%
      </span>
      <span className="px-2 py-1 rounded bg-green-500/15 text-green-400">
        🔒 {liquidityLock}%
      </span>
      {unpaid && (
        <span className="px-2 py-1 rounded bg-red-500/15 text-red-400">
          ⛔ Unpaid
        </span>
      )}
    </div>
  );
}
