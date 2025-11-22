"use client";
import React from 'react';
import { motion } from 'framer-motion';
import variants from '../../lib/variants';

const feats = [
  { id: 1, title: 'Kecepatan', desc: 'Optimized, lazy-loading & caching.' },
  { id: 2, title: 'Keamanan', desc: 'Best-practice security & HTTPS.' },
  { id: 3, title: 'Responsive', desc: 'Rapi di semua perangkat.' },
];

export default function FuturisticFeatures() {
  return (
    <section id="features" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          variants={variants.scrollFadeIn('up', 0)} 
          initial="hidden" 
          whileInView="visible" 
          exit="exit"
          viewport={{ once: false, amount: 0.4, margin: "-50px" }} 
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Keunggulan Kami
        </motion.h2>

        <motion.div 
          variants={variants.scrollStagger}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {feats.map((f, i) => (
            <motion.div 
              key={f.id} 
              variants={variants.scrollFadeIn('up', 0)} 
              className="p-4 rounded-lg bg-[#0F172A]/50 border border-[#38BDF822]"
            >
              <div className="w-10 h-10 rounded-md bg-[#081427] flex items-center justify-center text-[#38BDF8]">★</div>
              <h4 className="mt-3 font-semibold text-white">{f.title}</h4>
              <p className="text-sm text-slate-300 mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
