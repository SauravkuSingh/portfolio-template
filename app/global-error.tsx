"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          background: "#050505",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: 300, fontStyle: "italic" }}>
          Something went wrong.
        </h1>
        <button
          onClick={() => reset()}
          style={{
            border: "1px solid rgba(255,255,255,0.4)",
            background: "transparent",
            color: "#fff",
            padding: "0.75rem 2rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontSize: "0.75rem",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
