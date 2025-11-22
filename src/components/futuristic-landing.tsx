"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import FuturisticNavbar from './futuristic/navbar';
import FuturisticHero from './futuristic/hero';
import FuturisticServices from './futuristic/services';
import FuturisticFeatures from './futuristic/features';
import FuturisticFooter from './futuristic/footer';

const FuturisticPortfolio = dynamic(() => import('./futuristic/portfolio'), {
  loading: () => <div className="py-16 text-center text-slate-400">Loading portfolio...</div>,
});

const FuturisticPricing = dynamic(() => import('./futuristic/pricing'), {
  loading: () => <div className="py-16 text-center text-slate-400">Loading pricing...</div>,
});

const FuturisticTestimonials = dynamic(() => import('./futuristic/testimonials'), {
  loading: () => <div className="py-12 text-center text-slate-400">Loading testimonials...</div>,
});

const FuturisticFAQ = dynamic(() => import('./futuristic/faq'), {
  loading: () => <div className="py-12 text-center text-slate-400">Loading FAQ...</div>,
});

const FuturisticContact = dynamic(() => import('./futuristic/contact'), {
  loading: () => <div className="py-12 text-center text-slate-400">Loading contact...</div>,
});

export default function FuturisticLanding() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-mono">
      <FuturisticNavbar />
      <main className="pt-6 md:pt-6">
        <FuturisticHero />
        <FuturisticServices />
        <FuturisticFeatures />
        <FuturisticPortfolio />
        <FuturisticPricing />
        <FuturisticTestimonials />
        <FuturisticFAQ />
        <FuturisticContact />
      </main>
      <FuturisticFooter />
    </div>
  );
}
