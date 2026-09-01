import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, PanelHeader } from "@/components/ui/card";
import { topCustomers } from "@/lib/mock-data";

const TREND_ICON = { up: TrendingUp, down: TrendingDown, flat: Minus } as const;
const TREND_COLOR = { up: "text-primary", down: "text-critical", flat: "text-text-secondary" } as const;

export function TopCustomers() {
  return (
    <Card>
      <PanelHeader title="Top customers" action="Open Sales" />
      <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse">
        <thead>
          <tr>
            {["Customer", "Sales", "Orders", "Avg. order", "Last order", "Trend"].map((h) => (
              <th
                key={h}
                className="border-b border-border pb-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-text-secondary"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&>tr:last-child>td]:border-b-0">
          {topCustomers.map((c) => {
            const Icon = TREND_ICON[c.trend];
            return (
              <tr key={c.name}>
                <td className="border-b border-border py-2.5 text-[12.5px] font-semibold">{c.name}</td>
                <td className="font-display border-b border-border py-2.5 text-[13px] font-semibold text-deep">
                  {c.sales}
                </td>
                <td className="border-b border-border py-2.5 text-[12px] text-text-secondary">{c.orders}</td>
                <td className="border-b border-border py-2.5 text-[12px] text-text-secondary">{c.avgOrder}</td>
                <td className="border-b border-border py-2.5 text-[12px] text-text-secondary">{c.lastOrder}</td>
                <td className="border-b border-border py-2.5">
                  <Icon className={`h-4 w-4 ${TREND_COLOR[c.trend]}`} strokeWidth={2.2} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </Card>
  );
}
