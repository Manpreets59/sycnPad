"use client";

import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20 md:pt-32">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 animate-blob rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-600/20 opacity-40 blur-3xl" />
        <div className="animation-delay-2000 absolute right-1/4 bottom-20 h-96 w-96 animate-blob rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/20 opacity-40 blur-3xl" />
        <div className="animation-delay-4000 absolute top-1/2 right-1/3 h-96 w-96 animate-blob rounded-full bg-gradient-to-r from-pink-600/20 to-purple-600/20 opacity-30 blur-3xl" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 -z-5 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center">
        {/* Announcement badge */}
        <div className="group mb-8 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md transition-all hover:bg-white/10">
          <span className="inline-flex items-center gap-2 text-gray-300 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            No sign-up. Real-time. Open source.
          </span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </div>

        {/* Main headline with gradient */}
        <div className="mb-6">
          <h1 className="mb-4 font-bold text-6xl tracking-tight sm:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Code
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
              Together
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Instantly
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-gray-400 text-lg leading-relaxed sm:text-xl">
            Real-time collaborative code editor with live preview, shared
            terminal, GitHub integration, and built-in video chat. Collaborate
            without friction.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-6 font-semibold text-base text-white shadow-blue-500/50 shadow-lg transition-all hover:from-blue-600 hover:to-cyan-600 hover:shadow-blue-500/70"
            size="lg"
          >
            <Link href="/editor">
              <Play className="mr-2 size-5 fill-current" />
              Launch Session
            </Link>
          </Button>
          <Button
            className="rounded-xl border border-white/20 bg-white/10 px-8 py-6 font-semibold text-base text-white backdrop-blur-md transition-all hover:bg-white/20"
            onClick={scrollToFeatures}
            size="lg"
          >
            Explore Features
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>

        {/* Floating cards - stats or quick info */}
        <div className="mt-16 mb-12 grid grid-cols-3 gap-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
            <div className="font-bold text-2xl text-cyan-400">80+</div>
            <div className="mt-1 text-gray-400 text-xs">Languages</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
            <div className="font-bold text-2xl text-blue-400">∞</div>
            <div className="mt-1 text-gray-400 text-xs">Collaborators</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
            <div className="font-bold text-2xl text-purple-400">0ms</div>
            <div className="mt-1 text-gray-400 text-xs">Latency</div>
          </div>
        </div>

        {/* Hero image with glow */}
        <div className="relative mt-20 mb-20">
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-600/40 to-cyan-600/40 opacity-50 blur-2xl" />
          <div className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all hover:border-white/20 md:p-12">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-slate-900 to-black transition-all group-hover:border-white/20">
              {/* Simulated code editor content */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>
              <div className="relative text-center">
                <div className="mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-bold text-5xl text-transparent">
                  Syncpad
                </div>
                <div className="text-gray-400 text-sm">
                  Collaborative Code Editor
                </div>
                <div className="mt-8 flex justify-center gap-4">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-blue-500" />
                  <div className="animation-delay-1000 h-3 w-3 animate-pulse rounded-full bg-cyan-500" />
                  <div className="animation-delay-2000 h-3 w-3 animate-pulse rounded-full bg-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
