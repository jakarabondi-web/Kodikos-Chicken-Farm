import { Header } from "@/components/app-shell/header";
import { Card, PanelHeader } from "@/components/ui/card";
import { StatusChip } from "@/components/ui/status-chip";
import { orders } from "@/lib/mock-data";

const TONE = {
  Delivered: "ok",
  "In transit": "info",
  Queued: "watch",
  Confirmed: "info",
  Pending: "watch",
} as const;

export default function OrdersPage() {
  return (
    <>
      <Header
        eyebrow="Orders"
        title="27 open, 12 due today."
        subtitle="From confirmation to dispatch — every order, on one board."
      />
      <div className="mt-6 flex min-w-0 flex-col gap-5 px-6 sm:px-10">
        <Card>
          <PanelHeader title="Open orders" action="New Order" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr>
                  {["Order", "Customer", "Trays", "Value", "Due", "Status"].map((h) => (
                    <th key={h} className="border-b border-border pb-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-text-secondary">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&>tr:last-child>td]:border-b-0">
                {orders.map((o) => (
                  <tr key={o.id}>
                    <td className="border-b border-border py-3 text-[12px] text-text-secondary">{o.id}</td>
                    <td className="border-b border-border py-3 text-[12.5px] font-semibold">{o.customer}</td>
                    <td className="border-b border-border py-3 text-[12px] text-text-secondary">{o.trays}</td>
                    <td className="font-display border-b border-border py-3 text-[13px] font-semibold text-deep">{o.value}</td>
                    <td className="border-b border-border py-3 text-[12px] text-text-secondary">{o.due}</td>
                    <td className="border-b border-border py-3">
                      <StatusChip tone={TONE[o.status]}>{o.status}</StatusChip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
}
