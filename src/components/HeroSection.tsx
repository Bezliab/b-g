"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import SoftwareCarousel from "./SoftwareCarousel";

const navItems = [
  { label: "ABOUT ME", href: "#intro" },
  { label: "BRAND IDENTITY", href: "#logofolio" },
  { label: "VISUAL DESIGN", href: "#visual-identity" },
  { label: "SOCIAL MEDIA", href: "#social-media" },
  { label: "PACKAGING", href: "#packaging" },
  { label: "VIDEO EDITING", href: "#video-editing" },
  { label: "OTHER WORKS", href: "#other-works" },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const resize = () => {
      c.width = c.offsetWidth;
      c.height = c.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r: Math.random() * 1.6 + 0.3,
      a: Math.random() * 0.38 + 0.06,
      col:
        Math.random() > 0.6
          ? "#39FF14"
          : Math.random() > 0.5
            ? "#19F5A5"
            : "#ffffff",
    }));
    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      // Draw faint connection lines
      pts.forEach((p, i) => {
        pts.slice(i + 1, i + 4).forEach((q) => {
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(57,255,20,${0.04 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = c.width;
        if (p.x > c.width) p.x = 0;
        if (p.y < 0) p.y = c.height;
        if (p.y > c.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.col;
        ctx.globalAlpha = p.a;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, []);
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#040404" }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Multiple glow orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 30%, rgba(57,255,20,0.14) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 70%, rgba(25,245,165,0.07) 0%, transparent 48%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(57,255,20,0.05) 0%, transparent 40%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-0">
        {/* ── Studio badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <div
            style={{
              width: 150,
              height: 36,
              borderRadius: 10,
              border: "1.2px solid #39FF14",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(57,255,20,0.06)",
              boxShadow: "0 0 14px rgba(57,255,20,0.3)",
            }}
          >
            <span
              style={{
                fontWeight: 900,
                fontSize: "1rem",
                color: "#39FF14",
                letterSpacing: "-0.03em",
              }}
            >
              Bezliab Graphics
            </span>
          </div>
          {/* <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              color: "rgba(255,255,255,0.38)",
              fontWeight: 600,
            }}
          >
            BEZLIAB GRAPHICS
          </span> */}
        </motion.div>

        {/* ── Giant title ── */}
        <div className="relative" style={{ minHeight: "480px" }}>
          <motion.span
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            style={{
              fontFamily: "Georgia,serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(2rem,5.5vw,3.8rem)",
              color: "rgba(255,255,255,0.78)",
              display: "block",
              letterSpacing: "0.03em",
            }}
          >
            Isaac's
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.88, delay: 0.32 }}
            style={{
              fontSize: "clamp(4.5rem,13vw,10.5rem)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginTop: "-0.06em",
            }}
          >
            Port
            <span
              style={{
                display: "inline-block",
                width: "clamp(0.2rem,1.2vw,1rem)",
              }}
            />
            folio
          </motion.h1>

          {/* Green neon ring in "fo" gap */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.42, delay: 0.68 }}
            className="absolute"
            style={{
              top: "clamp(3rem,8.5vw,7rem)",
              left: "clamp(6.5rem,16.5vw,13.5rem)",
              width: "clamp(2.4rem,5.2vw,4rem)",
              height: "clamp(2.4rem,5.2vw,4rem)",
              borderRadius: "50%",
              border: "2.5px solid #39FF14",
              boxShadow:
                "0 0 24px rgba(57,255,20,0.65), 0 0 60px rgba(57,255,20,0.2)",
            }}
          />

          {/* ── Abstract creative element (design tools graphic) ── */}
          <motion.div
            initial={{ opacity: 0, x: 55, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.5 }}
            className="absolute top-0 right-0"
            style={{ width: "clamp(240px,40%,460px)" }}
          >
            <div
              style={{
                position: "relative",
                paddingBottom: "88%",
                width: "100%",
              }}
            >
              {/* Glow behind */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 55% 42%, rgba(57,255,20,0.25) 0%, rgba(0,160,40,0.08) 38%, transparent 68%)",
                  filter: "blur(28px)",
                }}
              />
              {/* 3D coverflow carousel of software icons */}
              <div className="absolute inset-0">
                <SoftwareCarousel />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Tagline divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.86 }}
          className="flex items-center gap-4 mt-2 mb-8"
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg,transparent,rgba(255,255,255,0.2))",
            }}
          />
          <span
            style={{
              fontSize: "0.64rem",
              letterSpacing: "0.44em",
              fontWeight: 700,
              color: "rgba(255,255,255,0.38)",
            }}
          >
            CRAFTING VISUAL STORIES
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg,rgba(255,255,255,0.2),transparent)",
            }}
          />
        </motion.div>

        {/* ── Nav pills — 4 + 3 grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.08 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl mx-auto pb-20"
        >
          {navItems.map((item, i) => (
            <motion.button
              key={item.label}
              onClick={() => go(item.href)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 1.18 + i * 0.06 }}
              whileHover={{
                borderColor: "#39FF14",
                color: "#39FF14",
                boxShadow:
                  "0 0 18px rgba(57,255,20,0.3), inset 0 0 18px rgba(57,255,20,0.05)",
                y: -2,
              }}
              className="nav-pill"
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
