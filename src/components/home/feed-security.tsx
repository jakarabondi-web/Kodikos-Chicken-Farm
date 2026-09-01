import { Card, PanelHeader } from "@/components/ui/card";
import { feedStock } from "@/lib/mock-data";

export function FeedSecurity() {
  return (
    <Card>
      <PanelHeader title="Feed security" action="Generate request" />
      <div className="flex flex-col">
        {feedStock.map((f, i) => (
          <div
            key={f.name}
            className={
              "flex items-center justify-between py-3 " + (i > 0 ? "border-t border-border" : "")
            }
          >
            <div>
              <div className="text-[12.5px] font-semibold">{f.name}</div>
              <div className="mt-0.5 text-[11px] text-text-secondary">{f.note}</div>
            </div>
            <div className="font-display text-[20px] font-semibold text-deep">
              {f.daysRemaining}
              <span className="text-[12px] font-normal text-text-secondary">d</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
