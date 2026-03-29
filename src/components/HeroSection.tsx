"use client";

import { motion } from "framer-motion";
import DownloadButtons from "./DownloadButtons";

function FloatingOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[120px] ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
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
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-brand"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-32 sm:pt-40 md:pt-48 flex items-center -mt-16">
      {/* Background effects */}
      <GridBackground />
      <ParticleField />

      {/* Glow orbs */}
      <FloatingOrb
        className="left-1/4 top-1/4 h-[400px] w-[400px] bg-brand/20"
        delay={0}
      />
      <FloatingOrb
        className="right-1/4 top-1/3 h-[300px] w-[300px] bg-emerald-500/15"
        delay={2}
      />
      <FloatingOrb
        className="left-1/2 bottom-1/4 h-[350px] w-[350px] bg-brand/10"
        delay={4}
      />

      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="heading-xl mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Swap Fast.
          <br />
          <span className="text-brand">Stay Free.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-12 max-w-2xl text-lg text-text-secondary sm:text-xl md:text-2xl"
        >
          Buy and sell meme coins like lightning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <DownloadButtons />
        </motion.div>
      </div>
    </section>
  );
}
