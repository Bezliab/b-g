"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { l: "About", h: "#intro" },
  { l: "Brand", h: "#logofolio" },
  { l: "Visual", h: "#visual-identity" },
  { l: "Social", h: "#social-media" },
  { l: "Packaging", h: "#packaging" },
  { l: "Video", h: "#video-editing" },
  { l: "Works", h: "#other-works" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      const ids = [
        "home",
        "intro",
        "logofolio",
        "visual-identity",
        "social-media",
        "packaging",
        "video-editing",
        "other-works",
        "contact",
      ];
      for (const id of ids.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (h: string) => {
    document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "#fff",
          transformOrigin: "0%",
          zIndex: 1000,
          boxShadow: "0 0 10px rgba(57,255,20,0.7)",
        }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          position: "fixed",
          top: "2px",
          left: 0,
          right: 0,
          zIndex: 999,
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(4,4,4,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(57,255,20,0.07)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 28px rgba(0,0,0,0.6)" : "none",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => go("#home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              border: "1.5px solid #39FF14",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(57,255,20,0.06)",
              boxShadow: "0 0 10px rgba(57,255,20,0.28)",
            }}
          >
            <span
              style={{
                fontWeight: 900,
                fontSize: "0.7rem",
                color: "#39FF14",
                letterSpacing: "-0.03em",
              }}
            >
              BG
            </span>
          </div>
          {scrolled && (
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.1em",
              }}
            >
              BEZLIAB GRAPHICS
            </span>
          )}
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5">
          {links.map((link) => {
            const id = link.h.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={link.l}
                onClick={() => go(link.h)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: isActive ? "#39FF14" : "rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  textShadow: isActive
                    ? "0 0 10px rgba(57,255,20,0.5)"
                    : "none",
                  transition: "color 0.2s ease",
                  padding: "4px 0",
                  position: "relative",
                }}
              >
                {link.l}
                {isActive && (
                  <motion.div
                    layoutId="navActive"
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: "#39FF14",
                      boxShadow: "0 0 6px rgba(57,255,20,0.6)",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Hire Me button */}
        <motion.a
          href="mailto:boluwarin215@gmail.com"
          whileHover={{
            borderColor: "#39FF14",
            boxShadow: "0 0 16px rgba(57,255,20,0.3)",
            color: "#39FF14",
          }}
          style={{
            padding: "8px 18px",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 50,
            background: "transparent",
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textDecoration: "none",
            display: "none",
          }}
          className="hidden md:block"
        >
          HIRE ME
        </motion.a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            padding: 4,
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                open
                  ? i === 0
                    ? { rotate: 45, y: 8 }
                    : i === 1
                      ? { opacity: 0, scaleX: 0 }
                      : { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
              }
              style={{
                width: 22,
                height: 1.5,
                background: open ? "#39FF14" : "rgba(255,255,255,0.7)",
                borderRadius: 1,
                display: "block",
                transformOrigin: "center",
              }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={
          open
            ? { opacity: 1, pointerEvents: "all" }
            : { opacity: 0, pointerEvents: "none" }
        }
        transition={{ duration: 0.28 }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 998,
          background: "rgba(4,4,4,0.97)",
          backdropFilter: "blur(22px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        {links.map((link, i) => (
          <motion.button
            key={link.l}
            initial={{ opacity: 0, x: -18 }}
            animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
            transition={{ delay: i * 0.055 }}
            onClick={() => go(link.h)}
            style={{
              background: "none",
              border: "none",
              fontSize: "clamp(1.4rem,5vw,2.3rem)",
              fontWeight: 900,
              color: "rgba(255,255,255,0.65)",
              cursor: "pointer",
              letterSpacing: "-0.02em",
              padding: "7px 24px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.color = "#39FF14")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.65)")
            }
          >
            {link.l}
          </motion.button>
        ))}
        <p
          style={{
            fontSize: "0.55rem",
            color: "rgba(255,255,255,0.18)",
            marginTop: "2rem",
            letterSpacing: "0.25em",
          }}
        >
          ESC TO CLOSE
        </p>
      </motion.div>
    </>
  );
}
