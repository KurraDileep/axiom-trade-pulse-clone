export default function TableHeader() {
  return (
    <div className="h-[44px] px-4 grid grid-cols-[280px_120px_120px_120px_90px_160px_80px] items-center border-b border-border text-[12px] font-medium text-muted tracking-wide">
      <div>Pair Info</div>
      <div>Market Cap</div>
      <div>Liquidity</div>
      <div>Volume</div>
      <div>TXNS</div>
      <div>Token Info</div>
      <div className="text-right">Action</div>
    </div>
  );
}
