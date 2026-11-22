import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="mb-3 text-[.72rem] font-medium uppercase tracking-[.12em] text-accent">404</p>
        <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
        <Link href="/" className="inline-block rounded-sm bg-accent px-7 py-3 text-[.78rem] font-bold uppercase tracking-[.06em] text-bg">Back to home</Link>
      </div>
    </main>
  );
}
