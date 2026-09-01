import { Header } from "@/components/app-shell/header";
import { ProductionChart } from "@/components/production/production-chart";
import { HouseTable } from "@/components/home/house-table";
import { BusinessFlow } from "@/components/home/business-flow";

export default function ProductionPage() {
  return (
    <>
      <Header
        eyebrow="Production"
        title="Every tray, tracked."
        subtitle="Actual output against target and the 30-day moving average, house by house."
      />
      <div className="mt-6 flex min-w-0 flex-col gap-5 px-6 sm:px-10">
        <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-8">
            <ProductionChart />
          </div>
          <div className="min-w-0 lg:col-span-4">
            <HouseTable />
          </div>
        </div>
        <BusinessFlow />
      </div>
    </>
  );
}
