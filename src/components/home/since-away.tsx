import { Card, PanelHeader } from "@/components/ui/card";
import { sinceAway } from "@/lib/mock-data";

export function SinceAway() {
  return (
    <Card>
      <PanelHeader title="Since you were away" />
      <ul className="space-y-2 text-[12.5px] text-text-secondary">
        {sinceAway.map((line) => (
          <li key={line} className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-olive" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
