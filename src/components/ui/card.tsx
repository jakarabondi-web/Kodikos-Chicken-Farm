import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-[18px] border border-border bg-card shadow-[0_1px_2px_rgba(37,51,43,0.03),0_8px_30px_rgba(37,51,43,0.045)]",
        padded && "p-5 sm:p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

export function PanelHeader({
  title,
  action,
  className,
}: {
  title: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-baseline justify-between gap-3", className ?? "mb-3.5")}>
      <h3 className="font-display text-[15px] font-semibold text-deep">{title}</h3>
      {action ? (
        <span className="shrink-0 text-[11px] font-semibold text-primary">{action}</span>
      ) : null}
    </div>
  );
}
