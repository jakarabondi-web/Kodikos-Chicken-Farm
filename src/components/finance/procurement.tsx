import { ArrowRight } from "lucide-react";
import { Card, PanelHeader } from "@/components/ui/card";
import { StatusChip } from "@/components/ui/status-chip";
import { procurementRequests } from "@/lib/mock-data";

const STAGES = ["Request", "Approve", "Purchase", "Receive", "Inventory"];

export function Procurement() {
  return (
    <Card>
      <PanelHeader title="Procurement control" />
      <div className="mb-5 flex flex-wrap items-center gap-1.5">
        {STAGES.map((s, i) => (
          <div key={s} className="flex items-center gap-1.5">
            <div className="rounded-full bg-tint px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-wide text-deep">{s}</div>
            {i < STAGES.length - 1 && <ArrowRight className="h-3 w-3 shrink-0 text-olive" strokeWidth={2} />}
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {procurementRequests.map((r) => (
          <div key={r.item} className="rounded-xl border border-border p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[13px] font-semibold">{r.item}</div>
              <StatusChip tone={r.status === "Approved" ? "ok" : "watch"}>{r.status}</StatusChip>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11.5px] sm:grid-cols-5">
              <div><div className="text-text-secondary">Qty</div><div className="font-semibold">{r.qty}</div></div>
              <div><div className="text-text-secondary">Unit cost</div><div className="font-semibold">{r.unitCost}</div></div>
              <div><div className="text-text-secondary">Total</div><div className="font-semibold">{r.total}</div></div>
              <div><div className="text-text-secondary">Previous</div><div className="font-semibold">{r.previous}</div></div>
              <div><div className="text-text-secondary">Change</div><div className="font-semibold text-amber">{r.change}</div></div>
            </div>
            {r.status === "Pending" && (
              <div className="mt-3 flex gap-2">
                <button className="rounded-full bg-deep px-3.5 py-1.5 text-[11px] font-semibold text-canvas">Approve</button>
                <button className="rounded-full border border-border px-3.5 py-1.5 text-[11px] font-semibold text-text-secondary">Reject</button>
                <button className="rounded-full border border-border px-3.5 py-1.5 text-[11px] font-semibold text-primary">Request alternative quote</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
