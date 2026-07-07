"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   VIDEO DATA
   ─ src:      local file in public/videos/
   ─ driveUrl: Google Drive share link  (any format – auto-parsed)
   ─ aspect:   "9:16" | "16:9" | "1:1"
   ───────────────────────────────────────────────────────────── */
const VIDEOS = [
  {
    id: "v1",
    title: "Social Media Reel",
    category: "Social Media",
    client: "Client Work",
    src: "/videos/reel-01.mp4",
    poster: "/videos/reel-01-thumb.jpg",
    duration: "0:48",
    tags: ["Reel", "Social Media", "Vertical"],
    aspect: "9:16" as const,
  },
  /* ── Add more videos below ─────────────────────────────────
  {
    id:       "v2",
    title:    "Brand Highlight Film",
    category: "Brand Film",
    client:   "Client Name",
    driveUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/view",
    duration: "2:30",
    tags:     ["Brand", "Highlight"],
    aspect:   "16:9" as const,
  },
  {
    id:       "v3",
    title:    "Event Recap",
    category: "Event",
    client:   "Client Name",
    src:      "/videos/event-01.mp4",
    poster:   "/videos/event-01-thumb.jpg",
    duration: "1:15",
    tags:     ["Event", "Recap"],
    aspect:   "16:9" as const,
  },
  ─────────────────────────────────────────────────────────── */
] as const;

type VideoItem = (typeof VIDEOS)[number];
type AspectRatio = "9:16" | "16:9" | "1:1";

/* ─── Helpers ─────────────────────────────────────────────── */
function driveEmbedUrl(url: string): string {
  const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return m ? `https://drive.google.com/file/d/${m[1]}/preview` : url;
}

function videoSrc(v: VideoItem): string | null {
  if ("src" in v && v.src) return v.src;
  if ("driveUrl" in v && (v as { driveUrl?: string }).driveUrl)
    return driveEmbedUrl((v as { driveUrl: string }).driveUrl);
  return null;
}
function isDrive(v: VideoItem): boolean {
  return !("src" in v) || !v.src;
}

const CAT_COLORS: Record<string, string> = {
  "Social Media": "#39FF14",
  "Brand Film": "#19F5A5",
  Event: "#ff9a00",
  Highlight: "#9999ff",
  Reel: "#00c4cc",
};

/* ─── Play button ─────────────────────────────────────────── */
function PlayBtn({
  glow = "#39FF14",
  size = 60,
}: {
  glow?: string;
  size?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `2px solid ${glow}`,
        background: `rgba(4,4,4,0.75)`,
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 0 20px ${glow}55, 0 0 48px ${glow}22`,
        flexShrink: 0,
      }}
    >
      <svg
        width={size * 0.35}
        height={size * 0.35}
        viewBox="0 0 24 24"
        fill={glow}
      >
        <polygon points="6,4 20,12 6,20" />
      </svg>
    </div>
  );
}

/* ─── Video card ──────────────────────────────────────────── */
function VideoCard({ v, onPlay }: { v: VideoItem; onPlay: () => void }) {
  const isVertical = v.aspect === "9:16";
  const catColor = CAT_COLORS[v.category] ?? "#39FF14";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -6 }}
      onClick={onPlay}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        aspectRatio: isVertical ? "9/16" : "16/9",
        maxWidth: isVertical ? 280 : "100%",
        width: "100%",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${catColor}55`;
        (e.currentTarget as HTMLElement).style.boxShadow =
          `0 0 32px ${catColor}22, 0 8px 40px rgba(0,0,0,0.7)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 24px rgba(0,0,0,0.5)";
      }}
    >
      {/* Thumbnail / poster */}
      {"poster" in v && v.poster ? (
        <Image
          src={v.poster}
          alt={v.title}
          fill
          style={{ objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg,rgba(57,255,20,0.06),rgba(4,4,4,0.9))`,
          }}
        />
      )}

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top,rgba(4,4,4,0.92) 0%,rgba(4,4,4,0.3) 50%,rgba(4,4,4,0.15) 100%)",
        }}
      />

      {/* Duration badge — top right */}
      {"duration" in v && v.duration && (
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            padding: "3px 9px",
            borderRadius: 20,
            background: "rgba(4,4,4,0.75)",
            backdropFilter: "blur(6px)",
            fontSize: "0.6rem",
            fontWeight: 600,
            color: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {v.duration}
        </div>
      )}

      {/* Category badge — top left */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          padding: "3px 9px",
          borderRadius: 20,
          background: `${catColor}22`,
          backdropFilter: "blur(6px)",
          fontSize: "0.58rem",
          fontWeight: 700,
          color: catColor,
          border: `1px solid ${catColor}44`,
          letterSpacing: "0.08em",
        }}
      >
        {v.category}
      </div>

      {/* Centered play button */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
          <PlayBtn glow={catColor} size={isVertical ? 56 : 68} />
        </motion.div>
      </div>

      {/* Bottom info */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "14px 16px 14px",
        }}
      >
        <p
          style={{
            fontSize: "clamp(0.78rem,1.4vw,0.92rem)",
            fontWeight: 700,
            color: "white",
            marginBottom: 6,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {v.title}
        </p>
        {"client" in v && v.client && (
          <p
            style={{
              fontSize: "0.62rem",
              color: "rgba(255,255,255,0.45)",
              marginBottom: 7,
            }}
          >
            {v.client}
          </p>
        )}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {v.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "0.52rem",
                padding: "2px 8px",
                borderRadius: 10,
                background: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.1)",
                letterSpacing: "0.06em",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Modal player ────────────────────────────────────────── */
function VideoModal({ v, onClose }: { v: VideoItem; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVert = v.aspect === "9:16";
  const isDriveV = isDrive(v);
  const src = videoSrc(v);

  /* lock scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* ESC key */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  /* auto-play local video */
  useEffect(() => {
    if (videoRef.current && !isDriveV) {
      videoRef.current.play().catch(() => {});
    }
  }, [isDriveV]);

  const modalW = isVert ? "min(380px, 92vw)" : "min(900px, 94vw)";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(4,4,4,0.88)",
        backdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Player container */}
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 24 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: modalW,
          borderRadius: 18,
          overflow: "hidden",
          boxShadow:
            "0 0 80px rgba(57,255,20,0.18), 0 32px 80px rgba(0,0,0,0.8)",
          border: "1px solid rgba(57,255,20,0.15)",
          background: "#080808",
        }}
      >
        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1, background: "rgba(57,255,20,0.15)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 10,
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(4,4,4,0.8)",
            backdropFilter: "blur(8px)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.8)",
            fontSize: "1rem",
            transition: "background 0.2s ease",
          }}
          aria-label="Close video"
        >
          ✕
        </motion.button>

        {/* ── Video player ── */}
        {isDriveV && src ? (
          /* Google Drive iframe */
          <iframe
            src={src}
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              width: "100%",
              aspectRatio:
                v.aspect === "9:16"
                  ? "9/16"
                  : v.aspect === "1:1"
                    ? "1/1"
                    : "16/9",
              display: "block",
              border: "none",
            }}
          />
        ) : src ? (
          /* Local MP4 */
          <video
            ref={videoRef}
            src={src}
            controls
            playsInline
            preload="auto"
            {...("poster" in v && v.poster ? { poster: v.poster } : {})}
            style={{
              width: "100%",
              aspectRatio:
                v.aspect === "9:16"
                  ? "9/16"
                  : v.aspect === "1:1"
                    ? "1/1"
                    : "16/9",
              display: "block",
              background: "#000",
            }}
          />
        ) : (
          <div
            style={{
              padding: 48,
              textAlign: "center",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Video not available
          </div>
        )}

        {/* Bottom info strip */}
        <div
          style={{
            padding: "14px 18px",
            background: "rgba(4,4,4,0.95)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "white",
                marginBottom: 2,
              }}
            >
              {v.title}
            </p>
            <p
              style={{
                fontSize: "0.62rem",
                color: "rgba(255,255,255,0.38)",
                letterSpacing: "0.06em",
              }}
            >
              {"client" in v ? v.client : ""} · {v.category}
            </p>
          </div>
          <div style={{ display: "flex", gap: 5 }}>
            {v.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "0.52rem",
                  padding: "3px 9px",
                  borderRadius: 10,
                  background: "rgba(57,255,20,0.08)",
                  color: "rgba(57,255,20,0.7)",
                  border: "1px solid rgba(57,255,20,0.2)",
                  letterSpacing: "0.06em",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Supporting content data ─────────────────────────────── */
const SERVICES = [
  {
    icon: "🎬",
    title: "Brand Films",
    desc: "Cinematic brand videos that tell your story and build emotional connection with your audience.",
  },
  {
    icon: "✂️",
    title: "Short-Form Reels",
    desc: "Scroll-stopping Instagram and TikTok reels optimised for engagement and maximum reach.",
  },
  {
    icon: "🎞️",
    title: "Motion Graphics",
    desc: "Dynamic animated titles, lower thirds, and transitions that elevate any video production.",
  },
  {
    icon: "📣",
    title: "Event Recaps",
    desc: "Highlight videos for conferences, church events, dinners, and campus programs.",
  },
  {
    icon: "🎵",
    title: "Music Sync",
    desc: "Expert audio mixing, music synchronisation, and sound design for emotional impact.",
  },
  {
    icon: "📱",
    title: "Social Videos",
    desc: "Platform-optimised video content for Facebook, Instagram, YouTube, and X.",
  },
];

const TOOLS = [
  { label: "Pr", name: "Premiere Pro", color: "#9999ff", bg: "#1b1450" },
  { label: "Ae", name: "After Effects", color: "#9999ff", bg: "#0d0a30" },
  { label: "CC", name: "CapCut", color: "#ffa040", bg: "#2a1200" },
  { label: "Ca", name: "Canva Video", color: "#00c4cc", bg: "#001a1b" },
];

const STATS = [
  { n: "5+", label: "Videos Edited" },
  { n: "5★", label: "Client Rating" },
  { n: "2+", label: "Years Experience" },
  { n: "100%", label: "Satisfaction" },
];

/* ─── Main section ────────────────────────────────────────── */
export default function VideoEditingSection() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const open = useCallback((v: VideoItem) => setActiveVideo(v), []);
  const close = useCallback(() => setActiveVideo(null), []);

  return (
    <section
      id="video-editing"
      className="relative overflow-hidden"
      style={{ background: "#040404" }}
    >
      <div className="absolute inset-0 bg-grid opacity-55 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 25%, rgba(57,255,20,0.07) 0%, transparent 55%)",
        }}
      />

      {/* ── Modal ── */}
      <AnimatePresence>
        {activeVideo && <VideoModal v={activeVideo} onClose={close} />}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "clamp(2rem,4vw,3.5rem)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span
              style={{
                fontFamily: "Georgia,serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.1rem,2.2vw,1.6rem)",
                color: "rgba(255,255,255,0.45)",
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
              }}
              className="neon-text"
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
          </div>
          <p
            style={{
              fontSize: "clamp(0.78rem,1.4vw,0.95rem)",
              color: "rgba(255,255,255,0.36)",
              maxWidth: 520,
              lineHeight: 1.72,
            }}
          >
            Beyond static graphics — I bring brands to life through movement,
            rhythm, and cinematic storytelling.
          </p>
        </motion.div>

        {/* ── Video gallery ── */}
        {VIDEOS.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ marginBottom: "clamp(2.5rem,5vw,4.5rem)" }}
          >
            {/* Single vertical reel: centred phone-frame style */}
            {VIDEOS.length === 1 && VIDEOS[0].aspect === "9:16" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <div style={{ maxWidth: 280, width: "100%" }}>
                  <VideoCard v={VIDEOS[0]} onPlay={() => open(VIDEOS[0])} />
                </div>
                <p
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.22em",
                    color: "rgba(255,255,255,0.22)",
                    textTransform: "uppercase",
                  }}
                >
                  More videos coming soon · Google Drive uploads in progress
                </p>
              </div>
            )}

            {/* Multiple videos: responsive grid */}
            {VIDEOS.length > 1 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
                  gap: "clamp(12px,2vw,20px)",
                }}
              >
                {[...VIDEOS].map((v) => (
                  <VideoCard key={v.id} v={v} onPlay={() => open(v)} />
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "clamp(10px,2vw,16px)",
            marginBottom: "clamp(2.5rem,5vw,4rem)",
          }}
          className="md:grid-cols-4"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                padding: "clamp(16px,2.5vw,24px)",
                borderRadius: 14,
                background: "rgba(57,255,20,0.04)",
                border: "1px solid rgba(57,255,20,0.1)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.4rem,3.5vw,2.2rem)",
                  fontWeight: 900,
                  lineHeight: 1,
                }}
                className="neon-text"
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

        {/* ── Services ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
            gap: "clamp(10px,1.8vw,16px)",
            marginBottom: "clamp(2.5rem,5vw,4rem)",
          }}
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.22 + i * 0.06 }}
              whileHover={{
                y: -5,
                borderColor: "rgba(57,255,20,0.25)",
                boxShadow:
                  "0 16px 36px rgba(0,0,0,0.55), 0 0 0 1px rgba(57,255,20,0.08)",
              }}
              style={{
                padding: "clamp(18px,2.5vw,24px)",
                borderRadius: 14,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "all 0.3s ease",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(1.2rem,2.5vw,1.6rem)",
                  marginBottom: 10,
                  display: "block",
                }}
              >
                {s.icon}
              </span>
              <h3
                style={{
                  fontSize: "clamp(0.82rem,1.5vw,0.92rem)",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 7,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "clamp(0.68rem,1.2vw,0.74rem)",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.72,
                }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Tools ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}
        >
          <p
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.2)",
              marginBottom: 14,
            }}
          >
            MY VIDEO TOOLS
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {TOOLS.map((t) => (
              <motion.div
                key={t.label}
                whileHover={{ scale: 1.06, y: -2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "9px 18px",
                  borderRadius: 12,
                  background: t.bg,
                  border: `1px solid ${t.color}33`,
                  cursor: "default",
                }}
              >
                <span
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 7,
                    background: `${t.color}22`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.68rem",
                    fontWeight: 900,
                    color: t.color,
                  }}
                >
                  {t.label}
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.62)",
                    fontWeight: 600,
                  }}
                >
                  {t.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href="mailto:boluwarin215@gmail.com"
            whileHover={{ boxShadow: "0 0 28px rgba(57,255,20,0.4)", y: -2 }}
            style={{
              padding: "13px 32px",
              border: "1.5px solid #39FF14",
              borderRadius: 50,
              background: "rgba(57,255,20,0.07)",
              color: "#39FF14",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.3s ease",
            }}
          >
            🎬&nbsp; Hire Me for Video
          </motion.a>
          <a
            href="mailto:boluwarin215@gmail.com"
            style={{
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.38)",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            Request a showreel →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
