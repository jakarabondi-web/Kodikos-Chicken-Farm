import Link from "next/link";
import { Card, PanelHeader } from "@/components/ui/card";
import { mpesa } from "@/lib/mock-data";

export function MpesaWidget() {
  return (
    <Card>
      <PanelHeader title="M-Pesa receipts" action={<Link href="/finance">Open control center</Link>} />
      <div className="flex items-center gap-4">
        <div
          className="relative flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full"
          style={{
            background: `conic-gradient(#4D8D55 ${mpesa.reconciledPct * 3.6}deg, #EEF3E3 0deg)`,
          }}
        >
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-card text-[13px] font-bold text-deep">
            {mpesa.reconciledPct}%
          </div>
        </div>
        <div className="flex-1 space-y-1.5 text-[11.5px]">
          <div className="flex justify-between">
            <span className="text-text-secondary">Receipts</span>
            <span className="font-semibold text-deep">{mpesa.receipts}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Successful</span>
            <span className="font-semibold text-deep">{mpesa.successful}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Pending</span>
            <span className="font-semibold text-amber">{mpesa.pending}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Unmatched</span>
            <span className="font-semibold text-deep">{mpesa.unmatched}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
