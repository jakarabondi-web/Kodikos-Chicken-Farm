import { cn } from "@/lib/cn";

export function ProgressTrack({
  value,
  warn = false,
  className,
}: {
  value: number;
  warn?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block h-[5px] w-[70px] overflow-hidden rounded-full bg-[rgba(32,64,47,0.09)] align-middle",
        className
      )}
    >
      <span
        className={cn("block h-full rounded-full", warn ? "bg-warn" : "bg-primary")}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </span>
  );
}
