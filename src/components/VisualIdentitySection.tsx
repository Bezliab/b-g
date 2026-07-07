"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

function Header({
  n,
  italic,
  bold,
  light = false,
}: {
  n: string;
  italic: string;
  bold: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        style={{
          fontFamily: "Georgia,serif",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "clamp(1.1rem,2.2vw,1.6rem)",
          color: light ? "rgba(255,255,255,0.48)" : "rgba(0,0,0,0.4)",
        }}
      >
        {italic}
      </span>
      <span
        style={{
          fontSize: "clamp(1.1rem,2.2vw,1.6rem)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          color: light ? "#fff" : "#111",
        }}
      >
        {bold}
      </span>
      <div
        style={{
          flex: 1,
          marginLeft: 8,
          height: "1px",
          background: light ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.09)",
        }}
      />
      <span
        style={{
          fontSize: "clamp(1.5rem,2.8vw,2.2rem)",
          fontWeight: 900,
          color: light ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.09)",
          fontStyle: "italic",
        }}
      >
        {n}
      </span>
    </div>
  );
}

function Swatch({
  hex,
  bg,
  tc = "#fff",
}: {
  hex: string;
  bg: string;
  tc?: string;
}) {
  return (
    <div
      style={{
        flex: 1,
        borderRadius: 9,
        background: bg,
        minHeight: 75,
        display: "flex",
        alignItems: "flex-end",
        padding: "6px 8px",
        border: "1px solid rgba(255,255,255,0.055)",
      }}
    >
      <span
        style={{
          fontSize: "0.46rem",
          fontFamily: "monospace",
          color: tc,
          opacity: 0.65,
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          letterSpacing: "0.08em",
        }}
      >
        {hex}
      </span>
    </div>
  );
}

export default function VisualIdentitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section
      id="visual-identity"
      ref={ref}
      className="relative overflow-hidden"
    >
      {/* ════ 01 — APTSWAP BRAND IDENTITY ════ */}
      <div style={{ background: "#08082a", paddingTop: "5rem" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="mb-10"
          >
            <Header n="01" italic="Visual" bold="Identity" light />
          </motion.div>

          {/* AptSwap hero image */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="relative rounded-2xl overflow-hidden mb-8 card-lift"
            style={{ border: "1px solid rgba(42,58,255,0.2)" }}
          >
            <div className="relative h-56 md:h-96">
              <Image
                src="/images/aptswap-biz-1.jpg"
                alt="AptSwap Brand"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Caption sits below the image, on a solid background —
                the image already contains its own "AptSwap" wordmark, so
                overlaying matching text on top of it caused a double-text
                clash once the crop changed on smaller screens. */}
            <div
              className="p-6 md:p-8"
              style={{
                background: "linear-gradient(180deg,#0a0a34,#08082a)",
                borderTop: "1px solid rgba(42,58,255,0.15)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.5rem,4vw,3rem)",
                  fontWeight: 900,
                  color: "white",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                AptSwap
              </h2>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.5)",
                  marginTop: 6,
                  letterSpacing: "0.12em",
                }}
              >
                YOUR TRUSTED BRAND SINCE 2010 · FINTECH IDENTITY SYSTEM
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center max-w-2xl mx-auto mb-10"
            style={{
              fontSize: "0.76rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.42)",
            }}
          >
            AptSwap required a bold, trustworthy identity for a fintech
            platform. The diamond monogram mark communicates precision, value
            exchange, and security — built around a geometric language that
            scales beautifully across all brand touchpoints.
          </motion.p>

          {/* Presentation slides */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-0"
          >
            {[
              "/images/aptswap-pres-1.jpg",
              "/images/aptswap-pres-2.jpg",
              "/images/aptswap-pres-3.jpg",
            ].map((src, i) => (
              <motion.div
                key={src}
                whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(0,0,0,0.7)" }}
                className="relative rounded-xl overflow-hidden card-lift"
                style={{
                  aspectRatio: "16/9",
                  border: "1px solid rgba(42,58,255,0.15)",
                }}
              >
                <Image
                  src={src}
                  alt={`AptSwap Presentation ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* BizCards row */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.46 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
          >
            {["/images/aptswap-biz-1.jpg", "/images/aptswap-biz-2.jpg"].map(
              (src, i) => (
                <motion.div
                  key={src}
                  whileHover={{ y: -4 }}
                  className="relative rounded-xl overflow-hidden card-lift"
                  style={{
                    aspectRatio: "16/9",
                    border: "1px solid rgba(42,58,255,0.1)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`AptSwap Business Card ${i + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              ),
            )}
          </motion.div>

          {/* Color palette */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.62, delay: 0.52 }}
            className="mt-8 p-7 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.055)",
            }}
          >
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.32)",
                marginBottom: 12,
              }}
            >
              Brand Colour Palette
            </p>
            <div className="flex gap-3">
              <Swatch hex="#2a3aff" bg="#2a3aff" />
              <Swatch hex="#0a0a2a" bg="#0a0a2a" />
              <Swatch
                hex="#ffffff"
                bg="rgba(255,255,255,0.1)"
                tc="rgba(255,255,255,0.5)"
              />
              <Swatch hex="#ccccff" bg="#ccccff" tc="#1a1a66" />
            </div>
          </motion.div>
        </div>

        {/* Social media assets row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.56 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-8"
        >
          {[
            "/images/aptswap-feed.jpg",
            "/images/aptswap-insta.jpg",
            "/images/aptswap-story.jpg",
            "/images/aptswap-email.jpg",
          ].map((src, i) => (
            <motion.div
              key={src}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className="relative overflow-hidden"
              style={{
                aspectRatio: "1",
                borderRight:
                  i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              <Image
                src={src}
                alt={`AptSwap Asset ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="img-card-overlay">
                <span
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {["Feed Ad", "Instagram Post", "Story", "Email Header"][i]}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ════ 02 — DEELIGHT ESSENTIAL HUB ════ */}
      <div style={{ background: "#f0f0f0", paddingTop: "5rem" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mb-10"
          >
            <Header n="02" italic="Visual" bold="Identity" />
          </motion.div>

          {/* Skincare grid */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 mb-6"
          >
            {["/images/skincare-1.png", "/images/skincare-2.png"].map(
              (src, i) => (
                <motion.div
                  key={src}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 44px rgba(0,0,0,0.22)",
                  }}
                  className="relative rounded-2xl overflow-hidden card-lift"
                  style={{
                    aspectRatio: "1",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`DeeLight ${i + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="img-card-overlay">
                    <span
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        color: "white",
                        fontWeight: 600,
                      }}
                    >
                      DeeLight Essential Hub
                    </span>
                    <span
                      style={{
                        fontSize: "0.55rem",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      Social Media Design
                    </span>
                  </div>
                </motion.div>
              ),
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="grid grid-cols-2 gap-4 mb-8"
          >
            {["/images/skincare-3.png", "/images/skincare-4.png"].map(
              (src, i) => (
                <motion.div
                  key={src}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 44px rgba(0,0,0,0.22)",
                  }}
                  className="relative rounded-2xl overflow-hidden card-lift"
                  style={{
                    aspectRatio: "1",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`DeeLight ${i + 3}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              ),
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="text-center max-w-xl mx-auto pb-10"
            style={{
              fontSize: "0.74rem",
              lineHeight: 1.85,
              color: "rgba(0,0,0,0.45)",
              fontStyle: "italic",
            }}
          >
            DeeLight Essential Hub — a social media and packaging design
            campaign that blended vibrant blue tones with warm accents to create
            a fresh, aspirational skincare brand presence that resonates with
            modern African consumers.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
