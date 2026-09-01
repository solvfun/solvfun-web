import type { CSSProperties } from "react";
import DownloadButtons from "./DownloadButtons";

function FloatingOrb({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full blur-[120px] opacity-45 ${className}`}
    />
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(124,255,91,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(124,255,91,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial fade so grid fades at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-bg-base)_70%)]" />
    </div>
  );
}

// Deterministic pseudo-random to avoid SSR/client hydration mismatch
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

// 粒子的漂浮动画在 globals.css 的 `.hero-particle` / `@keyframes particle-float`，
// 每个粒子只通过 inline style 覆盖自己的 duration / delay。
function ParticleField() {
  const r = (seed: number, mul: number, add: number) =>
    Math.round(seededRandom(seed) * mul * 100 + add * 100) / 100;

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${r(i * 4, 100, 0)}%`,
    top: `${r(i * 4 + 1, 100, 0)}%`,
    size: r(i * 4 + 2, 3, 1),
    delay: r(i * 4 + 3, 5, 0),
    duration: r(i * 4 + 4, 4, 3),
  }));

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="hero-particle absolute rounded-full bg-brand"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// 入场动画同样是纯 CSS（`.hero-enter` / `@keyframes hero-enter`）。
// 这样标题在首帧就开始淡入，而不是等 JS 下载并水合之后才出现。
function enter(y: number, duration: number, delay: number): CSSProperties {
  return {
    "--enter-y": `${y}px`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  } as CSSProperties;
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-32 sm:pt-40 md:pt-48 flex items-center -mt-16">
      {/* Background effects */}
      <GridBackground />
      <ParticleField />

      {/* Glow orbs */}
      <FloatingOrb className="left-1/4 top-1/4 h-[400px] w-[400px] bg-brand/20" />
      <FloatingOrb className="right-1/4 top-1/3 h-[300px] w-[300px] bg-emerald-500/15" />
      <FloatingOrb className="left-1/2 bottom-1/4 h-[350px] w-[350px] bg-brand/10" />

      <div className="mx-auto w-full max-w-4xl text-center">
        <h1
          className="hero-enter heading-xl mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          style={enter(30, 0.7, 0.15)}
        >
          Swap Fast.
          <br />
          <span className="text-brand">Stay Free.</span>
        </h1>

        <p
          className="hero-enter mx-auto mb-12 max-w-2xl text-lg text-text-secondary sm:text-xl md:text-2xl"
          style={enter(20, 0.6, 0.3)}
        >
          Buy and sell meme coins like lightning.
        </p>

        <div className="hero-enter" style={enter(20, 0.6, 0.45)}>
          <DownloadButtons />
        </div>
      </div>
    </section>
  );
}
