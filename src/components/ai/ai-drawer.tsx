"use client";

import { useState } from "react";
import { Sparkles, X, ArrowUpRight } from "lucide-react";
import { suggestedQuestions } from "@/lib/mock-data";
import { cn } from "@/lib/cn";

export function AIDrawer() {
  const [open, setOpen] = useState(false);
  const [asked, setAsked] = useState<string | null>(null);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Ask FarmOS AI"
        className={cn(
          "fixed bottom-20 right-5 z-40 flex items-center gap-2 rounded-full bg-deep px-5 py-3.5 text-[12.5px] font-semibold text-canvas shadow-[0_16px_30px_rgba(32,64,47,0.35)] transition-transform hover:-translate-y-0.5 md:bottom-6 md:right-6",
          open && "pointer-events-none opacity-0"
        )}
      >
        <Sparkles className="h-4 w-4" strokeWidth={2} />
        Ask FarmOS
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-[rgba(20,30,22,0.28)] transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-[460px] flex-col border-l border-border bg-card shadow-[-20px_0_50px_rgba(32,64,47,0.15)] transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" strokeWidth={2} />
            <span className="font-display text-[16px] text-deep">FarmOS AI</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full text-text-secondary hover:bg-tint"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {asked ? (
            <div className="space-y-4">
              <div className="rounded-2xl bg-tint px-4 py-3 text-[13px] font-medium text-deep">{asked}</div>
              <div className="space-y-3 rounded-2xl border border-border bg-card p-4 shadow-[0_8px_20px_rgba(32,64,47,0.05)]">
                <p className="text-[13px] font-semibold text-deep">
                  House 3&rsquo;s dip traces to a feed transition on Aug 27 plus two consecutive warm nights.
                </p>
                <p className="text-[12px] leading-relaxed text-text-secondary">
                  Production fell from 91% to 81% over three days, in line with House 3&rsquo;s mortality and
                  water-intake records for the same window — House 1, 2 and 4 were unaffected.
                </p>
                <div className="flex items-center justify-between rounded-xl bg-tint px-3 py-2.5 text-[11.5px] font-semibold text-primary">
                  Recommended: schedule a vet check for House 3
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </div>
                <p className="text-[10.5px] text-text-secondary">
                  Sources: House 3 daily log · Feed transition record, Aug 27 · Environment sensor, Houses 1–4
                </p>
              </div>
            </div>
          ) : (
            <>
              <p className="mb-4 text-[13px] text-text-secondary">
                Ask about production, sales, cash, or anything else happening on the farm.
              </p>
              <div className="space-y-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => setAsked(q)}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-left text-[12.5px] font-medium text-deep shadow-[0_2px_8px_rgba(32,64,47,0.04)] transition-colors hover:bg-tint"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="border-t border-border p-4">
          <input
            type="text"
            placeholder="Ask FarmOS anything..."
            className="w-full rounded-full border border-border bg-canvas px-4 py-3 text-[13px] outline-none placeholder:text-text-secondary focus:border-primary"
          />
        </div>
      </aside>
    </>
  );
}
