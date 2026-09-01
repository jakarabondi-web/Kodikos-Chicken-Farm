"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, MapPin, Users, Smartphone, Menu, X, Bird } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav";
import { cn } from "@/lib/cn";

const TABS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Farm", href: "/live-farm", icon: MapPin },
  { label: "Sales", href: "/sales", icon: Users },
  { label: "Finance", href: "/finance", icon: Smartphone },
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const moreActive = !TABS.some((t) => isActive(t.href));

  return (
    <>
      <nav className="fixed inset-x-0 bottom-0 z-30 flex items-stretch border-t border-border bg-card pb-[env(safe-area-inset-bottom)] md:hidden">
        {TABS.map((tab) => {
          const active = isActive(tab.href);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-1 flex-col items-center gap-1 py-2.5"
            >
              <Icon className={cn("h-5 w-5", active ? "text-primary" : "text-text-secondary")} strokeWidth={2} />
              <span className={cn("text-[9.5px] font-semibold", active ? "text-primary" : "text-text-secondary")}>
                {tab.label}
              </span>
            </Link>
          );
        })}
        <button
          onClick={() => setOpen(true)}
          aria-label="More navigation"
          className="flex flex-1 flex-col items-center gap-1 py-2.5"
        >
          <Menu className={cn("h-5 w-5", moreActive && open ? "text-primary" : "text-text-secondary")} strokeWidth={2} />
          <span className={cn("text-[9.5px] font-semibold", moreActive && open ? "text-primary" : "text-text-secondary")}>
            More
          </span>
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[rgba(20,30,22,0.28)] transition-opacity md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      <nav
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col gap-1 overflow-y-auto bg-[#F3F4EA] p-5 shadow-2xl transition-transform duration-300 md:hidden",
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
          const active = isActive(item.href);
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
