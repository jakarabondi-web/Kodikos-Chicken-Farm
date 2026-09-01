import { Header } from "@/components/app-shell/header";
import { FarmMap } from "@/components/live-farm/farm-map";
import { HouseTable } from "@/components/home/house-table";
import { FeedSecurity } from "@/components/home/feed-security";

export default function LiveFarmPage() {
  return (
    <>
      <Header
        eyebrow="Live Farm"
        title="The whole farm, at a glance."
        subtitle="Four houses, one feed store, watched gently. Click any building for the full picture."
      />
      <div className="mt-6 flex min-w-0 flex-col gap-5 px-6 sm:px-10">
        <FarmMap />
        <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <HouseTable />
          </div>
          <div className="min-w-0 lg:col-span-5">
            <FeedSecurity />
          </div>
        </div>
      </div>
    </>
  );
}
