"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bird } from "lucide-react";
import { NAV_GROUPS } from "@/lib/nav";
import { owner } from "@/lib/mock-data";
import { cn } from "@/lib/cn";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[248px] flex-col border-r border-border bg-[#F3F4EA] px-4 py-7 md:flex">
      <Link href="/" className="mb-7 flex items-center gap-2.5 px-1.5" aria-label="Kodiko Farm home">
        <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl bg-deep shadow-[0_6px_16px_rgba(32,64,47,0.25)]">
          <Bird className="h-[19px] w-[19px] text-canvas" strokeWidth={2} />
        </span>
        <span>
          <span className="font-display block text-[14px] font-semibold leading-tight text-deep">Kodiko Farm</span>
          <span className="block text-[9.5px] font-semibold tracking-[0.04em] text-text-secondary">FARMOS</span>
        </span>
      </Link>

      <nav className="flex flex-1 flex-col gap-[18px] overflow-y-auto">
        {NAV_GROUPS.map((group) => (
          <div key={group.name}>
            <div className="mb-1.5 px-2.5 text-[9.5px] font-bold uppercase tracking-[0.09em] text-[#8B9686]">
              {group.name}
            </div>
            <div className="flex flex-col gap-px">
              {group.items.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-2.5 rounded-[10px] px-2.5 py-2 transition-colors",
                      active ? "bg-[rgba(77,141,85,0.14)]" : "hover:bg-[rgba(77,141,85,0.08)]"
                    )}
                  >
                    <Icon
                      className={cn("h-4 w-4 shrink-0", active ? "text-primary" : "text-text-secondary")}
                      strokeWidth={1.8}
                    />
                    <span
                      className={cn(
                        "text-[12.5px]",
                        active ? "font-semibold text-primary" : "font-medium text-text-secondary"
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-3 flex items-center gap-2.5 border-t border-border px-1 pt-4">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay text-[11px] font-bold text-white"
          title={`${owner.name} · ${owner.role}`}
        >
          {owner.initials}
        </div>
        <div className="min-w-0">
          <div className="truncate text-[12px] font-semibold text-text">{owner.name}</div>
          <div className="text-[10.5px] text-text-secondary">{owner.role}</div>
        </div>
      </div>
    </aside>
  );
}
