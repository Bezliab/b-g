"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    icon: "🎬",
    title: "Brand Films",
    desc: "Cinematic brand videos that tell your story and build emotional connection with your audience.",
  },
  {
    icon: "✂️",
    title: "Short-Form Reels",
    desc: "Scroll-stopping Instagram and TikTok reels optimised for engagement and virality.",
  },
  {
    icon: "🎞️",
    title: "Motion Graphics",
    desc: "Dynamic animated titles, transitions, and lower thirds that elevate any video production.",
  },
  {
    icon: "📣",
    title: "Event Recaps",
    desc: "Highlight videos for conferences, church events, dinners, and campus programs.",
  },
  {
    icon: "🎵",
    title: "Music Sync & Audio",
    desc: "Expert audio mixing, music synchronisation, and sound design for maximum emotional impact.",
  },
  {
    icon: "📱",
    title: "Social Media Videos",
    desc: "Platform-optimised video content for Facebook, Instagram, YouTube, and X/Twitter.",
  },
];

const tools = [
  { label: "V", name: "Veed", color: "#9999ff", bg: "#1b1450" },
  { label: "Ae", name: "After Effects", color: "#9999ff", bg: "#0d0a30" },
  { label: "CC", name: "Capcut", color: "#ffa040", bg: "#2a1200" },
  { label: "Ca", name: "Canva Video", color: "#00c4cc", bg: "#001a1b" },
];

const stats = [
  { n: "5+", label: "Videos Edited" },
  { n: "★★★★★", label: "Client Rating" },
  { n: "1+", label: "Years Experience" },
];

function PlayButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="play-btn" aria-label="Play showreel">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#39FF14">
        <polygon points="8,5 19,12 8,19" />
      </svg>
    </button>
  );
}

export default function VideoEditingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="video-editing"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#040404" }}
    >
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Deep cinematic glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(57,255,20,0.08) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(25,245,165,0.05) 0%, transparent 45%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span
            style={{
              fontFamily: "Georgia,serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(1.1rem,2.2vw,1.6rem)",
              color: "rgba(255,255,255,0.48)",
            }}
          >
            Video
          </span>
          <span
            style={{
              fontSize: "clamp(1.1rem,2.2vw,1.6rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            Editing
          </span>
          <span
            style={{
              fontSize: "clamp(1.1rem,2.2vw,1.6rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#39FF14",
              textShadow: "0 0 16px rgba(57,255,20,0.5)",
            }}
          >
            &amp; Motion
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(255,255,255,0.07)",
              marginLeft: 8,
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
          style={{
            fontSize: "clamp(0.8rem,1.5vw,1rem)",
            color: "rgba(255,255,255,0.38)",
            maxWidth: 580,
            marginBottom: "4rem",
            lineHeight: 1.7,
          }}
        >
          Beyond static graphics — I bring brands to life through movement,
          rhythm, and cinematic storytelling. From church event recaps to brand
          launch films.
        </motion.p>

        {/* ── Showreel hero ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.85, delay: 0.18 }}
          className="relative rounded-2xl overflow-hidden mb-16"
          style={{
            border: "1px solid rgba(57,255,20,0.12)",
            boxShadow:
              "0 0 60px rgba(57,255,20,0.06), 0 24px 80px rgba(0,0,0,0.7)",
            aspectRatio: "16/7",
          }}
        >
          {/* Film frame background */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg,#0a0a0a,#111a0a)" }}
          />

          {/* Film strip top */}
          <div
            className="absolute top-0 left-0 right-0 h-8 flex items-center"
            style={{ background: "#111" }}
          >
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 18,
                  height: 14,
                  borderRadius: 2,
                  border: "1.5px solid #222",
                  marginLeft: 6,
                  flexShrink: 0,
                  background: "#1a1a1a",
                }}
              />
            ))}
          </div>
          {/* Film strip bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 flex items-center"
            style={{ background: "#111" }}
          >
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 18,
                  height: 14,
                  borderRadius: 2,
                  border: "1.5px solid #222",
                  marginLeft: 6,
                  flexShrink: 0,
                  background: "#1a1a1a",
                }}
              />
            ))}
          </div>

          {/* Main content area */}
          <div className="absolute inset-x-0 top-8 bottom-8 flex flex-col items-center justify-center gap-6">
            {/* Timeline visualization */}
            <div className="w-full max-w-2xl px-8">
              {[
                {
                  label: "VIDEO TRACK",
                  color: "#39FF14",
                  clips: [0.05, 0.28, 0.5, 0.72, 0.88],
                },
                {
                  label: "AUDIO TRACK",
                  color: "#19F5A5",
                  clips: [0.02, 0.22, 0.45, 0.68, 0.85],
                },
                {
                  label: "GRAPHICS",
                  color: "#9999ff",
                  clips: [0.1, 0.38, 0.6, 0.78],
                },
                {
                  label: "COLOR GRADE",
                  color: "#ff9a00",
                  clips: [0, 0.3, 0.55, 0.8],
                },
              ].map((track, ti) => (
                <div key={track.label} className="flex items-center gap-3 mb-2">
                  <span
                    style={{
                      fontSize: "0.42rem",
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.3)",
                      width: 58,
                      textAlign: "right",
                      flexShrink: 0,
                    }}
                  >
                    {track.label}
                  </span>
                  <div
                    className="flex-1 relative h-5"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: 3,
                    }}
                  >
                    {track.clips.map((start, ci) => (
                      <motion.div
                        key={ci}
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{
                          duration: 0.6,
                          delay: 0.5 + ti * 0.08 + ci * 0.06,
                        }}
                        style={{
                          position: "absolute",
                          left: `${start * 100}%`,
                          width: `${(0.15 + ci * 0.03) * 100}%`,
                          top: 2,
                          bottom: 2,
                          background: `${track.color}22`,
                          border: `1px solid ${track.color}66`,
                          borderRadius: 2,
                          transformOrigin: "left",
                        }}
                      />
                    ))}
                    {/* Playhead */}
                    {playing && (
                      <motion.div
                        initial={{ left: "0%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 4, ease: "linear" }}
                        style={{
                          position: "absolute",
                          top: -4,
                          bottom: -4,
                          width: 2,
                          background: "#fff",
                          boxShadow: "0 0 6px rgba(255,255,255,0.8)",
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
              {/* Timecode ruler */}
              <div className="flex items-center gap-0 mt-1 ml-16">
                {Array.from({ length: 11 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 1,
                        height: i % 5 === 0 ? 8 : 4,
                        background: "rgba(255,255,255,0.2)",
                      }}
                    />
                    {i % 5 === 0 && (
                      <span
                        style={{
                          fontSize: "0.38rem",
                          color: "rgba(255,255,255,0.2)",
                          marginTop: 1,
                        }}
                      >
                        {i * 5}s
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Play button + label */}
            <div className="flex flex-col items-center gap-3">
              <PlayButton onClick={() => setPlaying(!playing)} />
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.28em",
                  color: "rgba(255,255,255,0.28)",
                }}
              >
                {playing ? "PLAYING SHOWREEL..." : "CLICK TO PREVIEW SHOWREEL"}
              </span>
            </div>
          </div>

          {/* Corner labels */}
          <div
            className="absolute top-10 left-6"
            style={{
              fontSize: "0.5rem",
              color: "rgba(57,255,20,0.4)",
              letterSpacing: "0.15em",
            }}
          >
            BEZLIAB GRAPHICS © 2026
          </div>
          <div className="absolute top-10 right-6 flex items-center gap-2">
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#ff4444",
                animation: "pulse 1.5s infinite",
              }}
            />
            <span
              style={{
                fontSize: "0.5rem",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.12em",
              }}
            >
              HD 1080p
            </span>
          </div>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.32 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-5 text-center"
              style={{
                background: "rgba(57,255,20,0.04)",
                border: "1px solid rgba(57,255,20,0.1)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.5rem,3.5vw,2.5rem)",
                  fontWeight: 900,
                  color: "#39FF14",
                  textShadow: "0 0 16px rgba(57,255,20,0.5)",
                  lineHeight: 1,
                }}
              >
                {s.n}
              </p>
              <p
                style={{
                  fontSize: "0.6rem",
                  color: "rgba(255,255,255,0.35)",
                  marginTop: 6,
                  letterSpacing: "0.15em",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Services grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.44 + i * 0.07 }}
              whileHover={{
                y: -5,
                borderColor: "rgba(57,255,20,0.28)",
                boxShadow:
                  "0 16px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(57,255,20,0.1)",
              }}
              style={{
                padding: "24px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                cursor: "default",
                transition: "all 0.3s ease",
              }}
            >
              <span
                style={{
                  fontSize: "1.6rem",
                  marginBottom: 12,
                  display: "block",
                }}
              >
                {s.icon}
              </span>
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.42)",
                  lineHeight: 1.72,
                }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Tools I use ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.55 }}
        >
          <p
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.22)",
              marginBottom: 16,
            }}
          >
            MY VIDEO TOOLS
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            {tools.map((t) => (
              <motion.div
                key={t.label}
                whileHover={{ scale: 1.08, y: -3 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 18px",
                  borderRadius: 12,
                  background: t.bg,
                  border: `1px solid ${t.color}33`,
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 7,
                    background: `${t.color}22`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.72rem",
                    fontWeight: 900,
                    color: t.color,
                  }}
                >
                  {t.label}
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.65)",
                    fontWeight: 600,
                  }}
                >
                  {t.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.65, delay: 0.65 }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.a
            href="mailto:boluwarin215@gmail.com"
            whileHover={{ boxShadow: "0 0 28px rgba(57,255,20,0.4)", y: -2 }}
            style={{
              padding: "14px 36px",
              border: "1.5px solid #39FF14",
              borderRadius: 50,
              background: "rgba(57,255,20,0.07)",
              color: "#39FF14",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            🎬 &nbsp;Hire Me for Video
          </motion.a>
          <span
            style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.28)" }}
          >
            or
          </span>
          <a
            href="mailto:boluwarin215@gmail.com"
            style={{
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.45)",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            Request a Showreel →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
