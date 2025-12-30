export default function TableHeader() {
  return (
    <thead>
      <tr
        className="
          h-[44px]
          border-b border-[var(--border-subtle)]
          text-xs
          uppercase
          tracking-wide
          text-[var(--text-secondary)]
        "
      >
        <th className="px-4 text-left font-medium">Pair Info</th>
        <th className="px-4 text-left font-medium">Market Cap</th>
        <th className="px-4 text-left font-medium">Liquidity</th>
        <th className="px-4 text-left font-medium">Volume</th>
        <th className="px-4 text-left font-medium">TXNS</th>
        <th className="px-4 text-right font-medium">Action</th>
      </tr>
    </thead>
  );
}
