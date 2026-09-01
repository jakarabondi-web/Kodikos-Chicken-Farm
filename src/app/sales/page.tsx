import { Header } from "@/components/app-shell/header";
import { SalesSummary } from "@/components/home/sales-summary";
import { Opportunity } from "@/components/home/opportunity";
import { CustomerTable } from "@/components/sales/customer-table";
import { Pipeline } from "@/components/sales/pipeline";
import { Segments } from "@/components/sales/segments";

export default function SalesPage() {
  return (
    <>
      <Header
        eyebrow="Sales & Customers"
        title="Who's buying, and who's about to."
        subtitle="Sales performance, tomorrow's opportunity, and every customer relationship in one place."
      />
      <div className="mt-6 flex min-w-0 flex-col gap-5 px-6 sm:px-10">
        <SalesSummary />
        <Opportunity />
        <CustomerTable />
        <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <Pipeline />
          </div>
          <div className="min-w-0 lg:col-span-5">
            <Segments />
          </div>
        </div>
      </div>
    </>
  );
}
