"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Bird } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav";
import { cn } from "@/lib/cn";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        className="fixed left-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-[0_4px_12px_rgba(32,64,47,0.1)] md:hidden"
      >
        <Menu className="h-4.5 w-4.5 text-deep" strokeWidth={2} />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[rgba(20,30,22,0.28)] transition-opacity md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      <nav
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col gap-1 bg-[#F3F4EA] p-5 shadow-2xl transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-deep">
              <Bird className="h-4 w-4 text-canvas" strokeWidth={2} />
            </span>
            <div>
              <div className="text-[11px] font-bold text-deep">KODIKO FARM</div>
              <div className="text-[10px] text-text-secondary">Oyugis, Kenya</div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close navigation">
            <X className="h-4.5 w-4.5 text-text-secondary" strokeWidth={2} />
          </button>
        </div>
        {NAV_ITEMS.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium",
                active ? "bg-[rgba(77,141,85,0.14)] text-primary" : "text-text-secondary"
              )}
            >
              <Icon className="h-4 w-4" strokeWidth={2} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
