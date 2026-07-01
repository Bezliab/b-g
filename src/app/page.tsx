"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LogofolioSection from "@/components/LogofolioSection";
import VisualIdentitySection from "@/components/VisualIdentitySection";
import SocialMediaSection from "@/components/SocialMediaSection";
import PackagingSection from "@/components/PackagingSection";
import VideoEditingSection from "@/components/VideoEditingSection";
import OtherWorksSection from "@/components/OtherWorksSection";
import FooterSection from "@/components/FooterSection";
import SectionDivider from "@/components/SectionDivider";

function Loader({ onDone }:{ onDone:()=>void }) {
  useEffect(()=>{ const t=setTimeout(onDone, 2400); return ()=>clearTimeout(t); },[onDone]);
  return (
    <motion.div initial={{ opacity:1 }} exit={{ opacity:0, scale:1.04 }} transition={{ duration:0.6, ease:"easeOut" }}
      style={{ position:"fixed", inset:0, background:"#040404", zIndex:9999, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"2rem" }}>
      {/* Spinning ring */}
      <motion.div animate={{ rotate:360 }} transition={{ duration:3, repeat:Infinity, ease:"linear" }}
        style={{ position:"absolute", width:112, height:112, borderRadius:"50%", border:"1px solid transparent", borderTopColor:"rgba(57,255,20,0.55)", borderRightColor:"rgba(57,255,20,0.18)" }}/>
      {/* BG badge */}
      <motion.div initial={{ scale:0, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.5, delay:0.15, type:"spring", stiffness:200 }}
        style={{ width:78, height:78, border:"2px solid #39FF14", borderRadius:20, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 32px rgba(57,255,20,0.48), 0 0 90px rgba(57,255,20,0.12)", background:"rgba(57,255,20,0.05)" }}>
        <span style={{ fontWeight:900, fontSize:"1.9rem", color:"#39FF14", letterSpacing:"-0.04em", textShadow:"0 0 16px rgba(57,255,20,0.7)" }}>BG</span>
      </motion.div>
      {/* Text */}
      <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.5 }} style={{ textAlign:"center" }}>
        <p style={{ fontSize:"0.62rem", letterSpacing:"0.4em", color:"rgba(255,255,255,0.28)", marginBottom:5, textTransform:"uppercase" }}>Isaac · Bezliab Graphics</p>
        <p style={{ fontSize:"1.1rem", fontWeight:800, color:"white", letterSpacing:"0.04em" }}>Portfolio 2026</p>
      </motion.div>
      {/* Progress bar */}
      <div style={{ width:130, height:1, background:"rgba(57,255,20,0.1)", borderRadius:1, overflow:"hidden" }}>
        <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:1.8, delay:0.55, ease:[0.4,0,0.2,1] }}
          style={{ height:"100%", background:"linear-gradient(90deg,#39FF14,#19F5A5)", transformOrigin:"left", boxShadow:"0 0 10px rgba(57,255,20,0.7)" }}/>
      </div>
      <motion.p initial={{ opacity:0 }} animate={{ opacity:0.45 }} transition={{ delay:0.9 }}
        style={{ fontSize:"0.48rem", letterSpacing:"0.34em", color:"rgba(255,255,255,0.22)", textTransform:"uppercase" }}>
        Crafting Visual Stories...
      </motion.p>
    </motion.div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onDone={()=>setLoading(false)}/>}
      </AnimatePresence>
      <motion.main initial={{ opacity:0 }} animate={loading?{opacity:0}:{opacity:1}} transition={{ duration:0.6, delay:0.1 }}>
        <Navigation/>
        <HeroSection/>
        <SectionDivider color="#39FF14" label="ABOUT"/>
        <AboutSection/>
        <SectionDivider light color="#39FF14" label="BRAND IDENTITY"/>
        <LogofolioSection/>
        <SectionDivider color="#2a3aff" label="VISUAL IDENTITY"/>
        <VisualIdentitySection/>
        <SectionDivider light color="#cc44ff" label="SOCIAL MEDIA"/>
        <SocialMediaSection/>
        <SectionDivider light color="#ff7a2f" label="PACKAGING"/>
        <PackagingSection/>
        <SectionDivider color="#39FF14" label="VIDEO EDITING"/>
        <VideoEditingSection/>
        <SectionDivider light color="#888" label="OTHER WORKS"/>
        <OtherWorksSection/>
        <SectionDivider color="#39FF14" label="END"/>
        <FooterSection/>
      </motion.main>
    </>
  );
}
