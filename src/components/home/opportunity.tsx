import { Card, PanelHeader } from "@/components/ui/card";
import { opportunity } from "@/lib/mock-data";

const ROWS: [string, string][] = [
  ["Expected production", `${opportunity.expectedProduction} trays`],
  ["Confirmed demand", `${opportunity.confirmedDemand} trays`],
  ["Potential excess", `${opportunity.potentialExcess} trays`],
  ["Estimated unsold value", opportunity.estimatedUnsoldValue],
  ["Likely buyers", `${opportunity.likelyBuyers} customers identified by AI`],
];

export function Opportunity() {
  return (
    <Card>
      <PanelHeader title="Tomorrow's opportunity" />
      <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {ROWS.map(([label, value]) => (
          <div key={label} className="flex items-baseline justify-between border-b border-border py-1.5 text-[12px]">
            <span className="text-text-secondary">{label}</span>
            <span className="font-display font-semibold text-deep">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2.5">
        <button className="rounded-full bg-deep px-4 py-2 text-[11.5px] font-semibold text-canvas">
          View Suggested Customers
        </button>
        <button className="rounded-full border border-border bg-card px-4 py-2 text-[11.5px] font-semibold text-primary">
          Launch WhatsApp Campaign
        </button>
      </div>
    </Card>
  );
}
