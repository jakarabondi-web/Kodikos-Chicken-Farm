"use client";

import { Bar, Line, ComposedChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Card, PanelHeader } from "@/components/ui/card";
import { cashFlow } from "@/lib/mock-data";

export function CashFlowPanel() {
  const series = cashFlow.series.map((d) => ({ ...d, net: d.inflow - d.outflow }));

  return (
    <Card>
      <PanelHeader title="Net cash flow" action="View Finance" />
      <div className="flex items-baseline justify-between">
        <div className="font-display text-[24px] font-semibold text-deep">{cashFlow.net}</div>
        <div className="text-[11.5px] font-semibold text-primary">{cashFlow.delta}</div>
      </div>
      <div className="mt-3 h-[110px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={series} margin={{ top: 4, right: 4, left: 4, bottom: 0 }}>
            <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#63705F" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid rgba(32,64,47,0.14)",
                fontSize: 12,
                background: "#FFFDF8",
              }}
            />
            <Bar dataKey="inflow" fill="#76A966" radius={[4, 4, 0, 0]} barSize={16} isAnimationActive={false} />
            <Bar dataKey="outflow" fill="#EEF3E3" radius={[4, 4, 0, 0]} barSize={16} isAnimationActive={false} />
            <Line
              type="monotone"
              dataKey="net"
              stroke="#20402F"
              strokeWidth={2}
              dot={{ r: 3, fill: "#20402F" }}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 border-t border-border pt-3 text-[11px]">
        <div>
          <div className="text-text-secondary">Inflows</div>
          <div className="font-semibold text-deep">{cashFlow.inflows}</div>
        </div>
        <div>
          <div className="text-text-secondary">Outflows</div>
          <div className="font-semibold text-deep">{cashFlow.outflows}</div>
        </div>
        <div>
          <div className="text-text-secondary">Closing</div>
          <div className="font-semibold text-deep">{cashFlow.closing}</div>
        </div>
      </div>
    </Card>
  );
}
