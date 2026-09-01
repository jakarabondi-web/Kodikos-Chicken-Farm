import { Card, PanelHeader } from "@/components/ui/card";
import { profitability } from "@/lib/mock-data";

export function Profitability() {
  return (
    <Card>
      <PanelHeader title="Profitability" action="Farm / House / Flock / Product / Customer" />
      <div className="mb-5 grid grid-cols-3 gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wide text-text-secondary">Revenue</div>
          <div className="font-display mt-1 text-[19px] font-semibold text-deep">{profitability.revenue}</div>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wide text-text-secondary">Gross profit</div>
          <div className="font-display mt-1 text-[19px] font-semibold text-deep">{profitability.grossProfit}</div>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wide text-text-secondary">Margin</div>
          <div className="font-display mt-1 text-[19px] font-semibold text-deep">
            {profitability.margin} <span className="text-[11px] font-sans font-semibold text-primary">{profitability.marginDelta}</span>
          </div>
        </div>
      </div>
      <div className="space-y-2.5">
        {profitability.expenses.map((e) => (
          <div key={e.category}>
            <div className="mb-1 flex items-baseline justify-between text-[12px]">
              <span className="font-semibold">{e.category}</span>
              <span className="text-text-secondary">{e.amount}</span>
            </div>
            <div className="h-[6px] overflow-hidden rounded-full bg-tint">
              <div className="h-full rounded-full bg-clay" style={{ width: `${e.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
