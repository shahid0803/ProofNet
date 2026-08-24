import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProofNet",
  description: "Phase 1 frontend-only shell for ProofNet"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
