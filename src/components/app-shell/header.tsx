import { Cloud, Plus } from "lucide-react";
import type { ReactNode } from "react";

export function Header({
  eyebrow,
  title,
  subtitle,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  meta?: ReactNode;
}) {
  return (
    <header className="flex flex-col gap-5 border-b border-border px-6 py-7 sm:flex-row sm:items-end sm:justify-between sm:px-10">
      <div>
        <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
        <h1 className="font-display mt-2 text-[36px] font-normal leading-[1.02] text-deep sm:text-[44px]">
          {title}
        </h1>
        <p className="mt-2.5 max-w-[440px] text-[13px] leading-relaxed text-text-secondary">{subtitle}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {meta}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-[11px] text-text-secondary shadow-[0_2px_8px_rgba(32,64,47,0.05)]">
          <Cloud className="h-3.5 w-3.5" strokeWidth={2} />
          21° <b className="font-semibold text-text">Partly cloudy</b>
        </span>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-deep px-4 py-2 text-[11.5px] font-semibold text-canvas shadow-[0_6px_16px_rgba(32,64,47,0.2)] transition-transform hover:-translate-y-px">
          <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
          Quick Action
        </button>
      </div>
    </header>
  );
}
