"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-32 overflow-hidden bg-black">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-cyan-600/20 rounded-full blur-3xl opacity-40 animate-blob" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-blue-600/20 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 -z-5 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 text-center relative z-10 w-full">
        {/* Announcement badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all group cursor-pointer">
          <span className="inline-flex items-center gap-2 text-sm text-gray-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            No sign-up. Real-time. Open source.
          </span>
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Main headline with gradient */}
        <div className="mb-6">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Code
            </span>
            {" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
              Together
            </span>
            {" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Instantly
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed">
            Real-time collaborative code editor with live preview, shared terminal, GitHub integration, and built-in video chat. Collaborate without friction.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 mt-10">
          <Button
            asChild
            size="lg"
            className="rounded-xl px-8 py-6 text-base bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all"
          >
            <Link href="/editor">
              <Play className="mr-2 size-5 fill-current" />
              Launch Session
            </Link>
          </Button>
          <Button
            size="lg"
            onClick={scrollToFeatures}
            className="rounded-xl px-8 py-6 text-base bg-white/10 border border-white/20 text-white hover:bg-white/20 font-semibold backdrop-blur-md transition-all"
          >
            Explore Features
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>

        {/* Floating cards - stats or quick info */}
        <div className="grid grid-cols-3 gap-4 mt-16 mb-12">
          <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all">
            <div className="text-2xl font-bold text-cyan-400">80+</div>
            <div className="text-xs text-gray-400 mt-1">Languages</div>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all">
            <div className="text-2xl font-bold text-blue-400">∞</div>
            <div className="text-xs text-gray-400 mt-1">Collaborators</div>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all">
            <div className="text-2xl font-bold text-purple-400">0ms</div>
            <div className="text-xs text-gray-400 mt-1">Latency</div>
          </div>
        </div>

        {/* Hero image with glow */}
        <div className="relative mt-20 mb-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/40 to-cyan-600/40 rounded-2xl blur-2xl opacity-50" />
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-8 md:p-12 overflow-hidden group hover:border-white/20 transition-all">
            <div className="relative bg-gradient-to-b from-slate-900 to-black rounded-lg border border-white/10 aspect-video flex items-center justify-center group-hover:border-white/20 transition-all overflow-hidden">
              {/* Simulated code editor content */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>
              <div className="relative text-center">
                <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-4">
                  SyncPad
                </div>
                <div className="text-gray-400 text-sm">Collaborative Code Editor</div>
                <div className="mt-8 flex justify-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse animation-delay-1000" />
                  <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse animation-delay-2000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
