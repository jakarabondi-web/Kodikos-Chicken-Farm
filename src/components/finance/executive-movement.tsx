import { Card, PanelHeader } from "@/components/ui/card";

const DESTINATIONS = [
  { label: "Feed", value: "KSh 620,000" },
  { label: "Payroll", value: "KSh 310,000" },
  { label: "Transport", value: "KSh 140,000" },
  { label: "Veterinary", value: "KSh 95,000" },
  { label: "Operations", value: "KSh 85,000" },
  { label: "Cash Reserve", value: "KSh 480,000" },
];

export function ExecutiveMovement() {
  return (
    <Card>
      <PanelHeader title="Executive money movement" action="Customers → M-Pesa → Reserve" />
      <div className="flex items-center gap-6">
        <div className="shrink-0 rounded-2xl bg-deep px-5 py-6 text-center text-canvas">
          <div className="font-display text-[22px] font-semibold">KSh 1.7M</div>
          <div className="mt-1 text-[10px] uppercase tracking-wide text-[#9DBBA8]">Customers</div>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-olive to-border" />
        <div className="shrink-0 rounded-2xl bg-primary px-5 py-6 text-center text-canvas">
          <div className="font-display text-[22px] font-semibold">KSh 1.73M</div>
          <div className="mt-1 text-[10px] uppercase tracking-wide text-[#E4F0DF]">M-Pesa</div>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-olive" />
        <div className="grid shrink-0 grid-cols-2 gap-2">
          {DESTINATIONS.map((d) => (
            <div key={d.label} className="rounded-xl bg-tint px-3 py-2 text-[11px]">
              <div className="text-text-secondary">{d.label}</div>
              <div className="font-display font-semibold text-deep">{d.value}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
