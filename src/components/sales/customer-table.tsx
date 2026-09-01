"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown, Minus, MessageCircle } from "lucide-react";
import { Card, PanelHeader } from "@/components/ui/card";
import { Drawer } from "@/components/ui/drawer";
import { StatusChip } from "@/components/ui/status-chip";
import { topCustomers, customerDetails } from "@/lib/mock-data";

const TREND_ICON = { up: TrendingUp, down: TrendingDown, flat: Minus } as const;
const TREND_COLOR = { up: "text-primary", down: "text-critical", flat: "text-text-secondary" } as const;

export function CustomerTable() {
  const [active, setActive] = useState<string | null>(null);
  const detail = active ? customerDetails[active] : null;
  const summary = active ? topCustomers.find((c) => c.name === active) : null;

  return (
    <>
      <Card>
        <PanelHeader title="Top customers" action="Export" />
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
                <tr
                  key={c.name}
                  onClick={() => setActive(c.name)}
                  className="cursor-pointer transition-colors hover:bg-tint"
                >
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

      <Drawer open={!!active} onClose={() => setActive(null)} title={active ?? ""}>
        {detail && summary ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <StatusChip tone={detail.status === "At risk" ? "watch" : "ok"}>{detail.status}</StatusChip>
              <span className="text-[11px] text-text-secondary">{detail.segment}</span>
            </div>

            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-text-secondary">Identity</div>
              <div className="space-y-1.5 text-[12.5px]">
                <div className="flex justify-between"><span className="text-text-secondary">Phone / WhatsApp</span><span className="font-medium">{detail.phone}</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">Location</span><span className="font-medium">{detail.location}</span></div>
              </div>
            </div>

            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-text-secondary">Value</div>
              <div className="space-y-1.5 text-[12.5px]">
                <div className="flex justify-between"><span className="text-text-secondary">Lifetime sales</span><span className="font-medium">{detail.lifetimeSales}</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">Outstanding</span><span className="font-medium">{detail.outstanding}</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">Average order</span><span className="font-medium">{summary.avgOrder}</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">Normal interval</span><span className="font-medium">{detail.normalInterval}</span></div>
              </div>
            </div>

            <div className="rounded-2xl bg-tint p-4">
              <div className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-olive">AI insight</div>
              <p className="text-[12.5px] leading-relaxed text-deep">{detail.aiInsight}</p>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-deep py-3 text-[12.5px] font-semibold text-canvas">
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Contact via WhatsApp
            </button>
          </div>
        ) : null}
      </Drawer>
    </>
  );
}
