"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bird } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav";
import { owner } from "@/lib/mock-data";
import { cn } from "@/lib/cn";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[78px] flex-col items-center gap-4 border-r border-border bg-[#F3F4EA] py-7 md:flex">
      <Link
        href="/"
        className="mb-1 flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-deep shadow-[0_6px_16px_rgba(32,64,47,0.25)]"
        aria-label="Kodiko Farm home"
      >
        <Bird className="h-5 w-5 text-canvas" strokeWidth={2} />
      </Link>

      <nav className="flex flex-1 flex-col items-center gap-1.5">
        {NAV_ITEMS.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={item.label}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
              className={cn(
                "group relative flex h-[38px] w-[38px] items-center justify-center rounded-xl transition-colors",
                active ? "bg-[rgba(77,141,85,0.14)]" : "hover:bg-[rgba(77,141,85,0.08)]"
              )}
            >
              <Icon
                className={cn("h-[17px] w-[17px]", active ? "text-primary" : "text-text-secondary")}
                strokeWidth={2}
              />
              <span className="pointer-events-none absolute left-[52px] z-50 whitespace-nowrap rounded-lg bg-deep px-2.5 py-1.5 text-[11px] font-medium text-canvas opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div
        className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-clay text-[11px] font-bold text-white"
        title={`${owner.name} · ${owner.role}`}
      >
        {owner.initials}
      </div>
    </aside>
  );
}
