"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const MQ =
  "Crafting Identities That Speak  •  Where Ideas Turn Into Visual Stories  •  Design That Defines Brands  •  Crafting Identities That Speak  •  Where Ideas Turn Into Visual Stories  •  Design That Defines Brands  •  ";

const brands = [
  { name: "AptSwap Co.", cat: "Fintech", color: "#2a3aff" },
  { name: "STESA FC", cat: "Sports Club", color: "#0000ff" },
  { name: "DeeLight Hub", cat: "Skincare", color: "#ff7a2f" },
  { name: "His Mercy Church", cat: "Religious Org", color: "#FFD700" },
  { name: "Forbes Mag", cat: "Editorial", color: "#555" },
  { name: "CEFSA × STESA", cat: "University", color: "#39FF14" },
];

function LogoIcon({ i }: { i: number }) {
  const defs = [
    // AptSwap diamond A
    <svg key={0} viewBox="0 0 60 60" className="w-full h-full">
      <rect width="60" height="60" rx="12" fill="#0a0a2a" />
      <path
        d="M 30 10 L 46 30 L 30 50 L 14 30 Z"
        fill="none"
        stroke="#2a3aff"
        strokeWidth="2.5"
      />
      <path
        d="M 30 10 L 46 30 L 30 50 L 14 30 Z"
        fill="#2a3aff"
        opacity="0.1"
      />
      <path
        d="M 19 35 L 30 14 L 41 35"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line x1="22" y1="29" x2="38" y2="29" stroke="white" strokeWidth="2" />
    </svg>,
    // STESA shield S
    <svg key={1} viewBox="0 0 60 60" className="w-full h-full">
      <rect width="60" height="60" rx="12" fill="#f0f4ff" />
      <path
        d="M 30 8 L 50 16 L 50 32 Q 50 48 30 54 Q 10 48 10 32 L 10 16 Z"
        fill="none"
        stroke="#0000ff"
        strokeWidth="2.5"
      />
      <path
        d="M 22 38 Q 22 42 30 42 Q 38 42 38 36 Q 38 30 30 30 Q 22 30 22 24 Q 22 18 30 18 Q 38 18 38 22"
        stroke="#0000ff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>,
    // DeeLight D
    <svg key={2} viewBox="0 0 60 60" className="w-full h-full">
      <rect width="60" height="60" rx="12" fill="#fff8f5" />
      <path
        d="M 16 12 L 16 48 Q 38 48 42 30 Q 38 12 16 12Z"
        fill="none"
        stroke="#ff7a2f"
        strokeWidth="3"
      />
      <circle cx="30" cy="30" r="7" fill="#ff7a2f" opacity="0.2" />
      <circle cx="30" cy="30" r="3" fill="#ff7a2f" />
    </svg>,
    // Church cross
    <svg key={3} viewBox="0 0 60 60" className="w-full h-full">
      <rect width="60" height="60" rx="12" fill="#1a1200" />
      <line
        x1="30"
        y1="10"
        x2="30"
        y2="50"
        stroke="#FFD700"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="15"
        y1="22"
        x2="45"
        y2="22"
        stroke="#FFD700"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="30"
        cy="30"
        r="18"
        fill="none"
        stroke="#FFD700"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>,
    // Forbes F
    <svg key={4} viewBox="0 0 60 60" className="w-full h-full">
      <rect width="60" height="60" rx="12" fill="#111" />
      <text
        x="14"
        y="46"
        fontFamily="Georgia,serif"
        fontWeight="900"
        fontSize="38"
        fill="white"
        letterSpacing="-2"
      >
        F
      </text>
      <text
        x="14"
        y="46"
        fontFamily="Georgia,serif"
        fontWeight="900"
        fontSize="38"
        fill="rgba(255,255,255,0.08)"
        letterSpacing="-2"
      >
        orbes
      </text>
    </svg>,
    // CEFSA shield with star
    <svg key={5} viewBox="0 0 60 60" className="w-full h-full">
      <rect width="60" height="60" rx="12" fill="#0a0a0a" />
      <path
        d="M 30 8 L 48 18 L 44 40 L 30 50 L 16 40 L 12 18 Z"
        fill="none"
        stroke="#39FF14"
        strokeWidth="2"
      />
      <polygon
        points="30,18 32.4,25.5 40,25.5 33.8,30 36.2,37.5 30,33 23.8,37.5 26.2,30 20,25.5 27.6,25.5"
        fill="#39FF14"
        opacity="0.7"
      />
    </svg>,
  ];
  return defs[i % defs.length];
}

export default function LogofolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section
      id="logofolio"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#f4f4f4", paddingTop: "5rem" }}
    >
      <div className="absolute inset-0 bg-grid-light pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span
            style={{
              fontFamily: "Georgia,serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(1.5rem,2.8vw,2.1rem)",
              color: "#111",
              opacity: 0.5,
            }}
          >
            Brand
          </span>
          <span
            style={{
              fontSize: "clamp(1.5rem,2.8vw,2.1rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#111",
            }}
          >
            Identity
          </span>
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: "#39FF14",
              display: "inline-block",
              boxShadow: "0 0 9px rgba(57,255,20,0.9)",
            }}
          />
          <div
            style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.1)" }}
          />
          {/* Pen icon */}
          <svg width="30" height="44" viewBox="0 0 36 48">
            <path
              d="M18 2 L28 14 L18 46 L8 14Z"
              fill="none"
              stroke="#111"
              strokeWidth="1.5"
            />
            <path d="M8 14 L28 14" stroke="#111" strokeWidth="1.5" />
            <circle cx="18" cy="46" r="2.5" fill="#111" />
          </svg>
        </motion.div>

        {/* Logo icon grid */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.68, delay: 0.1 }}
          className="grid grid-cols-6 gap-0 mb-0"
          style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
        >
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              whileHover={{
                scale: 1.06,
                y: -3,
                backgroundColor: "rgba(57,255,20,0.04)",
              }}
              className="flex items-center justify-center py-7 cursor-pointer transition-colors"
              style={{
                borderRight: i < 5 ? "1px solid rgba(0,0,0,0.07)" : "none",
              }}
            >
              <div style={{ width: 58, height: 58 }}>
                <LogoIcon i={i} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand name row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.68, delay: 0.18 }}
          className="grid grid-cols-6 gap-0 mb-8"
        >
          {brands.map((b, i) => (
            <div
              key={b.name}
              className="flex flex-col items-center justify-center py-4"
              style={{
                borderRight: i < 5 ? "1px solid rgba(0,0,0,0.07)" : "none",
                borderTop: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(0.5rem,0.85vw,0.72rem)",
                  fontWeight: 700,
                  color: "#111",
                  textAlign: "center",
                  letterSpacing: "0.04em",
                }}
              >
                {b.name}
              </span>
              <span
                style={{
                  fontSize: "0.48rem",
                  color: "rgba(0,0,0,0.38)",
                  marginTop: 2,
                  letterSpacing: "0.08em",
                }}
              >
                {b.cat}
              </span>
            </div>
          ))}
        </motion.div>

        {/* AptSwap featured showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.28 }}
          className="rounded-2xl overflow-hidden mb-0 card-lift"
          style={{
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
          }}
        >
          <div className="relative h-64 md:h-80">
            <Image
              src="/images/aptswap-biz-1.jpg"
              alt="AptSwap Brand Identity"
              fill
              style={{ objectFit: "cover" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 60%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 6,
                }}
              >
                FEATURED PROJECT
              </span>
              <h3
                style={{
                  fontSize: "clamp(1.2rem,3vw,2rem)",
                  fontWeight: 900,
                  color: "white",
                  letterSpacing: "-0.02em",
                }}
              >
                AptSwap Co.
              </h3>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.55)",
                  marginTop: 4,
                }}
              >
                Full Brand Identity System — Logo · Business Cards · Social
                Media · Presentation Decks
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Green marquee */}
      <div
        className="marquee-wrap mt-8 overflow-hidden"
        style={{
          background: "linear-gradient(90deg,#1a6a2a,#0d5020)",
          padding: "12px 0",
        }}
      >
        <div className="marquee-inner" style={{ whiteSpace: "nowrap" }}>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "#fff",
            }}
          >
            {MQ}
          </span>
        </div>
      </div>

      {/* Dark intro panel */}
      <div style={{ background: "#0a1020", padding: "4rem 0" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            textAlign: "center",
            fontSize: "clamp(0.82rem,1.5vw,1rem)",
            color: "rgba(255,255,255,0.38)",
            maxWidth: "660px",
            margin: "0 auto",
            lineHeight: 1.85,
            padding: "0 2rem",
          }}
        >
          Every mark I create is the result of deep research — merging form,
          meaning, and identity into a single, memorable symbol. A brand is not
          just a logo. It&apos;s a promise.
        </motion.p>
      </div>
    </section>
  );
}
