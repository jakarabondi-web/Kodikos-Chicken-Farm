import { Header } from "@/components/app-shell/header";
import { Card, PanelHeader } from "@/components/ui/card";
import { StatusChip } from "@/components/ui/status-chip";
import { staff } from "@/lib/mock-data";

export default function StaffPage() {
  return (
    <>
      <Header
        eyebrow="Staff & Roles"
        title="Four people, three views."
        subtitle="Worker, Manager, and Owner each see exactly what their role needs."
      />
      <div className="mt-6 flex min-w-0 flex-col gap-5 px-6 sm:px-10">
        <Card>
          <PanelHeader title="Team" action="Invite staff" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  {["Name", "Role", "Access", "Status"].map((h) => (
                    <th key={h} className="border-b border-border pb-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-text-secondary">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&>tr:last-child>td]:border-b-0">
                {staff.map((s) => (
                  <tr key={s.name}>
                    <td className="border-b border-border py-3 text-[12.5px] font-semibold">{s.name}</td>
                    <td className="border-b border-border py-3 text-[12px] text-text-secondary">{s.role}</td>
                    <td className="border-b border-border py-3 text-[12px] text-text-secondary">{s.access}</td>
                    <td className="border-b border-border py-3">
                      <StatusChip tone="ok">{s.status}</StatusChip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
}
