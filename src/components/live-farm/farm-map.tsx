"use client";

import { useState } from "react";
import { Card, PanelHeader } from "@/components/ui/card";
import { Drawer } from "@/components/ui/drawer";
import { StatusChip } from "@/components/ui/status-chip";
import { houses, houseDetails, feedStock } from "@/lib/mock-data";
import { cn } from "@/lib/cn";

const POSITIONS: Record<string, string> = {
  "House 1": "left-[4%] top-[10%] w-[220px]",
  "House 2": "left-[30%] top-[30%] w-[220px]",
  "House 3": "left-[4%] top-[52%] w-[220px]",
  "House 4": "left-[58%] top-[12%] w-[220px]",
};

export function FarmMap() {
  const [active, setActive] = useState<string | null>(null);
  const house = houses.find((h) => h.name === active);
  const detail = active ? houseDetails[active] : null;

  return (
    <>
      <Card padded={false} className="overflow-hidden">
        <div className="p-5 sm:p-6 pb-0">
          <PanelHeader title="Live Farm — spatial overview" action="Not a map · an operational view" />
        </div>
        <div
          className="relative m-5 mt-2 h-[420px] rounded-2xl sm:m-6 sm:mt-2"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(32,64,47,0.05) 0 1px, transparent 1px 56px), repeating-linear-gradient(0deg, rgba(32,64,47,0.05) 0 1px, transparent 1px 56px), #EAF1E4",
          }}
        >
          {houses.map((h) => (
            <button
              key={h.name}
              onClick={() => setActive(h.name)}
              className={cn(
                "absolute rounded-xl border border-border bg-card p-3.5 text-left shadow-[0_10px_24px_-8px_rgba(32,64,47,0.18)] transition-transform hover:-translate-y-0.5",
                POSITIONS[h.name]
              )}
            >
              <div className="mb-1 flex items-center gap-1.5">
                <span
                  className={cn("h-1.5 w-1.5 rounded-full", h.state === "Watch" ? "bg-warn" : "bg-primary")}
                />
                <span className="text-[12.5px] font-semibold">{h.name}</span>
              </div>
              <div className="text-[11px] text-text-secondary">
                {h.birds.toLocaleString()} birds · {h.production}% production
              </div>
            </button>
          ))}
          <div className="absolute bottom-[6%] right-[6%] w-[170px] rounded-xl border border-border bg-card p-3.5 shadow-[0_10px_24px_-8px_rgba(32,64,47,0.18)]">
            <div className="mb-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              <span className="text-[12.5px] font-semibold">Feed Store</span>
            </div>
            <div className="text-[11px] text-text-secondary">{feedStock[0].daysRemaining} days remaining · Low</div>
          </div>
          <div className="absolute right-[28%] top-[58%] w-[130px] rounded-xl border border-border bg-card p-3 text-center shadow-[0_10px_24px_-8px_rgba(32,64,47,0.18)]">
            <span className="text-[11px] font-semibold text-text-secondary">Main office</span>
          </div>
        </div>
      </Card>

      <Drawer open={!!active} onClose={() => setActive(null)} title={active ?? ""}>
        {house && detail ? (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <StatusChip tone={house.state === "Watch" ? "watch" : "ok"}>{house.state}</StatusChip>
              <span className="text-[11px] text-text-secondary">{house.birds.toLocaleString()} live birds</span>
            </div>

            {detail.warning && (
              <div className="rounded-2xl border border-[rgba(201,94,75,0.25)] bg-[#F7E1DC] p-4 text-[12px] leading-relaxed text-[#7A2E1E]">
                {detail.warning}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 text-[12.5px]">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wide text-text-secondary">Production</div>
                <div className="font-display mt-1 text-[18px] font-semibold text-deep">
                  {house.production}% <span className="text-[11px] font-sans font-normal text-text-secondary">/ {house.target}% target</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wide text-text-secondary">Mortality</div>
                <div className="mt-1 font-medium">{detail.mortality}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wide text-text-secondary">Feed</div>
                <div className="mt-1 font-medium">{detail.feed}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wide text-text-secondary">Water</div>
                <div className="mt-1 font-medium">{detail.water}</div>
              </div>
              <div className="col-span-2">
                <div className="text-[10px] font-bold uppercase tracking-wide text-text-secondary">Environment</div>
                <div className="mt-1 font-medium">{detail.environment}</div>
              </div>
            </div>

            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-text-secondary">Tasks</div>
              <ul className="space-y-1.5 text-[12.5px]">
                {detail.tasks.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-olive" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </Drawer>
    </>
  );
}
