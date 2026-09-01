"use client";

import { useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/card";
import { productionTrend } from "@/lib/mock-data";
import { cn } from "@/lib/cn";

const PERIODS = ["7D", "30D", "90D", "YTD"] as const;

export function ProductionChart() {
  const [period, setPeriod] = useState<(typeof PERIODS)[number]>("30D");

  return (
    <Card>
      <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
        <span className="font-display text-[15px] font-semibold text-deep">Production trend</span>
        <div className="flex gap-1 rounded-full bg-tint p-1">
          {PERIODS.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={cn(
                "rounded-full px-3 py-1 text-[11px] font-semibold transition-colors",
                period === p ? "bg-deep text-canvas" : "text-text-secondary"
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-x-8 gap-y-2 text-[12px]">
        <div><span className="text-text-secondary">Today</span> <span className="font-semibold text-deep">{productionTrend.today.toLocaleString()}</span></div>
        <div><span className="text-text-secondary">Average</span> <span className="font-semibold text-deep">{productionTrend.average.toLocaleString()}</span></div>
        <div><span className="text-text-secondary">Target</span> <span className="font-semibold text-deep">{productionTrend.target.toLocaleString()}</span></div>
        <div><span className="text-text-secondary">Difference</span> <span className="font-semibold text-critical">{productionTrend.diffPct}%</span></div>
      </div>

      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={productionTrend.series} margin={{ top: 4, right: 4, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id="prodFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#76A966" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#76A966" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="rgba(32,64,47,0.08)" />
            <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#63705F" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: "#63705F" }} axisLine={false} tickLine={false} width={44} />
            <Tooltip
              contentStyle={{ borderRadius: 12, border: "1px solid rgba(32,64,47,0.14)", fontSize: 12, background: "#FFFDF8" }}
            />
            <Area type="monotone" dataKey="target" stroke="#D8A33D" strokeDasharray="4 4" fill="none" isAnimationActive={false} />
            <Area type="monotone" dataKey="avg" stroke="#739CB8" fill="none" isAnimationActive={false} />
            <Area type="monotone" dataKey="actual" stroke="#4D8D55" strokeWidth={2} fill="url(#prodFill)" isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
