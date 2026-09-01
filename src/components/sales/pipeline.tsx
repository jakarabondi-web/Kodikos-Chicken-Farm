import { ArrowRight } from "lucide-react";
import { Card, PanelHeader } from "@/components/ui/card";
import { pipeline } from "@/lib/mock-data";

export function Pipeline() {
  return (
    <Card>
      <PanelHeader title="Customer pipeline" />
      <div className="flex items-center gap-1 overflow-x-auto">
        {pipeline.map((s, i) => (
          <div key={s.stage} className="flex items-center gap-1">
            <div className="min-w-[100px] rounded-xl bg-tint px-3 py-2.5 text-center">
              <div className="font-display text-[18px] font-semibold text-deep">{s.count}</div>
              <div className="mt-0.5 text-[9.5px] font-bold uppercase tracking-wide text-text-secondary">
                {s.stage}
              </div>
            </div>
            {i < pipeline.length - 1 && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-olive" strokeWidth={2} />}
          </div>
        ))}
      </div>
    </Card>
  );
}
