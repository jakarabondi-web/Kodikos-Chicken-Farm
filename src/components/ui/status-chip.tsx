import { cn } from "@/lib/cn";

const TONE_STYLES = {
  ok: "bg-[#E4F0DF] text-[#2E5D34]",
  watch: "bg-[#FBEBCF] text-[#8A6416]",
  critical: "bg-[#F7E1DC] text-[#9A3B27]",
  info: "bg-[#E4EDF3] text-[#2E5470]",
  neutral: "bg-tint text-text-secondary",
} as const;

export type ChipTone = keyof typeof TONE_STYLES;

export function StatusChip({ tone, children }: { tone: ChipTone; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide",
        TONE_STYLES[tone]
      )}
    >
      {children}
    </span>
  );
}
