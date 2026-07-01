"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const posters = [
  { src:"/images/poster-dinner.png", title:"Regal Rendezvous", cat:"Event Poster · CEFSA × STESA UI" },
  { src:"/images/poster-worship.png", title:"Worship With Us", cat:"Church Flyer · His Mercy & Glory Bible Church" },
  { src:"/images/poster-health.png", title:"Health Walk", cat:"Community Event Poster" },
  { src:"/images/poster-tropical.png", title:"Tropical Drink", cat:"Product Poster Design" },
  { src:"/images/poster-revision.png", title:"Revision", cat:"Academic Event Flyer" },
  { src:"/images/poster-phone-ui.png", title:"Phone UI Mockup", cat:"Digital / UI Design" },
];

export default function SocialMediaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  return (
    <section id="social-media" ref={ref} className="relative overflow-hidden" style={{ background:"#f5f5f5", paddingTop:"5rem" }}>
      <div className="absolute inset-0 bg-grid-light pointer-events-none"/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div initial={{ opacity:0,y:18 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }}
          className="flex items-center justify-between mb-10">
          <div className="flex items-baseline gap-2">
            <span style={{ fontFamily:"Georgia,serif", fontStyle:"italic", fontWeight:300, fontSize:"clamp(1.3rem,2.6vw,1.9rem)", color:"#111", opacity:0.5 }}>Poster</span>
            <span style={{ fontSize:"clamp(1.3rem,2.6vw,1.9rem)", fontWeight:900, letterSpacing:"-0.02em", color:"#111" }}>&amp; Social</span>
            <span style={{ fontSize:"clamp(1.3rem,2.6vw,1.9rem)", fontWeight:900, letterSpacing:"-0.02em", color:"#39FF14", textShadow:"0 0 16px rgba(57,255,20,0.5)" }}>Designs</span>
          </div>
        </motion.div>

        {/* Poster masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {posters.map((p,i)=>(
            <motion.div key={p.src}
              initial={{ opacity:0, y:22 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.5, delay:i*0.09 }}
              className="img-card card-lift"
              style={{ aspectRatio:i===0||i===1?"1/1.3":"1/1", border:"1px solid rgba(0,0,0,0.08)", boxShadow:"0 4px 20px rgba(0,0,0,0.1)" }}>
              <Image src={p.src} alt={p.title} fill style={{ objectFit:"cover" }}/>
              <div className="img-card-overlay">
                <p style={{ fontWeight:700, fontSize:"0.78rem", color:"white", letterSpacing:"-0.01em" }}>{p.title}</p>
                <p style={{ fontSize:"0.58rem", color:"rgba(255,255,255,0.55)", marginTop:3, letterSpacing:"0.05em" }}>{p.cat}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AptSwap invite feature */}
        <motion.div initial={{ opacity:0,y:22 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7, delay:0.55 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="img-card card-lift" style={{ aspectRatio:"1/1.1", border:"1px solid rgba(0,0,0,0.07)" }}>
            <Image src="/images/aptswap-invite.png" alt="AptSwap Invite" fill style={{ objectFit:"cover" }}/>
            <div className="img-card-overlay">
              <p style={{ fontWeight:700, fontSize:"0.78rem", color:"white" }}>AptSwap Invite</p>
              <p style={{ fontSize:"0.58rem", color:"rgba(255,255,255,0.55)", marginTop:3 }}>Event Invitation Design</p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 rounded-2xl" style={{ background:"#111", border:"1px solid rgba(255,255,255,0.05)" }}>
            <p style={{ fontSize:"0.6rem", letterSpacing:"0.25em", color:"rgba(255,255,255,0.25)", marginBottom:14 }}>DESIGN PHILOSOPHY</p>
            <h3 style={{ fontSize:"clamp(1.1rem,2.5vw,1.8rem)", fontWeight:900, color:"white", lineHeight:1.2, marginBottom:16 }}>
              Every pixel<br/>tells a story.
            </h3>
            <p style={{ fontSize:"0.78rem", lineHeight:1.82, color:"rgba(255,255,255,0.45)" }}>
              I don&apos;t see design as just visuals — it&apos;s about capturing the perfect vibe, evoking the right emotion, and creating a feeling that truly connects. Design is not decoration; it&apos;s communication. Every piece is backed by deep research and a clear understanding of the audience, ensuring the message is felt instantly, not just seen.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {["Posters","Flyers","Invitations","Social Ads","Branding"].map(t=>(
                <span key={t} className="skill-tag">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quote strip */}
      <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ duration:0.8, delay:0.68 }}
        style={{ background:"linear-gradient(90deg,#0a1020,#111a22)", padding:"3rem 0" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p style={{ textAlign:"center", fontSize:"clamp(0.85rem,1.6vw,1.05rem)", lineHeight:1.8, color:"rgba(255,255,255,0.4)", fontStyle:"italic", maxWidth:680, margin:"0 auto" }}>
            &ldquo;Through carefully crafted visuals, I aim to deliver an experience where the emotion is understood at a glance and the target audience is naturally drawn in.&rdquo;
          </p>
          <p style={{ textAlign:"center", fontSize:"0.6rem", letterSpacing:"0.25em", color:"rgba(57,255,20,0.5)", marginTop:12 }}>— ISAAC, BEZLIAB GRAPHICS</p>
        </div>
      </motion.div>
    </section>
  );
}
