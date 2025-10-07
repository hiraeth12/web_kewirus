// components/pricing-table.tsx
import React from 'react';

export default function PricingTable() {
  const plans = [
    {
      name: "Basic",
      price: "1",
      period: "juta",
      description: "Cocok untuk startup dan bisnis kecil",
      features: [
        "Website/Landing Page",
        "Responsive Design",
        "Basic SEO",
        "3 Halaman",
        "Support 3 Bulan"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "2",
      period: "juta",
      description: "Ideal untuk bisnis yang berkembang",
      features: [
        "Web Application",
        "Admin Dashboard",
        "Database Integration",
        "API Development",
        "Support 6 Bulan",
        "Maintenance Included"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Solusi lengkap untuk perusahaan besar",
      features: [
        "Full-stack Application",
        "Mobile App",
        "Advanced Features",
        "Cloud Infrastructure",
        "Dedicated Support",
        "Custom Integration"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Paket Harga
          </h2>
          <p className="text-xl text-gray-600">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda.
            Semua paket sudah termasuk konsultasi gratis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`
              bg-white rounded-xl p-8 shadow-lg relative
              ${plan.highlighted ? 'ring-2 ring-blue-600 scale-105' : ''}
            `}>
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price === "Custom" ? "Custom" : `Rp ${plan.price}`}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`
                w-full py-3 px-6 rounded-lg font-semibold transition-colors
                ${plan.highlighted 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }
              `}>
                {plan.price === "Custom" ? "Hubungi Kami" : "Pilih Paket"}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Butuh paket custom? 
            <button className="text-blue-600 hover:text-blue-700 font-semibold ml-1">
              Hubungi kami untuk konsultasi gratis
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}