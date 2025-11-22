"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import variants from '../../lib/variants';

// Hero section with framer-motion animations
export default function FuturisticHero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={variants.staggerContainer}
          className="space-y-6"
        >
          <motion.h1 variants={variants.fadeIn('up', 0.1)} className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            WebCare Solutions
          </motion.h1>

          <motion.p variants={variants.fadeIn('up', 0.2)} className="text-slate-300 max-w-xl">
            Kami menyediakan jasa pembuatan website dengan harga terjangkau, dan performa optimal untuk bisnis Anda.
          </motion.p>

          <motion.div variants={variants.fadeIn('up', 0.3)} className="flex gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#38BDF8] text-[#04142b] px-5 py-3 rounded-lg font-semibold shadow-[0_8px_30px_rgba(56,189,248,0.12)] hover:scale-105 transform transition">Mulai Proyek</a>
            <a href="#services" className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 rounded-lg text-slate-200 hover:scale-105 transition">Lihat Layanan</a>
          </motion.div>

        </motion.div>

        <motion.div className="relative flex items-center justify-center">
          {/* Placeholder futuristic illustration with floating motion */}
          <motion.div
            variants={variants.floatY}
            animate="float"
            className="w-full max-w-md h-64 sm:h-80 rounded-2xl bg-white border border-white/4 shadow-[0_12px_40px_rgba(56,189,248,0.06)] flex items-center justify-center overflow-hidden"
          >
            <Image 
              src="/images/heroicon.png" 
              alt="Hero Illustration" 
              width={400} 
              height={400}
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
