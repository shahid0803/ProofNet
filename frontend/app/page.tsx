"use client";

import { useMemo, useState } from "react";
import { ResultCard } from "@/components/ResultCard";
import { StatusPanel } from "@/components/StatusPanel";
import { VerificationForm } from "@/components/VerificationForm";
import type { ProofResult, StatusStep, VerificationRequest } from "@/types/proofnet";

const stepsTemplate: StatusStep[] = [
  { id: "request", label: "Request received", complete: false },
  { id: "verifier-1", label: "Verifier 1 evaluates claim", complete: false },
  { id: "verifier-2", label: "Verifier 2 evaluates claim", complete: false },
  { id: "verifier-3", label: "Verifier 3 evaluates claim", complete: false },
  { id: "evidence", label: "Evidence evaluated", complete: false },
  { id: "consensus", label: "Consensus calculated", complete: false },
  { id: "proof", label: "Proof hash generated", complete: false },
  { id: "chain", label: "Blockchain status recorded", complete: false }
];

const placeholderResult: ProofResult = {
  decision: "UNDECIDED",
  confidence: "--",
  agreement: "--",
  verifiers: "3",
  proofHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
  blockchainStatus: "Not connected"
};

export default function Home() {
  const [request, setRequest] = useState<VerificationRequest | null>(null);
  const [steps, setSteps] = useState<StatusStep[]>(stepsTemplate);

  const submittedText = useMemo(() => request?.question || "No request submitted yet.", [request]);

  const handleSubmit = (nextRequest: VerificationRequest) => {
    setRequest(nextRequest);
    setSteps(stepsTemplate.map((step, index) => ({ ...step, complete: index === 0 })));
  };

  return (
    <main className="min-h-screen px-4 py-10 md:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="panel p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-300">ProofNet · Phase 1</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">AI should prove before it acts.</h1>
          <p className="mt-4 max-w-3xl text-slate-400">
            Frontend-only shell for submitting a verification request, previewing pipeline status, and viewing final result structure.
          </p>
          <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
            Current request: {submittedText}
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <VerificationForm onSubmit={handleSubmit} />
            <ResultCard result={placeholderResult} />
          </div>
          <StatusPanel steps={steps} />
        </section>
      </div>
    </main>
  );
}
