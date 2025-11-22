"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const data = [
  { id: 1, name: 'Ari', text: 'Hasilnya sangat memuaskan — desain modern dan performa bagus.' },
  { id: 2, name: 'Bima', text: 'Timnya responsif dan cepat mengerti kebutuhan kami.' },
  { id: 3, name: 'Citra', text: 'Website baru meningkatkan konversi kami secara signifikan.' },
];

export default function FuturisticTestimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section id="testimonials" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          viewport={{ once: false, amount: 0.4, margin: "-50px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Testimoni
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          viewport={{ once: false, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden"
        >
          <motion.div animate={{ x: -index * 100 + '%' }} transition={{ type: 'spring' }} className="flex w-full">
            {data.map((d) => (
              <div key={d.id} className="min-w-full px-4">
                <div className="p-6 rounded-xl bg-[#0F172A]/50 border border-white/6">
                  <p className="text-slate-200">"{d.text}"</p>
                  <div className="mt-4 text-sm text-slate-400">— {d.name}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="flex gap-2 mt-4 justify-center">
            {data.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? 'bg-[#38BDF8]' : 'bg-white/10'}`} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
