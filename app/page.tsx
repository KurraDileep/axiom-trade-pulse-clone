"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TokenTable from "@/components/tokens/TokenTable";
import TokenTableSkeleton from "@/components/tokens/TokenTableSkeleton";
import TokenTableError from "@/components/tokens/TokenTableError";

export default function HomePage() {
  const [tab, setTab] = useState("new");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Show skeleton & random error
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    const timer = setTimeout(() => {
      if (Math.random() < 0.2) {
        setHasError(true);
      } else {
        setHasError(false);
      }
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [tab]);

  const retry = () => {
    setTab(tab);
  };

  return (
    <main className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">Token Discovery</h1>

      {/* Tabs */}
      <div className="flex gap-3 border-b mb-6 pb-3">
        <Button
          variant={tab === "new" ? "default" : "outline"}
          onClick={() => setTab("new")}
        >
          New Pairs
        </Button>

        <Button
          variant={tab === "final" ? "default" : "outline"}
          onClick={() => setTab("final")}
        >
          Final Stretch
        </Button>

        <Button
          variant={tab === "migrated" ? "default" : "outline"}
          onClick={() => setTab("migrated")}
        >
          Migrated
        </Button>
      </div>

      {/* ⭐ Updated Table Wrapper (shadow + responsive) */}
      <div className="overflow-x-auto">
        <div className="border rounded-xl p-6 shadow-sm bg-white min-h-[250px]">

          {isLoading ? (
            <TokenTableSkeleton />
          ) : hasError ? (
            <TokenTableError onRetry={retry} />
          ) : (
            <>
              {tab === "new" && <TokenTable />}
              {tab === "final" && <TokenTable />}
              {tab === "migrated" && <TokenTable />}
            </>
          )}

        </div>
      </div>
    </main>
  );
}
