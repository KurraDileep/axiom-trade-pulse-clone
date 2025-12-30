import Header from "@/components/Header";
import TokenTable from "@/components/tokens/TokenTable";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="px-6 pt-6">
        <h1 className="text-2xl font-semibold mb-4">Token Discovery</h1>
        <TokenTable />
      </section>
    </main>
  );
}
