import { Card, PanelHeader } from "@/components/ui/card";
import { StatusChip } from "@/components/ui/status-chip";
import { ProgressTrack } from "@/components/ui/progress-track";
import { houses } from "@/lib/mock-data";

export function HouseTable() {
  return (
    <Card>
      <PanelHeader title="House performance" action="Open Live Farm" />
      <div className="overflow-x-auto">
      <table className="w-full min-w-[420px] border-collapse">
        <thead>
          <tr>
            {["House", "Birds", "Production", "State"].map((h) => (
              <th
                key={h}
                className="border-b border-border pb-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-text-secondary"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&>tr:last-child>td]:border-b-0">
          {houses.map((h) => (
            <tr key={h.name}>
              <td className="border-b border-border py-2.5 text-[12.5px] font-semibold">{h.name}</td>
              <td className="font-display border-b border-border py-2.5 text-[14px] font-semibold text-deep">
                {h.birds.toLocaleString()}
              </td>
              <td className="border-b border-border py-2.5 text-[12.5px]">
                <ProgressTrack value={h.production} warn={h.state === "Watch"} className="mr-2" />
                {h.production}% / {h.target}%
              </td>
              <td className="border-b border-border py-2.5">
                <StatusChip tone={h.state === "Watch" ? "watch" : "ok"}>{h.state}</StatusChip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Card>
  );
}
