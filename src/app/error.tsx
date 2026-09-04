"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-display text-[22px] font-semibold text-deep">Something went wrong loading this page.</p>
      <p className="max-w-sm text-[13px] text-text-secondary">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-deep px-5 py-2.5 text-[12.5px] font-semibold text-canvas"
      >
        Try again
      </button>
    </div>
  );
}
