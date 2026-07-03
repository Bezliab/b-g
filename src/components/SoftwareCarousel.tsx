"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ── App data: monogram tiles styled to match the site's neon/minimal aesthetic ── */
type App = {
  id: string;
  name: string;
  short: string;
  bg: string; // tile background (solid or gradient)
  accent: string; // glow / border accent color
};

const APPS: App[] = [
  {
    id: "ps",
    name: "Photoshop",
    short: "PS",
    bg: "linear-gradient(155deg,#001b30,#00304f)",
    accent: "#31A8FF",
  },
  {
    id: "ai",
    name: "Illustrator",
    short: "AI",
    bg: "linear-gradient(155deg,#2e1400,#4a2200)",
    accent: "#FF9A00",
  },
  {
    id: "fi",
    name: "Figma",
    short: "FI",
    bg: "linear-gradient(155deg,#191919,#242424)",
    accent: "#A259FF",
  },
  {
    id: "ae",
    name: "After Effects",
    short: "AE",
    bg: "linear-gradient(155deg,#0c0033,#1a0060)",
    accent: "#9999FF",
  },
  {
    id: "cd",
    name: "CorelDRAW",
    short: "CD",
    bg: "linear-gradient(155deg,#052008,#0a3a10)",
    accent: "#3ED84B",
  },
  {
    id: "ca",
    name: "Canva",
    short: "CA",
    bg: "linear-gradient(155deg,#04292b,#1a0c3d)",
    accent: "#00C4CC",
  },
  {
    id: "cc",
    name: "CapCut",
    short: "CC",
    bg: "linear-gradient(155deg,#0a0a0a,#161616)",
    accent: "#00E5FF",
  },
  {
    id: "cp",
    name: "PHOTO-PAINT",
    short: "CP",
    bg: "linear-gradient(155deg,#031f0e,#063a1c)",
    accent: "#39FF14",
  },
];

const N_APPS = APPS.length;
const REPEAT = 5; // total instances = N_APPS * REPEAT, keeps wrap boundary far off-screen
const TOTAL = N_APPS * REPEAT;
const HALF = TOTAL / 2;

// wrap x into (-HALF, HALF]
function wrap(x: number) {
  let v = x % TOTAL;
  if (v > HALF) v -= TOTAL;
  if (v <= -HALF) v += TOTAL;
  return v;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function SoftwareCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<Array<HTMLDivElement | null>>([]);
  const glowRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [activeApp, setActiveApp] = useState<App>(APPS[0]);
  const [maxOffset, setMaxOffset] = useState(4); // responsive visible radius

  // mutable animation state, kept out of React state for 60fps perf
  const tRef = useRef(0); // current "slot" position (continuous)
  const speedRef = useRef(0.42); // slots per second at full speed
  const speedFactorRef = useRef(1); // current eased speed multiplier (0..1)
  const speedTargetRef = useRef(1); // target multiplier based on hover state
  const hoveredJRef = useRef<number | null>(null);
  const containerHoverRef = useRef(false);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);
  const lastActiveIdRef = useRef<string>(APPS[0].id);
  // smoothed per-item visual params to avoid any jumps
  const curScale = useRef<number[]>(new Array(TOTAL).fill(0.5));
  const curFocus = useRef<number[]>(new Array(TOTAL).fill(0)); // 0..1 "how centered / focused"

  // responsive visible count
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      if (w < 300) setMaxOffset(2);
      else if (w < 420) setMaxOffset(3);
      else setMaxOffset(4);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onTileEnter = useCallback((j: number) => {
    hoveredJRef.current = j;
  }, []);
  const onTileLeave = useCallback(() => {
    hoveredJRef.current = null;
  }, []);
  const onContainerEnter = useCallback(() => {
    containerHoverRef.current = true;
  }, []);
  const onContainerLeave = useCallback(() => {
    containerHoverRef.current = false;
    hoveredJRef.current = null;
  }, []);

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const step = (now: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = now;
      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = now;

      // determine target speed multiplier from hover state
      if (hoveredJRef.current !== null) {
        speedTargetRef.current = 0; // fully paused while focusing one tile
      } else if (containerHoverRef.current) {
        speedTargetRef.current = 0.28; // slow drift on general hover
      } else {
        speedTargetRef.current = 1;
      }
      // ease the speed multiplier itself so accel/decel is smooth, never abrupt
      speedFactorRef.current = lerp(
        speedFactorRef.current,
        speedTargetRef.current,
        1 - Math.pow(0.001, dt),
      );

      tRef.current += speedRef.current * speedFactorRef.current * dt;

      const containerWidth = containerEl.offsetWidth || 320;
      const spacing = containerWidth / ((maxOffset + 1.4) * 2);
      const baseTile = Math.max(30, Math.min(74, containerWidth * 0.17));

      let nearestAbs = Infinity;
      let nearestApp = APPS[0];

      for (let j = 0; j < TOTAL; j++) {
        const off = wrap(j - tRef.current);
        const absOff = Math.abs(off);
        const app = APPS[j % N_APPS];

        if (absOff < nearestAbs) {
          nearestAbs = absOff;
          nearestApp = app;
        }

        const visRange = maxOffset + 1;
        const isHovered = hoveredJRef.current === j;

        // focus: 1 at dead center, fades to 0 by the edge of visible range
        let targetFocus = Math.max(0, 1 - absOff / 1.35);
        targetFocus = Math.pow(targetFocus, 1.15);
        if (isHovered) targetFocus = 1;

        // scale: hyperbolic falloff so the center reads ~2x its neighbors
        let targetScale = 2.05 / (1 + absOff * 0.95);
        targetScale = Math.max(0.42, Math.min(2.05, targetScale));
        if (isHovered) targetScale = Math.max(targetScale, 1.9);

        // smooth (lerp) toward targets — this is what guarantees no sudden jumps
        const ease = 1 - Math.pow(0.0009, dt);
        curScale.current[j] = lerp(curScale.current[j], targetScale, ease);
        curFocus.current[j] = lerp(curFocus.current[j], targetFocus, ease);

        const s = curScale.current[j];
        const f = curFocus.current[j];

        const el = tileRefs.current[j];
        const glow = glowRefs.current[j];
        if (!el) continue;

        if (absOff > visRange + 0.6) {
          el.style.opacity = "0";
          el.style.pointerEvents = "none";
          continue;
        }

        const x = off * spacing;
        const z = f * 90 - absOff * 30;
        const rotY = Math.max(-34, Math.min(34, off * -7));
        const floatY = Math.sin(now / 900 + j) * 3 * f;
        const opacity = Math.max(
          0,
          Math.min(1, 1.15 - absOff / (visRange + 0.3)),
        );

        el.style.opacity = String(opacity);
        el.style.pointerEvents = absOff < visRange ? "auto" : "none";
        el.style.transform = `translate3d(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${floatY.toFixed(2)}px), ${z.toFixed(2)}px) rotateY(${rotY.toFixed(2)}deg) scale(${s.toFixed(3)})`;
        el.style.width = `${baseTile}px`;
        el.style.height = `${baseTile}px`;
        el.style.zIndex = String(1000 - Math.round(absOff * 10));
        el.style.filter =
          f > 0.94
            ? "brightness(1.18)"
            : `brightness(${(0.75 + f * 0.35).toFixed(2)})`;

        if (glow) {
          const accent = app.accent;
          const glowStrength = f;
          glow.style.boxShadow = `0 0 ${8 + glowStrength * 34}px ${glowStrength * 0.55}px ${accent}${Math.round(
            glowStrength * 90 + 20,
          )
            .toString(16)
            .padStart(
              2,
              "0",
            )}, 0 0 ${18 + glowStrength * 55}px rgba(57,255,20,${(glowStrength * 0.35).toFixed(2)})`;
          glow.style.borderColor = `${accent}${Math.round(
            50 + glowStrength * 130,
          )
            .toString(16)
            .padStart(2, "0")}`;
          glow.style.borderWidth = glowStrength > 0.7 ? "1.6px" : "1px";
        }
      }

      if (nearestApp.id !== lastActiveIdRef.current) {
        lastActiveIdRef.current = nearestApp.id;
        setActiveApp(nearestApp);
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [maxOffset]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={onContainerEnter}
      onMouseLeave={onContainerLeave}
      className="relative w-full h-full"
      style={{ perspective: "1100px" }}
    >
      <div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        {Array.from({ length: TOTAL }).map((_, j) => {
          const app = APPS[j % N_APPS];
          return (
            <div
              key={j}
              ref={(el) => {
                tileRefs.current[j] = el;
              }}
              onMouseEnter={() => onTileEnter(j)}
              onMouseLeave={onTileLeave}
              className="absolute top-1/2 left-1/2 will-change-transform"
              style={{
                width: 60,
                height: 60,
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                cursor: "default",
              }}
            >
              <div
                ref={(el) => {
                  glowRefs.current[j] = el;
                }}
                className="w-full h-full rounded-2xl flex items-center justify-center select-none"
                style={{
                  background: app.bg,
                  border: "1px solid rgba(57,255,20,0.15)",
                  boxShadow: "0 0 10px rgba(57,255,20,0.08)",
                  transition: "border-color 0.15s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(0.75rem, 1.6vw, 1.05rem)",
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                  }}
                >
                  {app.short}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* center label */}
      <div
        className="absolute left-0 right-0 flex items-center justify-center pointer-events-none"
        style={{ bottom: "6%" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeApp.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex items-center gap-2"
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 3,
                background: activeApp.accent,
                boxShadow: `0 0 10px ${activeApp.accent}`,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "clamp(0.7rem, 1.6vw, 0.92rem)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.85)",
                textTransform: "uppercase",
              }}
            >
              {activeApp.name}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
