"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import variants from '../../lib/variants';

const items = [
  { 
    id: 1, 
    title: 'TaniMaju', 
    description: 'Website Pertanian untuk Mengelola Hasil Desa Sukammaju',
    image: '/images/tanimaju.png',
    tags: ['Vite.js', 'Tailwind', 'Node.js']
  },
  { 
    id: 2, 
    title: 'SeismoTrack', 
    description: 'Website Pemantauan Gempa Bumi real-time di Indonesia',
    image: '/images/seismotrack.png',
    tags: ['Vite.js', 'Tailwind', 'Node.js']
  },
  { 
    id: 3, 
    title: 'LMS Praktikum', 
    description: 'Website Praktikum ',
    image: '/images/lms.png',
    tags: ['Next.js', 'FastAPI', 'Python']
  },
 
];

export default function FuturisticPortfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 
          variants={variants.scrollFadeIn('up', 0)}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.4, margin: "-50px" }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Portfolio
        </motion.h2>

        <motion.div 
          variants={variants.scrollStagger}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.1, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((it) => (
            <motion.div 
              key={it.id} 
              variants={variants.scrollScale(0)}
              whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.25, ease: 'easeOut' } }} 
              transition={{ type: 'spring', stiffness: 200 }} 
              className="rounded-xl overflow-hidden bg-gradient-to-br from-white/3 to-transparent border border-white/6 p-4 flex flex-col"
            >
              <div className="h-40 w-full rounded-lg overflow-hidden bg-gradient-to-tr from-[#04142b] to-[#06233a] flex items-center justify-center">
                {it.image ? (
                  <Image 
                    src={it.image} 
                    alt={it.title}
                    width={400}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-slate-300">Placeholder Image</span>
                )}
              </div>
              <h3 className="mt-4 text-white font-semibold">{it.title}</h3>
              <p className="text-sm text-slate-300 mt-1 flex-grow">{it.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {it.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
