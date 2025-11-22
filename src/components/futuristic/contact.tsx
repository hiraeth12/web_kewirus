"use client";

import { Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
  </svg>
);

const socialLinks = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    handle: '@careyourweb',
    href: 'https://www.instagram.com/careyourweb',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: WhatsAppIcon,
    handle: '+62 81234832639',
    href: 'https://wa.me/+6281234832639',
  },
  {
    id: 'email',
    name: 'Email',
    icon: Mail,
    handle: 'hello@company.com',
    href: 'mailto:hello@company.com',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: TikTokIcon,
    handle: '@careyourweb',
    href: 'https://tiktok.com/careyourweb',
  },
];

export default function FuturisticContact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
            Hubungi Kami
          </h2>
          <p className="text-slate-400 text-lg">
            Siap memulai project bersama? Hubungi kami melalui platform favorit Anda
          </p>
        </motion.div>

        {/* Social Media Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "-50px" }}
          transition={{ duration: 0.6, staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                viewport={{ once: false, amount: 0.3, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="group relative p-5 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-[#38BDF8]/40 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0ea5e9] to-[#38BDF8] flex items-center justify-center mb-3 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-slate-200 mb-1 group-hover:text-[#38BDF8] transition-all duration-300">
                  {social.name}
                </h3>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {social.handle}
                </p>

                {/* Subtle hover effect overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#38BDF8]/0 to-[#0ea5e9]/0 group-hover:from-[#38BDF8]/5 group-hover:to-[#0ea5e9]/5 transition-all duration-300 pointer-events-none"></div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          viewport={{ once: false, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 p-8 rounded-lg border border-[#38BDF8]/30 bg-gradient-to-r from-[#38BDF8]/10 to-[#0ea5e9]/5 backdrop-blur-sm text-center relative overflow-hidden"
        >
          {/* Animated background glow */}
          <div 
            className="absolute inset-0 opacity-30 blur-3xl"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.2), rgba(14,165,233,0.2), transparent)',
            }}
          ></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Mulai Konsultasi Gratis
            </h3>
            <p className="text-slate-400 mb-4">
              Chat langsung dengan tim kami dan dapatkan solusi terbaik untuk project Anda
            </p>
            
            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/+6281234832639"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] via-[#0ea5e9] to-[#38BDF8] bg-[length:200%_100%] animate-gradient-slide text-white font-semibold shadow-lg hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              {/* Icon and Text */}
              <WhatsAppIcon />
              <span>Chat via WhatsApp</span>
              
              {/* Arrow icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes gradient-slide {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        .animate-gradient-slide {
          animation: gradient-slide 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
