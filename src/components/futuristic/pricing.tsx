"use client";
import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  { 
    id: 'basic', 
    title: 'Litecare Plan',
    subtitle: 'Perfect untuk landing page',
    price: '699.999',
    period: '/project',
    icon: '⚡',
    features: [
      'Masa aktif website 1 tahun',
      'Free revisi 2x (Rp25.000/revisi tambahan)',
      'Desain visual dan layout figma',
      'HTML/CSS/JS full custom',
      'Update plugin & backup',
      'Perbaikan bug selama 1 tahun',
      'Tambahan fitur Rp50.000/fitur'
    ] 
  },
  { 
    id: 'pro', 
    title: 'Fullcare Premium',
    subtitle: 'Solusi lengkap untuk bisnis',
    price: '899.999',
    period: '/project',
    icon: '✨',
    features: [
      'Masa aktif website 1 tahun',
      'Free revisi 4x (Rp35.000/revisi tambahan)',
      'Layout halaman + elemen visual full figma',
      'HTML/CSS/JS full custom',
      'Update plugin & backup',
      'Perbaikan bug selama 1 tahun',
      'Tambahan fitur Rp50.000/fitur'
    ], 
    featured: true,
    badge: 'MOST POPULAR'
  },
];

export default function FuturisticPricing() {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38BDF8]/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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
            Pilih Paket yang Tepat
          </h2>
          <p className="text-slate-400 text-lg">
            Investasi terbaik untuk website bisnis Anda dengan harga yang kompetitif
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              viewport={{ once: false, amount: 0.2, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25, ease: 'easeOut' } }}
              className={`relative p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 ${
                plan.featured
                  ? 'bg-gradient-to-br from-[#38BDF8]/10 via-cyan-500/5 to-transparent border-2 border-[#38BDF8] shadow-[0_0_50px_rgba(56,189,248,0.15)]'
                  : 'bg-white/[0.02] border border-white/10 hover:border-[#38BDF8]/30'
              }`}
            >
              {/* Badge for featured plan */}
              {plan.featured && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#38BDF8] to-cyan-400 rounded-full text-xs font-bold text-[#04142b] shadow-lg"
                >
                  {plan.badge}
                </motion.div>
              )}

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                plan.featured 
                  ? 'bg-gradient-to-br from-[#38BDF8] to-cyan-400 shadow-[0_8px_30px_rgba(56,189,248,0.3)]' 
                  : 'bg-white/5 border border-white/10'
              }`}>
                <span className="text-3xl">{plan.icon}</span>
              </div>

              {/* Title */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                <p className="text-slate-400 text-sm">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-slate-400 text-lg">Rp</span>
                  <span className={`text-5xl font-bold ${
                    plan.featured 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-cyan-300' 
                      : 'text-white'
                  }`}>
                    {plan.price}
                  </span>
                  <span className="text-slate-400 text-sm">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="flex items-start gap-3 text-slate-300 text-sm"
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.featured 
                        ? 'bg-[#38BDF8]/20 text-[#38BDF8]' 
                        : 'bg-white/5 text-slate-400'
                    }`}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="flex-1 leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          viewport={{ once: false, amount: 0.5, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 text-sm">
            Butuh solusi custom? {' '}
            <a href="#contact" className="text-[#38BDF8] hover:text-cyan-300 font-medium transition-colors">
              Hubungi kami untuk paket Enterprise
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
