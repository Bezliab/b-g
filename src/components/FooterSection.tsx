"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FooterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  return (
    <footer id="contact" ref={ref} className="relative overflow-hidden" style={{ background:"#040404" }}>
      <div className="absolute inset-0" style={{ background:"radial-gradient(ellipse at 50% 60%, rgba(0,60,20,0.42) 0%, rgba(0,30,10,0.18) 40%, transparent 72%)" }}/>
      <div className="absolute inset-0 bg-grid opacity-55 pointer-events-none"/>

      {/* Decorative neon tail */}
      <motion.div initial={{ opacity:0, x:40 }} animate={inView?{opacity:0.7,x:0}:{}} transition={{ duration:1, delay:0.28 }}
        className="absolute top-0 right-0 pointer-events-none">
        <svg width="130" height="170" viewBox="0 0 140 180"><path d="M 140 0 Q 110 10 90 36 Q 70 62 80 92 Q 90 122 70 142 Q 50 162 30 167 Q 14 170 10 180" stroke="#39FF14" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.48"/><path d="M 10 180 Q 20 175 30 165 Q 35 158 28 155 Q 22 152 18 158 Q 15 163 20 166" stroke="#39FF14" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.38"/></svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col items-center">

          {/* Thanks card */}
          <motion.div initial={{ opacity:0, y:38, scale:0.95 }} animate={inView?{opacity:1,y:0,scale:1}:{}} transition={{ duration:0.88, delay:0.12 }}
            className="relative rounded-2xl glass-green" style={{ padding:"3.5rem 2.5rem", width:"100%", maxWidth:500, textAlign:"center" }}>

            {/* "Thanks" script */}
            <motion.span initial={{ opacity:0, y:-10 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6, delay:0.42 }}
              style={{ fontFamily:"Georgia,serif", fontStyle:"italic", fontWeight:300, fontSize:"clamp(2rem,5vw,3.5rem)", color:"rgba(255,255,255,0.72)", display:"block", lineHeight:1 }}>
              Thanks
            </motion.span>

            <motion.div initial={{ opacity:0, y:8 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.55, delay:0.52 }}
              className="flex items-baseline justify-center gap-2 mb-6">
              <span style={{ fontSize:"clamp(1.1rem,2.8vw,1.9rem)", fontWeight:700, color:"rgba(255,255,255,0.75)" }}>For</span>
              <span className="neon-text" style={{ fontSize:"clamp(1.1rem,2.8vw,1.9rem)", fontWeight:900 }}>Scrolling</span>
            </motion.div>

            <div style={{ width:55, height:2, background:"linear-gradient(90deg,transparent,#39FF14,transparent)", margin:"0 auto 2rem", boxShadow:"0 0 10px rgba(57,255,20,0.55)" }}/>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 mb-8">
              <motion.a href="mailto:boluwarin215@gmail.com"
                whileHover={{ boxShadow:"0 0 28px rgba(57,255,20,0.42)", y:-2 }}
                initial={{ opacity:0, y:10 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.48, delay:0.6 }}
                style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:8, padding:"13px 28px", border:"1.5px solid rgba(57,255,20,0.42)", borderRadius:50, background:"rgba(57,255,20,0.07)", color:"white", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.14em", cursor:"pointer", textDecoration:"none", transition:"all 0.3s ease" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                LET&apos;S WORK TOGETHER
              </motion.a>
              <motion.a href="mailto:boluwarin215@gmail.com"
                initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ duration:0.45, delay:0.68 }}
                style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.35)", textDecoration:"underline", textUnderlineOffset:3, cursor:"pointer" }}>
                boluwarin215@gmail.com
              </motion.a>
            </div>

            {/* Contact row */}
            <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ duration:0.5, delay:0.72 }}
              className="flex flex-col gap-2">
              {[
                { ic:"📞", val:"+234 802 5938 244" },
                { ic:"📍", val:"Nigeria" },
              ].map(c=>(
                <div key={c.val} className="flex items-center justify-center gap-2">
                  <span style={{ fontSize:"0.8rem", opacity:0.55 }}>{c.ic}</span>
                  <span style={{ fontSize:"0.68rem", color:"rgba(255,255,255,0.4)" }}>{c.val}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer nav */}
          <motion.div initial={{ opacity:0, y:18 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.55, delay:0.8 }}
            className="flex flex-wrap items-center justify-center gap-5 mt-12"
            style={{ borderTop:"1px solid rgba(255,255,255,0.055)", paddingTop:"2rem", width:"100%" }}>
            {[
              { l:"Portfolio 2026", hl:false },
              { l:"Brand Identity", hl:false },
              { l:"Video Editing", hl:false },
              { l:"Social Media", hl:false },
              { l:"Isaac / Bezliab Graphics", hl:true },
            ].map(item=>(
              <span key={item.l} style={{ fontSize:"0.67rem", letterSpacing:"0.12em", color:item.hl?"#39FF14":"rgba(255,255,255,0.28)", fontWeight:item.hl?700:400, cursor:"pointer", textShadow:item.hl?"0 0 10px rgba(57,255,20,0.4)":"none", transition:"color 0.2s ease" }}>
                {item.l}
              </span>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ duration:0.45, delay:1.0 }}
            style={{ marginTop:"2.5rem", fontSize:"0.58rem", color:"rgba(255,255,255,0.12)", letterSpacing:"0.16em", textAlign:"center" }}>
            © 2026 ISAAC — BEZLIAB GRAPHICS · ALL RIGHTS RESERVED
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
