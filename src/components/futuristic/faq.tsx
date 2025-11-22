"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'item-1',
    q: 'Berapa lama pengerjaan?',
    a: 'Tergantung paket. Biasanya 2–6 minggu. Untuk project custom, kami akan memberikan timeline yang detail setelah konsultasi awal.',
  },
  {
    id: 'item-2',
    q: 'Apakah support termasuk?',
    a: 'Ya, tiap paket memiliki periode support. Kami juga menyediakan paket maintenance bulanan untuk dukungan jangka panjang.',
  },
  {
    id: 'item-3',
    q: 'Platform apa yang digunakan?',
    a: 'React, Next.js, dan stack modern lainnya. Semua built dengan best practices dan optimized untuk performa tinggi.',
  },
  {
    id: 'item-4',
    q: 'Bagaimana proses project?',
    a: 'Kami mulai dengan konsultasi & planning, development, testing, dan launch. Ada regular updates setiap minggu untuk transparansi.',
  },
  {
    id: 'item-5',
    q: 'Bisakah design dikustomisasi?',
    a: 'Ya, design 100% custom sesuai brand Anda. Kami bekerja sama dengan Anda untuk memastikan hasil yang sempurna.',
  },
];

export default function FuturisticFAQ() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="faq" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          viewport={{ once: false, amount: 0.4, margin: "-50px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Pertanyaan Umum
          </h2>
          <p className="text-slate-400 text-lg">
            Temukan jawaban cepat untuk pertanyaan tentang layanan kami
          </p>
        </motion.div>

        {/* Accordion */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            viewport={{ once: false, amount: 0.2, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-white/10 rounded-lg overflow-hidden bg-gradient-to-br from-white/5 to-transparent hover:border-[#38BDF8]/40 transition-all duration-200 data-[state=open]:border-[#38BDF8]/60 data-[state=open]:bg-gradient-to-br data-[state=open]:from-[#38BDF8]/10 data-[state=open]:to-transparent"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-200 hover:text-[#38BDF8] transition-colors duration-200 hover:bg-white/5 [&[data-state=open]]:text-[#38BDF8]">
                  <span className="flex-1">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-slate-400 border-t border-white/10 bg-black/20">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
            </Accordion>
          </motion.div>
        )}       
          
          {/* Add gradient animation keyframes */}
          <style>{`
            @keyframes gradient-move {
              0% { background-position: 0% center; }
              50% { background-position: 100% center; }
              100% { background-position: 0% center; }
            }
          `}</style>
        </div>
    </section>
  );
}
