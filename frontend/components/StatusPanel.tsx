import type { StatusStep } from "@/types/proofnet";

interface StatusPanelProps {
  steps: StatusStep[];
}

export function StatusPanel({ steps }: StatusPanelProps) {
  return (
    <section className="panel p-6">
      <h2 className="text-xl font-semibold text-white">Verification Status</h2>
      <p className="mt-2 text-sm text-slate-400">Intended ProofNet pipeline (frontend preview).</p>

      <ol className="mt-5 space-y-3">
        {steps.map((step) => (
          <li key={step.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <span className="text-sm text-slate-200">{step.label}</span>
            <span className={`text-xs ${step.complete ? "text-emerald-300" : "text-slate-400"}`}>
              {step.complete ? "Complete" : "Pending"}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
