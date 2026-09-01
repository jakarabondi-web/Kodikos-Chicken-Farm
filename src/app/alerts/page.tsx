import { Header } from "@/components/app-shell/header";
import { Card } from "@/components/ui/card";
import { alerts } from "@/lib/mock-data";
import { cn } from "@/lib/cn";

const LEVEL_STYLE = {
  critical: "border-l-[3px] border-l-critical",
  attention: "border-l-[3px] border-l-amber",
  info: "border-l-[3px] border-l-blue",
} as const;

const LEVEL_LABEL = { critical: "Critical", attention: "Attention", info: "Information" } as const;
const LEVEL_TEXT = { critical: "text-critical", attention: "text-amber", info: "text-blue" } as const;

export default function AlertsPage() {
  return (
    <>
      <Header
        eyebrow="Alerts & Tasks"
        title="Nothing falls through."
        subtitle="Every alert states what happened, why it matters, and who owns it."
      />
      <div className="mt-6 flex flex-col gap-3 px-6 sm:px-10">
        {alerts.map((a) => (
          <Card key={a.title} className={cn(LEVEL_STYLE[a.level])}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className={cn("text-[10px] font-bold uppercase tracking-wide", LEVEL_TEXT[a.level])}>
                  {LEVEL_LABEL[a.level]}
                </div>
                <div className="mt-1 text-[13.5px] font-semibold">{a.title}</div>
                <div className="mt-1 text-[12px] text-text-secondary">{a.detail}</div>
              </div>
              <div className="text-right text-[11px] text-text-secondary">
                <div>{a.owner}</div>
                <div className="mt-0.5">{a.time}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
