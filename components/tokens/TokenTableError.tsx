import { Button } from "@/components/ui/button";

export default function TokenTableError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <p className="text-red-500 font-semibold mb-3">
        Failed to load table data.
      </p>
      <Button onClick={onRetry}>Retry</Button>
    </div>
  );
}
