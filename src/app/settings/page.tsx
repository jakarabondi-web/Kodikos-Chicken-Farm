import { Header } from "@/components/app-shell/header";
import { Card, PanelHeader } from "@/components/ui/card";
import { owner } from "@/lib/mock-data";

const ROWS: [string, string][] = [
  ["Farm name", owner.farm],
  ["Location", owner.location],
  ["Timezone", "Africa/Nairobi (EAT)"],
  ["Currency", "KSh — Kenyan Shilling"],
];

const TOGGLES = [
  "WhatsApp order confirmations",
  "Low-feed alerts",
  "Daily 'Since you were away' briefing",
  "M-Pesa exception notifications",
];

export default function SettingsPage() {
  return (
    <>
      <Header
        eyebrow="Settings"
        title="Configure Kodiko FarmOS."
        subtitle="Farm details, notifications, and access — kept simple."
      />
      <div className="mt-6 flex min-w-0 flex-col gap-5 px-6 sm:px-10">
        <Card>
          <PanelHeader title="Farm details" />
          <div className="space-y-2.5">
            {ROWS.map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-border py-2 text-[12.5px] last:border-0">
                <span className="text-text-secondary">{label}</span>
                <span className="font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <PanelHeader title="Notifications" />
          <div className="space-y-3">
            {TOGGLES.map((t) => (
              <div key={t} className="flex items-center justify-between">
                <span className="text-[12.5px]">{t}</span>
                <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary">
                  <span className="ml-4 h-3.5 w-3.5 rounded-full bg-card" />
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
