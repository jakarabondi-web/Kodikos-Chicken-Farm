import { Card, PanelHeader } from "@/components/ui/card";
import { segments } from "@/lib/mock-data";

export function Segments() {
  return (
    <Card>
      <PanelHeader title="Customer segmentation" />
      <div className="space-y-3">
        {segments.map((s) => (
          <div key={s.name}>
            <div className="mb-1 flex items-baseline justify-between text-[12px]">
              <span className="font-semibold">
                {s.name} {s.desc ? <span className="font-normal text-text-secondary">· {s.desc}</span> : null}
              </span>
              <span className="text-text-secondary">{s.count} customers</span>
            </div>
            <div className="h-[6px] overflow-hidden rounded-full bg-tint">
              <div className="h-full rounded-full bg-primary" style={{ width: `${s.sharePct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
