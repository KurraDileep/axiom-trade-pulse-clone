export default function TableHeader() {
  return (
    <thead className="sticky top-0 bg-black z-10 border-b border-neutral-800">
      <tr>
        <th className="px-4 py-3 text-left w-[220px]">PAIR INFO</th>
        <th className="px-4 py-3 text-left w-[260px]">MARKET CAP</th>
        <th className="px-4 py-3 text-center w-[120px]">LIQUIDITY</th>
        <th className="px-4 py-3 text-center w-[120px]">VOLUME</th>
        <th className="px-4 py-3 text-center w-[120px]">TXNS</th>
        <th className="px-4 py-3 text-right w-[100px]">ACTION</th>
      </tr>
    </thead>
  );
}
