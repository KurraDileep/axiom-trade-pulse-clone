"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950 border-b border-neutral-800">
      <div className="h-14 px-6 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-6">
          <div className="text-xl font-bold">▲</div>

          <nav className="flex gap-5 text-sm text-neutral-300">
            <span className="text-white font-medium">Discover</span>
            <span>Pulse</span>
            <span>Trackers</span>
            <span>Perpetuals</span>
            <span>Yield</span>
            <span>Vision</span>
            <span>Portfolio</span>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="px-3 py-1 rounded-full bg-neutral-800 text-sm">
            SOL
          </button>

          <button className="px-4 py-1 rounded-full bg-blue-500 text-black text-sm font-medium">
            Deposit
          </button>

          <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-sm">
            D
          </div>
        </div>
      </div>
    </header>
  );
}
