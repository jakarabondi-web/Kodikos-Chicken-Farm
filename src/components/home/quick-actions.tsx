import { PlusSquare, ClipboardList, PackagePlus, Receipt, MessageCircle, FileBarChart } from "lucide-react";
import { Card, PanelHeader } from "@/components/ui/card";

const ACTIONS = [
  { label: "New Order", icon: PlusSquare },
  { label: "Record Production", icon: ClipboardList },
  { label: "Stock In", icon: PackagePlus },
  { label: "Request Expense", icon: Receipt },
  { label: "Contact Customer", icon: MessageCircle },
  { label: "View Reports", icon: FileBarChart },
];

export function QuickActions() {
  return (
    <Card>
      <PanelHeader title="Quick actions" />
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {ACTIONS.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="flex flex-col items-start gap-2.5 rounded-xl bg-tint px-3.5 py-3 text-left transition-transform hover:-translate-y-0.5"
          >
            <Icon className="h-4 w-4 text-primary" strokeWidth={2} />
            <span className="text-[11.5px] font-semibold text-deep">{label}</span>
          </button>
        ))}
      </div>
    </Card>
  );
}
