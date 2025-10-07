// components/clients-section.tsx
'use client';

import React from 'react';
import { Client } from './types';
import ClientCard from './client-card';

interface ClientsSectionProps {
  clients: Client[];
}

export default function ClientsSection({ clients }: ClientsSectionProps) {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Testimoni Klien
            </h2>
            <p className="text-xl text-gray-600">
              Dengar langsung dari klien-klien kami tentang pengalaman mereka 
              bekerja dengan tim Webcare Solutions.
            </p>
          </div>
          
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>

        {clients.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Belum ada testimoni. Klik tombol &ldquo;Tambah Testimoni&rdquo; untuk menambahkan.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}