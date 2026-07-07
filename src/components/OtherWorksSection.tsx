"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function OtherWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="other-works" ref={ref} className="relative overflow-hidden">
      {/* ── Editorial — Forbes Magazine ── */}
      <div
        style={{
          background: "#f4f4f4",
          paddingTop: "5rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="absolute inset-0 bg-grid-light pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3 mb-10"
          >
            <span
              style={{
                fontFamily: "Georgia,serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.1rem,2.2vw,1.6rem)",
                color: "rgba(0,0,0,0.45)",
              }}
            >
              Editorial
            </span>
            <span
              style={{
                fontSize: "clamp(1.1rem,2.2vw,1.6rem)",
                fontWeight: 900,
                color: "#111",
              }}
            >
              Design
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(0,0,0,0.09)",
                marginLeft: 8,
              }}
            />
            <span
              style={{
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                fontWeight: 900,
                color: "rgba(0,0,0,0.09)",
                fontStyle: "italic",
              }}
            >
              01
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Forbes image */}
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 28px 60px rgba(0,0,0,0.2)" }}
              className="relative rounded-2xl overflow-hidden card-lift"
              style={{
                aspectRatio: "3/4",
                maxHeight: 520,
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src="/images/forbes.jpg"
                alt="Forbes Magazine Editorial"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </motion.div>
            {/* Description */}
            <div>
              <p
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.28em",
                  color: "rgba(0,0,0,0.35)",
                  marginBottom: 10,
                }}
              >
                EDITORIAL DESIGN · ISSUE 01 · OCT 2022
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.5rem,4vw,2.8rem)",
                  fontWeight: 900,
                  color: "#111",
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                Forbes Magazine
              </h2>
              <p
                style={{
                  fontSize: "0.8rem",
                  lineHeight: 1.85,
                  color: "rgba(0,0,0,0.55)",
                  marginBottom: 20,
                }}
              >
                A personal editorial design project recreating a Forbes magazine
                layout featuring the TECNO POVA 4 Series. This project
                demonstrates mastery of editorial typography, grid systems,
                product presentation, and print-ready layout design — skills
                critical for publishing and brand communication.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Editorial Layout",
                  "Typography",
                  "Grid Systems",
                  "Print Design",
                  "Magazine Design",
                ].map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 50,
                      border: "1px solid rgba(0,0,0,0.12)",
                      fontSize: "0.6rem",
                      color: "rgba(0,0,0,0.5)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                className="p-5 rounded-xl"
                style={{ background: "#111", color: "white" }}
              >
                <p
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: 6,
                  }}
                >
                  WHAT THIS DEMONSTRATES
                </p>
                {[
                  "Strong hierarchy and typographic rhythm",
                  "Product photography integration",
                  "Multi-column grid mastery",
                  "Print-ready file preparation",
                ].map((p) => (
                  <div key={p} className="flex items-center gap-2 mb-2">
                    <span style={{ color: "#39FF14", fontSize: "0.7rem" }}>
                      ✓
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Book Cover Design ── */}
      <div
        style={{
          background: "#0a1020",
          paddingTop: "5rem",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="flex items-center gap-3 mb-10"
          >
            <span
              style={{
                fontFamily: "Georgia,serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.1rem,2.2vw,1.6rem)",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              Book
            </span>
            <span
              style={{
                fontSize: "clamp(1.1rem,2.2vw,1.6rem)",
                fontWeight: 900,
                color: "#fff",
              }}
            >
              Cover Design
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.07)",
                marginLeft: 8,
              }}
            />
            <span
              style={{
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                fontWeight: 900,
                color: "rgba(255,255,255,0.07)",
                fontStyle: "italic",
              }}
            >
              02
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <p
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.28em",
                  color: "rgba(255,255,255,0.28)",
                  marginBottom: 10,
                }}
              >
                BOOK COVER · ILLUSTRATION
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.5rem,4vw,2.8rem)",
                  fontWeight: 900,
                  color: "white",
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                Psalm of the
                <br />
                <span className="neon-text">Good Shepherd</span>
              </h2>
              <p
                style={{
                  fontSize: "0.8rem",
                  lineHeight: 1.85,
                  color: "rgba(255,255,255,0.48)",
                  marginBottom: 20,
                }}
              >
                Book cover design for &ldquo;Psalm of the Good Shepherd&rdquo;
                by Soji Adeniji. This project required translating a deeply
                spiritual theme into a serene, compelling visual. The final
                cover blends pastoral photography with thoughtful typography to
                evoke peace, guidance, and divine care.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Book Cover",
                  "Publishing",
                  "Illustration",
                  "Typography",
                  "Photography Compositing",
                ].map((t) => (
                  <span key={t} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <motion.div
              whileHover={{
                y: -6,
                boxShadow:
                  "0 28px 60px rgba(0,0,0,0.7), 0 0 40px rgba(57,255,20,0.06)",
              }}
              className="relative rounded-2xl overflow-hidden card-lift"
              style={{
                aspectRatio: "2/3",
                maxHeight: 500,
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 12px 48px rgba(0,0,0,0.6)",
              }}
            >
              <Image
                src="/images/book-cover.jpg"
                alt="Psalm of the Good Shepherd Book Cover"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Tech Presentation & Extras ── */}
      <div
        style={{
          background: "#f0f0f0",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="absolute inset-0 bg-grid-light pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex items-center gap-3 mb-10"
          >
            <span
              style={{
                fontFamily: "Georgia,serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.1rem,2.2vw,1.6rem)",
                color: "rgba(0,0,0,0.45)",
              }}
            >
              Presentation
            </span>
            <span
              style={{
                fontSize: "clamp(1.1rem,2.2vw,1.6rem)",
                fontWeight: 900,
                color: "#111",
              }}
            >
              Design
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(0,0,0,0.09)",
                marginLeft: 8,
              }}
            />
            <span
              style={{
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                fontWeight: 900,
                color: "rgba(0,0,0,0.08)",
                fontStyle: "italic",
              }}
            >
              03
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {/* Tech Presentation */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(0,0,0,0.18)" }}
              className="relative rounded-2xl overflow-hidden card-lift col-span-1 md:col-span-2"
              style={{
                aspectRatio: "16/9",
                border: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              <Image
                src="/images/tech-pres.png"
                alt="Tech Predictions Presentation"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="img-card-overlay">
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    color: "white",
                  }}
                >
                  Tech Predictions Presentation
                </p>
                <p
                  style={{
                    fontSize: "0.62rem",
                    color: "rgba(255,255,255,0.55)",
                    marginTop: 4,
                  }}
                >
                  Slide deck design · Digital Experience
                </p>
              </div>
            </motion.div>

            {/* School of Truth book interior */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(0,0,0,0.18)" }}
              className="relative rounded-2xl overflow-hidden card-lift"
              style={{
                aspectRatio: "3/4",
                border: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              <Image
                src="/images/school-1.jpg"
                alt="School of Truth Interior"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="img-card-overlay">
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    color: "white",
                  }}
                >
                  School of Truth Vol.4
                </p>
                <p
                  style={{
                    fontSize: "0.58rem",
                    color: "rgba(255,255,255,0.55)",
                    marginTop: 3,
                  }}
                >
                  Book interior layout design
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* AptSwap Presentation extras */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="grid grid-cols-3 gap-4 mt-5"
          >
            {[
              "/images/aptswap-pres-1.jpg",
              "/images/aptswap-pres-2.jpg",
              "/images/aptswap-pres-3.jpg",
            ].map((src, i) => (
              <motion.div
                key={src}
                whileHover={{
                  y: -4,
                  boxShadow: "0 16px 38px rgba(0,0,0,0.15)",
                }}
                className="relative rounded-xl overflow-hidden card-lift"
                style={{
                  aspectRatio: "16/9",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <Image
                  src={src}
                  alt={`AptSwap Presentation Slide ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.42 }}
            style={{
              textAlign: "center",
              fontSize: "0.7rem",
              color: "rgba(0,0,0,0.38)",
              marginTop: 16,
              letterSpacing: "0.08em",
            }}
          >
            AptSwap Presentation Deck — 7 slides of branded, structured
            corporate design
          </motion.p>
        </div>
      </div>
    </section>
  );
}
