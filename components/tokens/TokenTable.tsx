"use client";

import { useEffect, useState } from "react";
import MiniSparkline from "@/components/tokens/MiniSparkline";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/* ================= TYPES ================= */

type TokenRow = {
  token: string;
  name: string;
  age: string;
  price: number;
  change: number;
  volume: number;
  marketCap: number;
  txns: { buy: number; sell: number };
  history: number[];
  flash?: "up" | "down" | null;
};

type SortField = "price" | "volume" | "marketCap";

/* ================= DATA ================= */

const initialData: TokenRow[] = [
  {
    token: "ISADORA",
    name: "isadora bui...",
    age: "4m",
    price: 0.0297,
    change: -30.3,
    volume: 40300,
    marketCap: 29700,
    txns: { buy: 364, sell: 246 },
    history: [0.031, 0.03, 0.0297],
  },
  {
    token: "FTW",
    name: "Free The Whales",
    age: "3m",
    price: 0.0127,
    change: 145.4,
    volume: 13200,
    marketCap: 12700,
    txns: { buy: 145, sell: 81 },
    history: [0.006, 0.009, 0.0127],
  },
  {
    token: "FTW",
    name: "Fuck The Whales",
    age: "1m",
    price: 0.0137,
    change: 250.7,
    volume: 9210,
    marketCap: 13700,
    txns: { buy: 104, sell: 45 },
    history: [0.004, 0.008, 0.0137],
  },
];

/* ================= COMPONENT ================= */

export default function TokenTable() {
  const [data, setData] = useState(initialData);
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  /* -------- LIVE PRICE + GRAPH UPDATE -------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((row) => {
          const delta = (Math.random() - 0.5) * row.price * 0.02;
          const newPrice = Math.max(row.price + delta, 0.000001);

          return {
            ...row,
            price: newPrice,
            history: [...row.history.slice(-14), newPrice],
            flash: delta > 0 ? "up" : "down",
          };
        })
      );

      setTimeout(() => {
        setData((prev) => prev.map((r) => ({ ...r, flash: null })));
      }, 400);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  /* -------- SORTING -------- */
  const sortBy = (field: SortField) => {
    const order =
      sortField === field && sortOrder === "asc" ? "desc" : "asc";

    setSortField(field);
    setSortOrder(order);

    setData((prev) =>
      [...prev].sort((a, b) =>
        order === "asc" ? a[field] - b[field] : b[field] - a[field]
      )
    );
  };

  const sortIcon = (field: SortField) =>
    sortField === field ? (sortOrder === "asc" ? "↑" : "↓") : "";

  /* ================= UI ================= */

  return (
    <div className="bg-panel border border-border rounded-xl overflow-hidden">
      <Table>
        {/* ===== HEADER ===== */}
        <TableHeader>
          <TableRow className="h-[44px] text-muted text-xs">
            <TableHead className="w-[280px]">Pair Info</TableHead>

            {/* Graph column (no title) */}
            <TableHead className="w-[120px]" />

            <TableHead
              className="w-[140px] cursor-pointer"
              onClick={() => sortBy("marketCap")}
            >
              Market Cap {sortIcon("marketCap")}
            </TableHead>

            <TableHead className="w-[140px]">Liquidity</TableHead>

            <TableHead
              className="w-[140px] cursor-pointer"
              onClick={() => sortBy("volume")}
            >
              Volume {sortIcon("volume")}
            </TableHead>

            <TableHead className="w-[120px]">TXNS</TableHead>

            <TableHead className="w-[120px] text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        {/* ===== BODY ===== */}
        <TableBody>
          {data.map((row, i) => (
            <TableRow
              key={i}
              className="h-[72px] items-center hover:bg-gradient-to-r hover:from-accent/10 hover:to-transparent transition"
            >
              {/* ===== Pair Info ===== */}
              <TableCell className="w-[280px]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center font-semibold">
                    {row.token[0]}
                  </div>

                  <div>
                    <div className="font-semibold leading-tight">
                      {row.token}{" "}
                      <span className="text-muted font-normal">
                        {row.name}
                      </span>
                    </div>
                    <div className="text-xs text-muted">
                      {row.age} · SOL
                    </div>
                  </div>
                </div>
              </TableCell>

              {/* ===== GRAPH (CENTERED) ===== */}
              <TableCell className="w-[120px]">
                <div className="flex items-center justify-center h-full">
                  <MiniSparkline
                    data={row.history}
                    positive={row.change >= 0}
                  />
                </div>
              </TableCell>

              {/* ===== Market Cap ===== */}
              <TableCell className="w-[140px]">
                <div className="font-semibold">
                  ${row.marketCap.toLocaleString()}
                </div>
                <div
                  className={`text-xs ${
                    row.change >= 0 ? "text-green" : "text-red"
                  }`}
                >
                  {row.change.toFixed(2)}%
                </div>
              </TableCell>

              {/* ===== Liquidity ===== */}
              <TableCell className="w-[140px] font-semibold">
                ${(row.marketCap * 0.55).toLocaleString()}
              </TableCell>

              {/* ===== Volume ===== */}
              <TableCell className="w-[140px] font-semibold">
                ${row.volume.toLocaleString()}
              </TableCell>

              {/* ===== TXNS ===== */}
              <TableCell className="w-[120px]">
                <div className="font-semibold">
                  {row.txns.buy + row.txns.sell}
                </div>
                <div className="text-xs">
                  <span className="text-green">{row.txns.buy}</span>{" "}
                  /{" "}
                  <span className="text-red">{row.txns.sell}</span>
                </div>
              </TableCell>

              {/* ===== Action ===== */}
              <TableCell className="w-[120px] text-right">
                <button className="h-8 px-5 rounded-full bg-accent font-semibold hover:brightness-110 transition">
                  Buy
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
