import { Header } from "@/components/app-shell/header";
import { KpiStrip } from "@/components/home/kpi-strip";
import { HouseTable } from "@/components/home/house-table";
import { FeedSecurity } from "@/components/home/feed-security";
import { Priorities } from "@/components/home/priorities";
import { CashFlowPanel } from "@/components/home/cash-flow-panel";
import { BusinessFlow } from "@/components/home/business-flow";
import { SalesSummary } from "@/components/home/sales-summary";
import { MpesaWidget } from "@/components/home/mpesa-widget";
import { Opportunity } from "@/components/home/opportunity";
import { TopCustomers } from "@/components/home/top-customers";
import { SinceAway } from "@/components/home/since-away";
import { QuickActions } from "@/components/home/quick-actions";

export default function HomePage() {
  return (
    <>
      <Header
        eyebrow="Tuesday, September 1 · 06:45 EAT"
        title={
          <>
            Good morning, <i className="font-light italic text-olive">Vincent.</i>
          </>
        }
        subtitle="The flock is healthy, cash is moving, and eleven customers look ready to reorder."
      />

      <div className="mt-6 flex min-w-0 flex-col gap-5 px-6 sm:px-10">
        <KpiStrip />

        <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-8">
            <HouseTable />
          </div>
          <div className="min-w-0 lg:col-span-4">
            <Priorities />
          </div>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <FeedSecurity />
          </div>
          <div className="min-w-0 lg:col-span-7">
            <CashFlowPanel />
          </div>
        </div>

        <BusinessFlow />

        <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <SalesSummary />
          </div>
          <div className="min-w-0 lg:col-span-5">
            <MpesaWidget />
          </div>
        </div>

        <Opportunity />

        <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <TopCustomers />
          </div>
          <div className="min-w-0 lg:col-span-5">
            <SinceAway />
          </div>
        </div>

        <QuickActions />
      </div>
    </>
  );
}
