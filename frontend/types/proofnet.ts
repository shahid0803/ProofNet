export interface VerificationRequest {
  question: string;
  context: string;
}

export interface StatusStep {
  id: string;
  label: string;
  complete: boolean;
}

export interface ProofResult {
  decision: string;
  confidence: string;
  agreement: string;
  verifiers: string;
  proofHash: string;
  blockchainStatus: string;
}
