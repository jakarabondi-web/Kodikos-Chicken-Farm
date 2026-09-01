import { Header } from "@/components/app-shell/header";
import { Card, PanelHeader } from "@/components/ui/card";
import { StatusChip } from "@/components/ui/status-chip";
import { Profitability } from "@/components/finance/profitability";
import { expenseRequests } from "@/lib/mock-data";

export default function ExpensesPage() {
  return (
    <>
      <Header
        eyebrow="Expenses"
        title="Where the money goes."
        subtitle="Requests awaiting approval, and the categories driving spend."
      />
      <div className="mt-6 flex min-w-0 flex-col gap-5 px-6 sm:px-10">
        <Card>
          <PanelHeader title="Expense requests" action="Request Expense" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  {["Item", "Category", "Amount", "Requested by", "Status"].map((h) => (
                    <th key={h} className="border-b border-border pb-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-text-secondary">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&>tr:last-child>td]:border-b-0">
                {expenseRequests.map((e) => (
                  <tr key={e.item}>
                    <td className="border-b border-border py-3 text-[12.5px] font-semibold">{e.item}</td>
                    <td className="border-b border-border py-3 text-[12px] text-text-secondary">{e.category}</td>
                    <td className="font-display border-b border-border py-3 text-[13px] font-semibold text-deep">{e.amount}</td>
                    <td className="border-b border-border py-3 text-[12px] text-text-secondary">{e.requestedBy}</td>
                    <td className="border-b border-border py-3">
                      <StatusChip tone={e.status === "Approved" ? "ok" : "watch"}>{e.status}</StatusChip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Profitability />
      </div>
    </>
  );
}
