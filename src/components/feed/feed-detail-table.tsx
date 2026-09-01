import { Card, PanelHeader } from "@/components/ui/card";
import { StatusChip } from "@/components/ui/status-chip";
import { feedStock } from "@/lib/mock-data";

const STATUS_TONE = { Low: "watch", Monitor: "info", Healthy: "ok" } as const;

export function FeedDetailTable() {
  return (
    <Card>
      <PanelHeader title="Feed inventory" action="Generate purchase request" />
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {["Feed", "Days remaining", "Status", "Note"].map((h) => (
              <th key={h} className="border-b border-border pb-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-text-secondary">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&>tr:last-child>td]:border-b-0">
          {feedStock.map((f) => (
            <tr key={f.name}>
              <td className="border-b border-border py-3 text-[12.5px] font-semibold">{f.name}</td>
              <td className="font-display border-b border-border py-3 text-[16px] font-semibold text-deep">{f.daysRemaining}d</td>
              <td className="border-b border-border py-3">
                <StatusChip tone={STATUS_TONE[f.status]}>{f.status}</StatusChip>
              </td>
              <td className="border-b border-border py-3 text-[12px] text-text-secondary">{f.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
