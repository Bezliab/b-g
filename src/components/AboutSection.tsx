"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const skills = [
  "Brand Identity","Editorial Design","Typography","Packaging Design",
  "Poster Design","Book Cover","UI/UX Concepts","Video Editing",
  "Adobe Photoshop","Adobe Illustrator","Premiere Pro","After Effects",
];
const tools = [
  { label:"Ps", color:"#31a8ff", bg:"#001e36" },
  { label:"Ai", color:"#ff9a00", bg:"#1a0a00" },
  { label:"Id", color:"#ff3366", bg:"#2a0015" },
  { label:"Pr", color:"#9999ff", bg:"#1b1450" },
  { label:"Ae", color:"#9999ff", bg:"#0d0a30" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  return (
    <section id="intro" ref={ref} className="relative overflow-hidden" style={{ background:"#040404", padding:"7rem 0" }}>
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none"/>
      <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse at 25% 55%, rgba(57,255,20,0.06) 0%, transparent 50%)" }}/>
      <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse at 80% 80%, rgba(25,245,165,0.04) 0%, transparent 45%)" }}/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Portrait ── */}
          <motion.div initial={{ opacity:0, x:-40 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.88, delay:0.1 }}
            className="flex justify-center lg:justify-start">
            <div className="relative" style={{ width:"clamp(220px,35vw,380px)", height:"clamp(290px,46vw,500px)" }}>
              {/* Neon green glow backing */}
              <div className="absolute" style={{ inset:"-16px", background:"radial-gradient(ellipse at 50% 85%, rgba(57,255,20,0.12) 0%, transparent 60%)", filter:"blur(24px)" }}/>
              {/* Corner accents */}
              <div className="absolute" style={{ top:-10, left:-10, width:32, height:32, borderTop:"2px solid #39FF14", borderLeft:"2px solid #39FF14", borderRadius:"4px 0 0 0", boxShadow:"-3px -3px 12px rgba(57,255,20,0.3)" }}/>
              <div className="absolute" style={{ bottom:-10, right:-10, width:32, height:32, borderBottom:"2px solid #39FF14", borderRight:"2px solid #39FF14", borderRadius:"0 0 4px 0", boxShadow:"3px 3px 12px rgba(57,255,20,0.3)" }}/>
              {/* Photo */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ border:"1px solid rgba(255,255,255,0.07)" }}>
                <Image src="/images/me.jpg" alt="Isaac — Bezliab Graphics" fill style={{ objectFit:"cover", objectPosition:"top center" }} priority/>
                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background:"linear-gradient(to top, rgba(4,4,4,0.7), transparent)" }}/>
              </div>
            </div>
          </motion.div>

          {/* ── Info card ── */}
          <motion.div initial={{ opacity:0, x:40 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.88, delay:0.26 }}>
            <div className="relative rounded-2xl p-8 lg:p-10"
              style={{ background:"linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))", border:"1px solid rgba(255,255,255,0.09)", backdropFilter:"blur(16px)", boxShadow:"0 28px 70px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.07)" }}>

              {/* Green curl top-right */}
              <div className="absolute -top-5 -right-3 opacity-65">
                <svg width="62" height="62" viewBox="0 0 70 70"><path d="M 60 8 Q 66 32 50 46 Q 34 60 18 54 Q 8 48 13 38 Q 19 28 29 34 Q 34 37 29 44" stroke="#39FF14" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.55"/><circle cx="29" cy="45" r="5" fill="#39FF14" opacity="0.6"/></svg>
              </div>

              {/* Who AM I heading */}
              <div className="mb-5">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ fontFamily:"Georgia,serif", fontStyle:"italic", fontWeight:300, fontSize:"clamp(1.3rem,2.8vw,2rem)", color:"rgba(255,255,255,0.62)" }}>Who</span>
                  <span style={{ fontSize:"clamp(1.7rem,3.5vw,2.5rem)", fontWeight:900, letterSpacing:"-0.02em", color:"#fff" }}>AM I?</span>
                </div>
                <div style={{ height:"2px", width:"68px", background:"linear-gradient(90deg,#39FF14,transparent)", marginTop:"5px", boxShadow:"0 0 10px rgba(57,255,20,0.5)" }}/>
              </div>

              {/* Name */}
              <h2 className="mb-4" style={{ fontSize:"clamp(1rem,2vw,1.3rem)", fontWeight:800, letterSpacing:"0.06em" }}>
                I AM{" "}
                <span className="neon-text">ISAAC</span>
                <span style={{ fontSize:"0.75rem", fontWeight:500, color:"rgba(255,255,255,0.35)", marginLeft:10, letterSpacing:"0.12em" }}>/ BEZLIAB GRAPHICS</span>
              </h2>

              {/* Bio */}
              <p className="mb-5" style={{ fontSize:"0.78rem", lineHeight:1.78, color:"rgba(255,255,255,0.52)", maxWidth:"470px" }}>
                A passionate graphic designer with over <strong style={{ color:"rgba(255,255,255,0.8)" }}>5 years of experience</strong> creating compelling visual narratives for brands, publications, churches, and digital platforms. My approach combines strategic thinking with artistic vision — ensuring every design not only looks beautiful but achieves measurable results. I believe great design should tell a story, evoke emotion, and drive action.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>

              {/* Contact */}
              <div className="space-y-2 mb-5">
                {[
                  { icon:"✉", text:"boluwarin215@gmail.com" },
                  { icon:"📞", text:"+234 802 5938 244" },
                  { icon:"📍", text:"Nigeria" },
                ].map(c => (
                  <div key={c.text} className="flex items-center gap-2.5">
                    <span style={{ fontSize:"0.8rem", opacity:0.6 }}>{c.icon}</span>
                    <span style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.42)" }}>{c.text}</span>
                  </div>
                ))}
              </div>

              {/* Tool badges — right side */}
              <div className="absolute right-6 top-24 flex flex-col gap-2.5">
                {tools.map(t => (
                  <motion.div key={t.label} whileHover={{ scale:1.12, y:-2 }}
                    title={t.label}
                    style={{ width:40, height:40, borderRadius:9, background:t.bg, border:`1px solid ${t.color}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.72rem", fontWeight:800, color:t.color, cursor:"pointer", boxShadow:`0 0 10px ${t.color}22` }}>
                    {t.label}
                  </motion.div>
                ))}
              </div>

              {/* Dots indicator */}
              <div className="flex gap-1.5 mt-1">
                {[1,0,0].map((a,i)=><span key={i} style={{ width:7, height:7, borderRadius:"50%", background:a?"#39FF14":"rgba(255,255,255,0.16)", display:"inline-block", boxShadow:a?"0 0 6px rgba(57,255,20,0.6)":"none" }}/>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
