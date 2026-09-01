import { kpis } from "@/lib/mock-data";
import { cn } from "@/lib/cn";

const TONE_TEXT: Record<string, string> = {
  primary: "text-primary",
  blue: "text-blue",
  amber: "text-amber",
  muted: "text-text-secondary",
};

export function KpiStrip() {
  return (
    <div className="grid min-w-0 grid-cols-2 gap-3 px-6 sm:grid-cols-3 sm:px-10 lg:grid-cols-6">
      {kpis.map((kpi) => (
        <div
          key={kpi.key}
          className="rounded-2xl border border-border bg-card p-4 shadow-[0_8px_20px_rgba(32,64,47,0.05)]"
        >
          <div className="text-[10px] font-bold uppercase tracking-wide text-text-secondary">{kpi.label}</div>
          <div className="font-display mt-1.5 text-[21px] font-semibold text-deep">
            {kpi.value}
            {kpi.unit ? <span className="ml-1 text-[13px] font-normal text-text-secondary">{kpi.unit}</span> : null}
          </div>
          <div className={cn("mt-1 text-[10.5px] font-semibold", TONE_TEXT[kpi.tone])}>{kpi.delta}</div>
        </div>
      ))}
    </div>
  );
}
