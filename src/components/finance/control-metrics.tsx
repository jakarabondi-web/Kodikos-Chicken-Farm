import { mpesa } from "@/lib/mock-data";

const METRICS = [
  { label: "M-Pesa balance", value: "KSh 1.82M" },
  { label: "Today's receipts", value: mpesa.receipts },
  { label: "Today's payouts", value: "KSh 269,800" },
  { label: "Pending reconciliation", value: mpesa.pending },
  { label: "Unmatched", value: mpesa.unmatched },
  { label: "Failed payments", value: "0" },
  { label: "Receivables", value: "KSh 84,100" },
  { label: "Payables", value: "KSh 397,000" },
];

export function ControlMetrics() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {METRICS.map((m) => (
        <div key={m.label} className="rounded-2xl border border-border bg-card p-4 shadow-[0_8px_20px_rgba(32,64,47,0.05)]">
          <div className="text-[10px] font-bold uppercase tracking-wide text-text-secondary">{m.label}</div>
          <div className="font-display mt-1.5 text-[18px] font-semibold text-deep">{m.value}</div>
        </div>
      ))}
    </div>
  );
}
