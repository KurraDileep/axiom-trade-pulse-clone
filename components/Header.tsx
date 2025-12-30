"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-neutral-800">
      <div className="flex items-center justify-between px-6 h-14">
        {/* Left */}
        <div className="flex items-center gap-6">
          <div className="text-xl font-bold">▲</div>
          <nav className="flex gap-5 text-sm text-neutral-400">
            <span className="text-white">Discover</span>
            <span>Pulse</span>
            <span>Trackers</span>
            <span>Perpetuals</span>
            <span>Yield</span>
            <span>Vision</span>
            <span>Portfolio</span>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 rounded-full bg-neutral-900 text-sm">
            SOL
          </button>
          <button className="px-4 py-1.5 rounded-full bg-blue-500 text-black font-medium">
            Deposit
          </button>
        </div>
      </div>
    </header>
  );
}
