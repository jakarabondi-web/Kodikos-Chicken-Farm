import { Header } from "@/components/app-shell/header";
import { ProductionChart } from "@/components/production/production-chart";
import { CashFlowPanel } from "@/components/home/cash-flow-panel";
import { Profitability } from "@/components/finance/profitability";
import { Segments } from "@/components/sales/segments";

export default function ReportsPage() {
  return (
    <>
      <Header
        eyebrow="Reports & Analytics"
        title="Every number, one story."
        subtitle="Production, cash, profitability, and customer mix — the farm's full picture."
      />
      <div className="mt-6 flex min-w-0 flex-col gap-5 px-6 sm:px-10">
        <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-8">
            <ProductionChart />
          </div>
          <div className="min-w-0 lg:col-span-4">
            <CashFlowPanel />
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <Profitability />
          </div>
          <div className="min-w-0 lg:col-span-5">
            <Segments />
          </div>
        </div>
      </div>
    </>
  );
}
