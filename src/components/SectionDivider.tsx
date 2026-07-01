"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionDivider({ light=false, color="#39FF14", label }:{ light?:boolean; color?:string; label?:string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-10px" });
  return (
    <div ref={ref} style={{ position:"relative", height:"2px", background:light?"#f5f5f5":"#040404", overflow:"visible", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <motion.div initial={{ scaleX:0, opacity:0 }} animate={inView?{scaleX:1,opacity:1}:{}} transition={{ duration:1.1, ease:"easeOut" }}
        style={{ position:"absolute", left:0, right:0, height:"1px", background:`linear-gradient(90deg,transparent,${color}55,${color}99,${color}55,transparent)`, transformOrigin:"center", boxShadow:`0 0 10px ${color}44` }}/>
      {label && (
        <motion.div initial={{ opacity:0, scale:0.8 }} animate={inView?{opacity:1,scale:1}:{}} transition={{ duration:0.45, delay:0.45 }}
          style={{ position:"relative", background:light?"#f5f5f5":"#040404", padding:"4px 16px", borderRadius:20, border:`1px solid ${color}2a`, zIndex:1 }}>
          <span style={{ fontSize:"0.5rem", letterSpacing:"0.28em", color:`${color}77`, fontWeight:700, textTransform:"uppercase" }}>{label}</span>
        </motion.div>
      )}
    </div>
  );
}
