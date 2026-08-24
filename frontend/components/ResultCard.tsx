import type { ProofResult } from "@/types/proofnet";

interface ResultCardProps {
  result: ProofResult;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 py-2 last:border-b-0">
      <span className="text-sm text-slate-400">{label}</span>
      <span className="text-sm text-slate-200">{value}</span>
    </div>
  );
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <section className="panel p-6">
      <h2 className="text-xl font-semibold text-white">Final Result</h2>
      <p className="mt-2 text-sm text-slate-400">Placeholder output for Phase 1.</p>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-xs uppercase text-slate-500">Decision</div>
          <div className="mt-1 text-lg font-semibold text-white">{result.decision}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-xs uppercase text-slate-500">Confidence</div>
          <div className="mt-1 text-lg font-semibold text-white">{result.confidence}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-xs uppercase text-slate-500">Agreement</div>
          <div className="mt-1 text-lg font-semibold text-white">{result.agreement}</div>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 px-4">
        <Row label="Verifiers" value={result.verifiers} />
        <Row label="Proof hash" value={result.proofHash} />
        <Row label="Blockchain status" value={result.blockchainStatus} />
      </div>
    </section>
  );
}
