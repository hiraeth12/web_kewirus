"use client";
import React from 'react';
import { motion } from 'framer-motion';
import variants from '../../lib/variants';

const services = [
  { id: 1, title: 'Website Corporate', desc: 'Landing page & corporate profile dengan desain modern.' },
  { id: 2, title: 'UMKM', desc: 'Solusi website untuk UMKM dengan fitur lengkap.' },
  { id: 3, title: 'Web App', desc: 'SPA/SSR app menggunakan React/Next.js.' },
  { id: 4, title: 'Maintenance', desc: 'Monitoring & update rutin untuk stabilitas.' },
];

export default function FuturisticServices() {
  return (
    <section id="services" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 
          variants={variants.scrollFadeIn('up', 0)}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.4, margin: "-50px" }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Layanan Kami
        </motion.h2>

        <motion.div 
          variants={variants.scrollStagger}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.15, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s, i) => (
            <motion.div 
              key={s.id} 
              variants={variants.scrollFadeIn('up', 0)}
              whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2, ease: 'easeOut' } }} 
              className="p-5 rounded-xl border border-white/6 bg-gradient-to-br from-white/2 to-transparent backdrop-blur-md"
            >
              <div className="h-12 w-12 rounded-md bg-gradient-to-br from-[#0ea5e9] to-[#38BDF8] text-[#04142b] flex items-center justify-center font-bold shadow-[0_6px_24px_rgba(56,189,248,0.08)]">{i + 1}</div>
              <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
