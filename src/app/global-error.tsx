"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body style={{ background: "#F7F4EA", color: "#20261F", fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            padding: 24,
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 20, fontWeight: 600 }}>Kodiko FarmOS hit a snag.</p>
          <p style={{ maxWidth: 360, fontSize: 13, color: "#63705F" }}>
            {error.message || "An unexpected error occurred."}
          </p>
          <button
            onClick={reset}
            style={{
              borderRadius: 999,
              background: "#20402F",
              color: "#F7F4EA",
              padding: "10px 20px",
              fontSize: 12.5,
              fontWeight: 600,
              border: "none",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
