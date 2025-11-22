"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function FuturisticFooter() {
  return (
    <footer className="border-t border-white/6 mt-8 sm:mt-12 py-6 sm:py-8">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        viewport={{ once: false, amount: 0.5, margin: "-50px" }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400"
      >
        <div className="flex items-center gap-3">
          <div>© {new Date().getFullYear()} WebCare Solutions — All rights reserved</div>
        </div>

        <div className="flex gap-4">
          <a className="text-slate-400 hover:text-[#38BDF8] transition-colors duration-300 cursor-pointer">Privacy</a>
          <a className="text-slate-400 hover:text-[#38BDF8] transition-colors duration-300 cursor-pointer">Terms</a>
        </div>
      </motion.div>
    </footer>
  );
}
