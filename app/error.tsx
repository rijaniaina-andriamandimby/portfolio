"use client";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <h1 className="mb-4 text-3xl font-bold">Something went wrong</h1>
        <button onClick={reset} className="rounded-sm bg-accent px-7 py-3 text-[.78rem] font-bold uppercase tracking-[.06em] text-bg">Try again</button>
      </div>
    </main>
  );
}
