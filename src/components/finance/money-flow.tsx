import { ArrowRight } from "lucide-react";
import { Card, PanelHeader } from "@/components/ui/card";

const STEPS = ["Customer", "Order", "Invoice", "M-Pesa", "Reconciliation", "Ledger"];

export function MoneyFlow() {
  return (
    <Card>
      <PanelHeader title="Money flow" />
      <div className="flex flex-wrap items-center gap-1.5">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-1.5">
            <div className="rounded-full bg-tint px-3.5 py-2 text-[11.5px] font-semibold text-deep">{s}</div>
            {i < STEPS.length - 1 && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-olive" strokeWidth={2} />}
          </div>
        ))}
      </div>
    </Card>
  );
}
