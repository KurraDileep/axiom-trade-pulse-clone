"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const tokenInfo: Record<string, { name: string; description: string }> = {
  BTC: {
    name: "Bitcoin",
    description: "The first and largest cryptocurrency by market cap.",
  },
  ETH: {
    name: "Ethereum",
    description: "Smart contract blockchain used worldwide.",
  },
  BNB: {
    name: "BNB",
    description: "Native token of Binance Chain ecosystem.",
  },
};

type TokenRow = {
  token: string;
  price: number;
  change: number;
  volume: number;
  marketCap: number;
  flash?: "up" | "down" | null;
};

const initialData: TokenRow[] = [
  { token: "BTC", price: 45000, change: 3.2, volume: 18000000000, marketCap: 850000000000 },
  { token: "ETH", price: 2400, change: -1.1, volume: 9000000000, marketCap: 290000000000 },
  { token: "BNB", price: 310, change: 0.5, volume: 2300000000, marketCap: 47000000000 },
];

type SortField = keyof Pick<TokenRow, "price" | "volume" | "marketCap">;

export default function TokenTable() {
  const [data, setData] = useState<TokenRow[]>(initialData);
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // ⭐ REAL-TIME PRICE UPDATE (WebSocket Mock)
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((row) => {
          const randomChange = (Math.random() - 0.5) * 50;
          const newPrice = row.price + randomChange;

          return {
            ...row,
            price: newPrice,
            flash: randomChange > 0 ? "up" : "down",
          };
        })
      );

      setTimeout(() => {
        setData((prev) => prev.map((row) => ({ ...row, flash: null })));
      }, 500);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Sorting Logic
  const sortData = (field: SortField) => {
    let order = sortOrder;

    if (sortField === field) {
      order = order === "asc" ? "desc" : "asc";
      setSortOrder(order);
    } else {
      setSortField(field);
      setSortOrder("asc");
      order = "asc";
    }

    const sorted = [...data].sort((a, b) =>
      order === "asc" ? a[field] - b[field] : b[field] - a[field]
    );

    setData(sorted);
  };

  const sortIcon = (field: SortField) =>
    sortField === field ? (sortOrder === "asc" ? "↑" : "↓") : "";

  return (
    <Table>
      {/* DESKTOP TABLE HEADER */}
      <TableHeader className="hidden md:table-header-group">
        <TableRow className="hover:bg-transparent">
          <TableHead className="py-4 text-gray-500 uppercase text-xs tracking-wide">Token</TableHead>
          <TableHead
            className="py-4 cursor-pointer select-none text-gray-500 uppercase text-xs tracking-wide"
            onClick={() => sortData("price")}
          >
            Price {sortIcon("price")}
          </TableHead>
          <TableHead className="py-4 text-gray-500 uppercase text-xs tracking-wide">
            24h Change
          </TableHead>
          <TableHead
            className="py-4 cursor-pointer select-none text-gray-500 uppercase text-xs tracking-wide"
            onClick={() => sortData("volume")}
          >
            Volume {sortIcon("volume")}
          </TableHead>
          <TableHead
            className="py-4 cursor-pointer select-none text-gray-500 uppercase text-xs tracking-wide"
            onClick={() => sortData("marketCap")}
          >
            Market Cap {sortIcon("marketCap")}
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.token}
            className="hover:bg-gray-50 transition-colors"
          >
            {/* ⭐ MOBILE CARD LAYOUT (0-768px) */}
            <TableCell className="block md:hidden py-4">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-blue-600">{row.token}</span>

                <span
                  className={`
                    font-medium
                    ${row.flash === "up" ? "bg-green-200 transition-all" : ""}
                    ${row.flash === "down" ? "bg-red-200 transition-all" : ""}
                  `}
                >
                  ${row.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>

              <div className="text-sm text-gray-600 space-y-1">
                <div>
                  <strong>24h: </strong>
                  <span className={row.change >= 0 ? "text-green-600" : "text-red-600"}>
                    {row.change}%
                  </span>
                </div>
                <div><strong>Vol: </strong>${row.volume.toLocaleString()}</div>
                <div><strong>Cap: </strong>${row.marketCap.toLocaleString()}</div>
              </div>
            </TableCell>

            {/* ⭐ DESKTOP COLUMNS */}
            {/* TOKEN CELL */}
            <TableCell className="py-4 font-medium hidden md:table-cell">
              <TooltipProvider>
                <Popover>
                  <PopoverTrigger asChild>
                    <span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
                            {row.token}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{tokenInfo[row.token]?.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </span>
                  </PopoverTrigger>

                  <PopoverContent className="w-64">
                    <h3 className="font-semibold mb-2">
                      {tokenInfo[row.token]?.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {tokenInfo[row.token]?.description}
                    </p>

                    <p className="text-sm">
                      <strong>Price:</strong> ${row.price.toLocaleString()}
                    </p>

                    <p className="text-sm">
                      <strong>Market Cap:</strong> ${row.marketCap.toLocaleString()}
                    </p>
                  </PopoverContent>
                </Popover>
              </TooltipProvider>
            </TableCell>

            {/* PRICE CELL */}
            <TableCell
              className={`
                py-4 hidden md:table-cell
                ${row.flash === "up" ? "bg-green-200 transition-all" : ""}
                ${row.flash === "down" ? "bg-red-200 transition-all" : ""}
              `}
            >
              ${row.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </TableCell>

            <TableCell className={`py-4 hidden md:table-cell ${row.change >= 0 ? "text-green-500" : "text-red-500"}`}>
              {row.change}%
            </TableCell>

            <TableCell className="py-4 hidden md:table-cell">
              ${row.volume.toLocaleString()}
            </TableCell>

            <TableCell className="py-4 hidden md:table-cell">
              ${row.marketCap.toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
