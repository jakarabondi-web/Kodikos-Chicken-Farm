import Link from "next/link";
import { Card, PanelHeader } from "@/components/ui/card";

const STATS: [string, string][] = [
  ["Sales today", "KSh 184,400"],
  ["Month to date", "KSh 5.04M"],
  ["Target", "KSh 5.4M"],
  ["Avg. order", "KSh 10,900"],
  ["New customers", "6 this week"],
  ["Retention", "82%"],
];

export function SalesSummary() {
  return (
    <Card>
      <PanelHeader title="Sales intelligence" action={<Link href="/sales">Open Sales</Link>} />
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
        {STATS.map(([label, value]) => (
          <div key={label}>
            <div className="text-[10px] font-bold uppercase tracking-wide text-text-secondary">{label}</div>
            <div className="font-display mt-1 text-[16px] font-semibold text-deep">{value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
