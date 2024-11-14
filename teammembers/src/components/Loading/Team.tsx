/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
export default function LoadingTeam() {
  return (
    <div className="grid gap-6 border rounded-1g shadow px-5 py-4 w-full max-w-[800px] animate-pulse">
      <header className="flex items-center justify-between">
        <div className="grid gap-2">
          <div className="w-32 h-5 rounded bg-neutral-200 animate-pulse" />
          <div className="h-5 rounded w-80 bg-neutral-200 animate-pulse" />
        </div>
        <div className="w-32 h-8 rounded bg-neutral-200 animate-pulse" />
      </header>
      <main className="grid w-full gap-6 px-5 py-4 border rounded-lg shadow">
        <header className="grid grid-cols-4 gap-4">
          {[...Array(4)].map((i: any, key: number) => (
            <div
              key={key}
              className="h-5 rounded bg-neutral-200 animate-pulse"
            />
          ))}
        </header>
        <div className="grid gap-2">
          {[...Array(5)].map((i: any, key: number) => (
            <div
              key={key}
              className="h-12 rounded bg-neutral-200 animate-pulse"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
