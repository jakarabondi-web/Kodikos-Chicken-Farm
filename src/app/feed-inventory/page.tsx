import { Header } from "@/components/app-shell/header";
import { FeedDetailTable } from "@/components/feed/feed-detail-table";

export default function FeedInventoryPage() {
  return (
    <>
      <Header
        eyebrow="Feed & Inventory"
        title="3.4 days, and counting."
        subtitle="Days remaining first, quantities second — with a forecast for when to reorder."
      />
      <div className="mt-6 flex min-w-0 flex-col gap-5 px-6 sm:px-10">
        <FeedDetailTable />
      </div>
    </>
  );
}
