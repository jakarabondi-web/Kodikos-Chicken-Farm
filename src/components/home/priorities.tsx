import { Card, PanelHeader } from "@/components/ui/card";
import { priorities } from "@/lib/mock-data";
import { cn } from "@/lib/cn";

const NUM = ["01", "02", "03", "04"];

export function Priorities() {
  return (
    <Card>
      <PanelHeader title="Worth your attention" />
      <div className="flex flex-col">
        {priorities.map((p, i) => (
          <div key={p.title} className={cn("flex gap-3 py-2.5", i > 0 && "border-t border-border")}>
            <span className="font-display w-4 shrink-0 text-[13px] italic text-olive">{NUM[i]}</span>
            <div className="min-w-0 flex-1">
              <div className="text-[12.5px] font-semibold">{p.title}</div>
              <div className="mt-0.5 text-[11px] text-text-secondary">{p.reason}</div>
            </div>
            <button className="shrink-0 self-start text-[11px] font-semibold text-primary">{p.action}</button>
          </div>
        ))}
      </div>
    </Card>
  );
}
