"use client";

import { useMemo, useState } from "react";
import { Card, PanelHeader } from "@/components/ui/card";
import { Drawer } from "@/components/ui/drawer";
import { StatusChip } from "@/components/ui/status-chip";
import { transactions } from "@/lib/mock-data";
import { cn } from "@/lib/cn";

const FILTERS = ["All", "Incoming", "Outgoing", "Matched", "Unmatched", "Pending"] as const;

export function TransactionTable() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [active, setActive] = useState<(typeof transactions)[number] | null>(null);

  const rows = useMemo(() => {
    if (filter === "All") return transactions;
    if (filter === "Incoming" || filter === "Outgoing") return transactions.filter((t) => t.type === filter);
    return transactions.filter((t) => t.status === filter);
  }, [filter]);

  return (
    <>
      <Card>
        <PanelHeader title="Transactions" />
        <div className="mb-4 flex flex-wrap gap-1.5">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors",
                filter === f ? "bg-deep text-canvas" : "bg-tint text-text-secondary hover:bg-[rgba(77,141,85,0.16)]"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              {["Date", "M-Pesa ID", "Party", "Type", "Amount", "Status"].map((h) => (
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
            {rows.map((t) => (
              <tr key={t.id} onClick={() => setActive(t)} className="cursor-pointer transition-colors hover:bg-tint">
                <td className="border-b border-border py-2.5 text-[12px] text-text-secondary">{t.date}</td>
                <td className="border-b border-border py-2.5 text-[12px] text-text-secondary">{t.id}</td>
                <td className="border-b border-border py-2.5 text-[12.5px] font-semibold">{t.party}</td>
                <td className="border-b border-border py-2.5 text-[12px] text-text-secondary">{t.type}</td>
                <td className="font-display border-b border-border py-2.5 text-[13px] font-semibold text-deep">
                  {t.amount}
                </td>
                <td className="border-b border-border py-2.5">
                  <StatusChip tone={t.status === "Matched" ? "ok" : "watch"}>{t.status}</StatusChip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </Card>

      <Drawer open={!!active} onClose={() => setActive(null)} title={active?.id ?? ""}>
        {active ? (
          <div className="space-y-4 text-[12.5px]">
            <div className="flex justify-between"><span className="text-text-secondary">Party</span><span className="font-semibold">{active.party}</span></div>
            <div className="flex justify-between"><span className="text-text-secondary">Date</span><span className="font-semibold">{active.date}</span></div>
            <div className="flex justify-between"><span className="text-text-secondary">Type</span><span className="font-semibold">{active.type}</span></div>
            <div className="flex justify-between"><span className="text-text-secondary">Amount</span><span className="font-display font-semibold text-deep">{active.amount}</span></div>
            <div className="flex justify-between items-center"><span className="text-text-secondary">Status</span><StatusChip tone={active.status === "Matched" ? "ok" : "watch"}>{active.status}</StatusChip></div>
            <div className="rounded-2xl bg-tint p-4 text-[11.5px] leading-relaxed text-text-secondary">
              Reconciled against order reference and expected invoice amount. No exception flagged.
            </div>
          </div>
        ) : null}
      </Drawer>
    </>
  );
}
