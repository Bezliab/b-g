"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function PackagingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  return (
    <section id="packaging" ref={ref} className="relative overflow-hidden">

      {/* ── DeeLight Essential Hub Packaging ── */}
      <div style={{ background:"linear-gradient(160deg,#0a2060,#1635a0 42%,#0d1e70)", paddingTop:"5rem", paddingBottom:"0", position:"relative", overflow:"hidden" }}>
        {/* Decorative floating shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {["#ffffff","#39FF14","#19F5A5","#ff7a2f","#ffffff","#39FF14"].map((c,i)=>(
            <div key={i} className="absolute" style={{ width:`${18+i*4}px`, height:`${18+i*4}px`, borderRadius:"50%", background:c, opacity:0.04+i*0.01, top:`${10+(i*13)%75}%`, left:`${5+(i*17)%88}%`, filter:"blur(2px)" }}/>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div initial={{ opacity:0,y:18 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.55 }}
            className="flex items-center gap-3 mb-10">
            <span style={{ fontFamily:"Georgia,serif", fontStyle:"italic", fontWeight:300, fontSize:"clamp(1rem,2vw,1.5rem)", color:"rgba(255,255,255,0.48)" }}>Packaging &amp;</span>
            <span style={{ fontSize:"clamp(1.2rem,2.4vw,1.8rem)", fontWeight:900, letterSpacing:"-0.02em", color:"#fff" }}>Social Design</span>
            <div style={{ flex:1, marginLeft:8, height:"1px", background:"rgba(255,255,255,0.09)" }}/>
            <span style={{ fontSize:"clamp(1.5rem,3vw,2.2rem)", fontWeight:900, color:"rgba(255,255,255,0.1)", fontStyle:"italic" }}>01</span>
          </motion.div>

          {/* DeeLight brand story */}
          <motion.div initial={{ opacity:0,y:28 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.75, delay:0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Brand desc */}
            <div className="flex flex-col justify-center">
              <h2 style={{ fontSize:"clamp(1.5rem,4vw,2.8rem)", fontWeight:900, color:"white", lineHeight:1.1, marginBottom:16 }}>
                Dee-Light<br/>
                <span style={{ color:"#ff7a2f" }}>Essential Hub</span>
              </h2>
              <p style={{ fontSize:"0.8rem", lineHeight:1.82, color:"rgba(255,255,255,0.55)", marginBottom:18 }}>
                A complete social media and packaging design campaign for DeeLight Essential Hub — a skincare brand targeting the modern African consumer. The design system blends vibrant blues with warm orange accents, communicating freshness, trust, and radiance across every touchpoint.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Social Media","Brand Identity","Color System","Copywriting","Layout Design"].map(t=>(
                  <span key={t} style={{ padding:"5px 12px", borderRadius:50, border:"1px solid rgba(255,255,255,0.18)", fontSize:"0.6rem", color:"rgba(255,255,255,0.55)", letterSpacing:"0.08em" }}>{t}</span>
                ))}
              </div>
            </div>
            {/* Hero image */}
            <motion.div whileHover={{ scale:1.02 }} className="relative rounded-2xl overflow-hidden card-lift" style={{ aspectRatio:"1", border:"1px solid rgba(255,255,255,0.1)" }}>
              <Image src="/images/skincare-1.png" alt="DeeLight Essential Hub" fill style={{ objectFit:"cover" }}/>
            </motion.div>
          </motion.div>

          {/* 3 more skincare images */}
          <motion.div initial={{ opacity:0,y:22 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7, delay:0.28 }}
            className="grid grid-cols-3 gap-3 mb-0">
            {["/images/skincare-2.png","/images/skincare-3.png","/images/skincare-4.png"].map((src,i)=>(
              <motion.div key={src} whileHover={{ y:-5 }} className="relative rounded-xl overflow-hidden card-lift" style={{ aspectRatio:"1", border:"1px solid rgba(255,255,255,0.07)" }}>
                <Image src={src} alt={`DeeLight ${i+2}`} fill style={{ objectFit:"cover" }}/>
                <div className="img-card-overlay">
                  <span style={{ fontSize:"0.58rem", letterSpacing:"0.1em", color:"rgba(255,255,255,0.7)" }}>{["Campaign Ad","Product Feature","Brand Post"][i]}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Brand statement */}
          <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ duration:0.7, delay:0.42 }}
            className="mt-8 mb-0 max-w-xl p-6 rounded-2xl" style={{ background:"rgba(0,0,0,0.22)", border:"1px solid rgba(255,255,255,0.08)", backdropFilter:"blur(8px)" }}>
            <p style={{ fontSize:"0.78rem", lineHeight:1.8, color:"rgba(255,255,255,0.58)" }}>
              &ldquo;Did you know? Your skin is constantly replacing itself, so it is never too late to start a healthy skincare routine.&rdquo; — This was the core message translated into bold, scroll-stopping visuals across Instagram and Facebook.
            </p>
            <p style={{ fontSize:"0.6rem", color:"rgba(255,167,47,0.7)", marginTop:8, letterSpacing:"0.12em" }}>DeeLight Essential Hub · Ibadan, Nigeria</p>
          </motion.div>
        </div>

        {/* AptSwap invite bottom strip */}
        <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ duration:0.8, delay:0.55 }}
          style={{ background:"linear-gradient(135deg,#1060c0,#0840a0)", marginTop:"4rem", padding:"2.5rem" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative rounded-xl overflow-hidden card-lift" style={{ aspectRatio:"1", border:"1px solid rgba(255,255,255,0.08)" }}>
                <Image src="/images/aptswap-invite.png" alt="AptSwap Event Invite" fill style={{ objectFit:"cover" }}/>
              </div>
              <div>
                <p style={{ fontSize:"0.6rem", letterSpacing:"0.25em", color:"rgba(255,255,255,0.3)", marginBottom:10 }}>EVENT COLLATERAL</p>
                <h3 style={{ fontSize:"clamp(1.1rem,2.5vw,1.8rem)", fontWeight:900, color:"white", marginBottom:12 }}>AptSwap Invite Design</h3>
                <p style={{ fontSize:"0.76rem", lineHeight:1.82, color:"rgba(255,255,255,0.48)" }}>
                  Custom event invitation design for the AptSwap brand launch — balancing the brand&apos;s dark fintech identity with an exclusive, premium feel that excites attendees and reinforces trust.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
