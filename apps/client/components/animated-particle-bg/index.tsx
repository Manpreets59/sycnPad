/**
 * AnimatedParticleBg — canvas-based constellation/network particle background.
 * Inspired by syntexity.vercel.app.
 * Mouse-interactive: particles gently flee the cursor.
 *
 * Drop-in replacement or companion to AnimatedGridBackground.
 *
 * By Manpreet Singh — Manpreets59/syncPad
 */

"use client";

import { useCallback, useEffect, useRef } from "react";

interface Particle {
  baseOpacity: number;
  opacity: number;
  radius: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
}

interface AnimatedParticleBgProps {
  className?: string;
  /** Max line-connection distance in px. Default 135. */
  connectionDist?: number;
  /** Line colour as "R,G,B". Default same as particleColor. */
  lineColor?: string;
  /** Mouse repulsion radius in px. Default 160. */
  mouseRadius?: number;
  /** Particle colour as "R,G,B". Default "148,163,184" (slate-400). */
  particleColor?: string;
  /** Particle count. Default 110. */
  particleCount?: number;
  /** Base speed multiplier. Default 0.38. */
  speed?: number;
}

export function AnimatedParticleBg({
  particleCount = 110,
  connectionDist = 135,
  speed = 0.38,
  mouseRadius = 160,
  particleColor = "148,163,184",
  lineColor,
  className,
}: AnimatedParticleBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const roRef = useRef<ResizeObserver | null>(null);

  const effectiveLineColor = lineColor ?? particleColor;

  const spawn = useCallback(
    (w: number, h: number) => {
      particlesRef.current = Array.from({ length: particleCount }, () => {
        const angle = Math.random() * Math.PI * 2;
        const mag = speed * (0.4 + Math.random() * 0.8);
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * mag,
          vy: Math.sin(angle) * mag,
          radius: 0.9 + Math.random() * 1.6,
          baseOpacity: 0.25 + Math.random() * 0.55,
          opacity: 0.25 + Math.random() * 0.55,
        };
      });
    },
    [particleCount, speed]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      return;
    }

    const parent = canvas.parentElement;
    if (!parent) {
      return;
    }

    // ── size helpers ──────────────────────────────────────────────
    const resize = () => {
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      spawn(canvas.width, canvas.height);
    };
    resize();

    roRef.current = new ResizeObserver(resize);
    roRef.current.observe(parent);

    // ── mouse tracking ────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);

    // ── render loop ───────────────────────────────────────────────
    const tick = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const ps = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const maxSpd = speed * 2.8;

      // update
      for (const p of ps) {
        // mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < mouseRadius * mouseRadius && d2 > 0) {
          const d = Math.sqrt(d2);
          const force = ((mouseRadius - d) / mouseRadius) * 0.5;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
        }

        // damping
        p.vx *= 0.985;
        p.vy *= 0.985;

        // clamp speed
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > maxSpd) {
          p.vx = (p.vx / spd) * maxSpd;
          p.vy = (p.vy / spd) * maxSpd;
        }

        // minimum drift so particles don't stop entirely
        if (spd < speed * 0.15) {
          p.vx += (Math.random() - 0.5) * 0.05;
          p.vy += (Math.random() - 0.5) * 0.05;
        }

        p.x += p.vx;
        p.y += p.vy;

        // wrap (softer than hard bounce for the constellation look)
        if (p.x < -10) {
          p.x = W + 10;
        } else if (p.x > W + 10) {
          p.x = -10;
        }
        if (p.y < -10) {
          p.y = H + 10;
        } else if (p.y > H + 10) {
          p.y = -10;
        }
      }

      // draw lines
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= connectionDist) {
            continue;
          }
          const alpha = (1 - dist / connectionDist) * 0.28;
          ctx.beginPath();
          ctx.moveTo(ps[i].x, ps[i].y);
          ctx.lineTo(ps[j].x, ps[j].y);
          ctx.strokeStyle = `rgba(${effectiveLineColor},${alpha.toFixed(3)})`;
          ctx.lineWidth = 0.65;
          ctx.stroke();
        }
      }

      // draw dots
      for (const p of ps) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor},${p.opacity.toFixed(3)})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      roRef.current?.disconnect();
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, [
    spawn,
    connectionDist,
    speed,
    mouseRadius,
    particleColor,
    effectiveLineColor,
  ]);

  return (
    <canvas
      aria-hidden="true"
      className={className}
      ref={canvasRef}
      role="presentation"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
