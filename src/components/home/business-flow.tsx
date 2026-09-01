import { ArrowRight } from "lucide-react";
import { Card, PanelHeader } from "@/components/ui/card";
import { flow } from "@/lib/mock-data";

const STEPS = [
  { label: "Production", value: `${flow.trays.toLocaleString()} trays` },
  { label: "Orders", value: `${flow.orders}` },
  { label: "Deliveries", value: `${flow.deliveries}` },
  { label: "Payments", value: `${flow.payments}` },
  { label: "Cash In", value: flow.cashIn },
];

export function BusinessFlow() {
  return (
    <Card>
      <PanelHeader title="Farm output becoming money" />
      <div className="flex items-center gap-1.5 overflow-x-auto">
        {STEPS.map((s, i) => (
          <div key={s.label} className="flex items-center gap-1.5">
            <div className="min-w-[92px] rounded-xl bg-tint px-3 py-2.5 text-center">
              <div className="text-[9.5px] font-bold uppercase tracking-wide text-text-secondary">{s.label}</div>
              <div className="font-display mt-1 text-[13px] font-semibold text-deep">{s.value}</div>
            </div>
            {i < STEPS.length - 1 && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-olive" strokeWidth={2} />}
          </div>
        ))}
      </div>
    </Card>
  );
}
