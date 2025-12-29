import MiniChart from "./MiniChart";

export default function TokenRow() {
  return (
    <div
      className="
        h-[72px]
        px-4
        grid grid-cols-[280px_120px_120px_120px_90px_160px_80px]
        items-center
        border-b border-border
        hover:bg-gradient-to-r
        hover:from-accent/10
        hover:to-accent/0
        transition-colors
      "
    >
      {/* Pair Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-neutral-700" />
        <div>
          <div className="text-[14px] font-semibold">Groyper</div>
          <div className="text-[12px] text-muted">1d · USD1</div>
        </div>
      </div>

      {/* Market Cap */}
      <div>
        <div className="text-[14px] font-semibold">$168K</div>
        <div className="text-[12px] text-red">-4.56%</div>
      </div>

      {/* Liquidity */}
      <div className="text-[14px] font-semibold">$61.4K</div>

      {/* Volume */}
      <div className="text-[14px] font-semibold">$35.6K</div>

      {/* TXNS */}
      <div>
        <div className="text-[14px] font-semibold">272</div>
        <div className="text-[12px]">
          <span className="text-green">147</span>{" "}
          <span className="text-muted">/</span>{" "}
          <span className="text-red">125</span>
        </div>
      </div>

      {/* Token Info */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-green">0.34%</span>
        <span className="text-muted">Paid</span>
      </div>

      {/* Action */}
      <div className="flex justify-end">
        <button className="h-8 px-5 rounded-full bg-accent text-[13px] font-semibold hover:brightness-110 transition">
          Buy
        </button>
      </div>
    </div>
  );
}
