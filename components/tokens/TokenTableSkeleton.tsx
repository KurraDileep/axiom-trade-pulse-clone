import { Skeleton } from "@/components/ui/skeleton";

export default function TokenTableSkeleton() {
  return (
    <div className="space-y-4">
      {/* simulate table header */}
      <div className="grid grid-cols-5 gap-4">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>

      {/* simulate 5 rows */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="grid grid-cols-5 gap-4">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
        </div>
      ))}
    </div>
  );
}
