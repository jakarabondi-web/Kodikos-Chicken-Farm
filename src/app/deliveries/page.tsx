import { Header } from "@/components/app-shell/header";
import { Card, PanelHeader } from "@/components/ui/card";
import { StatusChip } from "@/components/ui/status-chip";
import { deliveries } from "@/lib/mock-data";

const TONE = { Loading: "watch", "In transit": "info", Scheduled: "neutral" } as const;

export default function DeliveriesPage() {
  return (
    <>
      <Header
        eyebrow="Deliveries"
        title="138 trays, three routes."
        subtitle="Today's dispatch board — driver, stops, and estimated arrival."
      />
      <div className="mt-6 flex min-w-0 flex-col gap-5 px-6 sm:px-10">
        {deliveries.map((d) => (
          <Card key={d.route}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <PanelHeader title={d.route} className="mb-3.5 flex-1" />
              <StatusChip tone={TONE[d.status]}>{d.status}</StatusChip>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-4 text-[12.5px] sm:grid-cols-4">
              <div><div className="text-text-secondary">Stops</div><div className="font-semibold">{d.stops}</div></div>
              <div><div className="text-text-secondary">Trays</div><div className="font-semibold">{d.trays}</div></div>
              <div><div className="text-text-secondary">Driver</div><div className="font-semibold">{d.driver}</div></div>
              <div><div className="text-text-secondary">ETA</div><div className="font-semibold">{d.eta}</div></div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
