import TokenTable from "@/components/tokens/TokenTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-xl font-semibold mb-4">Token Discovery</h1>
      <TokenTable />
    </main>
  );
}

