import { Header } from "@/components/app-shell/header";
import { Card, PanelHeader } from "@/components/ui/card";
import { StatusChip } from "@/components/ui/status-chip";
import { flocks, houses } from "@/lib/mock-data";

export default function FlocksHousesPage() {
  return (
    <>
      <Header
        eyebrow="Flocks & Houses"
        title="Four flocks, one rhythm."
        subtitle="Breed, age, and capacity behind every house's production number."
      />
      <div className="mt-6 flex min-w-0 flex-col gap-5 px-6 sm:px-10">
        <Card>
          <PanelHeader title="Flock register" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  {["House", "Breed", "Age", "Capacity", "Live birds", "Utilization", "State"].map((h) => (
                    <th key={h} className="border-b border-border pb-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-text-secondary">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&>tr:last-child>td]:border-b-0">
                {flocks.map((f) => {
                  const state = houses.find((h) => h.name === f.house)?.state ?? "Healthy";
                  return (
                    <tr key={f.house}>
                      <td className="border-b border-border py-3 text-[12.5px] font-semibold">{f.house}</td>
                      <td className="border-b border-border py-3 text-[12px] text-text-secondary">{f.breed}</td>
                      <td className="border-b border-border py-3 text-[12px] text-text-secondary">{f.ageWeeks} weeks</td>
                      <td className="border-b border-border py-3 text-[12px] text-text-secondary">{f.capacity.toLocaleString()}</td>
                      <td className="font-display border-b border-border py-3 text-[14px] font-semibold text-deep">
                        {f.birds.toLocaleString()}
                      </td>
                      <td className="border-b border-border py-3 text-[12px] text-text-secondary">
                        {Math.round((f.birds / f.capacity) * 100)}%
                      </td>
                      <td className="border-b border-border py-3">
                        <StatusChip tone={state === "Watch" ? "watch" : "ok"}>{state}</StatusChip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
}
