import { Card, PanelHeader } from "@/components/ui/card";
import { StatusChip } from "@/components/ui/status-chip";
import { receivables } from "@/lib/mock-data";

const BUCKET_TONE = {
  Current: "ok",
  "7 days": "info",
  "14 days": "watch",
  "30+ days": "critical",
} as const;

export function CreditControl() {
  return (
    <Card>
      <PanelHeader title="Credit control" action="Accounts receivable" />
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {["Customer", "Amount", "Aging"].map((h) => (
              <th key={h} className="border-b border-border pb-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-text-secondary">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&>tr:last-child>td]:border-b-0">
          {receivables.map((r) => (
            <tr key={r.customer}>
              <td className="border-b border-border py-2.5 text-[12.5px] font-semibold">{r.customer}</td>
              <td className="font-display border-b border-border py-2.5 text-[13px] font-semibold text-deep">{r.amount}</td>
              <td className="border-b border-border py-2.5">
                <StatusChip tone={BUCKET_TONE[r.bucket]}>{r.bucket}</StatusChip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
