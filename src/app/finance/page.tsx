import { Header } from "@/components/app-shell/header";
import { ControlMetrics } from "@/components/finance/control-metrics";
import { MoneyFlow } from "@/components/finance/money-flow";
import { TransactionTable } from "@/components/finance/transaction-table";
import { ExecutiveMovement } from "@/components/finance/executive-movement";
import { Profitability } from "@/components/finance/profitability";
import { CreditControl } from "@/components/finance/credit-control";
import { Procurement } from "@/components/finance/procurement";

export default function FinancePage() {
  return (
    <>
      <Header
        eyebrow="M-Pesa & Finance"
        title="Every shilling, accounted for."
        subtitle="Reconciliation, money movement, profitability, and procurement — evidence-based, always."
      />
      <div className="mt-6 flex min-w-0 flex-col gap-5 px-6 sm:px-10">
        <ControlMetrics />
        <MoneyFlow />
        <TransactionTable />
        <ExecutiveMovement />
        <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <Profitability />
          </div>
          <div className="min-w-0 lg:col-span-5">
            <CreditControl />
          </div>
        </div>
        <Procurement />
      </div>
    </>
  );
}
