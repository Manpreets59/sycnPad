/**
 * SyncPad — Home Page
 *
 * Improved landing page that:
 *  • Replaces all "CodeX" branding with "SyncPad"
 *  • Adds the Syntexity-style animated particle-network background
 *  • Keeps ALL existing functional components untouched:
 *      - RoomAccessForm  (real Socket.IO create/join — do not remove)
 *      - ShowcaseGrid    (real screenshots)
 *      - AnimatedGridBackground (motion/react grid + light trails)
 *      - Status / LatencyTestButton / AboutButton
 *  • Improves typography, spacing, gradient treatment, and overall polish
 *
 * File: apps/client/app/(home)/page.tsx
 * By Manpreet Singh — github.com/Manpreets59/syncPad
 */

import Image from "next/image";
import { Suspense } from "react";

import { AboutButton } from "@/components/about-button";
import { AnimatedGridBackground } from "@/components/animated-grid-bg";
import { AnimatedParticleBg } from "@/components/animated-particle-bg";
import { LatencyTestButton } from "@/components/latency-test-button";
import { RoomAccessForm } from "@/components/room-access-form";
import { ShowcaseGrid } from "@/components/showcase-grid";
import { Status } from "@/components/status";

export default async function Page({ searchParams }: PageProps<"/">) {
  const params = await searchParams;
  const roomId = params.room?.toString() || "";

  return (
    <>
      {/* ── Base background colour ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-30 bg-[#07080f]"
        role="presentation"
      />

      {/* ── Particle network (Syntexity-style constellation) ──────── */}
      {/* Sits below the grid so both layers are visible together    */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20"
        role="presentation"
      >
        <AnimatedParticleBg
          connectionDist={130}
          lineColor="148,163,184"
          mouseRadius={155}
          particleColor="148,163,184"
          particleCount={115}
          speed={0.36}
        />
      </div>

      {/* ── Animated grid + moving light trails (existing component) ─ */}
      <div aria-hidden="true" className="dark fixed inset-0 -z-10">
        <AnimatedGridBackground />
      </div>

      {/* ── Colour gradient overlay — gives the blue/purple tint ──── */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-gradient-to-tr from-[#3b0764]/30 via-[#1e1b4b]/20 to-[#0c4a6e]/20"
        role="presentation"
      />

      {/* ── Radial vignette so centre content stays legible ──────── */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10"
        role="presentation"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 25%, rgba(7,8,15,0.65) 100%)",
        }}
      />

      {/* ══════════════════════════════════════════════════════════════
          MAIN LAYOUT
      ══════════════════════════════════════════════════════════════ */}
      <main className="dark relative flex min-h-full w-full flex-col overflow-hidden min-[1189px]:flex-row">
        {/* ── LEFT PANEL — Form + hero copy ─────────────────────── */}
        <div className="my-2 flex min-h-[700px] w-full flex-col justify-center p-4 min-[1189px]:w-5/12 min-[1189px]:items-center min-[560px]:p-8">
          <div className="w-full max-w-xl">
            {/* ── Badge ─────────────────────────────────────────── */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/60 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono font-semibold text-[10.5px] text-indigo-300 uppercase tracking-[0.13em]">
                No sign-up required — start instantly
              </span>
            </div>

            {/* ── Headline ─────────────────────────────────────── */}
            <div className="mb-6 space-y-4">
              <h1 className="flex flex-row items-start gap-3 font-bold text-foreground tracking-tight">
                {/* Logo — keep the existing SVG path; just renamed alt text */}
                <Image
                  alt="SyncPad Logo"
                  className="size-20 drop-shadow-[0_0_16px_rgba(99,102,241,0.5)] min-[1189px]:size-24"
                  fetchPriority="high"
                  height={96}
                  loading="eager"
                  src="/images/codex-logo.svg"
                  width={96}
                />

                <div className="flex flex-col items-start text-start">
                  {/* Size via clamp so it scales between mobile and desktop */}
                  <span
                    className="block font-extrabold text-white leading-[1.08]"
                    style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)" }}
                  >
                    Code together,
                  </span>
                  <span
                    className="block font-extrabold leading-[1.08]"
                    style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)" }}
                  >
                    now on{" "}
                    <span
                      className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"
                      style={{
                        filter: "drop-shadow(0 0 12px rgba(139,92,246,0.45))",
                      }}
                    >
                      SyncPad
                    </span>
                  </span>
                </div>
              </h1>

              {/* Sub-copy */}
              <p className="w-full whitespace-pre-line text-base text-foreground/80 leading-relaxed sm:w-[93%] sm:text-lg">
                Your collaborative coding space, reimagined.{"\n"}
                <span className="font-semibold text-indigo-300">
                  Real-time editing · Shared terminal · Live preview
                </span>
                {"\n"}No account needed — share a link and start building.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  { icon: "⚡", text: "80+ Languages" },
                  { icon: "👁️", text: "Live Preview" },
                  { icon: "🔗", text: "GitHub Sync" },
                  { icon: "📹", text: "Video Chat" },
                  { icon: "📝", text: "Shared Notepad" },
                ].map((pill) => (
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-medium text-[12px] text-slate-300 backdrop-blur-sm"
                    key={pill.text}
                  >
                    <span>{pill.icon}</span>
                    {pill.text}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Room Access Form ────────────────────────────────
                KEPT EXACTLY AS-IS — this is the real Socket.IO form
            ─────────────────────────────────────────────────── */}
            <Suspense fallback={null}>
              <RoomAccessForm roomId={roomId} />
            </Suspense>
          </div>
        </div>

        {/* ── RIGHT PANEL — Showcase grid ───────────────────────── */}
        <div className="dark relative flex w-full max-w-5xl flex-1 items-center justify-center min-[1189px]:w-7/12 min-[1189px]:pr-8">
          {/* Subtle inner glow behind the grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 60% 50%, rgba(99,102,241,0.07), transparent)",
            }}
          />
          <ShowcaseGrid />
        </div>

        {/* ── Bottom-right controls — KEPT EXACTLY AS-IS ──────── */}
        <div className="dark fixed right-3 bottom-2.5 flex items-center gap-x-3">
          <Status />
          <LatencyTestButton />
          <AboutButton />
        </div>
      </main>
    </>
  );
}
