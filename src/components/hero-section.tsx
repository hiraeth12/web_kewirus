// components/hero-section.tsx
'use client';

import React from 'react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Solusi Digital
              <span className="text-blue-600"> Terdepan</span> untuk Bisnis Anda
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Kami mengembangkan aplikasi web dan mobile yang modern, scalable, 
              dan user-friendly untuk mengakselerasi pertumbuhan bisnis Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Minta Penawaran
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="border-2 border-indigo-500 text-indigo-500 hover:bg-gradient-to-r from-indigo-500 to-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Lihat Paket
              </button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm">
              <img
                src="./web-care.png"
                alt="Web Care Illustration"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Web Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">UI/UX Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Website Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}