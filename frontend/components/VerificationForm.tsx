"use client";

import { useState } from "react";
import type { VerificationRequest } from "@/types/proofnet";

interface VerificationFormProps {
  onSubmit: (request: VerificationRequest) => void;
}

export function VerificationForm({ onSubmit }: VerificationFormProps) {
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!question.trim()) return;
    onSubmit({ question: question.trim(), context: context.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className="panel p-6">
      <h2 className="text-xl font-semibold text-white">Verification Input</h2>
      <p className="mt-2 text-sm text-slate-400">Phase 1 captures request details locally only.</p>

      <label className="mt-5 block text-sm text-slate-300" htmlFor="question">
        Question / request
      </label>
      <textarea
        id="question"
        className="input mt-2 min-h-28 resize-y"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        placeholder="Describe the AI decision to verify..."
      />

      <label className="mt-4 block text-sm text-slate-300" htmlFor="context">
        Optional context
      </label>
      <textarea
        id="context"
        className="input mt-2 min-h-24 resize-y"
        value={context}
        onChange={(event) => setContext(event.target.value)}
        placeholder="Add policy, constraints, or background details..."
      />

      <button type="submit" className="button-primary mt-5" disabled={!question.trim()}>
        Verify an AI Decision
      </button>
    </form>
  );
}
